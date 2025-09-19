---
# Configuration de la page d'accueil (format VitePress)
# Documentation : https://vitepress.dev/reference/default-theme-home-page

layout: home

# Section héro (bannière principale)
hero:
  name: "Hack&Learn"
  text: "Source ouverte de connaissances"
  tagline: Un wiki educationel pour les passionnés d'apprentissage et de sécurité informatique
  actions:
    - theme: brand
      text: Explorer le contenu
      link: /getting-started
  image:
    src: /vitepress-logo.svg
    alt: Logo Hack&Learn

# Fonctionnalités mises en avant
features:
  - icon: "🏴"
    title: "Capture The Flag (CTF)"
    details: Archives de compétitions avec solutions détaillées - Cryptographie, recherche d'informations, ingénierie inverse et autres défis techniques
    link: /ctf

  - icon: "🎓"
    title: "Ressources Pédagogiques"
    details: Cours et exercices pratiques en physique, mathématiques, électronique et sciences informatiques
    link: /school

  - icon: "🦾"
    title: "Robotique Appliquée"
    details: Guide complet pour concevoir et programmer des robots autonomes, de la théorie à la pratique
    link: /robotics

  - icon: "🛡️"
    title: "Cybersécurité"
    details: "Méthodologies et techniques pour le hacking éthique et la sécurité offensive"
    link: /cyber

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
