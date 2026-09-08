const {test, expect} = require ('@playwright/test');
const { text } = require('node:stream/consumers');

test('Browser Context Playwright test', async ({browser})=>

{

const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://fnint.com");
console.log(await page.title());
await expect(page).toHaveTitle("FutureNow Technologies");


});

test('Page Playwright test', async ({page})=>

{


await page.goto("https://google.com");
console.log(await page.title());
await expect(page).toHaveTitle("Google");



});

test ('test case 1', async ({page})=>

    {
        const userName = page.locator('input#username');
        const signIn = page.locator('input#signInBtn');
        const pass = page.locator('input#password');
        const cardTitles = page.locator(".card-body a");
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        console.log(await page.title());
        // Css xpath
        await userName.fill("Umair");
        await pass.fill("Learning@830$3mK2");
        await signIn.click();
        
        console.log(await page.locator("[style*='block']").textContent());
        await expect(page.locator("[style*='block']")).toContainText('Incorrect');
       // type - fill

        await userName.fill("");
        await userName.fill("rahulshettyacademy");

        await Promise.all(

    [    
        //page.waitForNavigation(),
        //await signIn.click(),

    ]
        );

        
        // console.log (await cardTitles.nth(0).textContent());
        // await expect(await cardTitles.nth(0)).toContainText('iphone X');
        await page.waitForLoadState('Networkidle');
        const allTitles = await cardTitles.allTextContents();
        console.log(allTitles); 
        


    });

test ('UI Controls', async ({page})=>

{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName = page.locator('input#username');
    const signIn = page.locator('input#signInBtn');
    const pass = page.locator('input#password');
    const documentLink = page.locator("[href$='https://rahulshettyacademy.com/documents-request']");

    const dropdown = page.locator("select.form-control");

    await dropdown.selectOption("Teacher");

    await page.locator(".radiotextsty").last().click();

    await expect(page.locator(".radiotextsty").last()).toBeChecked();
    
    // console.log (page.locator(".radiotextsty").last().isChecked());
    await page.locator(("#okayBtn")).click();


    await page.locator("#terms").click();

    await expect(page.locator("#terms")).toBeChecked();

    await page.locator("#terms").uncheck();

    expect (await page.locator("#terms").isChecked()).toBeFalsy();
    
    await expect(documentLink).toHaveAttribute("class", "blinkingText");



    //await page.pause();

    
 });

 test ('Child Window', async ({browser})=>

{

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href$='https://rahulshettyacademy.com/documents-request']");

    
    const [newPage] = await Promise.all(


    [    
        context.waitForEvent('page'),
      documentLink.click(),

    ])

        const text = await newPage.locator(".red").textContent();
        const arrayText = text.split("@");
        const domain =  arrayText[1].split(" ")[0]
        console.log(text);
        console.log(arrayText);
        console.log(domain);
        await page.locator("#username").fill(domain);
        page.pause();

    

});

