const DESCRIPTION =
  "Blahaj Land is a free service offering everything from email and Nextcloud to static page hosting, a fast and reliable git forge, collaborative HedgeDoc documents, and even privacy-focused video streaming with Piped and Invidious!";
const TITLE = "Sign up - Blahaj Land";

export default defineNuxtConfig({
  ssr: false,
  future: {
    compatibilityVersion: 4,
  },
  app: {
    baseURL: "/signup/",
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: TITLE,
      meta: [
        { charset: "utf-8" },
        { name: "description", content: DESCRIPTION },
        { property: "og:title", content: TITLE },
        { property: "og:description", content: DESCRIPTION },
        {
          property: "og:image",
          content: "https://assets.blahaj.land/pictures/thumbnail.png",
        },
        { property: "twitter:card", content: "summary_large_image" },
        {
          property: "twitter:image",
          content: "https://assets.blahaj.land/pictures/thumbnail-twitter.png",
        },
        { property: "twitter:description", content: DESCRIPTION },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      ],
      link: [
        {
          rel: "preconnect",
          crossorigin: "anonymous",
          href: "https://assets.blahaj.land/",
        },
        {
          rel: "preconnect",
          crossorigin: "anonymous",
          href: "https://fonts.googleapis.com/",
        },
        {
          rel: "stylesheet",
          href: "https://assets.blahaj.land/css/colors.css",
        },
        {
          rel: "icon",
          href: "https://assets.blahaj.land/pictures/favicon.png",
        },
      ],
    },
  },
  css: ["@/style/main.sass"],
  modules: ["@nuxt/eslint", "@nuxt/image", "@pinia/nuxt"],
  image: {
    screens: {
      mb: 200,
      dt: 1200,
    },
    domains: ["static.blahaj.land"],
  },
  compatibilityDate: "2024-07-04",
});
