<script setup lang="ts">

import { DefaultTheme, onContentUpdated, useData, withBase } from 'vitepress';
import { useSidebar } from 'vitepress/theme';
import { Ref, ref } from 'vue';

const { frontmatter, page } = useData();
const { sidebar } = useSidebar();
const breadcrumbHtml: Ref<string> = ref('');
const gtSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><polygon points="79.093,0 48.907,30.187 146.72,128 48.907,225.813 79.093,256 207.093,128"/></svg>`;

if (frontmatter.value.breadcrumb !== false || typeof frontmatter.value.breadcrumb === 'object' || true) {
	function resolveFilePath(filePath: string): string {
		if (!filePath.startsWith('/')) {
			filePath = '/' + filePath;
		}
		if (filePath.endsWith('.md')) {
			filePath = filePath.slice(0, filePath.length - 3);
		}
		if (filePath.endsWith('/index')) {
			filePath = filePath.slice(0, filePath.length - 5);
		}
		return filePath;
	}

	let breadcrumbItems: Array<{ text?: string; link?: string }> = [];
	function resolveMatchedLink(filePath: string, items: Array<DefaultTheme.SidebarItem>): true | undefined {
		for (const item of items) {
			breadcrumbItems.push({ text: item.text, link: item.link });
			if (item.link?.replace('index.md', '') === filePath) {
				return true;
			} else if (item.items && item.items.length >= 1) {
				if (resolveMatchedLink(filePath, item.items)) {
					return true;
				}
			}
			breadcrumbItems = breadcrumbItems.slice(0, breadcrumbItems.length - 1);
		}
		return;
	}

	const generateBreadcrumb = (): void => {
		const oldfilePath = resolveFilePath(page.value.filePath);
		const pathSegments = oldfilePath.split('/');
		const filePath = '/' + pathSegments.slice(2, pathSegments.length).join('/')
		breadcrumbItems = [];
		if (typeof frontmatter.value.breadcrumb === 'object') {
			if (frontmatter.value.breadcrumb.homeLink) {
				breadcrumbItems.push({ text: frontmatter.value.breadcrumb.homeText || '🏠', link: frontmatter.value.breadcrumb.homeLink });
			}
		}

		resolveMatchedLink(filePath, sidebar.value);

		let breadcrumbHtmlStr = '';
		if (breadcrumbItems.length >= 2) {
			for (const [index, breadcrumbItem] of breadcrumbItems.entries()) {
				if (breadcrumbItem.link && index < breadcrumbItems.length - 1) {
					breadcrumbHtmlStr += `<div class="breadcrumb-item"><span><a href="${withBase(breadcrumbItem.link.replace('index.md', '')) + (breadcrumbItem.link.replace('index.md', '').endsWith('/') ? '' : '.html')}">${breadcrumbItem.text}</a></span></div>`;
				} else if (index === breadcrumbItems.length - 1) {
					breadcrumbHtmlStr += '<div class="breadcrumb-item breadcrumb-item-current"><span>' + breadcrumbItem.text + '</span></div>';
				} else {
					breadcrumbHtmlStr += '<div class="breadcrumb-item"><span>' + breadcrumbItem.text + '</span></div>';
				}
				if (index < breadcrumbItems.length - 1) {
					breadcrumbHtmlStr += `<div class="breadcrumb-symbol">${gtSvg}</div>`;
				}
			}
		}
		breadcrumbHtml.value = breadcrumbHtmlStr;
	};

	generateBreadcrumb();

	onContentUpdated(generateBreadcrumb);
}
</script>

<template>
	<div class="breadcrumb" v-html="breadcrumbHtml"></div>
</template>

<style>
.breadcrumb {
	margin-bottom: 10px;
	display: block;
}

.breadcrumb .breadcrumb-item {
	display: inline-block;
	align-content: center;
	font-size: small; /* 13px */
	padding-top: 3px;
	padding-bottom: 3px;
	padding-left: 0px;
	padding-right: 5px;
	border-radius: 20px;
}

.breadcrumb .breadcrumb-item:has(a):hover {
	color: var(--vp-c-brand-1);
}

.breadcrumb .breadcrumb-item span a {
	font-weight: 500;
	transition:
		color 0.25s,
		opacity 0.25s;
	touch-action: manipulation;
}

.breadcrumb .breadcrumb-item-current {
	background-color: var(--vp-custom-block-info-bg);
	padding-left: 12px;
	padding-right: 12px;
}

.breadcrumb .breadcrumb-item-current span {
	color: var(--vp-c-brand-1);
}

.breadcrumb .breadcrumb-symbol {
	display: inline-block;
	padding-left: 6px;
	padding-right: 6px;
	margin-left: 6px;
	margin-right: 6px;
	opacity: 0.5;
	height: 9px;
	width: 22px;
	fill: var(--vp-c-text-2);
}

@media (max-width: 640px) {
	.breadcrumb {
		display: none;
	}
}
</style>