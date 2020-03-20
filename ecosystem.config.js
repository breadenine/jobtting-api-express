module.exports = {
  apps: [
    {
      name: 'app',
      script: 'npm run start',
      instances: 0,
      exec_mode: 'cluster'
    }
  ]
}
