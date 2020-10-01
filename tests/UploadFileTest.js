import LoginPage from '../src/PageObjects/LoginPage'
import PopUpScreen from '../src/PageObjects/PopUpScreen'
import UserPanel from '../src/PageObjects/UserPanel'
import Data from '../src/data/TestData.json'




fixture('Upload File')
    .page(Data.appUrl)

test('should allow user to upload a file ', async t => {
    await t
        .maximizeWindow()
        .typeText(LoginPage.Email, Data.username)
        .typeText(LoginPage.Password, Data.password)
        .click(LoginPage.LoginButton)
        .click(PopUpScreen.closeButton)

    await t
        .setTestSpeed(0.2)
        .setFilesToUpload(UserPanel.fileUploadSelector, '../src/Apple.stl')
        
    console.log('User is able to upload');

});