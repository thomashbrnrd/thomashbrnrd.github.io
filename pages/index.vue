<script setup lang="ts">
useSeoMeta({
  title: "Thomas Bernard | CV",
  description:
    "Thomas Bernard, freelance Lead Dev Fullstack / DevOps orienté backend. Expertise Django, FastAPI, NestJS, Docker, Kubernetes et CI/CD.",
  ogTitle: "Thomas Bernard | CV",
  ogDescription:
    "Freelance Lead Dev Fullstack / DevOps orienté backend, avec expertise API et mise en production",
  ogType: "website"
})

const techStack = [
  "Lead technique",
  "Architecture backend",
  "Freelance",
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
  "Kubernetes",
  "Terraform",
  "CI/CD",
  "DevOps"
]

const highlights = [
  "Lead Développeur & DevOps au Ministère de l'Intérieur depuis 2023",
  "Missions réalisées pour Canal+, la FFF, Learning Planet Institute et Pharnum X",
  "Co-création d'une startup en tant que CTO et management de développeurs",
  "Conception d'APIs robustes, scalables et bien testées sur des stacks backend modernes",
  "Mise en place de pratiques DevOps pour accélérer et fiabiliser le delivery"
]

const offerItems = [
  {
    title: "Django, FastAPI, NestJS",
    label: "Backend & APIs",
    description:
      "Conception d'APIs REST solides, maintenables et bien testées, pour des produits neufs ou des plateformes déjà en production."
  },
  {
    title: "Cadrage et décisions d'architecture",
    label: "Lead technique",
    description:
      "Je sécurise les choix techniques, j'aligne delivery et qualité, et je fais monter le niveau d'exécution de l'équipe."
  },
  {
    title: "Docker, Kubernetes, CI/CD",
    label: "DevOps",
    description:
      "Industrialisation des déploiements, pipelines fiables, environnements reproductibles et mises en production fluides."
  },
  {
    title: "Dette technique et standards",
    label: "Reprise d'existant",
    description:
      "Audit, remise à niveau, code reviews, tests automatisés et trajectoire d'évolution réaliste pour remettre une base de code sous contrôle."
  }
]

const recentMissions = [
  {
    client: "Ministère de l'Intérieur",
    period: "Depuis août 2023",
    role: "Lead Développeur & DevOps",
    description:
      "Développement de Basegun, outil de classification d'armes via IA, avec déploiement, hébergement et CI/CD sur GitHub, GitLab, DSO et Cloud Pi."
  },
  {
    client: "Canal+",
    period: "Janvier à mai 2023",
    role: "Développeur Fullstack & DevOps",
    description:
      "Développement from scratch d'un outil d'administration interne pour gérer les flux vidéo onboard de Formule 1, avec déploiement sur AWS, EKS, ArgoCD et Terraform."
  },
  {
    client: "FFF",
    period: "Mai à août 2023",
    role: "Développeur Fullstack",
    description:
      "Renfort produit sur une stack FastAPI, Angular, Azure et Kubernetes, dans un contexte à fortes attentes opérationnelles."
  },
  {
    client: "Pharnum X",
    period: "Novembre 2021 à avril 2022",
    role: "Lead Software Developer",
    description:
      "Lead technique d'une équipe de 5 développeurs, refonte de la base de code, implémentation d'une CI/CD complète et transition progressive vers des micro-services."
  }
]
</script>

