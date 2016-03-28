// Streams
// ------------------------------

// -Click-------------Click--------------> Submit Button Clicks        | Event
// -Emit--------------Emit---------------> Dispatch 'try'              | Action
// -------------------------Success------> Dispatch 'success' response | Action
// --------Errors------------------------> Dispatch 'failure' response | Action

var submitClickStream = new Rx.Subject();

var submitNotifyStream = submitClickStream.map({
    action: 'trySubmit'
});

var submitResponseStream = submitClickStream.flatMapLatest(function(formData) {
    return Rx.Observable.fromPromise(postFormData(formData));
}).map(function(response) {
    if (response !== 'ok') {
        return {
            action: 'submitFailure',
            errors: response
        };
    }
    else {
        return {
            action: 'submitSuccess'
        };
    }
});

// Actions
// ------------------------------

var submit = function(formData) {
    submitClickStream.onNext(formData);
};

var postFormData = function(formData) {
    let headers = {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    };
    
    return fetch('/', headers).then(function(response) {
        if (response.status === 200)
            return 'ok';
        else
            return response.json();
    });
};

export {
    submit,
    submitNotifyStream,
    submitResponseStream
}
