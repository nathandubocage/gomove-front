import { defineConfig } from "vite";
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react-swc";

const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType: "prompt",
  manifest: {
    short_name: "React App",
    name: "Create React App Sample",
    icons: [
      {
        src: "favicon.ico",
        sizes: "64x64 32x32 24x24 16x16",
        type: "image/x-icon",
      },
      {
        src: "logo192.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        src: "logo512.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    start_url: "/",
    scope: "/",
    display: "standalone",
    theme_color: "#000000",
    background_color: "#ffffff",
  },
  devOptions: {
    enabled: true,
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      ...manifestForPlugin,
      registerType: "autoUpdate",
    }),
  ],
});
