/** @jsx node */

// @ts-ignore
import { node, dom } from 'jsx-pragmatic';

class ActionButton {

    constructor() {

    }

    init() {
        console.log('fuck yeah');
        document.body.append(this.render());
    }

    private render() {
        return (
            <div class={'cmt_action-button'}>Test</div>
        ).render(dom());
    }
}

export default ActionButton;