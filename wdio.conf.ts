export const config: WebdriverIO.Config = {
  runner: "local",
  tsConfigPath: "./tsconfig.json",
  specs: ["./test/specs/**/*.ts"],
  exclude: [],
  maxInstances: 10,
  capabilities: [
    {
      browserName: "chrome",
      "wdio:enforceWebDriverClassic": true,
      "goog:chromeOptions": {
        args: ["disable-infobars"],
        mobileEmulation: {
          deviceMetrics: {
            width: 375,
            height: 812,
            pixelRatio: 3,
          },
          userAgent:
            "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/17.4 Mobile/15A372 Safari/604.1",
        },
      },
    },
    {
      browserName: "chrome",
      "wdio:enforceWebDriverClassic": false,
      "goog:chromeOptions": {
        args: ["disable-infobars"],
        mobileEmulation: {
          deviceMetrics: {
            width: 375,
            height: 812,
            pixelRatio: 3,
          },
          userAgent:
            "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/17.4 Mobile/15A372 Safari/604.1",
        },
      },
    },
  ],
  logLevel: "debug",
  bail: 0,
  connectionRetryTimeout: 20_000,
  connectionRetryCount: 0,
  framework: "mocha",
  // Uncomment if you want to use Docker selenium
  // hostname: "localhost",
  // waitforTimeout: 30_000,
  // port: 4444,
  // path: "/wd/hub",
};
