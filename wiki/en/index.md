---
# VitePress Home Page Configuration
# Reference: https://vitepress.dev/reference/default-theme-home-page

layout: home

# Hero Section (Main Banner)
hero:
  name: "Hack&Learn"
  text: "Open Knowledge Hub"
  tagline: An educational wiki for learning and security enthusiasts.
  actions:
    - theme: brand
      text: Start Exploring
      link: /getting-started
  image:
    src: /vitepress-logo.svg
    alt: Hack&Learn Logo

# Featured Sections
features:
  - icon: "🏴"
    title: "Capture The Flag (CTF)"
    details: Competition archives with detailed writeups - Cryptography, OSINT, reverse engineering and other technical challenges
    link: /en/ctf

  - icon: "🎓"
    title: "Learning Resources"
    details: Practical courses and exercises in physics, mathematics, electronics and computer science
    link: /en/school

  - icon: "🦾"
    title: "Applied Robotics"
    details: Complete guide to designing and programming autonomous robots from theory to practice
    link: /en/robotics

  - icon: "🛡️"
    title: "Cybersecurity"
    details: "Methodologies and techniques for ethical hacking and offensive security"
    link: /en/cyber

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
