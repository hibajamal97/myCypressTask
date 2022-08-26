class SearchAssertions{
    static checkingFoothillWebsite(){
        cy.get('span').contains('Foothill Technology Solutions - Facebook');
    };
    static checkingFoothillFacbook(){
        cy.get('span').contains('Foothill Technology Solutions: Home');
    };  
}
export default SearchAssertions;