const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {
    it('should set the addresses', async () => {
        await browser.url(`/`)

        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');

        const rideTypeOption = await $('//div[contains(text(), "Fastest")]')
        await rideTypeOption.click()
        // add a pause to see that the input was filled
        await browser.pause(10000);

        // Test: if the "Call a taxi" button appears, then the addresses are set
        const callATaxiButton = await $('//button[contains(text(), "Call a taxi")]');
        await expect(callATaxiButton).toBeDisplayed();

    })
})

