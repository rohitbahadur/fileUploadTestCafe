import LoginPage from '../src/PageObjects/LoginPage'
import Data from '../src/data/TestData.json'



fixture('Login Test')
    .page(Data.appUrl)
    

    test('should allow user to Login to App ', async t => {
        
        await t
        .maximizeWindow()
        await t.setTestSpeed(0.1)
        .expect(LoginPage.userLogin).ok()
         console.log('User is able to login');
    
    });
   