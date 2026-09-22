// Globe 3D en arriere-plan de la section d'accueil, derriere la photo et le texte
document.addEventListener('DOMContentLoaded', function () {
  const canvas = document.getElementById('globeCanvas');
  if (!canvas || typeof THREE === 'undefined') return;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.set(0, 0.2, 9.5);
  camera.lookAt(0, 0, 0);

  const group = new THREE.Group();
  scene.add(group);

  const cyan = 0x12f7ff;
  const R = 2.1;

  // grille de latitude/longitude
  const gratMat = new THREE.LineBasicMaterial({ color: cyan, transparent: true, opacity: 0.35 });
  const GR = R * 1.002;

  const MERIDIANS = 16;
  for (let i = 0; i < MERIDIANS; i++) {
    const lon = (i / MERIDIANS) * Math.PI * 2;
    const pts = [];
    for (let j = 0; j <= 64; j++) {
      const lat = -Math.PI / 2 + (j / 64) * Math.PI;
      pts.push(new THREE.Vector3(
        GR * Math.cos(lat) * Math.cos(lon),
        GR * Math.sin(lat),
        GR * Math.cos(lat) * Math.sin(lon)
      ));
    }
    group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), gratMat));
  }

  const PARALLELS = 8;
  for (let i = 1; i < PARALLELS; i++) {
    const lat = -Math.PI / 2 + (i / PARALLELS) * Math.PI;
    const r = GR * Math.cos(lat);
    const y = GR * Math.sin(lat);
    const pts = [];
    for (let j = 0; j <= 64; j++) {
      const theta = (j / 64) * Math.PI * 2;
      pts.push(new THREE.Vector3(r * Math.cos(theta), y, r * Math.sin(theta)));
    }
    group.add(new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(pts), gratMat));
  }

  // continents (texture reelle, oceans transparents, terres lumineuses)
  const earthTexture = new THREE.TextureLoader().load('img/earth-continents.jpg');
  const continentMat = new THREE.MeshBasicMaterial({
    color: cyan,
    alphaMap: earthTexture,
    transparent: true,
    opacity: 0.85,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });
  const continents = new THREE.Mesh(new THREE.SphereGeometry(R * 1.001, 64, 40), continentMat);
  group.add(continents);

  // halo/rim glow (fresnel simplifie)
  const rimMat = new THREE.ShaderMaterial({
    uniforms: { glowColor: { value: new THREE.Color(cyan) } },
    vertexShader: `
      varying float vIntensity;
      void main(){
        vec3 vNormal = normalize(normalMatrix * normal);
        vec3 vViewPos = normalize(-(modelViewMatrix * vec4(position,1.0)).xyz);
        vIntensity = pow(1.0 - max(dot(vNormal, vViewPos), 0.0), 2.5);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 glowColor;
      varying float vIntensity;
      void main(){
        gl_FragColor = vec4(glowColor, vIntensity * 0.9);
      }
    `,
    transparent: true,
    blending: THREE.AdditiveBlending,
    side: THREE.FrontSide,
    depthWrite: false
  });
  const rim = new THREE.Mesh(new THREE.SphereGeometry(R * 1.04, 48, 32), rimMat);
  group.add(rim);

  // Taille du globe calee sur la LARGEUR du canvas (pas la hauteur), pour
  // qu'une section d'accueil plein ecran (haute) ne fasse pas grossir le globe
  const TARGET_WIDTH_FRACTION = 0.22;
  const MAX_DIAMETER_PX = 220;
  const fovRad = camera.fov * Math.PI / 180;

  function resize() {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (w === 0 || h === 0) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;

    const desiredDiameterPx = Math.min(w * TARGET_WIDTH_FRACTION, MAX_DIAMETER_PX);
    camera.position.z = (h * R) / (Math.tan(fovRad / 2) * desiredDiameterPx);

    camera.updateProjectionMatrix();
  }
  window.addEventListener('resize', resize);
  resize();

  function animate() {
    requestAnimationFrame(animate);
    group.rotation.y += 0.0016;
    renderer.render(scene, camera);
  }
  animate();
});
