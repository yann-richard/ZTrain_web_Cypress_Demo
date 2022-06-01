import Page from "./Page";

const emailField = '#email_login';
const passwordField = '#password_login';
const passwordShow = 'svg';
const loginButton = '#btn_login';
const subscriptionbtn = '#btn_register';
const forgotPassword = '.style_forgotpass__PRHm_';
const url = 'https://ztrain-web.vercel.app/';
const errorFieldRequier= '.style_messageError__LxTAG';
const errorMessageRequier= 'Email ou mot de passe incorrect';
const displayPasswd = '#style_container_input_password___0rEz > div > svg';
const emailResetField = '#email_reset_pass';
const passwdResetField = '#reset_password';
const resetButton = '#btn_reset_password';
const emailSubsField = '#email_register';
const passwdSubsField = '#password_register';
const confirmPwdField = '#confirm_password_register';
const subsLink = '.style_link__unbWN';



class AuthPage extends Page {

    static visit(){
        cy.visit('/');
    }

    static fillEmail(email){
        this.fillField(emailField, email)
    }

    static fillPassword(password){
        this.fillField(passwordField, password)
    }

    static clickOnLoginBtn(){
        this.clickOn(loginButton)
    }

    static clickOnDisplayPasswd(){
        this.clickOn(displayPasswd)
    }    

    static clickOnForgotPasswd(){
        this.clickOn(forgotPassword)
    } 

    static fillEmailReset(email){
        this.fillField(emailResetField, email)
    }

    static fillPasswdReset(newPasswd){
        this.fillField(passwdResetField, newPasswd)
    }
    
    static clickOnResetBtn(){
        this.clickOn(resetButton)
    } 

    static clickOnSubsBtn(){
        this.clickOn(subscriptionbtn)
    } 

    static clickOnSybsLink(){
        this.clickOn(subsLink)
    }

    static fillEmailSubsField(email){
        this.fillField(emailSubsField, email)
    }

    static fillPasswdSubsField(password){
        this.fillField(passwdSubsField, password)
    }

    static fillConfirmPwdField(confirmpwd){
        this.fillField(confirmPwdField, confirmpwd)
    }

}

export default AuthPage
