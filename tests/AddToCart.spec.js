const {test, expect} = require ('@playwright/test');
const { text } = require('node:stream/consumers');

test ('Client App Login', async ({page}) =>

    {
        
    const productName = 'iphone 13 pro';   
    const products = page.locator(".card-body");    
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("#userEmail").fill("hassan102@gmail.com");
    await page.locator("#userPassword").fill("Pakistan@123");
    await page.locator("#login").click();
    await page.waitForLoadState('networkidle');

    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);
    const count = await products.count();


    for (let i=0; i< count; ++i)

        {
            if (await products.nth(i).locator("b").textContent() == productName)

                {
                    // add to cart
                    await products.nth(i).locator("text = Add To Cart").click();
                    break;

                }



        }

await page.locator("[routerlink$='/dashboard/cart']").click();

await page.locator("div li").nth(0).waitFor();

//const bool = await page.locator(`h3:has-text('${productName}')`).isVisible();
// expect(bool).toBeTruthy();

await expect(page.locator(`h3:has-text('${productName}')`)).toBeVisible();

await page.locator("text=Checkout").click();
await page.locator("[value$='4542 9931 9292 2293']").fill("");
await page.locator("[value$='4542 9931 9292 2293']").fill("1234 5678 0000 2222");
const dropdown1 = page.locator("select.input.ddl").first();
await dropdown1.selectOption("07");
const dropdown2 = page.locator("select.input.ddl").last();
await dropdown2.selectOption("31");
const cvv = page.locator('div.field.small', { hasText: 'CVV Code' }).locator('input');
await cvv.fill("123");

const CardName = page.locator('div.field', { hasText: 'Name on Card ' }).locator('input');
await CardName.fill("Hassan javed");

await page.locator("[placeholder$='Select Country']").type("pak", {delay:100});


const dropdown = page.locator(".ta-results");
await dropdown.waitFor();
const optionsCount = await dropdown.locator("button").count();

for (let i=0; i<optionsCount; ++i)

    {
      const text = await dropdown.locator("button").nth(i).textContent();

        if (text.trim() === "Pakistan")

            {

                //click
                await dropdown.locator("button").nth(i).click();
                break;
            }

    }



//await page.pause();

  });
