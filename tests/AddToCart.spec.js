const {test, expect} = require ('@playwright/test');
const {POmanager} = require ('../PageObject/POmanager');

// JSON --> string --> js object
const dataset = JSON.parse (JSON.stringify(require ("../utils/placeorderTestData.json")));


for (const data of dataset) {

test ( `Client App Login' ${data.productName}`, async ({page}) =>

    {

    const Manager = new POmanager (page);
    const Timestamp = Date.now();
        
    
//Signup
    const signup = Manager.getSignPage();
    await signup.goTo();
    await signup.validsignup(data.firstname, data.lastname, data.email, data.userMobile, data.Password);

//Signin

    const login = Manager.getLoginPage();
    await login.goTo();
    await login.validLogin(data.email,data.Password );


// serach product
  const addcart = Manager.getAddtocart();
  await addcart.searchproducts(data.productName);
  await addcart.navigatetocart();

   

// Asseryion for Product confirm

await addcart.confirmproduct(data.productName);

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
   await expect( await page.locator (".user__name label")).toHaveText(data.email);
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

//Order validations
    const orderIDDetails = await page.locator(".col-text.-main").textContent();
    await expect (orderId.includes(orderIDDetails)).toBeTruthy();

//Email Adress Confirmation
    const addressEmail = await page.locator(".address").first().locator(".text").first().textContent();
    console.log(addressEmail);
    expect(addressEmail?.trim()).toBe(data.email); 

//Country detail Confirmation
    const rawtext = await page.locator(".address").first().locator(".text").last().textContent();
    const country = rawtext.split("-").pop().trim();
    console.log(country);
    expect(CountryName?.trim()).toBe(country); 




});

}
