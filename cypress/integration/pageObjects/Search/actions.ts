class SearchActions{
    static openGooglePage(url){
        cy.visit(url);
        return this;
    }
    static typeSearchKeyAtSearchField(text){
        cy.get('.gsfi').type(text);
        return this;
    }
    static clickSearchBtn(){
        cy.get('.FPdoLc > center > .gNO89b').click({force:true});
    }
}

export default SearchActions;