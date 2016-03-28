import {set} from './../Intents/formData.js';

export default class Cause extends React.Component {
    componentDidMount() {
        this.refs.input.getDOMNode().focus();
    }
    
    change(event) {
        set('cause', event.target.value);
    }
    
    render() {
        return (
            <label>{this.props.error || 'Your Cause - Why do you deserve a free site?'}
                <textarea ref="input" name="cause" onChange={this.change} value={this.props.formValue}></textarea>
            </label>
        );
    }
}
