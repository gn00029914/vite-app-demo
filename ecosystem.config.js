module.exports = {
  apps: [{
    name: "vite-app-demo",
    cwd: "./client/",
    script: "./client/node_modules/vite/bin/vite.js",
    env_production: {
      NODE_ENV: "production"
    },
    env: {
      NODE_ENV: "development"
    },
    log_date_format: "YYYY-MM-DD HH:mm Z"
  }, {
    name: "nestjs-server-demo",
    cwd: "./server/",
    script: "./server/dist/main.js",
    watch: true,
    log_date_format: "YYYY-MM-DD HH:mm Z"
  }]
}
