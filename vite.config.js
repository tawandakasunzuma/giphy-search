import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        short_name: 'SearchaGif',
        name: 'Searcha Gif',
        icons: [
          { src: './icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: './icons/icon-512x512.png', sizes: '512x512', type: 'image/png' }
        ],
        start_url: '.',
        display: 'standalone',
        theme_color: '#000000',
        background_color: '#ffffff'
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/tenor\.googleapis\.com\/.*/,
            handler: 'NetworkFirst',
            options: { cacheName: 'gif-api-cache' }
          }
        ]
      }
    })
  ]
})
