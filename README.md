# thomashbrnrd.github.io

Portfolio CV de Thomas Bernard, construit avec Nuxt 3 et deploye automatiquement sur GitHub Pages.

## Stack

- Nuxt 3 (generation statique)
- Tailwind CSS (via @nuxtjs/tailwindcss)
- GitHub Actions + GitHub Pages
- Prettier pour la qualite de formatage

Pourquoi Tailwind et pas Nuxt UI ?

- Moins de surcouche pour un site CV simple
- Plus leger cote front
- Design tres controlable sans complexite additionnelle

## Scripts utiles

- npm run dev: demarrage local
- npm run generate: generation statique
- npm run preview: previsualisation locale
- npm run format: formatage automatique avec Prettier
- npm run format:check: verification de formatage
- npm run check: verification rapide (format + generate)

## Deploiement automatique GitHub Pages

Le workflow est dans .github/workflows/deploy-pages.yml.

Il execute:

1. Verification qualite (Prettier)
2. Build statique Nuxt
3. Publication de .output/public sur GitHub Pages

Le deploiement se lance automatiquement sur chaque push sur main.

## Bonnes pratiques mises en place

- Site statique: plus rapide, plus robuste, plus simple a heberger
- Configuration de baseURL dynamique pour compatibilite User Pages et Project Pages
- Meta SEO de base dans la page principale
- Design responsive mobile-first
- Images locales et PDF local pour eviter les dependances externes
- Pipeline CI avec controles qualite avant publication

## Ameliorations possibles

- Ajouter un audit Lighthouse complet dans la CI
- Ajouter un sitemap.xml et des metadonnees OpenGraph plus detaillees
