import restrict_to_path from '../helpers/restrict_to_path.js';
import {state} from './Store/contactForm.js';
import Form    from './Components/Form.jsx';

restrict_to_path('/', () => {
    state.subscribe(function(state) {
        ReactDOM.render(<Form {...state.toJS()} />, document.getElementById('form'));
    });
});
