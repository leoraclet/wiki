<script setup lang="ts">
import DefaultTheme from "vitepress/theme";

import { useData, inBrowser } from "vitepress";
import { watchEffect, nextTick, provide } from "vue";

import Breadcrumb from "./Breadcrumb.vue";
import Comments from './Comments.vue'

const { Layout } = DefaultTheme;
const { lang, isDark } = useData();

const enableTransitions = () =>
  "startViewTransition" in document &&
  window.matchMedia("(prefers-reduced-motion: no-preference)").matches;

provide("toggle-appearance", async ({ clientX: x, clientY: y }: MouseEvent) => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value;
    return;
  }

  document.documentElement.style.setProperty("--darkX", x + "px");
  document.documentElement.style.setProperty("--darkY", y + "px");

  await document.startViewTransition(async () => {
    isDark.value = !isDark.value;
    await nextTick();
  }).ready;
});

watchEffect(() => {
  if (inBrowser) {
    document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2040 00:00:00 UTC; path=/`;
  }
});

function updateGiscusTheme() {
  const theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  const iframe = document.querySelector('iframe.giscus-frame')
  if (!iframe) return
  iframe.contentWindow.postMessage({ giscus: { setConfig: { theme } } }, 'https://giscus.app')
}

const observer = new MutationObserver(updateGiscusTheme)
observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

window.onload = () => {
  updateGiscusTheme()
}

</script>

<template>
  <Layout>
    <template #doc-before>
      <Breadcrumb />
    </template>
    <template #doc-after>
      <Comments />
    </template>
  </Layout>
</template>

<style>
::view-transition-old(*) {
  animation: none;
}
::view-transition-new(*) {
  animation: globalDark 0.8s ease-in;
}

@keyframes globalDark {
  from {
    clip-path: circle(0% at var(--darkX) var(--darkY));
  }
  to {
    clip-path: circle(100% at var(--darkX) var(--darkY));
  }
}

.dark img {
  filter: brightness(0.8);
}

</style>
