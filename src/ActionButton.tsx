/** @jsx node */

// @ts-ignore
import { node, dom } from 'jsx-pragmatic';

class ActionButton {

    constructor() {

    }

    init() {
        console.log('fuck yeah');
        document.body.append((
            <div>Test</div>
        ).render(dom()));
    }
}

export default ActionButton;