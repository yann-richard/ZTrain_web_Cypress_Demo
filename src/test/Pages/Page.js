class Page {

    static clickOn(element){
        cy.get(element).click();
    }

    static fillField(field,value){
        cy.get(field)
            .type(value)
    }

}

export default Page;