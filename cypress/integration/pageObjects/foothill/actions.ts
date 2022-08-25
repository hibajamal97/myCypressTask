class FoothillActions{
    static openFoothillWebsite(){
        cy.visit('https://www.foothillsolutions.com/');
        return this;
    }
    static clicksOnHomeTab(){
        cy.get('a').contains('Home').click();
    }
    static clicksOnAboutUsTab(){
        cy.get('a').contains('About Us').click();
    }
    static clicksOnContactUsTab(){
        cy.get('a').contains('Contact Us').click();
    }
    static clicksOnCareersTab(){
        cy.get('a').contains('Careers').click();
    }

}
export default FoothillActions;