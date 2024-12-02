module.exports = {
  apps: [{
    name: "vite-app-demo",
    cwd: "./client/",
    script: "./node_modules/vite/bin/vite.js --config ./vite.config.mts",
    node_args: '--require jiti/register',
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
    script: "jiti ./dist/main.js",
    node_args: "--expose-gc",
    exec_mode: "cluster",
    watch: true,
    log_date_format: "YYYY-MM-DD HH:mm Z"
  } //todo admin, mysql, nginx... via "exec_interpreter" configurations
  ]
}
