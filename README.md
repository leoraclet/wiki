<div align="center"><img style="width: 300px" src="./wiki/public/wiki.png"></div>
<br>
<h1 align="center">Hack&Learn</h1>

<div align="center">

![license](https://img.shields.io/github/license/leoraclet/hacking)
![language](https://img.shields.io/github/languages/top/leoraclet/hacking)
![lastcommit](https://img.shields.io/github/last-commit/leoraclet/hacking)
<br>
![Language](https://img.shields.io/badge/Language-MDX-1d50de)
![Libraries](https://img.shields.io/badge/Framework-Vue-fa8925)
![Size](https://img.shields.io/badge/Size-62Mo-f12222)
![Open Source](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)

</div>

## Table of Contents
- [Table of Contents](#table-of-contents)
- [📖 About](#-about)
- [📦 Structure](#-structure)
- [📚 Libraries](#-libraries)
- [🚀 Install \& Run](#-install--run)
- [📜 License](#-license)


## 📖 About

This repository hosts the source code for my personnal Wiki.

## 📦 Structure

**Directories**

- [**`wiki`**](./wiki/) - Source code
  - [**`public`**](./wiki/public/) - Resources
  - [**`fr`**](./wiki/fr/) - Contents in French
  - [**`en`**](./wiki/en/) - Contents in English
  - [**`.vitepress`**](./wiki/.vitepress) - Configuration and build files

**Files**
 - [**deploy.yml**](./.github/workflows/deploy.yml) - Automatic worflow to deploy on Github pages
   when Push.

## 📚 Libraries

- [**Vitepress**](https://vitepress.dev/) - Vite & Vue Powered Static Site Generator
- [**VueJS**](https://vuejs.org/) - The Progressive JavaScript Framework
- [**MDX**](https://mdxjs.com/) - Markdown for the component era
- [**Element Plus**](https://element-plus.org/en-US/) - A Vue 3 based component library

## 🚀 Install & Run

First, ensure you have [**bun**](https://bun.com/) installed on your system.

Then, cloen the repo

```bash
git clone https://github.com/leoraclet/wiki
cd wiki
```

Install dependencies

```bash
bun install
```

And now you can run the developement server using

```bash
bun run dev
```

You can also build and preview the production server using

```bash
bun run build
bun run preview
```

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.