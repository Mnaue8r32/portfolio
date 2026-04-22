# Portafolio Web

Portafolio personal desarrollado con React y Vite para presentar experiencia, stack tecnologico, proyectos destacados y medios de contacto en una sola landing page.

## Descripcion

Este proyecto muestra un sitio de portafolio moderno con enfoque en:

- presentacion profesional clara
- soporte bilingue (`es` / `en`)
- cambio de tema (`light` / `dark`)
- secciones modulares y faciles de mantener
- experiencia visual orientada a un perfil Full-Stack

## Caracteristicas

- Navegacion por secciones: `Hero`, `About`, `Tech Stack`, `Skills`, `Projects`, `Experience`, `Contact` y `Footer`
- Internacionalizacion centralizada desde [`src/i18n/translations.js`](./src/i18n/translations.js)
- Preferencias persistidas en `localStorage`
- Arquitectura basada en componentes reutilizables
- Build optimizado con Vite

## Stack

| Categoria | Tecnologias |
| --- | --- |
| Frontend | React 19, Vite |
| UI | CSS modular por componente, `react-icons` |
| Estado UI | Context API |
| Preferencias | `localStorage` para idioma y tema |
| Calidad | ESLint |

## Scripts Disponibles

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
```

| Comando | Descripcion |
| --- | --- |
| `npm run dev` | Inicia el entorno de desarrollo |
| `npm run build` | Genera la build de produccion |
| `npm run preview` | Previsualiza la build localmente |
| `npm run lint` | Ejecuta las reglas de ESLint |

## Instalacion

1. Clona el repositorio.
2. Instala las dependencias:

```bash
npm install
```

3. Inicia el proyecto en desarrollo:

```bash
npm run dev
```

4. Abre la URL que muestra Vite en la terminal, normalmente:

```text
http://localhost:5173
```

## Estructura Del Proyecto

```text
src/
|-- components/
|   |-- About/
|   |-- Contact/
|   |-- Experience/
|   |-- Footer/
|   |-- GrainOverlay/
|   |-- Hero/
|   |-- Navbar/
|   |-- Projects/
|   |-- Skills/
|   `-- TechStack/
|-- context/
|   `-- AppPreferencesContext.jsx
|-- hooks/
|   |-- useAppPreferences.js
|   |-- useI18n.js
|   `-- useReveal.js
|-- i18n/
|   `-- translations.js
|-- utils/
|   |-- techColors.js
|   `-- techIcons.jsx
|-- App.jsx
|-- index.css
`-- main.jsx
```

## Personalizacion

Si quieres adaptar este portafolio, los puntos principales son:

- Textos y traducciones: [`src/i18n/translations.js`](./src/i18n/translations.js)
- Navegacion: [`src/components/Navbar/Navbar.jsx`](./src/components/Navbar/Navbar.jsx)
- Preferencias de idioma y tema: [`src/context/AppPreferencesContext.jsx`](./src/context/AppPreferencesContext.jsx)
- Secciones visuales: carpeta [`src/components`](./src/components)

## Build

Para generar una version lista para despliegue:

```bash
npm run build
```

El resultado se genera en la carpeta `dist/`.

## Objetivo Del Proyecto

Este repositorio funciona como carta de presentacion tecnica y visual, con una estructura simple de escalar y mantener. La idea es poder actualizar proyectos, experiencia y tecnologias sin tocar la arquitectura general del sitio.

## Autor

Juan Manuel Cruz Beltran

