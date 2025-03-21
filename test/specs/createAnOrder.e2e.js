const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {
    it('should fill in the phone number, at first should open phone number modal', async () => {

        await browser.url(`/`);

        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');

        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();

        // Test: if the phone number modal opened
        const pnoneNumberModal = await $(page.phoneNumberModal);
        await expect(pnoneNumberModal).toBeExisting();

    })
})

