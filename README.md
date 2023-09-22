# React + TS + Vite + SWC + MUI + PnPm boilerplate

This boilerplate contains basic necessities and examples to quickly dive into development of your application

## Core libraries and tools

- [React](https://reactjs.org/) - library for web interfaces
- [TypeScript](https://www.typescriptlang.org/) - strongly typed language, built on top of JS
- [MUI](https://mui.com/) - UI library, which implements Google's Material Design
- [TanStack Query](https://tanstack.com/query/latest) - data-fetching library (for fetching and updating server state)
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction) - state management library
- [Zod](https://zod.dev/) - schema declaration and validation library (for validating forms)
- [React Router](https://reactrouter.com/) - client side routing
- [i18next](https://www.i18next.com/) - internationalization framework
- [Vite SWC plugin](https://github.com/vitejs/vite-plugin-react-swc) - speeds up Vite dev server
- [PnPm](https://pnpm.io/) - fast and space efficient package manager
- [Prettier](https://prettier.io) - code formatter
- [ESLint](https://eslint.org/) - code linter

## Examples

The project contains examples of using each of the installed libraries. For example, form validation, localization, API requests execution, state management etc. However, it doesn't contain too many examples (aka garbage) that you will need to clean up

## Run Locally

To start the project use NodeJS of v18.16.0 or higher, PnPm 8.6.12 or higher. Lower versions haven't been tested

```bash
  # install dependencies
  pnpm install

  # copy config file from example
  cp .env.example .env

  # Start dev server
  pnpm run dev
```

## Deployment

```bash
  pnpm run build
```

Output directory: `dist`

## Scripts

```bash
  # run dev server
  pnpm run dev

  # build production
  pnpm run build

  # run code linter
  pnpm run lint

  # preview production build locally. do not use it in production
  pnpm run preview
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
