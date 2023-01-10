<script setup lang="ts">
useSeoMeta({
  title: "Thomas Bernard | CV",
  description: "CV de Thomas Bernard - Fullstack & API Developer",
  ogTitle: "Thomas Bernard | CV",
  ogDescription: "Profil, competences et experiences de Thomas Bernard",
  ogType: "website"
})

const techStack = [
  "Python",
  "Django",
  "Django REST Framework",
  "JavaScript",
  "Vue.js",
  "Nuxt.js",
  "DevOps"
]

const highlights = [
  "Premier jeu video developpe a 12 ans",
  "Premier site web vendu a 15 ans",
  "Parcours a l'ecole 42",
  "Co-creation d'une startup en tant que CTO",
  "Alternance Fullstack chez OneRagtime"
]
</script>

<template>
  <main class="mx-auto grid w-[min(1040px,92vw)] gap-5 py-10 md:py-12">
    <section class="card grid gap-6 p-6 md:grid-cols-[1.3fr_0.9fr] md:items-center md:p-8">
      <div class="grid gap-4">
        <p class="m-0 text-xs font-bold uppercase tracking-[0.08em] text-ember-500">
          Developpeur Fullstack
        </p>
        <h1
          class="font-serif text-4xl leading-[0.95] tracking-tight text-slatewarm-900 md:text-6xl"
        >
          Thomas Bernard
        </h1>
        <p class="m-0 leading-relaxed text-slatewarm-700">
          Passionne d'informatique depuis l'enfance, j'accompagne les equipes dans la conception
          d'APIs robustes et d'interfaces web rapides a livrer.
        </p>
        <div class="flex flex-wrap gap-3">
          <a class="btn-primary" href="/cv.pdf" target="_blank" rel="noreferrer"
            >Voir le CV (PDF)</a
          >
          <a class="btn-secondary" href="mailto:thomashbernard@gmail.com">Me contacter</a>
        </div>
      </div>
      <div class="flex justify-center">
        <img
          src="/img/profile.jpg"
          alt="Portrait de Thomas Bernard"
          class="aspect-square w-[min(300px,70vw)] rounded-2xl border-[3px] border-sand-100 object-cover"
        />
      </div>
    </section>

    <section class="card grid gap-4 p-6 md:p-7">
      <h2 class="font-serif text-3xl tracking-tight text-slatewarm-900 md:text-4xl">Profil</h2>
      <p class="m-0 leading-relaxed text-slatewarm-700">
        Je mets mes competences au service de projets produits avec une approche pragmatique:
        architecture claire, iteration rapide et mise en production fiable.
      </p>
      <ul class="m-0 grid list-disc gap-1.5 pl-5 text-slatewarm-700">
        <li v-for="item in highlights" :key="item" class="leading-relaxed">{{ item }}</li>
      </ul>
    </section>

    <section class="card grid gap-4 p-6 md:p-7">
      <h2 class="font-serif text-3xl tracking-tight text-slatewarm-900 md:text-4xl">Stack</h2>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tech in techStack"
          :key="tech"
          class="rounded-full border border-sand-200 bg-sand-50 px-3 py-1.5 text-sm text-slatewarm-900"
          >{{ tech }}</span
        >
      </div>
    </section>

    <section class="card grid gap-3 p-6 md:p-7">
      <h2 class="font-serif text-3xl tracking-tight text-slatewarm-900 md:text-4xl">CV complet</h2>
      <p class="m-0 text-slatewarm-700">Le PDF est aussi integre ici pour consultation directe.</p>
      <object
        data="/cv.pdf"
        type="application/pdf"
        class="mt-1 min-h-[70vh] w-full rounded-xl border border-sand-200 bg-white"
      >
        <p>
          Votre navigateur ne peut pas afficher le PDF.
          <a href="/cv.pdf" target="_blank" rel="noreferrer" class="text-ember-700 underline"
            >Telecharger le CV</a
          >
        </p>
      </object>
    </section>

    <footer
      class="flex flex-wrap items-center justify-between gap-3 px-1 text-sm text-slatewarm-700"
    >
      <a
        href="https://www.linkedin.com/in/thomas-h-bernard/"
        target="_blank"
        rel="noreferrer"
        class="text-ember-700 hover:underline"
      >
        LinkedIn
      </a>
      <span>thomashbernard@gmail.com</span>
    </footer>
  </main>
</template>
