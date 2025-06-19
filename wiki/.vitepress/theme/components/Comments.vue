<script setup lang="ts">
import { useData } from 'vitepress'

const { frontmatter, title } = useData()

</script>

<template>
  <div v-if="frontmatter.comments !== false" :key="title" class="giscus">
    <component
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
    />
  </div>
</template>

<style>
.giscus {
    padding-top: 30px;
}
</style>