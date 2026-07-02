import adapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({ pages: 'dist', assets: 'dist', fallback: undefined, strict: true }),
    // Relative asset/link URLs so one build works at the apex domain AND at
    // PR-preview subpaths (checkpoint64.com/pr-preview/pr-N/) — the same reason
    // the old Vite build used base: './'.
    paths: { relative: true },
    prerender: {
      entries: ['*', '/', '/de/', '/fr/', '/es/', '/sitemap.xml'],
      handleHttpError: 'fail',
    },
    files: {
      appTemplate: 'src/app.html',
    },
  },
}

export default config
