class LoginPage {

constructor(page)

{
    this.page = page;
    this.SignInbutton = page.locator('input#login');
    this.username = page.locator('#userEmail');
    this.password = page.locator('#userPassword');



}

async goTo()

{

    await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
}

async validLogin(email, password){

await this.username.fill(email);
await this.password.fill(password);
await this.SignInbutton.click();

}


}

module.exports = {LoginPage};