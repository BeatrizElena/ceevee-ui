module.exports = {
  test_page: 'tests/index.html?hidepassed',
  disable_watching: true,
  tap_quiet_logs: true,
  parallel: 1,
  launch_in_ci: [
    'Chrome',
    'Firefox'
  ],
  launch_in_dev: [
    'Chrome',
    'Firefox'
  ],
  browser_args: {
    Chrome: {
      mode: 'ci',
      args: [
        // --no-sandbox is needed when running Chrome inside a container
        process.env.TRAVIS ? '--no-sandbox' : null,
        '--disable-gpu',
        '--headless',
        '--remote-debugging-port=0',
        '--window-size=1440,900'
      ].filter(Boolean)
    },
    Firefox: [
      '-headless',
      '--window-size=1440,900'
    ]
  }
};
