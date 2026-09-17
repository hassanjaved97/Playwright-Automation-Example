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









})