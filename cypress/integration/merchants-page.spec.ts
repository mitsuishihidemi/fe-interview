import getMerchantsFixture from "../fixtures/get-merchants_2-bills-1-potential.json";

// url
const MERCHANTS_URL = `${Cypress.env("api")}/merchants`;
// selectors
const NOT_FOUND_MESSAGE = '[data-test-id="not-found.message"]';
// tabs
const BILLS_TAB = '[data-test-id="bills.tab"]';
const POTENTIAL_BILLS_TAB = '[data-test-id="potential-bills.tab"]';
// merchant rows
const MERCHANT_ROW = '[data-test-id="merchant.row"]';
const MERCHANT_BILL_ID = "5a5caa1efe33900100fd8ed5";
const MERCHANT_BILL_ROW = `${MERCHANT_ROW}[data-id="${MERCHANT_BILL_ID}"]`;
const MERCHANT_POTENTIAL_BILL_ID = "5a5cab18fe33900100fd8ed8";
const MERCHANT_POTENTIAL_BILL_ROW = `${MERCHANT_ROW}[data-id="${MERCHANT_POTENTIAL_BILL_ID}"]`;
// transaction rows
const TRANSACTION_ROW = '[data-test-id="transaction.row"]';
// ctas
const SEE_TRANSITIONS_CTA = '[data-test-id="see-transitions.cta"]';
const REMOVE_BILL_CTA = '[data-test-id="remove-bill.cta"]';
const ADD_BILL_CTA = '[data-test-id="add-bill.cta"]';

const getMerchant = (merchantId: string) =>
  getMerchantsFixture.find((m) => m.id === merchantId);

describe("Merchants Page", () => {
  it("should render not found message if there are not merchants", () => {
    cy.intercept("GET", MERCHANTS_URL, { body: [] });

    cy.visit("/");

    cy.get(NOT_FOUND_MESSAGE).should("have.length", 1);
  });

  it("should render merchants marked as bill in the bills tab", () => {
    cy.intercept("GET", MERCHANTS_URL, { body: getMerchantsFixture });

    cy.visit("/");

    cy.get(MERCHANT_ROW).should("have.length", 2);
  });

  it("should render merchants marked as not bill in the potential bills tab", () => {
    cy.intercept("GET", MERCHANTS_URL, { body: getMerchantsFixture });

    cy.visit("/");

    cy.get(POTENTIAL_BILLS_TAB).click();

    cy.get(MERCHANT_ROW).should("have.length", 1);
  });

  it("should show the merchant transitions when it clicks on 'see transitions' cta", () => {
    cy.intercept("GET", MERCHANTS_URL, { body: getMerchantsFixture });

    cy.visit("/");

    cy.get(`${MERCHANT_BILL_ROW} ${SEE_TRANSITIONS_CTA}`).click();

    const merchant = getMerchant(MERCHANT_BILL_ID);
    cy.get(TRANSACTION_ROW).should(
      "have.length",
      merchant?.transactions.length
    );
  });

  it("should remove the merchant from bills if it clicks on the 'remove bill' cta", () => {
    cy.intercept("GET", MERCHANTS_URL, { body: getMerchantsFixture });

    const merchant = getMerchant(MERCHANT_BILL_ID);
    cy.intercept("PATCH", MERCHANTS_URL, {
      body: { ...merchant, isBill: false },
    });

    cy.visit("/");

    cy.get(`${MERCHANT_BILL_ROW} ${REMOVE_BILL_CTA}`).click();

    cy.get(MERCHANT_BILL_ROW).should("have.length", 0);

    cy.get(POTENTIAL_BILLS_TAB).click();

    cy.get(MERCHANT_BILL_ROW).should("have.length", 1);
  });

  it("should add the merchant to bills if it clicks on the 'add bill' cta", () => {
    cy.intercept("GET", MERCHANTS_URL, { body: getMerchantsFixture });

    const merchant = getMerchant(MERCHANT_POTENTIAL_BILL_ID);
    cy.intercept("PATCH", MERCHANTS_URL, {
      body: { ...merchant, isBill: true },
    });

    cy.visit("/");

    cy.get(POTENTIAL_BILLS_TAB).click();

    cy.get(`${MERCHANT_POTENTIAL_BILL_ROW} ${ADD_BILL_CTA}`).click();

    cy.get(MERCHANT_POTENTIAL_BILL_ROW).should("have.length", 0);

    cy.get(BILLS_TAB).click();

    cy.get(MERCHANT_POTENTIAL_BILL_ROW).should("have.length", 1);
  });
});
