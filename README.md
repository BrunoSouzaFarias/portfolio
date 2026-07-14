<div align="center">

# 🚀 Bruno Souza Farias — Portfólio

[![Deploy](https://img.shields.io/badge/▲_Vercel-Produção-000?style=for-the-badge&logo=vercel)](https://brunosouzafarias.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Repo-181717?style=for-the-badge&logo=github)](https://github.com/BrunoSouzaFarias/portfolio)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Perfil-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/bruno-souza-farias/)

![Next.js](https://img.shields.io/badge/Next.js-16-000?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=000)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=fff)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=fff)
![Framer Motion](https://img.shields.io/badge/Motion-12-E91E63?style=flat-square&logo=framer&logoColor=fff)
![License](https://img.shields.io/badge/Licença-MIT-green?style=flat-square)

<br/>

**Portfólio pessoal de desenvolvedor full-stack, supervisor de operações TI e especialista em automação.**

[🌐 Ver ao Vivo](https://brunosouzafarias.vercel.app) · [📂 Código Fonte](https://github.com/BrunoSouzaFarias/portfolio)

<br/>

<img src="https://raw.githubusercontent.com/BrunoSouzaFarias/portfolio/main/public/bruno.png" alt="Bruno Souza Farias" width="200" style="border-radius: 50%;"/>

</div>

---

## 📸 Preview

<div align="center">

| Desktop | Mobile |
|---------|--------|
| ![Desktop](https://img.shields.io/badge/🖥️_Desktop-Responsivo-000?style=for-the-badge) | ![Mobile](https://img.shields.io/badge/📱_Mobile-Responsivo-000?style=for-the-badge) |

> Acesse [brunosouzafarias.vercel.app](https://brunosouzafarias.vercel.app) para ver o site completo.

</div>

---

## ✨ Funcionalidades

| Recurso | Descrição |
|---------|-----------|
| 🎨 **Tema Claro/Escuro** | Alternância com persistência no `localStorage` |
| 🖱️ **Cursor Personalizado** | Cursor customizado que segue o mouse |
| 🧈 **Scroll Suave** | Smooth scrolling com [Lenis](https://github.com/darkroomengineering/lenis) |
| ✨ **Animações** | Transições e reveals com [Motion](https://motion.dev/) (Framer Motion) |
| 📱 **Responsivo** | Layout adaptável para desktop, tablet e mobile |
| 🔍 **SEO Otimizado** | Meta tags, Open Graph, Twitter Cards, `robots.ts` e `sitemap.ts` |
| 🛡️ **Security Headers** | Headers de segurança configurados no `next.config.ts` |
| 🍯 **Honeypot Anti-Spam** | Campo oculto no formulário de contato contra bots |
| ♿ **Acessibilidade** | Navegação por teclado, ARIA labels e semântica HTML |
| ⚡ **Loading State** | Tela de carregamento animada |
| 📊 **Contadores Animados** | Estatísticas com animação numérica |

---

## 🏗️ Estrutura do Projeto

```
portfolio/
├── app/
│   ├── globals.css          # Estilos globais (Tailwind CSS)
│   ├── layout.tsx           # Layout raiz com metadata SEO
│   ├── page.tsx             # Página principal
│   ├── loading.tsx          # Loading state
│   ├── robots.ts            # Configuração robots.txt
│   ├── sitemap.ts           # Sitemap XML
│   └── sobre/
│       └── page.tsx         # Página Sobre
├── components/
│   ├── About.tsx            # Seção Sobre
│   ├── Contact.tsx          # Formulário de contato
│   ├── Counter.tsx          # Contadores animados
│   ├── Cursor.tsx           # Cursor personalizado
│   ├── Education.tsx        # Formação acadêmica
│   ├── Experience.tsx       # Experiências profissionais
│   ├── Faq.tsx              # Perguntas frequentes
│   ├── Footer.tsx           # Rodapé
│   ├── Hero.tsx             # Seção hero principal
│   ├── Marquee.tsx          # Marquee de skills
│   ├── Navbar.tsx           # Navegação
│   ├── ProjectStack.tsx     # Cards de projetos
│   ├── Reveal.tsx           # Animação de reveal
│   ├── Services.tsx         # Serviços oferecidos
│   ├── SmoothScroll.tsx     # Scroll suave (Lenis)
│   ├── SocialIcons.tsx      # Ícones de redes sociais
│   └── ThemeToggle.tsx      # Alternador de tema
├── lib/
│   └── data.ts              # Dados centralizados do site
└── public/
    └── bruno.png            # Foto de perfil
```

---

## 🛠️ Tech Stack

<div align="center">

| Categoria | Tecnologia |
|-----------|-----------|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) |
| **Linguagem** | [TypeScript 5](https://www.typescriptlang.org/) |
| **UI** | [React 19](https://react.dev/) |
| **Estilos** | [Tailwind CSS 4](https://tailwindcss.com/) |
| **Animações** | [Motion 12](https://motion.dev/) |
| **Scroll** | [Lenis](https://github.com/darkroomengineering/lenis) |
| **Fontes** | [Anton](https://fonts.google.com/specimen/Anton) + [Inter](https://fonts.google.com/specimen/Inter) via `next/font` |
| **Deploy** | [Vercel](https://vercel.com/) |
| **Linting** | [ESLint 9](https://eslint.org/) |

</div>

---

## 🚀 Rodando Localmente

```bash
# Clone o repositório
git clone https://github.com/BrunoSouzaFarias/portfolio.git

# Entre na pasta
cd portfolio

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

---

## 📦 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run start` | Servidor de produção |
| `npm run lint` | Verificação de código com ESLint |

---

## 🎯 Seções do Site

| Seção | Descrição |
|-------|-----------|
| **Hero** | Apresentação com nome, título e foto |
| **Marquee** | Carrossel infinito com skills técnicas |
| **Serviços** | 4 áreas de atuação: Full-Stack, RPA, Gestão TI, Cibersegurança |
| **Sobre** | Resumo profissional com estatísticas animadas |
| **Projetos** | Stack de cards com os principais projetos |
| **Experiência** | Timeline profissional |
| **FAQ** | Perguntas frequentes com accordion |
| **Formação** | Educação e certificações |
| **Contato** | Formulário com honeypot anti-spam |

---

## 🔗 Projetos em Destaque

| Projeto | Tecnologias | Link |
|---------|------------|------|
| **PixelCrew** | TypeScript · VS Code | [GitHub](https://github.com/BrunoSouzaFarias/PixelCrew) |
| **Feed-Track** | TypeScript · IA | [GitHub](https://github.com/BrunoSouzaFarias/Feed-track) |
| **Barbearia Canindé** | Web Design | [GitHub](https://github.com/BrunoSouzaFarias/Barbearia-Caninde) |
| **Dashboard CAPS** | Python · Dados | [GitHub](https://github.com/BrunoSouzaFarias/dashboardPy) |
| **Login Hospitalar** | JavaScript · API | [Ver ao Vivo](https://login-cadastro-omega.vercel.app) |
| **Developer Pokédex** | JavaScript · API | [Ver ao Vivo](https://developer-pokedex.vercel.app) |

---

## 📬 Contato

<div align="center">

[![Email](https://img.shields.io/badge/Email-brunodesouzafarias@yahoo.com.br-D14836?style=for-the-badge&logo=yahoo&logoColor=white)](mailto:brunodesouzafarias@yahoo.com.br)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-bruno--souza--farias-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/bruno-souza-farias/)
[![GitHub](https://img.shields.io/badge/GitHub-BrunoSouzaFarias-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/BrunoSouzaFarias)
[![Instagram](https://img.shields.io/badge/Instagram-@brusf13-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/brusf13)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-(11)_98329--2388-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/5511983292388)

</div>

---

## 📄 Licença

Este projeto é open source sob a licença **MIT**. Use, modifique e distribua livremente.

---

<div align="center">

**Feito com ☕ e código por [Bruno Souza Farias](https://brunosouzafarias.vercel.app)**

![São Paulo, Brasil](https://img.shields.io/badge/📍_São_Paulo-Brasil-009739?style=flat-square)
![Status](https://img.shields.io/badge/✅_Disponível-para_trabalho-brightgreen?style=flat-square)

</div>
