import {set} from './../Intents/formData.js';

export default class Name extends React.Component {    
    change(event) {
        event.preventDefault();
        set('name', event.target.value);
    }
    
    render() {
        return (
            <label>{this.props.error || 'Organization Name'}
                <input ref="input" type="text" name="name" onChange={this.change} value={this.props.formValue} />
            </label>
        );
    }
}
