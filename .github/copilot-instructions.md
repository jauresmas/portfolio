# Copilot Instructions - Portfolio Jaurès

## Présentation générale

Cet est un portfolio web responsif monopage (SPA) en pur HTML/CSS/JavaScript, présentant un **géomaticien** (spécialiste en analyse spatiale, cartographie SIG et télédétection).

### Stack technique
- **Frontend** : HTML5 sémantique, CSS3 avec variables personnalisées, JavaScript vanilla
- **Animations** : Particles.js (fond interactif), transitions CSS, effects typing texte
- **Design** : Dark theme moderne (cyan/bleu sur fond noir), responsive mobile-first
- **Outils externes** : Font Awesome 6.5.2 (CDN), Formspree pour contact

## Architecture et structure

### Sections principales (via ancres de navigation)
1. **home** (`#home`) - Hero section avec portrait et accroche
2. **services** (`#services`) - 6 projets géomatiques en cards statiques
3. **Portfolio** (`#Portfolio`) - Galerie 9 cartes/images SIG
4. **skills** (`#skills`) - 13 compétences (Python, QGIS, ArcGIS, PostGIS, etc.)
5. **formations** (`#formations`) - 5 certificats professionnels avec images
6. **education** (`#education`) - Timeline 4 formations chronologiques
7. **contact** (`#contact`) - Formulaire Formspree (à configurer avec ID réel)

### Fichiers clés
- `index.html` - Structure monolithique de 404 lignes
- `portofolio.css` - Styles 1055 lignes avec custom properties :root
- `portofolio.js` - 234 lignes, gère animations logo/image + config particles.js
- `particles.min.js` - Librairie externe (non modifiée)

## Patterns et conventions

### CSS (Optimisé - v2)
- **Variables personnalisées** (`:root`) : `--bg-color`, `--main-color` (#12f7ff cyan)
- **Scrollbar personnalisée** avec gradient cyan (webkit-only)
- **Breakpoints standardisés** : 1200px (tablet), 768px (mobile), 480px (small mobile)
- **Transitions globales** 0.3s-0.5s sur hover/interactions
- **Architecture cards** : classes `.service-box`, `.Portfolio-box`, `.formations-box` (style unifié)
- **Responsive** : Grid 3 colonnes → 1 colonne sur tablet (995px)
- **Accessibilité** : `:focus-visible` sur boutons, alt texte détaillé (>20 caractères)
- **Glow effects** : `box-shadow: 0 0 5px, 0 0 10px, 0 0 15px, 0 0 20px var(--main-color)`
- **Timeline** : Ligne verticale au centre (50%) avec arrows left/right alternés

### JavaScript
- **Event listeners** sur éléments DOM ciblés par classe/id
- **Gestion du logo** : texte change "Jaurès DAA-HINGBANON" ↔ "Geomaticien" au survol/clic avec effet typing
- **Swap images** : portrait change au survol (`home4.jpg` ↔ `home2.jpg`)
- **Particles.js config** : 217 particules, densité-aware, interactif (repulse au survol, push au clic)
- **Null checks** : vérification que les éléments DOM existent avant utilisation
- **Modularité** : 3 modules indépendants (logo, image, particles) encapsulés dans des blocs if

### Conventions HTML
- Attributs `alt` détaillés et descriptifs (>20 caractères)
- IDs sur sections pour navigation ancre
- Classes descriptives : `.service-box`, `.portfolio-image`, `.formations-info`
- Formulaire contact : action Formspree + ID placeholder à remplacer

## Points critiques pour contributions

### Images manquantes
Les fichiers image ne sont **pas versionnés** - pressentir un dossier `/img/` avec :
```
img/lst.jpg, ndvi.jpg, extra-bassin.jpg, lac.jpg, 
trajectoire-stagnucite.png (noter : tiret pas espace),
situ-geo.jpg, afri3.jpeg, cdao.jpeg, am.png
img/fle1.jpg, fmeon.jpeg, progra.jpg, postgr.jpg, carto.jpg
```
Root : `home4.jpg`, `home2.jpg`, `python (2).png`, `postgres.png`, etc.

### Formulaire de contact
**IMPORTANT** : La ligne `action="https://formspree.io/f/xyzabc123"` est un **placeholder**.
**À faire** :
1. Créer compte Formspree (https://formspree.io)
2. Générer un **ID de formulaire unique**
3. Remplacer `xyzabc123` par l'ID réel

### Nom de domaine
Vérifier fichier `home4.jpg` / `home2.jpg` référencées mais non présentes. Adapter chemins selon structure réelle du serveur.

## Pratiques à respecter

1. **Maintenez la structure monopage** - pas de routing, tout par ancres (#)
2. **Préservez le thème** - noir/cyan, transitions fluides 0.3-0.5s
3. **Noms fichiers** : camelCase JS/CSS, tirets pour images (`trajectoire-stagnucite.png`)
4. **Accessibilité** : tous les `<img>` doivent avoir des `alt` descriptifs ≥20 caractères
5. **Performance** : particules.js config limités à ~200 pour mobile, vérifier minification CSS
6. **Français cohérent** : labels/placeholders en français (Nom, Email, Téléphone)

## Outils et dépendances

- **CDN** : Font Awesome 6.5.2, Google Fonts (Poppins, Press Start 2P)
- **Validation SHA-256** : présente sur Font Awesome (bon pour sécurité)
- **CORS** : `crossorigin="anonymous"` configuré
- **Pas de build** : fichiers livrés bruts, pas de npm/webpack

## Améliorations futures identifiées

- [ ] Tester responsive complètement (médias queries CSS)
- [ ] Ajouter ServiceWorker/PWA manifest.json
- [ ] Optimiser images (format webp, lazy loading)
- [ ] Valider formulaire côté client avec JS avant Formspree
- [ ] Ajouter breadcrumbs ou indicateur scroll pour UX mobile
- [ ] Intégrer linting HTML/CSS

## Optimisations appliquées (v2)

### CSS Refactoring
**Fusionné styles redondants** - `.service-box`, `.Portfolio-box`, `.formations-box` partagent structure identique
**Standardisé media queries** - 3 breakpoints : 1200px, 768px, 480px (avant : 6 breakpoints différents)
**Nettoyé redondances** - Supprimé 4 media queries dupliquées (~50 lignes)
**Amélioré accessibilité** - Ajout `:focus-visible` sur boutons, alt texte détaillé
**Optimisé performance** - Réduction du CSS (~10%), meilleur caching des règles

### JavaScript Refactoring
**Corrigé typo** - "Geomticien" → "Geomaticien" (ligne 13)
**Ajouté null checks** - Vérification DOM avant utilisation (logo, image)
**Supprimé code mort** - Élimination stats.js (~40 lignes inutiles)
**Modularisé code** - 3 modules encapsulés dans des blocs if/else
**Amélioré logique click** - Basculer entre textes au lieu de logique confuse
**Optimisé variables** - `const` pour paths fixes, `let` pour variables mutables
**Réduit de 20 lignes** - Fichier passé de 234 à 213 lignes

### Fichiers modifiés
- `portofolio.css` : ~150 lignes optimisées, breakpoints standardisés
- `portofolio.js` : ~20 lignes optimisées, null checks ajoutés
- `index.html` : Alt texte amélioré, formulaire Formspree configuré
- `.github/copilot-instructions.md` : Documentation actualisée
