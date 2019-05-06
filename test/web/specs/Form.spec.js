import Page from '../pages/FormPage';

const assert = require('assert');

describe('Form', () => {
  const total = 5;
  beforeEach(() => {
    Page.open();
  });
  it('Don\'t fill the form and submit', () => {
    let response = Page.submitForm(0, false);
    assert.equal(response, 'Please, fill the age');
  });
  it('Don\'t fill the age', () => {
    let response = Page.submitForm(0, true);
    assert.equal(response, 'Please, fill the age');
  });
  it('Don\'t accept the rules', () => {
    let response = Page.submitForm(20, false);
    assert.equal(response, 'Please, agree the rules');
  });
  it('Submit the form', () => {
    let response = Page.submitForm(30, true);
    assert.equal(response, 'Hello!');
  });
});
