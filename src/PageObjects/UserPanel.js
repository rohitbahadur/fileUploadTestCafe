import { Selector } from 'testcafe';

class UserPanel {

    deleteButton = Selector('button').withText('Delete')
}
export default new UserPanel();