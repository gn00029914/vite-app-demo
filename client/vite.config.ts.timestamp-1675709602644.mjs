// vite.config.ts
import { defineConfig, splitVendorChunkPlugin } from "file:///C:/Users/LJY/Project/vite-app-demo/client/node_modules/.pnpm/vite@4.1.1_jvoopxe2sx4h6zxwtlioxoz3j4/node_modules/vite/dist/node/index.js";
import { resolve } from "path";
import basicSsl from "file:///C:/Users/LJY/Project/vite-app-demo/client/node_modules/.pnpm/@vitejs+plugin-basic-ssl@1.0.1_vite@4.1.1/node_modules/@vitejs/plugin-basic-ssl/dist/index.mjs";
import { ViteMinifyPlugin } from "file:///C:/Users/LJY/Project/vite-app-demo/client/node_modules/.pnpm/vite-plugin-minify@1.5.2_vite@4.1.1/node_modules/vite-plugin-minify/dist/index.js";
import { VitePWA } from "file:///C:/Users/LJY/Project/vite-app-demo/client/node_modules/.pnpm/vite-plugin-pwa@0.14.1_xp2zqafvd45jbxqxxvnpcv3lzm/node_modules/vite-plugin-pwa/dist/index.mjs";
import { ViteWebfontDownload } from "file:///C:/Users/LJY/Project/vite-app-demo/client/node_modules/.pnpm/vite-plugin-webfont-dl@3.6.0_vite@4.1.1/node_modules/vite-plugin-webfont-dl/dist/index.js";
import vue from "file:///C:/Users/LJY/Project/vite-app-demo/client/node_modules/.pnpm/@vitejs+plugin-vue@4.0.0_vite@4.1.1+vue@3.2.47/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import AutoImport from "file:///C:/Users/LJY/Project/vite-app-demo/client/node_modules/.pnpm/unplugin-auto-import@0.13.0/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///C:/Users/LJY/Project/vite-app-demo/client/node_modules/.pnpm/unplugin-vue-components@0.23.0_vue@3.2.47/node_modules/unplugin-vue-components/dist/vite.mjs";
import { SchemaOrgResolver, schemaAutoImports } from "file:///C:/Users/LJY/Project/vite-app-demo/client/node_modules/.pnpm/@vueuse+schema-org@2.1.1_hqvnh2wuzwgd3pyoriyxzrcbxy/node_modules/@vueuse/schema-org/dist/index.mjs";
import IconsResolver from "file:///C:/Users/LJY/Project/vite-app-demo/client/node_modules/.pnpm/unplugin-icons@0.15.2_@vue+compiler-sfc@3.2.47/node_modules/unplugin-icons/dist/resolver.mjs";
import Icons from "file:///C:/Users/LJY/Project/vite-app-demo/client/node_modules/.pnpm/unplugin-icons@0.15.2_@vue+compiler-sfc@3.2.47/node_modules/unplugin-icons/dist/vite.mjs";
import { FileSystemIconLoader } from "file:///C:/Users/LJY/Project/vite-app-demo/client/node_modules/.pnpm/unplugin-icons@0.15.2_@vue+compiler-sfc@3.2.47/node_modules/unplugin-icons/dist/loaders.mjs";
var __vite_injected_original_dirname = "C:\\Users\\LJY\\Project\\vite-app-demo\\client";
var vite_config_default = defineConfig({
  css: {
    devSourcemap: process.env.NPM_ENV === "development" ? true : false
  },
  optimizeDeps: {
    force: true
  },
  build: {
    modulePreload: true,
    sourcemap: process.env.NPM_ENV === "development" ? true : false,
    target: "esnext",
    manifest: true,
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        main: resolve(__vite_injected_original_dirname, "./index.html")
      },
      output: {
        compact: true,
        // manualChunks(id) {
        //   if (id.includes('node_modules')) {
        //     // return id.toString().split('node_modules/.pnpm/')[1].split('/')[0] // avoid stackoverflow
        //     return id.toString().split('node_modules/.pnpm/')[1].split('/')[2] // for simple app
        //   }
        // }, // 改用vite內建splitVendorChunkPlugin
        chunkFileNames: process.env.NPM_ENV === "development" ? "[format]-[name]-[hash].js" : "[hash].js"
      }
    }
  },
  plugins: [
    splitVendorChunkPlugin(),
    basicSsl(),
    process.env.NPM_ENV === "development" ? false : ViteMinifyPlugin({}),
    VitePWA({
      useCredentials: true,
      manifest: {
        name: process.env.npm_package_name,
        description: process.env.npm_package_name + " PWA",
        theme_color: "#00bd7e",
        scope: "./",
        start_url: "./",
        display: "standalone",
        icons: [
          {
            src: "./android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "./android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "./android-chrome-maskable-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable"
          },
          {
            src: "./android-chrome-maskable-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable"
          },
          {
            src: "./apple-touch-icon-60x60.png",
            sizes: "60x60",
            type: "image/png"
          },
          {
            src: "./apple-touch-icon-76x76.png",
            sizes: "76x76",
            type: "image/png"
          },
          {
            src: "./apple-touch-icon-120x120.png",
            sizes: "120x120",
            type: "image/png"
          },
          {
            src: "./apple-touch-icon-152x152.png",
            sizes: "152x152",
            type: "image/png"
          },
          {
            src: "./apple-touch-icon-180x180.png",
            sizes: "180x180",
            type: "image/png"
          },
          {
            src: "./apple-touch-icon.png",
            sizes: "180x180",
            type: "image/png"
          },
          {
            src: "./favicon-16x16.png",
            sizes: "16x16",
            type: "image/png"
          },
          {
            src: "./favicon-32x32.png",
            sizes: "32x32",
            type: "image/png"
          },
          {
            src: "./msapplication-icon-144x144.png",
            sizes: "144x144",
            type: "image/png"
          },
          {
            src: "./mstile-150x150.png",
            sizes: "150x150",
            type: "image/png"
          }
        ]
        // shortcuts: [
        //   {
        //     name: "Open About",
        //     short_name: "About",
        //     description: "Open the about page",
        //     url: "/about",
        //     icons: [{ src: "/App_icon192.png", sizes: "192x192" }],
        //   },
        //   {
        //     name: "Report issue",
        //     short_name: "Report",
        //     description: "Open the issue report page",
        //     url: "/report",
        //     icons: [{ src: "/App_icon192.png", sizes: "192x192" }],
        //   },
        // ],
      },
      registerType: "autoUpdate",
      workbox: {
        skipWaiting: true,
        clientsClaim: true,
        cleanupOutdatedCaches: true,
        inlineWorkboxRuntime: true,
        sourcemap: process.env.NPM_ENV === "development" ? true : false,
        globPatterns: ["**"],
        runtimeCaching: [
          // {
          //   urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
          //   handler: 'NetworkFirst'
          // },
          // {
          //   urlPattern: /.*\.js.*/,
          //   handler: 'NetworkFirst'
          // },
          // {
          //   urlPattern: /.*\.css.*/,
          //   handler: 'NetworkFirst'
          // },
          // {
          //   urlPattern: /.*\.html.*/,
          //   handler: 'NetworkFirst'
          // },
          {
            urlPattern: /.*/,
            handler: "NetworkFirst"
          }
        ]
      }
    }),
    // 有 race condition 的宣告要在PWA後呼叫
    ViteWebfontDownload(
      [
        "https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap"
      ],
      // https://fonts.google.com/share?selection.family=Source%20Sans%20Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900
      {
        injectAsStyleTag: false,
        minifyCss: process.env.NPM_ENV === "development" ? false : true,
        async: true,
        cache: true
        // node_modules\.pnpm\vite-plugin-webfont-dl@3.6.0_vite@4.0.4\node_modules\flat-cache\.cache\vite-plugin-webfont-dl
      }
    ),
    // 注意網路連線特別是IPv6租約期限
    vue({
      template: {
        compilerOptions: {
          delimiters: ["@{{", "}}"]
        }
      }
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/,
        // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/,
        // .vue
        /\.md$/
        // .md
      ],
      // global imports to register
      imports: [
        // auto-import schema-org composables
        {
          "@vueuse/schema-org": schemaAutoImports
        },
        // presets
        "vue",
        "vue-router"
        // 'vuex', // 以下按需引入
        // {
        //   // custom
        //   '@vueuse/core': [
        //     // named imports
        //     'useMouse', // import { useMouse } from '@vueuse/core',
        //     // alias
        //     ['useFetch', 'useMyFetch']
        //   ],
        //   axios: [
        //     // default imports
        //     ['default', 'axios']
        //   ]
        // }
      ],
      resolvers: [
        // (autoImportName) => {
        //   console.log(autoImportName) // 先查auto-import.d.ts再看runtime log
        // }
        IconsResolver({
          prefix: "Icon"
        })
      ],
      dts: "src/auto-import.d.ts",
      // 變更路徑需手動清除舊檔
      eslintrc: {
        enabled: true
      }
    }),
    Components({
      dirs: ["src"],
      deep: true,
      dts: "src/components.d.ts",
      // 變更路徑需手動清除舊檔
      resolvers: [
        // auto-import schema-org components
        SchemaOrgResolver(),
        (componentName) => {
          return {
            name: componentName,
            from: "flowbite-vue"
          };
        }
      ]
    }),
    Icons({
      // scale: 3, // a11y 最小要求 48x48 px
      customCollections: {
        // key as the collection name
        // a helper to load icons from the file system
        // files under `./assets/icons` with `.svg` extension will be loaded as it's file name
        // you can also provide a transform callback to change each icon (optional)
        "my-icons": FileSystemIconLoader(
          "./assets/icons"
          // , (svg) => svg.replace(/^<svg /, '<svg fill="currentColor" ')
        )
      },
      iconCustomizer(collection, icon, props) {
        if (collection === "mdi" && icon === "my-icons") {
          props.width = "3em";
          props.height = "3em";
        }
      }
    })
  ],
  base: "/" + process.env.npm_package_name + "/",
  publicDir: "public",
  resolve: {
    alias: {
      //resolve.alias
      "@": resolve(__vite_injected_original_dirname, "src"),
      "@assets": resolve(__vite_injected_original_dirname, "src/assets"),
      "@components": resolve(__vite_injected_original_dirname, "src/components"),
      "@images": resolve(__vite_injected_original_dirname, "src/assets/images"),
      "@views": resolve(__vite_injected_original_dirname, "src/views"),
      "@store": resolve(__vite_injected_original_dirname, "src/store")
    }
  },
  server: {
    https: true,
    open: true,
    port: 443,
    host: "localhost",
    headers: {
      "content-encoding": "br, deflate, gzip, identity"
    }
  },
  test: {
    coverage: {
      reporter: ["html", "json", "text"]
    },
    environment: "happy-dom",
    // or edge-runtime ???
    // exclude: ['cypress', 'lib', 'node_modules', 'docs'],
    exclude: ["node_modules"],
    globals: true
    // setupFiles: './src/App.tests.ts'
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxMSllcXFxcUHJvamVjdFxcXFx2aXRlLWFwcC1kZW1vXFxcXGNsaWVudFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcTEpZXFxcXFByb2plY3RcXFxcdml0ZS1hcHAtZGVtb1xcXFxjbGllbnRcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL0xKWS9Qcm9qZWN0L3ZpdGUtYXBwLWRlbW8vY2xpZW50L3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlc3RcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSB0eXBlcz1cInZpdGUvY2xpZW50XCIgLz5cclxuXHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZywgc3BsaXRWZW5kb3JDaHVua1BsdWdpbiB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJ1xyXG5pbXBvcnQgYmFzaWNTc2wgZnJvbSAnQHZpdGVqcy9wbHVnaW4tYmFzaWMtc3NsJ1xyXG5pbXBvcnQgeyBWaXRlTWluaWZ5UGx1Z2luIH0gZnJvbSAndml0ZS1wbHVnaW4tbWluaWZ5J1xyXG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSAndml0ZS1wbHVnaW4tcHdhJ1xyXG5pbXBvcnQgeyBWaXRlV2ViZm9udERvd25sb2FkIH0gZnJvbSAndml0ZS1wbHVnaW4td2ViZm9udC1kbCdcclxuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXHJcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXHJcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXHJcbmltcG9ydCB7IFNjaGVtYU9yZ1Jlc29sdmVyLCBzY2hlbWFBdXRvSW1wb3J0cyB9IGZyb20gJ0B2dWV1c2Uvc2NoZW1hLW9yZydcclxuaW1wb3J0IEljb25zUmVzb2x2ZXIgZnJvbSAndW5wbHVnaW4taWNvbnMvcmVzb2x2ZXInXHJcbmltcG9ydCBJY29ucyBmcm9tICd1bnBsdWdpbi1pY29ucy92aXRlJ1xyXG4vLyBsb2FkZXIgaGVscGVyc1xyXG5pbXBvcnQgeyBGaWxlU3lzdGVtSWNvbkxvYWRlciB9IGZyb20gJ3VucGx1Z2luLWljb25zL2xvYWRlcnMnXHJcblxyXG4vLyBjb25zb2xlLmxvZyhwcm9jZXNzLmVudikgLy8gZW52aXJvbm1lbnQgdmFyaWFibGVzIGxvZyBmb3Igbm9kZWpzXHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIGNzczoge1xyXG4gICAgZGV2U291cmNlbWFwOiBwcm9jZXNzLmVudi5OUE1fRU5WID09PSAnZGV2ZWxvcG1lbnQnID8gdHJ1ZSA6IGZhbHNlXHJcbiAgfSxcclxuICBvcHRpbWl6ZURlcHM6IHtcclxuICAgIGZvcmNlOiB0cnVlXHJcbiAgfSxcclxuICBidWlsZDoge1xyXG4gICAgbW9kdWxlUHJlbG9hZDogdHJ1ZSxcclxuICAgIHNvdXJjZW1hcDogcHJvY2Vzcy5lbnYuTlBNX0VOViA9PT0gJ2RldmVsb3BtZW50JyA/IHRydWUgOiBmYWxzZSxcclxuICAgIHRhcmdldDogJ2VzbmV4dCcsXHJcbiAgICBtYW5pZmVzdDogdHJ1ZSxcclxuICAgIGNzc0NvZGVTcGxpdDogdHJ1ZSxcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgaW5wdXQ6IHtcclxuICAgICAgICBtYWluOiByZXNvbHZlKF9fZGlybmFtZSwgJy4vaW5kZXguaHRtbCcpXHJcbiAgICAgIH0sXHJcbiAgICAgIG91dHB1dDoge1xyXG4gICAgICAgIGNvbXBhY3Q6IHRydWUsXHJcbiAgICAgICAgLy8gbWFudWFsQ2h1bmtzKGlkKSB7XHJcbiAgICAgICAgLy8gICBpZiAoaWQuaW5jbHVkZXMoJ25vZGVfbW9kdWxlcycpKSB7XHJcbiAgICAgICAgLy8gICAgIC8vIHJldHVybiBpZC50b1N0cmluZygpLnNwbGl0KCdub2RlX21vZHVsZXMvLnBucG0vJylbMV0uc3BsaXQoJy8nKVswXSAvLyBhdm9pZCBzdGFja292ZXJmbG93XHJcbiAgICAgICAgLy8gICAgIHJldHVybiBpZC50b1N0cmluZygpLnNwbGl0KCdub2RlX21vZHVsZXMvLnBucG0vJylbMV0uc3BsaXQoJy8nKVsyXSAvLyBmb3Igc2ltcGxlIGFwcFxyXG4gICAgICAgIC8vICAgfVxyXG4gICAgICAgIC8vIH0sIC8vIFx1NjUzOVx1NzUyOHZpdGVcdTUxNjdcdTVFRkFzcGxpdFZlbmRvckNodW5rUGx1Z2luXHJcbiAgICAgICAgY2h1bmtGaWxlTmFtZXM6XHJcbiAgICAgICAgICBwcm9jZXNzLmVudi5OUE1fRU5WID09PSAnZGV2ZWxvcG1lbnQnXHJcbiAgICAgICAgICAgID8gJ1tmb3JtYXRdLVtuYW1lXS1baGFzaF0uanMnXHJcbiAgICAgICAgICAgIDogJ1toYXNoXS5qcydcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcGx1Z2luczogW1xyXG4gICAgc3BsaXRWZW5kb3JDaHVua1BsdWdpbigpLFxyXG4gICAgYmFzaWNTc2woKSxcclxuICAgIHByb2Nlc3MuZW52Lk5QTV9FTlYgPT09ICdkZXZlbG9wbWVudCcgPyBmYWxzZSA6IFZpdGVNaW5pZnlQbHVnaW4oe30pLFxyXG4gICAgVml0ZVBXQSh7XHJcbiAgICAgIHVzZUNyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgICBtYW5pZmVzdDoge1xyXG4gICAgICAgIG5hbWU6IHByb2Nlc3MuZW52Lm5wbV9wYWNrYWdlX25hbWUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IHByb2Nlc3MuZW52Lm5wbV9wYWNrYWdlX25hbWUgKyAnIFBXQScsXHJcbiAgICAgICAgdGhlbWVfY29sb3I6ICcjMDBiZDdlJyxcclxuICAgICAgICBzY29wZTogJy4vJyxcclxuICAgICAgICBzdGFydF91cmw6ICcuLycsXHJcbiAgICAgICAgZGlzcGxheTogJ3N0YW5kYWxvbmUnLFxyXG4gICAgICAgIGljb25zOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHNyYzogJy4vYW5kcm9pZC1jaHJvbWUtMTkyeDE5Mi5wbmcnLFxyXG4gICAgICAgICAgICBzaXplczogJzE5MngxOTInLFxyXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgc3JjOiAnLi9hbmRyb2lkLWNocm9tZS01MTJ4NTEyLnBuZycsXHJcbiAgICAgICAgICAgIHNpemVzOiAnNTEyeDUxMicsXHJcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzcmM6ICcuL2FuZHJvaWQtY2hyb21lLW1hc2thYmxlLTE5MngxOTIucG5nJyxcclxuICAgICAgICAgICAgc2l6ZXM6ICcxOTJ4MTkyJyxcclxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXHJcbiAgICAgICAgICAgIHB1cnBvc2U6ICdtYXNrYWJsZSdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHNyYzogJy4vYW5kcm9pZC1jaHJvbWUtbWFza2FibGUtNTEyeDUxMi5wbmcnLFxyXG4gICAgICAgICAgICBzaXplczogJzUxMng1MTInLFxyXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcclxuICAgICAgICAgICAgcHVycG9zZTogJ21hc2thYmxlJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgc3JjOiAnLi9hcHBsZS10b3VjaC1pY29uLTYweDYwLnBuZycsXHJcbiAgICAgICAgICAgIHNpemVzOiAnNjB4NjAnLFxyXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgc3JjOiAnLi9hcHBsZS10b3VjaC1pY29uLTc2eDc2LnBuZycsXHJcbiAgICAgICAgICAgIHNpemVzOiAnNzZ4NzYnLFxyXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgc3JjOiAnLi9hcHBsZS10b3VjaC1pY29uLTEyMHgxMjAucG5nJyxcclxuICAgICAgICAgICAgc2l6ZXM6ICcxMjB4MTIwJyxcclxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZydcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHNyYzogJy4vYXBwbGUtdG91Y2gtaWNvbi0xNTJ4MTUyLnBuZycsXHJcbiAgICAgICAgICAgIHNpemVzOiAnMTUyeDE1MicsXHJcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzcmM6ICcuL2FwcGxlLXRvdWNoLWljb24tMTgweDE4MC5wbmcnLFxyXG4gICAgICAgICAgICBzaXplczogJzE4MHgxODAnLFxyXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgc3JjOiAnLi9hcHBsZS10b3VjaC1pY29uLnBuZycsXHJcbiAgICAgICAgICAgIHNpemVzOiAnMTgweDE4MCcsXHJcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzcmM6ICcuL2Zhdmljb24tMTZ4MTYucG5nJyxcclxuICAgICAgICAgICAgc2l6ZXM6ICcxNngxNicsXHJcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzcmM6ICcuL2Zhdmljb24tMzJ4MzIucG5nJyxcclxuICAgICAgICAgICAgc2l6ZXM6ICczMngzMicsXHJcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzcmM6ICcuL21zYXBwbGljYXRpb24taWNvbi0xNDR4MTQ0LnBuZycsXHJcbiAgICAgICAgICAgIHNpemVzOiAnMTQ0eDE0NCcsXHJcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzcmM6ICcuL21zdGlsZS0xNTB4MTUwLnBuZycsXHJcbiAgICAgICAgICAgIHNpemVzOiAnMTUweDE1MCcsXHJcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICAgIC8vIHNob3J0Y3V0czogW1xyXG4gICAgICAgIC8vICAge1xyXG4gICAgICAgIC8vICAgICBuYW1lOiBcIk9wZW4gQWJvdXRcIixcclxuICAgICAgICAvLyAgICAgc2hvcnRfbmFtZTogXCJBYm91dFwiLFxyXG4gICAgICAgIC8vICAgICBkZXNjcmlwdGlvbjogXCJPcGVuIHRoZSBhYm91dCBwYWdlXCIsXHJcbiAgICAgICAgLy8gICAgIHVybDogXCIvYWJvdXRcIixcclxuICAgICAgICAvLyAgICAgaWNvbnM6IFt7IHNyYzogXCIvQXBwX2ljb24xOTIucG5nXCIsIHNpemVzOiBcIjE5MngxOTJcIiB9XSxcclxuICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgLy8gICB7XHJcbiAgICAgICAgLy8gICAgIG5hbWU6IFwiUmVwb3J0IGlzc3VlXCIsXHJcbiAgICAgICAgLy8gICAgIHNob3J0X25hbWU6IFwiUmVwb3J0XCIsXHJcbiAgICAgICAgLy8gICAgIGRlc2NyaXB0aW9uOiBcIk9wZW4gdGhlIGlzc3VlIHJlcG9ydCBwYWdlXCIsXHJcbiAgICAgICAgLy8gICAgIHVybDogXCIvcmVwb3J0XCIsXHJcbiAgICAgICAgLy8gICAgIGljb25zOiBbeyBzcmM6IFwiL0FwcF9pY29uMTkyLnBuZ1wiLCBzaXplczogXCIxOTJ4MTkyXCIgfV0sXHJcbiAgICAgICAgLy8gICB9LFxyXG4gICAgICAgIC8vIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHJlZ2lzdGVyVHlwZTogJ2F1dG9VcGRhdGUnLFxyXG4gICAgICB3b3JrYm94OiB7XHJcbiAgICAgICAgc2tpcFdhaXRpbmc6IHRydWUsXHJcbiAgICAgICAgY2xpZW50c0NsYWltOiB0cnVlLFxyXG4gICAgICAgIGNsZWFudXBPdXRkYXRlZENhY2hlczogdHJ1ZSxcclxuICAgICAgICBpbmxpbmVXb3JrYm94UnVudGltZTogdHJ1ZSxcclxuICAgICAgICBzb3VyY2VtYXA6IHByb2Nlc3MuZW52Lk5QTV9FTlYgPT09ICdkZXZlbG9wbWVudCcgPyB0cnVlIDogZmFsc2UsXHJcbiAgICAgICAgZ2xvYlBhdHRlcm5zOiBbJyoqJ10sXHJcbiAgICAgICAgcnVudGltZUNhY2hpbmc6IFtcclxuICAgICAgICAgIC8vIHtcclxuICAgICAgICAgIC8vICAgdXJsUGF0dGVybjogL1xcLig/OnBuZ3xqcGd8anBlZ3xzdmcpJC8sXHJcbiAgICAgICAgICAvLyAgIGhhbmRsZXI6ICdOZXR3b3JrRmlyc3QnXHJcbiAgICAgICAgICAvLyB9LFxyXG4gICAgICAgICAgLy8ge1xyXG4gICAgICAgICAgLy8gICB1cmxQYXR0ZXJuOiAvLipcXC5qcy4qLyxcclxuICAgICAgICAgIC8vICAgaGFuZGxlcjogJ05ldHdvcmtGaXJzdCdcclxuICAgICAgICAgIC8vIH0sXHJcbiAgICAgICAgICAvLyB7XHJcbiAgICAgICAgICAvLyAgIHVybFBhdHRlcm46IC8uKlxcLmNzcy4qLyxcclxuICAgICAgICAgIC8vICAgaGFuZGxlcjogJ05ldHdvcmtGaXJzdCdcclxuICAgICAgICAgIC8vIH0sXHJcbiAgICAgICAgICAvLyB7XHJcbiAgICAgICAgICAvLyAgIHVybFBhdHRlcm46IC8uKlxcLmh0bWwuKi8sXHJcbiAgICAgICAgICAvLyAgIGhhbmRsZXI6ICdOZXR3b3JrRmlyc3QnXHJcbiAgICAgICAgICAvLyB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB1cmxQYXR0ZXJuOiAvLiovLFxyXG4gICAgICAgICAgICBoYW5kbGVyOiAnTmV0d29ya0ZpcnN0J1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfVxyXG4gICAgfSksIC8vIFx1NjcwOSByYWNlIGNvbmRpdGlvbiBcdTc2ODRcdTVCQTNcdTU0NEFcdTg5ODFcdTU3MjhQV0FcdTVGOENcdTU0N0NcdTUzRUJcclxuICAgIFZpdGVXZWJmb250RG93bmxvYWQoXHJcbiAgICAgIFtcclxuICAgICAgICAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Tb3VyY2UrU2FucytQcm86aXRhbCx3Z2h0QDAsMjAwOzAsMzAwOzAsNDAwOzAsNjAwOzAsNzAwOzAsOTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNjAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCdcclxuICAgICAgXSwgLy8gaHR0cHM6Ly9mb250cy5nb29nbGUuY29tL3NoYXJlP3NlbGVjdGlvbi5mYW1pbHk9U291cmNlJTIwU2FucyUyMFBybzppdGFsLHdnaHRAMCwyMDA7MCwzMDA7MCw0MDA7MCw2MDA7MCw3MDA7MCw5MDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw2MDA7MSw3MDA7MSw5MDBcclxuICAgICAge1xyXG4gICAgICAgIGluamVjdEFzU3R5bGVUYWc6IGZhbHNlLFxyXG4gICAgICAgIG1pbmlmeUNzczogcHJvY2Vzcy5lbnYuTlBNX0VOViA9PT0gJ2RldmVsb3BtZW50JyA/IGZhbHNlIDogdHJ1ZSxcclxuICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICBjYWNoZTogdHJ1ZSAvLyBub2RlX21vZHVsZXNcXC5wbnBtXFx2aXRlLXBsdWdpbi13ZWJmb250LWRsQDMuNi4wX3ZpdGVANC4wLjRcXG5vZGVfbW9kdWxlc1xcZmxhdC1jYWNoZVxcLmNhY2hlXFx2aXRlLXBsdWdpbi13ZWJmb250LWRsXHJcbiAgICAgIH1cclxuICAgICksIC8vIFx1NkNFOFx1NjEwRlx1N0RCMlx1OERFRlx1OTAyM1x1N0REQVx1NzI3OVx1NTIyNVx1NjYyRklQdjZcdTc5REZcdTdEMDRcdTY3MUZcdTk2NTBcclxuXHJcbiAgICB2dWUoe1xyXG4gICAgICB0ZW1wbGF0ZToge1xyXG4gICAgICAgIGNvbXBpbGVyT3B0aW9uczoge1xyXG4gICAgICAgICAgZGVsaW1pdGVyczogWydAe3snLCAnfX0nXVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSksXHJcbiAgICBBdXRvSW1wb3J0KHtcclxuICAgICAgaW5jbHVkZTogW1xyXG4gICAgICAgIC9cXC5bdGpdc3g/JC8sIC8vIC50cywgLnRzeCwgLmpzLCAuanN4XHJcbiAgICAgICAgL1xcLnZ1ZSQvLFxyXG4gICAgICAgIC9cXC52dWVcXD92dWUvLCAvLyAudnVlXHJcbiAgICAgICAgL1xcLm1kJC8gLy8gLm1kXHJcbiAgICAgIF0sXHJcbiAgICAgIC8vIGdsb2JhbCBpbXBvcnRzIHRvIHJlZ2lzdGVyXHJcbiAgICAgIGltcG9ydHM6IFtcclxuICAgICAgICAvLyBhdXRvLWltcG9ydCBzY2hlbWEtb3JnIGNvbXBvc2FibGVzXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgJ0B2dWV1c2Uvc2NoZW1hLW9yZyc6IHNjaGVtYUF1dG9JbXBvcnRzXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBwcmVzZXRzXHJcbiAgICAgICAgJ3Z1ZScsXHJcbiAgICAgICAgJ3Z1ZS1yb3V0ZXInXHJcbiAgICAgICAgLy8gJ3Z1ZXgnLCAvLyBcdTRFRTVcdTRFMEJcdTYzMDlcdTk3MDBcdTVGMTVcdTUxNjVcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAvLyBjdXN0b21cclxuICAgICAgICAvLyAgICdAdnVldXNlL2NvcmUnOiBbXHJcbiAgICAgICAgLy8gICAgIC8vIG5hbWVkIGltcG9ydHNcclxuICAgICAgICAvLyAgICAgJ3VzZU1vdXNlJywgLy8gaW1wb3J0IHsgdXNlTW91c2UgfSBmcm9tICdAdnVldXNlL2NvcmUnLFxyXG4gICAgICAgIC8vICAgICAvLyBhbGlhc1xyXG4gICAgICAgIC8vICAgICBbJ3VzZUZldGNoJywgJ3VzZU15RmV0Y2gnXVxyXG4gICAgICAgIC8vICAgXSxcclxuICAgICAgICAvLyAgIGF4aW9zOiBbXHJcbiAgICAgICAgLy8gICAgIC8vIGRlZmF1bHQgaW1wb3J0c1xyXG4gICAgICAgIC8vICAgICBbJ2RlZmF1bHQnLCAnYXhpb3MnXVxyXG4gICAgICAgIC8vICAgXVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgXSxcclxuICAgICAgcmVzb2x2ZXJzOiBbXHJcbiAgICAgICAgLy8gKGF1dG9JbXBvcnROYW1lKSA9PiB7XHJcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZyhhdXRvSW1wb3J0TmFtZSkgLy8gXHU1MTQ4XHU2N0U1YXV0by1pbXBvcnQuZC50c1x1NTE4RFx1NzcwQnJ1bnRpbWUgbG9nXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIEljb25zUmVzb2x2ZXIoe1xyXG4gICAgICAgICAgcHJlZml4OiAnSWNvbidcclxuICAgICAgICB9KVxyXG4gICAgICBdLFxyXG4gICAgICBkdHM6ICdzcmMvYXV0by1pbXBvcnQuZC50cycsIC8vIFx1OEI4QVx1NjZGNFx1OERFRlx1NUY5MVx1OTcwMFx1NjI0Qlx1NTJENVx1NkUwNVx1OTY2NFx1ODIwQVx1NkE5NFxyXG4gICAgICBlc2xpbnRyYzoge1xyXG4gICAgICAgIGVuYWJsZWQ6IHRydWVcclxuICAgICAgfVxyXG4gICAgfSksXHJcbiAgICBDb21wb25lbnRzKHtcclxuICAgICAgZGlyczogWydzcmMnXSxcclxuICAgICAgZGVlcDogdHJ1ZSxcclxuICAgICAgZHRzOiAnc3JjL2NvbXBvbmVudHMuZC50cycsIC8vIFx1OEI4QVx1NjZGNFx1OERFRlx1NUY5MVx1OTcwMFx1NjI0Qlx1NTJENVx1NkUwNVx1OTY2NFx1ODIwQVx1NkE5NFxyXG4gICAgICByZXNvbHZlcnM6IFtcclxuICAgICAgICAvLyBhdXRvLWltcG9ydCBzY2hlbWEtb3JnIGNvbXBvbmVudHNcclxuICAgICAgICBTY2hlbWFPcmdSZXNvbHZlcigpLFxyXG4gICAgICAgIChjb21wb25lbnROYW1lKSA9PiB7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjb21wb25lbnROYW1lKSAvLyBcdTUxNDhcdTY3RTVjb21wb25lbnRzLmQudHNcdTUxOERcdTc3MEJydW50aW1lIGxvZ1xyXG4gICAgICAgICAgLy8gd2hlcmUgYGNvbXBvbmVudE5hbWVgIGlzIGFsd2F5cyBDYXBpdGFsQ2FzZVxyXG4gICAgICAgICAgLy8gaWYgKGNvbXBvbmVudE5hbWUuc3RhcnRzV2l0aCgnRHJvcGRvd24nKSkgLy8gXHU2MzA5XHU5NzAwXHU5MDRFXHU2RkZFXHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuYW1lOiBjb21wb25lbnROYW1lLFxyXG4gICAgICAgICAgICBmcm9tOiAnZmxvd2JpdGUtdnVlJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSksXHJcbiAgICBJY29ucyh7XHJcbiAgICAgIC8vIHNjYWxlOiAzLCAvLyBhMTF5IFx1NjcwMFx1NUMwRlx1ODk4MVx1NkM0MiA0OHg0OCBweFxyXG4gICAgICBjdXN0b21Db2xsZWN0aW9uczoge1xyXG4gICAgICAgIC8vIGtleSBhcyB0aGUgY29sbGVjdGlvbiBuYW1lXHJcbiAgICAgICAgLy8gYSBoZWxwZXIgdG8gbG9hZCBpY29ucyBmcm9tIHRoZSBmaWxlIHN5c3RlbVxyXG4gICAgICAgIC8vIGZpbGVzIHVuZGVyIGAuL2Fzc2V0cy9pY29uc2Agd2l0aCBgLnN2Z2AgZXh0ZW5zaW9uIHdpbGwgYmUgbG9hZGVkIGFzIGl0J3MgZmlsZSBuYW1lXHJcbiAgICAgICAgLy8geW91IGNhbiBhbHNvIHByb3ZpZGUgYSB0cmFuc2Zvcm0gY2FsbGJhY2sgdG8gY2hhbmdlIGVhY2ggaWNvbiAob3B0aW9uYWwpXHJcbiAgICAgICAgJ215LWljb25zJzogRmlsZVN5c3RlbUljb25Mb2FkZXIoXHJcbiAgICAgICAgICAnLi9hc3NldHMvaWNvbnMnXHJcbiAgICAgICAgICAvLyAsIChzdmcpID0+IHN2Zy5yZXBsYWNlKC9ePHN2ZyAvLCAnPHN2ZyBmaWxsPVwiY3VycmVudENvbG9yXCIgJylcclxuICAgICAgICApXHJcbiAgICAgIH0sXHJcbiAgICAgIGljb25DdXN0b21pemVyKGNvbGxlY3Rpb24sIGljb24sIHByb3BzKSB7XHJcbiAgICAgICAgLy8gY3VzdG9taXplIHRoaXMgQGljb25pZnkgaWNvbiBpbiB0aGlzIGNvbGxlY3Rpb25cclxuICAgICAgICBpZiAoY29sbGVjdGlvbiA9PT0gJ21kaScgJiYgaWNvbiA9PT0gJ215LWljb25zJykge1xyXG4gICAgICAgICAgcHJvcHMud2lkdGggPSAnM2VtJ1xyXG4gICAgICAgICAgcHJvcHMuaGVpZ2h0ID0gJzNlbSdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgXSxcclxuICBiYXNlOiAnLycgKyBwcm9jZXNzLmVudi5ucG1fcGFja2FnZV9uYW1lICsgJy8nLFxyXG4gIHB1YmxpY0RpcjogJ3B1YmxpYycsXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgLy9yZXNvbHZlLmFsaWFzXHJcbiAgICAgICdAJzogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnKSxcclxuICAgICAgJ0Bhc3NldHMnOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9hc3NldHMnKSxcclxuICAgICAgJ0Bjb21wb25lbnRzJzogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvY29tcG9uZW50cycpLFxyXG4gICAgICAnQGltYWdlcyc6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2Fzc2V0cy9pbWFnZXMnKSxcclxuICAgICAgJ0B2aWV3cyc6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL3ZpZXdzJyksXHJcbiAgICAgICdAc3RvcmUnOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9zdG9yZScpXHJcbiAgICB9XHJcbiAgfSxcclxuICBzZXJ2ZXI6IHtcclxuICAgIGh0dHBzOiB0cnVlLFxyXG4gICAgb3BlbjogdHJ1ZSxcclxuICAgIHBvcnQ6IDQ0MyxcclxuICAgIGhvc3Q6ICdsb2NhbGhvc3QnLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAnY29udGVudC1lbmNvZGluZyc6ICdiciwgZGVmbGF0ZSwgZ3ppcCwgaWRlbnRpdHknXHJcbiAgICB9XHJcbiAgfSxcclxuICB0ZXN0OiB7XHJcbiAgICBjb3ZlcmFnZToge1xyXG4gICAgICByZXBvcnRlcjogWydodG1sJywgJ2pzb24nLCAndGV4dCddXHJcbiAgICB9LFxyXG4gICAgZW52aXJvbm1lbnQ6ICdoYXBweS1kb20nLCAvLyBvciBlZGdlLXJ1bnRpbWUgPz8/XHJcbiAgICAvLyBleGNsdWRlOiBbJ2N5cHJlc3MnLCAnbGliJywgJ25vZGVfbW9kdWxlcycsICdkb2NzJ10sXHJcbiAgICBleGNsdWRlOiBbJ25vZGVfbW9kdWxlcyddLFxyXG4gICAgZ2xvYmFsczogdHJ1ZVxyXG4gICAgLy8gc2V0dXBGaWxlczogJy4vc3JjL0FwcC50ZXN0cy50cydcclxuICB9XHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFHQSxTQUFTLGNBQWMsOEJBQThCO0FBQ3JELFNBQVMsZUFBZTtBQUN4QixPQUFPLGNBQWM7QUFDckIsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyxlQUFlO0FBQ3hCLFNBQVMsMkJBQTJCO0FBQ3BDLE9BQU8sU0FBUztBQUNoQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLG1CQUFtQix5QkFBeUI7QUFDckQsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxXQUFXO0FBRWxCLFNBQVMsNEJBQTRCO0FBaEJyQyxJQUFNLG1DQUFtQztBQXFCekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsS0FBSztBQUFBLElBQ0gsY0FBYyxRQUFRLElBQUksWUFBWSxnQkFBZ0IsT0FBTztBQUFBLEVBQy9EO0FBQUEsRUFDQSxjQUFjO0FBQUEsSUFDWixPQUFPO0FBQUEsRUFDVDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsZUFBZTtBQUFBLElBQ2YsV0FBVyxRQUFRLElBQUksWUFBWSxnQkFBZ0IsT0FBTztBQUFBLElBQzFELFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxJQUNkLGVBQWU7QUFBQSxNQUNiLE9BQU87QUFBQSxRQUNMLE1BQU0sUUFBUSxrQ0FBVyxjQUFjO0FBQUEsTUFDekM7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOLFNBQVM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQU9ULGdCQUNFLFFBQVEsSUFBSSxZQUFZLGdCQUNwQiw4QkFDQTtBQUFBLE1BQ1I7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsdUJBQXVCO0FBQUEsSUFDdkIsU0FBUztBQUFBLElBQ1QsUUFBUSxJQUFJLFlBQVksZ0JBQWdCLFFBQVEsaUJBQWlCLENBQUMsQ0FBQztBQUFBLElBQ25FLFFBQVE7QUFBQSxNQUNOLGdCQUFnQjtBQUFBLE1BQ2hCLFVBQVU7QUFBQSxRQUNSLE1BQU0sUUFBUSxJQUFJO0FBQUEsUUFDbEIsYUFBYSxRQUFRLElBQUksbUJBQW1CO0FBQUEsUUFDNUMsYUFBYTtBQUFBLFFBQ2IsT0FBTztBQUFBLFFBQ1AsV0FBVztBQUFBLFFBQ1gsU0FBUztBQUFBLFFBQ1QsT0FBTztBQUFBLFVBQ0w7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsVUFDWDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQSxVQUNYO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFVBQ1I7QUFBQSxRQUNGO0FB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
