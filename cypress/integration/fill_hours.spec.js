describe('first test', () => {
  it('should pass', () => {
    const COMPANY_NUMBER = Cypress.env('COMPANY_NUMBER');
    const EMPLOYEE_NUMBER = Cypress.env('EMPLOYEE_NUMBER');
    const PASSWORD = Cypress.env('PASSWORD');
    if (!COMPANY_NUMBER) {
      throw new Error(
        'please set password and employee number and company number in cypress json'
      );
    }
    cy.on('uncaught:exception', (err, runnable) => {
      // return false to prevent the error from failing this test
      return false;
    });
    cy.visit('https://checkin.timewatch.co.il/punch/punch.php');
    login(COMPANY_NUMBER, EMPLOYEE_NUMBER, PASSWORD);
    gotToReports();
    fillMissing();
    expect(true).to.equal(true);
  });
});

function login(companyNumber, employeeNumber, password) {
  cy.get('#compKeyboard').type(companyNumber);
  cy.get('#nameKeyboard').type(employeeNumber);
  cy.get('#pwKeyboard').type(password);
  cy.get('[src="/images/entrance.jpg"]').click();
  return cy.wait(2000);
}

function gotToReports() {
  cy.get('[href*="editwh.php"]').click();
  return cy.wait(2000);
}

function fillMissing() {
  cy.get('tr[onclick*="openInnewWindow"]').each(day => {
    const dayElm = day[0];
    if (
      !dayElm.innerHTML.includes('שבת') &&
      !dayElm.innerHTML.includes('שישי')
    ) {
      const onclickText = day[0].getAttribute('onclick');
      const href = onclickText.match(
        /(?<=javascript:openInnewWindow\(').*?(?=')/
      )[0];
      cy.visit('https://checkin.timewatch.co.il/punch/' + href);
      cy.get('#ehh0').then(inputFromHour => {
        if (inputFromHour && !inputFromHour[0].value) {
          cy.get('#ehh0').type('09');
          const minutes = getMinutes();
          cy.get('#emm0').type(minutes);
        }
      });

      cy.get('#xhh0').then(inputToHour => {
        if (inputToHour && !inputToHour[0].value) {
          cy.get('#xhh0').type('18');
          const minutes = getMinutes();
          cy.get('#xmm0').type(minutes);
        }
      });

      cy.wait(1000);
      cy.get('[src="/images/update.jpg"]').click();
      cy.wait(1000);
    }
  });
  return cy.wait(2000);
}

function getMinutes() {
  const minute = parseInt(((Math.random() * 100) % 59) + 1);
  return minute < 10 ? `0${minute}` : minute;
}
