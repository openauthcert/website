[![Rebuild Website](https://github.com/openauthcert/website/actions/workflows/deploy-gh-pages.yml/badge.svg?branch=main)](https://github.com/openauthcert/website/actions/workflows/deploy-gh-pages.yml)
![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)

# 🌐 OpenAuthCert Website

This repository contains the public website for the **Open Authentication Certification Initiative**.

- 🛡️ Badge specifications and descriptions
- 📜 Vendor/project certification registry
- 📚 Public documentation

Hosted at: [https://openauthcert.org](https://openauthcert.org)

## 📦 Built With

- [VitePress](https://vitepress.dev) — static site generator powered by Vite and Vue
- [Vite](https://vitejs.dev) + [Vue](https://vuejs.org) for the interactive registry app
- [Tailwind CSS](https://tailwindcss.com) for styling

### Development

Run the registry app locally:

```bash
npm run dev-app
```

Build the app (fetches registry JSON from GitHub):

```bash
npm run build-app
```

## 📄 License

This website content is licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
