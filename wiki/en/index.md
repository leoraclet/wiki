---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Hack&Learn"
  text: "Source of knowledge"
  tagline: A simple Wiki for Learners and Hackers
  actions:
    - theme: brand
      text: Let's go
      link: /getting-started
  image:
    src: /vitepress-logo.svg
    alt: VitePress

features:
  - icon: 🏴
    title: CTF
    details: Results and Writeups of CTF - Cryptanalysis, OSINT, Reverse Engineering, and others ...
  - icon: 🎓
    title: Courses and Exercises
    details: Physics, Mathematics, electronics and computer science
  - icon: 🦾
    title: Robotic
    details: Learn to build and a programm a fully autonomous robot from scratch
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
