# Portfolio - Jaurès DAA-HINGBANON

**Géomaticien | Cartographe | Spécialiste en Analyse Spatiale**

Portfolio web interactif mettant en avant mes projets en géomatique, SIG et télédétection.

##  Accès en ligne

**[Voir le portfolio en direct →](https://jauresmas.github.io/portfolio/)**

##  À propos

Portfolio responsif monopage (SPA) présentant :

- **Projets** : 6 projets géomatiques (ArcGIS Online, QGIS, Webmapping, etc.)
- **Portfolio** : 9 cartes et analyses géospatiales (LST, NDVI, bassins versants, etc.)
- **Compétences** : 13 outils/langages (Python, QGIS, ArcGIS, PostGIS, R, JavaScript, etc.)
- **Certificats** : 5 certifications professionnelles
- **Formations** : 4 formations académiques (2014-2025)

## 🛠️ Stack technique

# Portfolio - Jaurès DAA-HINGBANON

**Géomaticien | Cartographe | Spécialiste en Analyse Spatiale**

Portfolio web interactif mettant en avant mes projets en géomatique, SIG et télédétection.

## Accès en ligne

**[Voir le portfolio en direct →](https://jauresmas.github.io/portfolio/)**

## À propos

Portfolio responsif monopage (SPA) présentant :

- **Projets** : 6 projets géomatiques (ArcGIS Online, QGIS, Webmapping, etc.)
- **Portfolio** : 9 cartes et analyses géospatiales (LST, NDVI, bassins versants, etc.)
- **Compétences** : 13 outils/langages (Python, QGIS, ArcGIS, PostGIS, R, JavaScript, etc.)
- **Certificats** : 5 certifications professionnelles
- **Formations** : 4 formations académiques (2014-2025)

## Stack technique

- **Frontend** : HTML5, CSS3, JavaScript vanilla
- **Design** : Dark theme responsive, animations fluides
- **Librairies** : Particles.js (fond interactif), Font Awesome 6.5.2
- **Contact** : Formspree (configurable)
- **Hébergement** : GitHub Pages

## Responsive

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (480px - 767px)
- Small mobile (<480px)

## Installation locale

```bash
# Cloner le repo
git clone https://github.com/jauresmas/portfolio.git
cd portfolio

# Ouvrir dans le navigateur
open index.html
# ou
start index.html  # Windows
```

## Présentation rapide

Site monopage (SPA) responsive présentant :

- Projets : descriptions et exemples (ArcGIS Online, QGIS, Webmapping)
- Portfolio : 9 cartes et visuels SIG (LST, NDVI, bassins, trajectoires, etc.)
- Compétences : outils et langages (Python, QGIS, ArcGIS, PostGIS, JavaScript, etc.)
- Certificats : 5 attestations de formation
- Contact : formulaire fonctionnant via Formspree

## Changements récents (synthèse des actions effectuées)

- Ajout d'une **lightbox / galerie** pour agrandir les images (portfolio + certificats) ; navigation clavier et boutons, et corrections de timing d'initialisation.
- Mise en place du **formulaire de contact** avec **Formspree** (ID configuré : `xeoyzwrk`) + handler AJAX, honeypot anti-spam et messages de statut.
- **Optimisation de particles.js** : diminution du nombre et du comportement (150 particules, vitesse et distance réduites, opacité ajustée) pour de meilleures performances.
- **Corrections CSS** : refactorisation des cards, breakpoints standardisés, fix responsive (notamment overflow des textes dans la section Formations sur mobile).
- **Ajustements d'espacements** entre sections (réduction de l'écart Compétences → Certificats sur mobile/desktop).
- **Améliorations du DOM/JS** : null checks, typo corrigée ("Geomaticien"), suppression de code mort, logs de debug temporaires pour le lightbox.
- **Renommage d'images** et correctifs de chemins pour éviter 404 (ex. `trajectoire-stagnucite.png`).
- Déploiement sur **GitHub Pages** (branche `main`).

## Détails techniques

- Frontend : HTML5, CSS3 (variables, media queries), JavaScript vanilla
- Librairies : `code/particles.min.js`, Font Awesome 6.5.2, Google Fonts
- Contact : Formspree (formulaire POST vers `https://formspree.io/f/xeoyzwrk`)
- Hébergement : GitHub Pages (URL ci-dessus)

## Comment tester localement

1. Cloner le repo :

```bash
git clone https://github.com/jauresmas/portfolio.git
cd portfolio
```

2. Lancer un serveur local (Python) et ouvrir le site :

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000 dans votre navigateur
```

3. Tester le formulaire de contact : envoyer un POST depuis le formulaire (le handler AJAX affiche un message de statut). Le formulaire cible `https://formspree.io/f/xeoyzwrk`.

4. Tester la lightbox : cliquer sur n'importe quelle image du portfolio ou des certificats — la galerie doit s'ouvrir, navigation par flèches et fermeture par `Esc` ou `×`.

## Emplacement des changements clés

- `index.html` : structure HTML, `alt` améliorés, formulaire configuré
- `code/portofolio.css` : styles, responsive fixes, lightbox CSS
- `code/portofolio.js` : animations, particles config, AJAX pour contact, lightbox logic
- `img/` : images et documents (certificats, logos, CV)

## Tests et vérifications réalisés

- Formspree testé via `curl` (réponse `{"ok":true, "next":"/thanks"}`)
- Lightbox testé localement et corrections appliquées pour cas où le script charge après `DOMContentLoaded`
- Particles ajustés pour performance mobile

## Bonnes pratiques & points à compléter

- Remplacer l'ID Formspree si vous voulez utiliser un autre compte
- Optimiser les images (webp, lazy-loading) pour accélérer le site
- Ajouter des tests unitaires JS et un linter CSS/HTML pour la CI

## Licence

Tous droits réservés © Jaurès DAA-HINGBANON 2025

---

**Dernière mise à jour** : 6 décembre 2025
