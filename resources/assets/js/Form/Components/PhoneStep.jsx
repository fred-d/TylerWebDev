import {set} from './../Intents/formData.js';

var limit = function(len, arr) {
    return arr.slice(0, len);
}

export default class Phone extends React.Component {
    componentDidMount() {
        this.refs.input.getDOMNode().focus();
    }
    
    change(event) {
        // Remove all non-digits from the input field value
        set('phone', limit(10, event.target.value.replace(/\D/g, '').split('')).join(''));
    }
    
    render() {
        return (
            <label>{this.props.error || 'Phone Number (Numbers Only)'}
                <input ref="input" type="text" name="phone" onChange={this.change} value={this.props.formValue} />
            </label>
        );
    }
}
