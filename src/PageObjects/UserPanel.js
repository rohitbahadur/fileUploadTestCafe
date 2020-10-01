import { Selector } from 'testcafe';

class UserPanel {

    //deleteButton = Selector('button').withText('Delete')
    fileUploadSelector = Selector('input').withAttribute('type', 'file')
     
            
}
export default new UserPanel();