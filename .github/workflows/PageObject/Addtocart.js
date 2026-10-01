const { expect } = require('@playwright/test');
class Addtocart

{

constructor(page)

{
this.page = page;
this.productsxtext =  page.locator(".card-body b");
this.cart = page.locator("[routerlink$='/dashboard/cart']");
this.products = page.locator(".card-body");
this.loadproducts = page.locator("div li");


}

async searchproducts (productName)

{

const titles = await this.productsxtext.allTextContents();
    console.log(titles);
    const count = await this.products.count();

     //Add to cart
for (let i=0; i< count; ++i)

        {
            if (await this.products.nth(i).locator("b").textContent() == productName)

                {
                    
                    await this.products.nth(i).locator("text = Add To Cart").click();
                    break;

                }



        }




}

async navigatetocart()

{

    await this.cart.click();
    await this.loadproducts.first().waitFor();


}

async confirmproduct(productName) {
        const productLocator = this.page.locator(`h3:has-text('${productName}')`);
        await expect(productLocator).toBeVisible();
    }

}

module.exports = {Addtocart};