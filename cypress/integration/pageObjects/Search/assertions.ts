class SearchAssertions{
    static checkingFoothillWebsite(){
        cy.get('span').contains('Foothill Technology Solutions - Home - Facebook');
    };
    static checkingFoothillFacbook(){
        cy.get('span').contains('Foothill Technology Solutions: Home');
    };  
}
export default SearchAssertions;