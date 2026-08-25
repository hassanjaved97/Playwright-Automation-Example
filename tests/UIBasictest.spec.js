const {test, expect} = require ('@playwright/test');

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
        await userName.type("Umair");
        await pass.type("Learning@830$3mK2");
        await signIn.click();
        
        console.log(await page.locator("[style*='block']").textContent());
        await expect(page.locator("[style*='block']")).toContainText('Incorrect');
       // type - fill

        await userName.fill("");
        await userName.fill("rahulshettyacademy");

        await Promise.all(

    [    
        page.waitForNavigation(),
        await signIn.click(),

    ]
        );

        
        // console.log (await cardTitles.nth(0).textContent());
        // await expect(await cardTitles.nth(0)).toContainText('iphone X');
        await page.waitForLoadState('Networkidle');
        const allTitles = await cardTitles.allTextContents();
        console.log(allTitles); 
        


    });

    
