it("Should put items in basket and order", () => {
  cy.visit("https://localhost:3000/products");

  cy.get("#mui-2").click();
  cy.get("#mui-3").click();

  cy.get(".MuiBadge-root > .MuiSvgIcon-root > path").click();
  cy.get(".MuiButton-label").click();
});

it("Should show items", () => {
  cy.visit("https://localhost:3000/products");

  cy.get(":nth-child(1) > .MuiPaper-root > .MuiCardHeader-root");
  cy.get(".MuiBadge-root > .MuiSvgIcon-root > path").click();
  cy.get(".MuiButton-label").click();
});

it("Should show single product", () => {
  cy.visit("https://localhost:3000/products");

  cy.get(":nth-child(1) > .MuiPaper-root > .MuiCardActionArea-root").click();

  cy.get("#mui-3").click();

  cy.get(".MuiBadge-root > .MuiSvgIcon-root > path").click();
  cy.get(".MuiButton-label").click();
});

it("Should show product", () => {
  cy.visit("https://localhost:3000/products");

  cy.get(":nth-child(1) > .MuiPaper-root > .MuiCardActionArea-root").click();

  cy.get("#mui-3").click();

  cy.get(".MuiBadge-root > .MuiSvgIcon-root > path").click();
  cy.get(".MuiButton-label").click();
});

it("Should add multiple products and check if they are all in cart", () => {
  cy.visit("https://localhost:3000/products");
  cy.get("#mui-2").click();
  cy.get("#mui-2").click();
  cy.get("#mui-3").click();
  cy.get(".MuiBadge-root > .MuiSvgIcon-root > path").click();
  cy.get(".MuiTableBody-root > .MuiTableRow-root > :nth-child(3)").contains(
    "2"
  );
});
