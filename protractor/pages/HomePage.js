require('../pages/SelectAnimalPage.js');

var HomePage = function() {
  var pageHeader = element(by.css('div.ng-scope'));
  var textBox = element(By.css('input.ng-pristine'));
  var dynamicText=element(By.css('h2.ng-binding'));
  var continueButton=element(by.buttonText('CONTINUE'));
  var pageHeaderText='WELCOME';
  
  this.setAdopteeName = function(name) {
    textBox.sendKeys(name);
  };

  this.getDynamicText = function() {
    return dynamicText.getText();
  };
  
  this.clickContinueButton=function(){
	continueButton.click(); 
    return require('./SelectAnimalPage.js');
  };
  
   this.verifyPageHeader = function() {
    expect(pageHeader.getText()).toContain(pageHeaderText);
  };
  
};
module.exports= new HomePage();
