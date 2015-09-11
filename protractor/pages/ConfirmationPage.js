var ConfirmationPage = function() {
  var pageHeader = element(by.css('h1#title'));
  var confirmationMessage=element(By.css('div.ng-scope p'));
  var backToHomeButton=element(by.buttonText('BACK TO HOME'));
  var confirmationMessageText='adoption papers';
  var pageHeaderText='Thank you';
 
  this.validateConfirmationPage = function() {
    expect(pageHeader.getText()).toContain(pageHeaderText);
	expect(confirmationMessage.getText()).toContain(confirmationMessageText);
	expect(backToHomeButton);
  };
 
};
module.exports=new ConfirmationPage();