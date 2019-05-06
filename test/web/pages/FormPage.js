import Page from './Page';

class FormPage extends Page {
  /**
   *Creates an instance of FormPage.
   * @memberof FormPage
   */
  constructor() {
    super();
    this.element = {
      ageEdit: '#age',
      agreeCheckbox: '#agree_rules',
      submitButton: '#submit',
      responseLabel: '.message_validation'
    };
  }

  /**
   * Visit the page
   *
   * @memberof FormPage
   */
  open() {
    super.open('/');
  }

  /**
   * Submit the form
   * @param  {number} age Define the age value
   * @param  {boolean} accept Accept the rules
   * @member FormPage
   */
  submitForm(age = '', accept = false) {
    if (age && age > 0) $(this.element.ageEdit).setValue(username);
    if (accept && $(this.element.agreeCheckbox).isSelected()) $(this.element.agreeCheckbox).click();
    $(this.element.submitButton).click();
    return $(this.element.responseLabel).getText();
  }
}

export default new FormPage();
