const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {
    it('should set the addresses', async () => {
        await browser.url(`/`)

        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');

        // Test: if the "Call a taxi" button appears, then the addresses are set
        const callATaxiButton = await $('//button[contains(text(), "Call a taxi")]');
        await expect(callATaxiButton).toBeDisplayed();

        const supportiveOption = await $('//div[contains(text(), "Supportive")]')
        await expect(supportiveOption).ToBeClickable()
        //await supportiveOption.click()

    })
})

