const {test,expect} = require ('@playwright/test')

test ("Popup validations", async ({page})=>

    {


        await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

        // Forward & Backward 

        // await page.goto ("https://google.com")
        // await page.goBack();
        // await page.goForward();
        // await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

        // Hide & Show

        await expect (page.locator("#displayed-text")).toBeVisible(); 
        await page.locator("#hide-textbox").click();
        await expect (page.locator("#displayed-text")).toBeHidden();

        page.on('dialog', dialog => dialog.accept()); // Accepted Dialog
        // // page.on('dialog', dialog => dialog.dismiss()); // Cancel Dialog

        await page.locator ("#confirmbtn").click();
        await page.locator("#mousehover").hover();

        //frames
        const framePage = page.frameLocator("#courses-iframe");
        await framePage.locator();


        //

        const framepage = page.frameLocator("#courses-iframe");
        framePage.locator("");


})

test ("Screenshot & Visual comparison ", async ({page})=>

    {

        await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
        await expect (page.locator("#displayed-text")).toBeVisible(); 
        await page.locator("#displayed-text").screenshot({path: 'Display text partial.png'})
        await page.screenshot({path: 'display text full.png'});
        await page.locator("#hide-textbox").click();
        await expect (page.locator("#displayed-text")).toBeHidden();
        
    
    })

// Screenshot - Store -> Screenshot ->

test ('visual', async ({page})=>

    {

        await page.goto("https://www.google.com/");
        expect (await page.screenshot ()).toMatchSnapshot('google.png');


    })

test.only ('UI test', async ({page})=>

        {
        
        await page.goto("https://www.google.com/");
        // await expect (page.locator("#displayed-text")).toBeVisible(); 
        // await page.screenshot({path : 'Visiblefield.png'});
        await page.locator("#displayed-text").screenshot({path: 'partialfiled.png'});
        // await page.locator("#hide-textbox").click();
        // await expect (page.locator("#displayed-text")).toBeHidden();

        expect (await page.screenshot()).toMatchSnapshot('FirstGoogleLanlanding.png')




        })