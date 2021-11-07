context("App page", () => {
    beforeEach(() => {
        cy.visit(`http://0.0.0.0:1234`)
        cy.injectAxe()
        cy.wait(100)
    })
    it("has no accessibility violations on load", () => {
        cy.checkA11y()
    })
    it("has a focusable, labeled button", () => {
        cy.get("[aria-label='Hide header']").focus()
        cy.focused().should("have.attr", "aria-label")
    })
})