// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage
module.exports = {
    'login e2e tests': function(browser) {
        // automatically uses dev Server port from /config.index.js
        // default: http://localhost:8080
        // see nightwatch.conf.js
        const devServer = browser.globals.devServerURL
        const page = '.page-customer-info'

        browser
            .url(devServer + '/customer/23')
            .waitForElementVisible(page, 3000)
            .closeWindow()
    }
}
