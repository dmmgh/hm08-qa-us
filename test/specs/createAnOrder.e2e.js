const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {
    it('should set the addresses', async () => {
        await browser.url(`/`)


        const fromField = await $('#from');
        await fromField.setValue('East 2nd Street, 601');
        const toField = await $('#to');
        await toField.setValue('1300 1st St');

        // Test: if the "Call a taxi" button appears, then the addresses are set
        const callATaxiButton = await $('//button[contains(text(), "Call a taxi")]');
        await expect(callATaxiButton).toBeDisplayed();

    }),
    it('should set the addresses', async () => {
        await browser.url(`/`)


        const fromField = await $('#from');
        await fromField.setValue('East 2nd Street, 601');
        const toField = await $('#to');
        await toField.setValue('1300 1st St');

        // Test: if the "Call a taxi" button appears, then the addresses are set
        const callATaxiButton = await $('//button[contains(text(), "Call a taxi")]');
        await expect(callATaxiButton).toBeDisplayed();

    })
})

