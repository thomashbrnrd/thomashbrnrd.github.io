const repository = process.env.GITHUB_REPOSITORY || ""
const repoName = repository.split("/")[1] || ""
const isUserOrOrgPagesRepo = repoName.endsWith(".github.io")
const computedBaseURL = repoName ? (isUserOrOrgPagesRepo ? "/" : `/${repoName}/`) : "/"

export default defineNuxtConfig({
  compatibilityDate: "2026-05-10",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || computedBaseURL
  },
  css: ["~/assets/css/main.css"],
  nitro: {
    preset: "github_pages"
  }
})
