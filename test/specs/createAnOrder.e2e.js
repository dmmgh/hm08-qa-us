const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {
    it('should set the addresses', async () => {
        await browser.url(`/`)


        const fromField = await $('#from');

        // wait for 10 seconds an element to not exist on the page
        // await fromField.waitForExist({timeout: 10000, reverse: true});
                // wait for 10 seconds an element to be visible on the page
        	await fromField.waitForDisplayed();
        // {timeout: 10000}wait for 10 seconds an element to be clickable on the page
        // await fromField.waitForClickable({timeout: 10000});

        await fromField.setValue('East 2nd Street, 601');


        
        await browser.pause(10000);
        //const addressFrom = await $('#from')
        await expect(fromField).toHaveText('East 2nd Street, 601')

    })

})

