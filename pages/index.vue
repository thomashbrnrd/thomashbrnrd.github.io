<script setup lang="ts">
useSeoMeta({
  title: "Thomas Bernard | CV",
  description:
    "CV de Thomas Bernard - Lead Dev Fullstack / DevOps orienté backend (Django, FastAPI, NestJS)",
  ogTitle: "Thomas Bernard | CV",
  ogDescription:
    "Lead Dev Fullstack / DevOps orienté backend, avec expertise API et mise en production",
  ogType: "website"
})

const techStack = [
  "Lead technique",
  "Architecture backend",
  "Python",
  "Django",
  "Django REST Framework",
  "FastAPI",
  "NestJS",
  "JavaScript",
  "Vue.js",
  "Nuxt.js",
  "PostgreSQL",
  "Docker",
  "CI/CD",
  "DevOps"
]

const highlights = [
  "Formation intensive à l'école 42",
  "Co-création d'une startup en tant que CTO",
  "Alternance Fullstack chez OneRagtime",
  "Conception d'APIs robustes, scalables et bien testées",
  "Mise en place de pratiques DevOps pour accélérer et fiabiliser le delivery"
]
</script>

<template>
  <main class="mx-auto grid w-[min(1040px,92vw)] gap-5 py-10 md:py-12">
    <section class="card grid gap-6 p-6 md:grid-cols-[1.3fr_0.9fr] md:items-center md:p-8">
      <div class="grid gap-4">
        <p class="m-0 text-xs font-bold uppercase tracking-[0.08em] text-ember-500">
          Lead Dev Fullstack / DevOps
        </p>
        <h1
          class="font-serif text-4xl leading-[0.95] tracking-tight text-slatewarm-900 md:text-6xl"
        >
          Thomas Bernard
        </h1>
        <p class="m-0 leading-relaxed text-slatewarm-700">
          J'accompagne les équipes produit et tech sur des sujets à fort enjeu : architecture
          backend, qualité logicielle, industrialisation DevOps et delivery continue. Mon
          positionnement est orienté backend, avec une forte expertise Python/Django, et une
          capacité à construire aussi en FastAPI ou NestJS selon le contexte.
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
        Je prends le lead technique quand le contexte l'exige : cadrage, choix d'architecture,
        structuration de la roadmap technique et accompagnement de l'équipe jusqu'à la mise en
        production.
      </p>
      <ul class="m-0 grid list-disc gap-1.5 pl-5 text-slatewarm-700">
        <li v-for="item in highlights" :key="item" class="leading-relaxed">{{ item }}</li>
      </ul>
    </section>

    <section class="card grid gap-4 p-6 md:p-7">
      <h2 class="font-serif text-3xl tracking-tight text-slatewarm-900 md:text-4xl">
        Compétences clés
      </h2>
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
      <p class="m-0 text-slatewarm-700">
        Le PDF est aussi intégré ici pour une consultation directe.
      </p>
      <object
        data="/cv.pdf"
        type="application/pdf"
        class="mt-1 min-h-[70vh] w-full rounded-xl border border-sand-200 bg-white"
      >
        <p>
          Votre navigateur ne peut pas afficher le PDF.
          <a href="/cv.pdf" target="_blank" rel="noreferrer" class="text-ember-700 underline"
            >Télécharger le CV</a
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
