# Portfolio - Jaurès DAA-HINGBANON

**Géomaticien | Cartographe | Spécialiste en Analyse Spatiale**

Portfolio web interactif mettant en avant mes projets en géomatique, SIG et télédétection.

## Accès en ligne

**[Voir le portfolio en direct →](https://jauresmas.github.io/portfolio/)**

## À propos

Portfolio responsif multi-pages (`index.html`, `projets.html`, `portfolio.html`, `competences.html`, `certificats.html`, `formations.html`, `contact.html`) présentant :

- **Projets** : 17 projets géomatiques (stages, projets académiques, ArcGIS Online, QGIS, webmapping, etc.)
- **Portfolio** : 15 cartes et analyses géospatiales (LST, NDVI, bassins versants, limnorégions, etc.)
- **Compétences** : 12 outils/langages (Python, QGIS, ArcGIS Pro, PostGIS, FME, R, JavaScript, etc.)
- **Certificats** : 9 certifications professionnelles
- **Formations** : 4 formations académiques (2014-2025)

## Stack technique

- **Frontend** : HTML5, CSS3, JavaScript vanilla
- **Design** : Dark theme responsive, animations fluides, fond animé (particles.js)
- **Librairies** : particles.js, Font Awesome 6.5.2, Google Fonts
- **Contact** : Formspree
- **Hébergement** : GitHub Pages

## Structure du dépôt

```
index.html             Page d'accueil (hero seul)
projets.html            Section Projets
portfolio.html          Section Portfolio
competences.html        Section Compétences
certificats.html        Section Certificats
formations.html         Section Formations
contact.html            Formulaire de contact
projets/                Pages détaillées d'un projet chacune
code/                   portofolio.css, portofolio.js, particles.min.js
img/                    Images, captures de cartes, certificats et CV
```

## Responsive

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (480px - 767px)
- Small mobile (<480px)

## Tester en local

```bash
git clone https://github.com/jauresmas/portfolio.git
cd portfolio
python3 -m http.server 8000
# puis ouvrir http://localhost:8000 dans le navigateur
```

- **Formulaire de contact** : POST vers `https://formspree.io/f/xeoyzwrk`, géré en AJAX avec honeypot anti-spam et message de statut.
- **Lightbox** : cliquer sur une image du Portfolio ou des Certificats ouvre la galerie (navigation flèches/clavier, fermeture par `Esc` ou `×`).

## Bonnes pratiques & points à compléter

- Remplacer l'ID Formspree si besoin d'utiliser un autre compte
- Optimiser les images (webp, lazy-loading) pour accélérer le site
- Ajouter des tests unitaires JS et un linter CSS/HTML pour la CI

## Licence

Tous droits réservés © Jaurès DAA-HINGBANON 2025

---

**Dernière mise à jour** : 30 août 2026
