const {test, expect} = require ('@playwright/test');
const { text } = require('node:stream/consumers');

test ('Client App Login', async ({page}) =>

    {
      
//login    
    const email = "umairjaveid+4@gmail.com";
    const productName = 'iphone 13 pro';   
    const products = page.locator(".card-body");    
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login", { waitUntil: 'domcontentloaded' });
    await page.locator('.banner .btn1').click();
    await page.locator('#firstName').fill("Umair");
    await page.locator('#lastName').fill("Javeid");
    await page.locator('#userEmail').fill(email);
    await page.locator('#userMobile').fill("3030892500");
    await page.locator('#userPassword').fill("Pakistan@123");
    await page.locator('#confirmPassword').fill("Pakistan@123");

 await page.locator('input[type="checkbox"]').check();

await page.locator('input#login').click();

await page.waitForLoadState('networkidle');
await page.locator(".btn.btn-primary").click();

await page.locator('#userEmail').fill(email);

await page.locator('#userPassword').fill("Pakistan@123");
await page.locator('input#login').click();

await page.waitForLoadState('networkidle');


 //Add to cart

   const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);
    const count = await products.count();
    for (let i=0; i< count; ++i)

        {
            if (await products.nth(i).locator("b").textContent() == productName)

                {
                    
                    await products.nth(i).locator("text = Add To Cart").click();
                    break;

                }



        }


 //Confirm product present on cart


await page.locator("[routerlink$='/dashboard/cart']").click();

await page.locator("div li").nth(0).waitFor();

// Asseryion for Product confirm

await expect(page.locator(`h3:has-text('${productName}')`)).toBeVisible();

//Checkout

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
await CardName.fill("Umair Javeid");

await page.locator("[placeholder$='Select Country']").type("pak", {delay:100});
const CountryName = "Pakistan";


const dropdown = page.locator(".ta-results");
await dropdown.waitFor();
const optionsCount = await dropdown.locator("button").count();


for (let i=0; i<optionsCount; ++i)

    {
      const text = await dropdown.locator("button").nth(i).textContent();

        if (text.trim() === CountryName)

            {

                //click
                await dropdown.locator("button").nth(i).click();
                break;
            }

    }

// Order details page

   await expect( await page.locator (".user__name label")).toHaveText(email);
   await page.locator(".btnn.action__submit.ng-star-inserted").click();
   await expect( await page.locator (".hero-primary")).toHaveText(" Thankyou for the order. ");
   const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
   console.log(orderId);

 // Order history

   await page.locator("button[routerlink$='/dashboard/myorders']").click();
   await page.locator("tbody").waitFor();
   const rows = await page.locator("tbody tr");
   const CountRows = await rows.count();

   for (let i=0; i<CountRows; ++i)

    {

        const rowsOrderId = await rows.nth(i).locator("th").textContent();

        if (orderId.includes(rowsOrderId))

            {
                await rows.nth(i).locator("button").first().click();
                break;


            }
    }

//Order confirmations

    const orderIDDetails = await page.locator(".col-text.-main").textContent();
    await expect (orderId.includes(orderIDDetails)).toBeTruthy();

    //await expect(await page.locator(".col-text")).toHaveText(orderId);
    //await page.pause();

    const addressEmail = await page.locator(".address").first().locator(".text").first().textContent();
    console.log(addressEmail);
    expect(addressEmail?.trim()).toBe(email); 

    const country = await page.locator(".address").first().locator(".text").last().textContent();
    console.log(country);
    expect(CountryName?.trim()).toBe(country); 




});
