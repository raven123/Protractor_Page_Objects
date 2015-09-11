return require('../pages/ConfirmationPage.js');

var SelectAnimalPage = function() {
  var pageHeader = element(by.css('div.ng-scope'));
  var selectAnimalList=element.all(by.css('.ng-pristine option'));
  var continueButton=element(by.buttonText('CONTINUE'));
  var backButton=element(by.buttonText('BACK'));
  var pageHeaderText='Select';
  
  this.selectAnimalToAdopt = function(name) {
	  expect(selectAnimalList.length != 0);
    for(var i=0;i<selectAnimalList.length;i++)
			{
				if(items.get(i).getText().equal(name))
				{
					items.get(i).click();
					browser.waitForAngular();
				}
			}
  };

  this.verifyPageHeader = function() {
    expect(pageHeader.getText()).toContain(pageHeaderText);
  };
  
  this.clickContinueButton=function(){
	continueButton.click();  
	browser.waitForAngular();
	return require('./ConfirmationPage.js');
  };
  
  this.clickBackButton=function(){
	backButton.click();  
  };
  
};
module.exports=new SelectAnimalPage();