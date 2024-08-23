import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "amazon-x9",
    project: "javascript-nextjs"
  }), sentryVitePlugin({
    org: "amazon-x9",
    project: "javascript-react"
  }), sentryVitePlugin({
    org: "amazon-x9",
    project: "javascript-react"
  }), sentryVitePlugin({
    org: "amazon-x9",
    project: "apple"
  })],

  build: {
    sourcemap: true
  }
})