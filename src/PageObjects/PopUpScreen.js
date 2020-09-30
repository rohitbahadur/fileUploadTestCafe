import { Selector } from 'testcafe';


class PopUp {

    closeButton = Selector('#app span');

    async clickCloseButton(t) {
        await t
            .click(this.clickCloseButton)
    }

}

export default new PopUp();