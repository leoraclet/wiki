<script setup lang="ts">
import { useData, onContentUpdated } from 'vitepress'

const { frontmatter, title } = useData()

function loadGiscus() {
  const theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  const giscusContainer = document.getElementById('giscus-container')
  if (!giscusContainer) return;

  giscusContainer.innerHTML = '' // Clear existing iframes

  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.setAttribute('data-repo', 'leoraclet/wiki')
  script.setAttribute('data-repo-id', 'R_kgDOO2HezQ')
  script.setAttribute('data-category', 'Announcements')
  script.setAttribute('data-category-id', 'DIC_kwDOO2Hezc4Crpwa')
  script.setAttribute('data-mapping', 'url')
  script.setAttribute('data-strict', '0')
  script.setAttribute('data-reactions-enabled', '1')
  script.setAttribute('data-emit-metadata', '1')
  script.setAttribute('data-input-position', 'top')
  script.setAttribute('data-theme', theme) // or dark, or dynamic
  script.setAttribute('crossorigin', 'anonymous')
  script.setAttribute('data-lang', 'en')
  script.async = true

  giscusContainer.appendChild(script)
}
onContentUpdated(loadGiscus)
</script>

<template>
  <div v-if="frontmatter.comments !== false" :key="title" class="giscus">
    <!-- <component
        :is="'script'"
        src="https://giscus.app/client.js"
        data-repo="leoraclet/wiki"
        data-repo-id="R_kgDOO2HezQ"
        data-category="Announcements"
        data-category-id="DIC_kwDOO2Hezc4Crpwa"
        data-mapping="url"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="1"
        data-input-position="top"
        data-theme="transparent_dark"
        data-lang="en"
        crossorigin="anonymous"
        async
    /> -->
    <div id="giscus-container" class="giscus"></div>
  </div>
</template>

<style>
.giscus {
    padding-top: 30px;
}
</style>