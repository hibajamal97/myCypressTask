class listAssertions{

    static checkingSortedList(){
        cy.get('#example1 .list-group-item').then($elements => {
            const strings = [...$elements].map(el => el.innerText)
            expect(strings).to.equal([...strings].sort())
          });
    }
}
export default listAssertions;