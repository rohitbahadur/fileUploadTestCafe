import { Selector } from 'testcafe';


class LoginPage {

    Email = Selector('#id_login')
    Password = Selector('#id_password')
    LoginButton = Selector('#modal-login-button')
    closeButton = Selector('#app span')

    async userLogin(t){
        await t
            .typeText(this.Email, 'rohitbahadur2475@gmail.com')
            .typeText(this.Password, '1234@1234')
            .wait(3000)
            .click(this.LoginButton)
            .click(this.closeButton)
    }


   // async uploadFile(t) {
     //   await t
       // .maximizeWindow()
        

   // }

}

export default new LoginPage();

