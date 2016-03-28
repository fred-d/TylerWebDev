// Streams
// ------------------------------

var stepTransitionClickStream = new Rx.Subject();

// Actions
// ------------------------------

var nextStep = function() {
    stepTransitionClickStream.onNext({
        action: "nextStep"
    });
};

var prevStep = function() {
    stepTransitionClickStream.onNext({
        action: 'prevStep'
    });
};

var goTo = function(step) {
    stepTransitionClickStream.onNext({
        action: "goToStep",
        step: step
    });
};

export {
    nextStep,
    prevStep,
    goTo,
    stepTransitionClickStream
};
