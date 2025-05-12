export const config: WebdriverIO.Config = {
    runner: 'local',
    tsConfigPath: './tsconfig.json',
    specs: ['./test/specs/**/*.ts'],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        browserName: 'chrome',
        "goog:chromeOptions": {
            args: ['--headless']
        }
    }],
    logLevel: 'error',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    hostname: 'localhost',
    port: 4444,
    path: '/wd/hub',
}
