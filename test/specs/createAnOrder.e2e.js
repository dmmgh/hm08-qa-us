const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {
    it('should fill in the phone number', async () => {

        await browser.url(`/`);
        const fromField = $('#from');
        fromField.setValue('East 2nd Street, 601');
        const toField = await $('#to');
        await toField.setValue('1300 1st St');

        const callATaxiButton = await $('//button[contains(text(), "Call a taxi")]');
        await callATaxiButton.click();

        // Test: if the "Supportive" option exists (displayed) after clicking the "Call a taxi" button
        const supportiveOption = await $('//div[contains(text(), "Supportive")]');
        await expect(supportiveOption).toBeDisplayed();

        // Test: if the "Supportive" option is clickable
        const supportiveButton = await $('//div[@class="tcard"]//div[contains(text(), "Supportive")]');
        await supportiveButton.click();

    })
})

