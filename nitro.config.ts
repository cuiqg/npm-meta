import { createRequire } from "node:module"

const nitroPkg = createRequire(import.meta.url)("nitropack/package.json")

//https://nitro.unjs.io/config
export default defineNitroConfig({
  preset: 'vercel',
  srcDir: "server",
  routeRules: {
    "**": {
      cors: true
    }
  },
  storage: {
    manifest: {
      driver: 'lruCache',
      max: 10_000,
    },
  },
  runtimeConfig: {
    nitroVersion: nitroPkg.version,
  },
  compatibilityDate: "2025-03-04"
});
