import { createRequire } from "node:module"
import { defineNitroConfig } from "nitropack/config"

const nitroPkg = createRequire(import.meta.url)("nitropack/package.json")

//https://nitro.unjs.io/config
export default defineNitroConfig({
  preset: 'netlify_edge',
  srcDir: "./server",
  baseURL: "/",
  timing: true,
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
  vercel: {
    config: {}
  },
  compatibilityDate: "2025-03-04"
});
