class SignupPage

{

    constructor(page)

    {
    
    this.page = page;  
    this.signupbtn = page.locator('.banner .btn1');
    this.firstname = page.locator('#firstName');
    this.lastname = page.locator('#lastName');
    this.email = page.locator('#userEmail');
    this.mobilenumber = page.locator('#userMobile');
    this.password = page.locator('#userPassword');
    this.confirmpassword = page.locator('#confirmPassword');
    this.checkbox = page.locator('input[type="checkbox"]');
    this.register = page.locator('input#login');
    this.loginbtn = page.locator(".btn.btn-primary");


    }

    async goTo()

{

 await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login", { waitUntil: 'domcontentloaded' });
}

async validsignup(firstname, lastname, email,userMobile,Password){

    await this.signupbtn.click();
    await this.firstname.fill(firstname);
    await this.lastname.fill(lastname);
    await this.email.fill(email);
    await  this.mobilenumber.fill(userMobile);
    await this.password.fill(Password);
    await this.confirmpassword.fill(Password);
    await this.checkbox.check();
    await  this.register.click();
    await this.page.waitForLoadState('networkidle'); 
    await this.loginbtn.click();

}

}
module.exports = {SignupPage};