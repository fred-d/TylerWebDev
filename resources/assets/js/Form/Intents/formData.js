// Streams
// ------------------------------

var formDataChangeStream = new Rx.Subject();

// Actions
// ------------------------------

var set = function(field, value) {
    formDataChangeStream.onNext({
        action: 'setField',
        field: field,
        value: value
    });
};

export {
    set,
    formDataChangeStream
};
