describe('Creating tests for animal adoption',function(){
	beforeEach(function(){
	browser.get('http://thetestroom.com/jswebapp/');
    });	
	
	describe('Verify dynamic text present',function(){
		beforeEach(function(){
			expect(element(by.css('div.ng-scope')).getText()).toContain('WELCOME');
		});
		
		var adopteeName='John Doe';
		it('Assert dyanmic text equal to provided text',function(){
			element(By.css('input.ng-pristine')).sendKeys(adopteeName);
			var dynamicText=element(By.css('h2.ng-binding')).getText();
			expect(dynamicText).toEqual(adopteeName);
		});
	});
	
	describe('complete regitration for animal adoption',function(){
		beforeEach(function(){
			expect(element(by.css('div.ng-scope')).getText()).toContain('WELCOME');
		});
		
		var adopteeName='John Doe';
		it('filling up the form for adoption',function(){
			element(By.css('input.ng-pristine')).sendKeys(adopteeName);
			var dynamicText=element(By.css('h2.ng-binding')).getText();
			expect(dynamicText).toEqual(adopteeName);
			element(by.buttonText('CONTINUE')).click();
			expect(element(by.css('div.ng-scope')).getText()).toContain('Select');
			var items=element.all(by.css('.ng-pristine option'));
			expect(items.length != 0);
			console.log(items.get(1).getText());
			for(var i=0;i<items.length;i++)
			{
				if(items.get(i).getText().equal('Simba the Lion'))
				{
					items.get(i).click();
					browser.driver.sleep(5000);
				}
			}
			//items.get(1).click();
			element(by.buttonText('CONTINUE')).click();
			expect(element(by.css('h1#title')).getText()).toContain('Thank you');
			expect(element(by.buttonText('BACK TO HOME')));
		});
	});
	
});