---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Hack&Learn"
  text: "Source de savoir"
  tagline: Un simple Wiki pour les Apprentis et les Hackers
  actions:
    - theme: brand
      text: C'est parti
      link: /fr/getting-started
  image:
    src: /vitepress-logo.svg
    alt: VitePress

features:
  - icon: 🏴
    title: CTF
    details: Résultats et Writeups de CTF - Cryptanalyse, OSINT, Rétro-Ingénierie, et autres ...
  - icon: 🎓
    title: Cours et Exercices
    details: Physique, Mathématiques, électronique et informatique
  - icon: 🦾
    title: Robotique
    details: Apprenez à construire et programmer un robot autonome de A à Z
---

<style>
  :root {
    --vp-home-hero-name-color: transparent;
    --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

    --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
    --vp-home-hero-image-filter: blur(44px);
  }

  @media (min-width: 640px) {
    :root {
      --vp-home-hero-image-filter: blur(56px);
    }
  }

  @media (min-width: 960px) {
    :root {
      --vp-home-hero-image-filter: blur(68px);
    }
  }
</style>
