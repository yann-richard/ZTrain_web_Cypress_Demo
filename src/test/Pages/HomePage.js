import Page from "./Page";

const emailField = '#email_login';
const passwordField = '#password_login';
const loginButton = '#btn_login';
const accountMenu = '#style_avatar_wrapper__pEGIQ';
const disconnexion = '#style_showDropdown__PBBOV > :nth-child(2)';
const firstProduct1 = ':nth-child(2) > .style_card_body__QuFGN > [style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"] > .style_card_body_img__mkV1D';
const addCard = '#style_btn_add_cart__gTXM7';
const closeProdSheet = '#style_btn_close__9uLzQ > svg'
const quantityfield = '.style_input_quantity__xZDIb';
const shoppingCardIcon = '#style_content_cart_wrapper__mqNbf'
const decrementBtn = '.style_quantity_dec__nm5ig';
const incrementBtn = '.style_quantity_in__XmF4D';
const trashCardBtn = '#style_btn_trash_cart__ttfo9';
const trashProdCard = ':nth-child(3) > .style_trash_product_cart__7Yzni';
const inputQtyCard = '.style_quantity__qJbQ3';
const priceFirstProd = '.style_card_body__EhpLW > :nth-child(2)';
const cardWrapper = '#style_card_wrapper__hrc1I'


class HomePage extends Page {

    static visit(){
        const username = '237pk69@gmail.com'
        const password = 'P@wk/*69'

        cy.request('POST', 'https://ztrain-shop.herokuapp.com/auth/login', {
           email: username,
           password: password
        }).then((response) => {
           var auth = {}

           var login = {}
           login.data = response.body
           login.isLoading = false
           login.error = ""
           auth.login = login

           var google_login = {}
           google_login.data = {}
           google_login.isLoading = false
           google_login.error = ""
           auth.google_login = google_login

           var register = {}
           register.data = response.body
           register.isLoading = false
           register.error = []
           auth.register = register

           var reset_password = {}
           reset_password.message = ""
           reset_password.isLoading = false
           reset_password.error = ""
           auth.reset_password = reset_password

           auth.user_infos = response.body

           cy.setLocalStorage("persist:root", JSON.stringify({auth: JSON.stringify(auth)}))
        })
        cy.visit('/')

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

    static clickOnDisconnectbtn(){
        cy.get(accountMenu).trigger('mouseover');
        this.clickOn(disconnexion);
    }

    static clickOnProduct(){
        this.clickOn(firstProduct1)
    }

    static clickOnAddCard(){
        this.clickOn(addCard)
    }

    static clickOnCloseProdSheet(){
        this.clickOn(closeProdSheet)
    }

    static fillQuantity(quantity){
        this.fillField(quantityfield, quantity)
    }

    static clickOnshoppingCardicon(){
        this.clickOn(shoppingCardIcon)
        cy.get('.style_card__JLMp6').each((element) => {
            cy.get(inputQtyCard)
            .invoke('val')
            .then((value) => {
                cy.log(value)
            })
            
        })
        
    }

    static clickOndecrementbtn(){
        cy.get(inputQtyCard)
            .invoke('val')
            .then((value) => {
                const initialPrice = value
                cy.wrap(initialPrice).as('initialPrice')
            })
        this.clickOn(decrementBtn)
    }

    static clickOnIncrementbtn(){
        cy.get(inputQtyCard)
            .invoke('val')
            .then((value) => {
                const initialPrice = value
                cy.wrap(initialPrice).as('initialPrice')
            })
        this.clickOn(incrementBtn)
    }

    static clickOnTrashCardbtn(){
        this.clickOn(trashCardBtn)
    }

    static clickOnTrashProdCard(){
        this.clickOn(trashProdCard)
    }

    static clickOnCloseContentCard(){
        this.clickOn(closeContentCard)
    }
    
}

export default HomePage