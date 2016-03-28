import {set} from './../Intents/formData.js';

export default class Email extends React.Component {
    componentDidMount() {
        this.refs.input.getDOMNode().focus();
    }
    
    change(event) {
        set('email', event.target.value);
    }
    
    render() {
        return (
            <label>{this.props.error || 'Email Address'}
                <input ref="input" type="text" name="email" onChange={this.change} value={this.props.formValue} />
            </label>
        );
    }
}
