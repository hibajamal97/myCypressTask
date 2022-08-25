class foothillAssertions{
    static checkingHomeTab(){
        cy.get('a').contains("Home").should('be.visible');
    }
    static checkingAboutUsTab(){
        cy.get('a').contains("About Us").should('be.visible');
    }
    static checkingContactUsTab(){
        cy.get('a').contains('Contact Us').should('be.visible');
    }
    static checkingCareersTab(){
        cy.get('a').contains('Careers').should('be.visible');
    }

    static checkingUrlContent(text: string){
        cy.url().should('contain',text);
    }

    static checkingContactUsContent(text:string){
        cy.get('.title').contains(text).should('be.visible');
    }
    static checkingCareersContent(text:string){
        cy.get('.main-title').contains(text).should('be.visible');
    }
    static checkingAboutUsContent(text:string){
        cy.get('.AboutTitle').contains(text).should('be.visible');
    }
    static checkingHomeContent(text:string){
        cy.get('.title').contains(text).should('be.visible');
    }
}
export default foothillAssertions;