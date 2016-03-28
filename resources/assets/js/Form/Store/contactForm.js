import NameStep                                   from './../Components/NameStep.jsx';
import EmailStep                                  from './../Components/EmailStep.jsx';
import PhoneStep                                  from './../Components/PhoneStep.jsx';
import CauseStep                                  from './../Components/CauseStep.jsx';
import {stepTransitionClickStream}                from './../Intents/nextStep.js';
import {formDataChangeStream}                     from './../Intents/formData.js';
import {submitNotifyStream, submitResponseStream} from './../Intents/submit.js';

var initialState = Immutable.fromJS({
    processingAjax: false,
    formComplete: false,
    canSubmit: false,
    currentStep: 0,
    formData: {
        name: "",
        email: "",
        phone: "",
        cause: ""
    },
    steps: [
        {
            name: "name",
            error: false,
            component: NameStep
        },
        {
            name: "email",
            error: false,
            component: EmailStep
        },
        {
            name: "phone",
            error: false,
            component: PhoneStep
        },
        {
            name: "cause",
            error: false,
            component: CauseStep
        }
    ]
});

var updateState = function(state, action) {
    switch (action.action) {
        // After the first action, we want to enable submitting from any step - so they can fix
        // their errors. Also set 'processing' to true so we can show a spinner. But it's probably unnecessary
        // because it happens so fast
        case 'trySubmit':
            return state.withMutations(function(state) {
                state.set('canSubmit', true);
                state.set('processingAjax', true);
            }); 
        // In the event of a failure, merge the errors back into the state and show that we're done with
        // the AJAX request
        case 'submitFailure':
            return state.withMutations(function(state) {
                let newSteps = state.get('steps').map(function(step, key) {
                    return step.set('error', action.errors[step.get('name')] ? action.errors[step.get('name')][0] : false);
                });
                
                state.set('processingAjax', false);
                state.set('steps', newSteps);
            });
        // In the event of a success, close down the form and show the user a success message
        case 'submitSuccess':
            return state.set('formComplete', true);
        // When we update a field, set it on the state and proceed
        case 'setField':
            return state.updateIn(['formData', action.field], value => action.value);
        // When we want to advance, make sure we're going forward to a step that actually exists,
        // otherwise do nothing at all
        case 'nextStep':
            if (state.get('currentStep') < state.get('steps').count() - 1)
                return state.set('currentStep', state.get('currentStep') + 1);
            else
                return state;
        // Whe we want to go back, make sure we're not going into the negative indeces,
        // otherwise do nothing
        case 'prevStep':
            if (state.get('currentStep') > 0)
                return state.set('currentStep', state.get('currentStep') - 1);
            else
                return state;
        // When we want to go directly to a step, just do it. Nothing bad could ever happen, right?
        case 'goToStep':
            return state.set('currentStep', action.step);
    }
};

var state = Rx.Observable
    .merge(
        stepTransitionClickStream,
        formDataChangeStream,
        submitNotifyStream,
        submitResponseStream
    )
    .scan(updateState, initialState)
    .startWith(initialState);

export {
    state
}
