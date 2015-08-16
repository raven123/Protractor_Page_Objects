describe('Creating tests for animal adoption',function(){
	var homePage=require('../pages/HomePage.js');
	var selectAnimalPage=require('../pages/SelectAnimalPage.js');
	var confirmationPage=require('../pages/ConfirmationPage.js');
	var adopteeName='John Doe';
	var animalName='Simba the Lion';
	
	beforeEach(function(){
	browser.get('http://thetestroom.com/jswebapp/');
	homePage.verifyPageHeader();	
    });	
	
	afterEach(function(){
		
    });	
	
	describe('Verify dynamic text present',function(){
		it('Assert dyanmic text equal to provided text',function(){
			homePage.setAdopteeName(adopteeName);
			var dynamicText=homePage.getDynamicText();
			expect(dynamicText).toEqual(adopteeName);
		});
	});
	
	describe('complete regitration for animal adoption',function(){
		
		it('filling up the form for adoption',function(){
			
			homePage.setAdopteeName(adopteeName);
			
			var dynamicText=homePage.getDynamicText();
			
			//asserting adopteeName with the dynamic text 
			expect(dynamicText).toEqual(adopteeName);
			
			homePage.clickContinueButton();
			
			//verify select Animal Page elements before interactions
			selectAnimalPage.verifyPageHeader();
			
			selectAnimalPage.selectAnimalToAdopt(animalName);
			
			selectAnimalPage.clickContinueButton();
			
			//validate Confirmation Page elements
			confirmationPage.validateConfirmationPage();
			});
	});
	
	
	
});