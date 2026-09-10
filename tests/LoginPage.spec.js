const {test, expect} = require ('@playwright/test');



test('Task 1', async ({page})=>

{

    const cardTitles = page.locator(".card-body b");

await page.goto("https://rahulshettyacademy.com/client/#/auth/login", { waitUntil: 'domcontentloaded' });
await page.locator('.banner .btn1').click();
await page.locator('#firstName').fill("Hassan");
await page.locator('#lastName').fill("Javed");
await page.locator('#userEmail').fill("hassan102@gmail.com");
await page.locator('#userMobile').fill("3030892500");
await page.locator('#userPassword').fill("Pakistan@123");
await page.locator('#confirmPassword').fill("Pakistan@123");

await page.locator('input[type="checkbox"]').check();

await page.locator('input#login').click();

await page.waitForLoadState('networkidle');
await page.locator(".btn.btn-primary").click();

await page.locator('#userEmail').fill("hassan102@gmail.com");

await page.locator('#userPassword').fill("Pakistan@123");
await page.locator('input#login').click();

await page.waitForLoadState('networkidle');

console.log (await cardTitles.nth(0).textContent());        
const allTitles = await cardTitles.allTextContents();
console.log(allTitles);


});
