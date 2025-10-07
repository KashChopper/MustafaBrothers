This project exposes images placed in the repository root folder `attached_assets/` to the Vite-powered client using the `@assets` alias.

Why
- Some design assets originate outside the `client/` folder (for example, generated or placeholder images). Instead of copying them into `client/src/assets/`, the project maps `@assets` -> `attached_assets/` so imports like:

  import img from '@assets/generated_images/Screen_protector_product_285abcbd.png'

  work both in dev and production builds.

Where
- The alias is configured in `vite.config.ts` under `resolve.alias` and the dev server is allowed to serve the folder via `server.fs.allow`.

Notes
- If you move images into `client/src/assets/`, update imports accordingly or remove the `@assets` alias.
- Keep `server.fs.strict` enabled for safety; only extend `allow` for trusted folders.
Vercel deployment note
- The Vite project is rooted at `client/`, so production builds are emitted to `client/dist`.
- Vercel expects the output directory at the repository root by default. To avoid "No Output Directory named \"dist\" found" errors, this repo includes `vercel.json` which configures the static-build to use `client/dist` as the `distDir`.

Running the app locally on port 3000
- Install dependencies (if you haven't):

  npm install

- Start the dev server on port 3000:

  npm run dev:3000

  Then open http://localhost:3000/ in your browser.