<template>
  <main class="mx-auto grid w-[min(1040px,92vw)] gap-5 py-10 md:py-12">
    <section class="card grid gap-6 p-6 md:grid-cols-[1.3fr_0.9fr] md:items-center md:p-8">
      <div class="grid gap-4">
        <p class="m-0 text-xs font-bold uppercase tracking-[0.08em] text-ember-500">
          Freelance Lead Dev Fullstack / DevOps
        </p>
        <h1
          class="font-serif text-4xl leading-[0.95] tracking-tight text-slatewarm-900 md:text-6xl"
        >
          Thomas Bernard
        </h1>
        <p class="m-0 leading-relaxed text-slatewarm-700">
          J'interviens en freelance sur des sujets à fort enjeu : architecture backend, conception
          d'APIs, industrialisation DevOps et montée en qualité d'équipes produit. Mon
          positionnement est clairement orienté backend, avec une expertise forte sur Django/DRF,
          FastAPI et NestJS, jusqu'à la mise en production sur des environnements conteneurisés et
          des pipelines CI/CD robustes.
        </p>
        <div class="flex flex-wrap gap-2">
          <span
            class="rounded-full border border-sand-200 bg-sand-50 px-3 py-1.5 text-sm text-slatewarm-900"
            >Freelance</span
          >
          <span
            class="rounded-full border border-sand-200 bg-sand-50 px-3 py-1.5 text-sm text-slatewarm-900"
            >Disponible via Malt</span
          >
          <span
            class="rounded-full border border-sand-200 bg-sand-50 px-3 py-1.5 text-sm text-slatewarm-900"
            >Backend / APIs / DevOps</span
          >
          <span
            class="rounded-full border border-sand-200 bg-sand-50 px-3 py-1.5 text-sm text-slatewarm-900"
            >Basé à Suresnes · Paris</span
          >
        </div>
        <div class="flex flex-wrap gap-3">
          <a
            class="btn-primary"
            href="https://www.malt.fr/profile/thomasbernard5"
            target="_blank"
            rel="noreferrer"
            >Voir mon profil Malt</a
          >
          <a class="btn-secondary" href="/cv.pdf" target="_blank" rel="noreferrer"
            >Télécharger mon CV</a
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
        structuration de la roadmap technique, réduction de la dette, mise en place de standards de
        qualité et accompagnement des équipes jusqu'à la mise en production.
      </p>
      <ul class="m-0 grid list-disc gap-1.5 pl-5 text-slatewarm-700">
        <li v-for="item in highlights" :key="item" class="leading-relaxed">{{ item }}</li>
      </ul>
    </section>

    <section class="card grid gap-4 p-6 md:p-7">
      <h2 class="font-serif text-3xl tracking-tight text-slatewarm-900 md:text-4xl">
        Ce que j'apporte
      </h2>
      <div class="grid gap-3 md:grid-cols-2">
        <article
          v-for="item in offerItems"
          :key="item.title"
          class="rounded-2xl border border-sand-200 bg-white p-4"
        >
          <p class="m-0 text-xs font-bold uppercase tracking-[0.08em] text-ember-500">
            {{ item.label }}
          </p>
          <h3 class="mt-1 text-lg font-semibold text-slatewarm-900">{{ item.title }}</h3>
          <p class="m-0 leading-relaxed text-slatewarm-700">{{ item.description }}</p>
        </article>
      </div>
    </section>

    <section class="card grid gap-4 p-6 md:p-7">
      <h2 class="font-serif text-3xl tracking-tight text-slatewarm-900 md:text-4xl">
        Missions récentes
      </h2>
      <div class="grid gap-3 md:grid-cols-2">
        <article
          v-for="mission in recentMissions"
          :key="mission.client"
          class="rounded-2xl border border-sand-200 bg-white p-4"
        >
          <p class="m-0 text-xs font-bold uppercase tracking-[0.08em] text-ember-500">
            {{ mission.client }} · {{ mission.period }}
          </p>
          <h3 class="mt-1 text-lg font-semibold text-slatewarm-900">{{ mission.role }}</h3>
          <p class="m-0 leading-relaxed text-slatewarm-700">{{ mission.description }}</p>
        </article>
      </div>
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
        href="https://www.malt.fr/profile/thomasbernard5"
        target="_blank"
        rel="noreferrer"
        class="text-ember-700 hover:underline"
      >
        Malt
      </a>
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
