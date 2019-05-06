import Page from '../../pages/FormPage';

const assert = require('assert');
const { Given, When, When } = require('cucumber');

var number = "";
var agree = true;
var response = "";

Given(/^go to the page$/, ()=>{
  Page.open();
});

When(/^I fill the form$/, (table) =>{
  number = table.hashes()[0]['age']
  agree = table.hashes()[0]['agree']
});

And(/^submit the form$/, ()=>{
  response = Page.submitForm(number, agree); 
});

Then(/^the page show the message "([^"]*)?"$/, (message)=>{
  assert.equal(response, message);
});