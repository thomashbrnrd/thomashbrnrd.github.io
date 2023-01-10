# thomashbrnrd.github.io

Portfolio CV de Thomas Bernard, construit avec Nuxt 3 et deploye automatiquement sur GitHub Pages.

## Stack

- Nuxt 3 (generation statique)
- Tailwind CSS (via @nuxtjs/tailwindcss)
- GitHub Actions + GitHub Pages
- Prettier pour la qualite de formatage
- eco-index-audit pour le suivi EcoIndex

Pourquoi Tailwind et pas Nuxt UI ?

- Moins de surcouche pour un site CV simple
- Plus leger cote front et meilleur impact potentiel sur l'EcoIndex
- Design tres controlable sans complexite additionnelle

## Scripts utiles

- npm run dev: demarrage local
- npm run generate: generation statique
- npm run preview: previsualisation locale
- npm run format: formatage automatique avec Prettier
- npm run format:check: verification de formatage
- npm run ecoindex: audit EcoIndex local (table)
- npm run ecoindex:json: audit EcoIndex + export JSON dans reports/
- npm run check: verification rapide (format + generate)

## Deploiement automatique GitHub Pages

Le workflow est dans .github/workflows/deploy-pages.yml.

Il execute:

1. Verification qualite (Prettier + EcoIndex)
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
- Rapport EcoIndex archive dans les artifacts GitHub Actions

## Resultat EcoIndex actuel (local)

- Score: 86
- Grade: A
- Requetes: 9
- Poids de page: 299 Ko
- Complexite DOM: 60 noeuds

## Criteres eco-conception suivis

- Peu de JavaScript cote client
- Pas de framework UI lourd
- Nombre de polices limite
- Assets statiques servis sans surcouche inutile
- Audit EcoIndex rejouable localement et en CI

## Ameliorations possibles

- Ajouter un budget de poids maximal par page
- Ajouter un audit Lighthouse complet dans la CI
- Ajouter un sitemap.xml et des metadonnees OpenGraph plus detaillees
