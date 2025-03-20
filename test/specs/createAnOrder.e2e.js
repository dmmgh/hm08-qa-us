const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {
    it('should set the addresses', async () => {
        await browser.url(`/`);

        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');

        const callATaxiButton = await $('//button[contains(text(), "Call a taxi")]');
        await expect(callATaxiButton).toBeDisplayed();
        await callATaxiButton.click();

        // Test: if the "Supportive" option exists (displayed) after clicking the "Call a taxi" button and clickable
        const supportiveOption = await $('//div[contains(text(), "Supportive")]')
        await expect(supportiveOption).toBeDisplayed();
        await supportiveOption.click();

    })
})

