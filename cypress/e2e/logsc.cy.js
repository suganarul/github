describe("login senario",()=>{
    it("login",()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.get("[type='submit']").should("have.attr","class");
    cy.get("[type='submit']").should("have.text"," Login ");
    cy.get("[type='submit']").should("have.attr","data-v-0af708be");
   })
})//cy2-4c