const {LoginPage} = require ('./LoginPage');
const {SignupPage} = require ('./SignupPage');
const {Addtocart} = require ('./Addtocart');

class POmanager {


    constructor(page)

    {
       
        this.loginPage = new LoginPage (page);
        this.signupPage = new SignupPage (page);
        this.addcartPage = new Addtocart (page);


    }

    getLoginPage ()

    {

        return this.loginPage;

    }

    getSignPage ()
    {

        return this.signupPage;
    }

    getAddtocart()

    {

        return this.addcartPage;
    }


}

module.exports = {POmanager};
