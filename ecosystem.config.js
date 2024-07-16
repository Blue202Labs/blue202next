module.exports = {
  apps : [{
    name   : "blue202-website",
    script : "npm run start",
    env_production: {
      NODE_ENV: "production"
   },
  }]
}
