import ActionButton from './ActionButton';

import '../scss/main.scss';

class Commentate {
    actionButton: ActionButton;

    constructor() {
        this.actionButton = new ActionButton();
    }
}

export default Commentate;