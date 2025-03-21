const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {
    it('should fill in the phone number', async () => {

        await browser.url(`/`);

        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');

        // Test: if the "Supportive" option exists (displayed) after clicking the "Call a taxi" button
        const supportiveOption = await $('//div[contains(text(), "Supportive")]');
        await expect(supportiveOption).toBeDisplayed();

        // Test: if the "Supportive" option is clickable
        const supportiveButton = await $('//div[@class="tcard"]//div[contains(text(), "Supportive")]');
        await supportiveButton.click();

    })
})

