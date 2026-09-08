const {test, expect} = require ('@playwright/test');

test ('Client App Login', async ({page}) =>

    {
        
    const productName = 'ZARA COAT 3';   
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
await page.locator("div li").first().waitFor();
const bool =  page.locator("h3:has-text('productName')").isVisible();
expect(bool).toBeTruthy();
  //await page.pause();

  });
