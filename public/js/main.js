(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _IntentsFormDataJs = require('./../Intents/formData.js');

var Cause = (function (_React$Component) {
    _inherits(Cause, _React$Component);

    function Cause() {
        _classCallCheck(this, Cause);

        _get(Object.getPrototypeOf(Cause.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Cause, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.refs.input.getDOMNode().focus();
        }
    }, {
        key: 'change',
        value: function change(event) {
            (0, _IntentsFormDataJs.set)('cause', event.target.value);
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'label',
                null,
                this.props.error || 'Your Cause - Why do you deserve a free site?',
                React.createElement('textarea', { ref: 'input', name: 'cause', onChange: this.change, value: this.props.formValue })
            );
        }
    }]);

    return Cause;
})(React.Component);

exports['default'] = Cause;
module.exports = exports['default'];

},{"./../Intents/formData.js":6}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _IntentsFormDataJs = require('./../Intents/formData.js');

var Email = (function (_React$Component) {
    _inherits(Email, _React$Component);

    function Email() {
        _classCallCheck(this, Email);

        _get(Object.getPrototypeOf(Email.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Email, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.refs.input.getDOMNode().focus();
        }
    }, {
        key: 'change',
        value: function change(event) {
            (0, _IntentsFormDataJs.set)('email', event.target.value);
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'label',
                null,
                this.props.error || 'Email Address',
                React.createElement('input', { ref: 'input', type: 'text', name: 'email', onChange: this.change, value: this.props.formValue })
            );
        }
    }]);

    return Email;
})(React.Component);

exports['default'] = Email;
module.exports = exports['default'];

},{"./../Intents/formData.js":6}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _IntentsNextStepJs = require('./../Intents/nextStep.js');

var _IntentsSubmitJs = require('./../Intents/submit.js');

var Form = (function (_React$Component) {
    _inherits(Form, _React$Component);

    function Form() {
        var _this = this;

        _classCallCheck(this, Form);

        _get(Object.getPrototypeOf(Form.prototype), 'constructor', this).apply(this, arguments);

        this.trySubmit = function (event) {
            event.preventDefault();
            (0, _IntentsSubmitJs.submit)(_this.props.formData);
        };
    }

    _createClass(Form, [{
        key: 'goToNext',
        value: function goToNext(event) {
            event.preventDefault();
            (0, _IntentsNextStepJs.nextStep)();
        }
    }, {
        key: 'goToPrev',
        value: function goToPrev(event) {
            event.preventDefault();
            (0, _IntentsNextStepJs.prevStep)();
        }
    }, {
        key: 'checkForEnter',
        value: function checkForEnter(event) {
            event.preventDefault();
            (0, _IntentsNextStepJs.nextStep)();
        }
    }, {
        key: 'goDirectlyTo',
        value: function goDirectlyTo(step) {
            return function (event) {
                event.preventDefault;
                (0, _IntentsNextStepJs.goTo)(step);
            };
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var hasNext = this.props.currentStep < this.props.steps.length - 1;
            var hasPrev = this.props.currentStep > 0;
            var canSubmit = this.props.currentStep === this.props.steps.length - 1 || this.props.canSubmit;
            var activeStep = this.props.steps[this.props.currentStep];
            var ActiveStepComponent = activeStep.component;

            if (!this.props.formComplete) {
                return React.createElement(
                    'div',
                    { className: 'form-with-progress' },
                    React.createElement(
                        'ol',
                        { className: 'progress' },
                        this.props.steps.map(function (step, i) {
                            var className = [];

                            if (_this2.props.currentStep === i) className.push('active');
                            if (step.error) className.push('error');

                            return React.createElement('li', { onClick: _this2.goDirectlyTo(i), className: className.join(' ') });
                        })
                    ),
                    React.createElement(
                        'form',
                        { action: '#', onSubmit: this.checkForEnter },
                        React.createElement(ActiveStepComponent, { formValue: this.props.formData[activeStep.name], error: activeStep.error, animation: this.props.animation }),
                        React.createElement(
                            'div',
                            { className: 'buttons' },
                            React.createElement(
                                'a',
                                { disabled: !hasPrev, className: 'button small', onClick: this.goToPrev },
                                'Previous'
                            ),
                            React.createElement(
                                'a',
                                { disabled: !hasNext, className: 'button small', onClick: this.goToNext },
                                'Next'
                            ),
                            React.createElement(
                                'a',
                                { disabled: !canSubmit, className: 'button small submit', onClick: this.trySubmit },
                                'Submit'
                            )
                        )
                    )
                );
            } else {
                return React.createElement(
                    'section',
                    null,
                    React.createElement(
                        'h2',
                        null,
                        React.createElement(
                            'small',
                            null,
                            React.createElement(
                                'svg',
                                { className: 'icon', x: '0px', y: '0px', viewBox: '0 0 20 20', style: { 'enable-background': 'new 0 0 20 20' } },
                                React.createElement('path', { d: 'M5.8,12.2V6H2C0.9,6,0,6.9,0,8v6c0,1.1,0.9,2,2,2h1v3l3-3h5c1.1,0,2-0.9,2-2v-1.82c-0.064,0.014-0.132,0.021-0.2,0.021h-7 V12.2z M18,1H9C7.9,1,7,1.9,7,3v8h7l3,3v-3h1c1.1,0,2-0.899,2-2V3C20,1.9,19.1,1,18,1z' })
                            )
                        ),
                        'Thank you for your correspondence'
                    ),
                    React.createElement(
                        'p',
                        { style: { 'text-align': 'center' } },
                        'Someone from Tyler Web Dev will contact you regarding your inquiry.'
                    )
                );
            }
        }
    }]);

    return Form;
})(React.Component);

exports['default'] = Form;
module.exports = exports['default'];

},{"./../Intents/nextStep.js":7,"./../Intents/submit.js":8}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _IntentsFormDataJs = require('./../Intents/formData.js');

var Name = (function (_React$Component) {
    _inherits(Name, _React$Component);

    function Name() {
        _classCallCheck(this, Name);

        _get(Object.getPrototypeOf(Name.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Name, [{
        key: 'change',
        value: function change(event) {
            event.preventDefault();
            (0, _IntentsFormDataJs.set)('name', event.target.value);
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'label',
                null,
                this.props.error || 'Organization Name',
                React.createElement('input', { ref: 'input', type: 'text', name: 'name', onChange: this.change, value: this.props.formValue })
            );
        }
    }]);

    return Name;
})(React.Component);

exports['default'] = Name;
module.exports = exports['default'];

},{"./../Intents/formData.js":6}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _IntentsFormDataJs = require('./../Intents/formData.js');

var limit = function limit(len, arr) {
    return arr.slice(0, len);
};

var Phone = (function (_React$Component) {
    _inherits(Phone, _React$Component);

    function Phone() {
        _classCallCheck(this, Phone);

        _get(Object.getPrototypeOf(Phone.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Phone, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.refs.input.getDOMNode().focus();
        }
    }, {
        key: 'change',
        value: function change(event) {
            // Remove all non-digits from the input field value
            (0, _IntentsFormDataJs.set)('phone', limit(10, event.target.value.replace(/\D/g, '').split('')).join(''));
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'label',
                null,
                this.props.error || 'Phone Number (Numbers Only)',
                React.createElement('input', { ref: 'input', type: 'text', name: 'phone', onChange: this.change, value: this.props.formValue })
            );
        }
    }]);

    return Phone;
})(React.Component);

exports['default'] = Phone;
module.exports = exports['default'];

},{"./../Intents/formData.js":6}],6:[function(require,module,exports){
// Streams
// ------------------------------

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var formDataChangeStream = new Rx.Subject();

// Actions
// ------------------------------

var set = function set(field, value) {
    formDataChangeStream.onNext({
        action: 'setField',
        field: field,
        value: value
    });
};

exports.set = set;
exports.formDataChangeStream = formDataChangeStream;

},{}],7:[function(require,module,exports){
// Streams
// ------------------------------

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var stepTransitionClickStream = new Rx.Subject();

// Actions
// ------------------------------

var nextStep = function nextStep() {
    stepTransitionClickStream.onNext({
        action: "nextStep"
    });
};

var prevStep = function prevStep() {
    stepTransitionClickStream.onNext({
        action: 'prevStep'
    });
};

var goTo = function goTo(step) {
    stepTransitionClickStream.onNext({
        action: "goToStep",
        step: step
    });
};

exports.nextStep = nextStep;
exports.prevStep = prevStep;
exports.goTo = goTo;
exports.stepTransitionClickStream = stepTransitionClickStream;

},{}],8:[function(require,module,exports){
// Streams
// ------------------------------

// -Click-------------Click--------------> Submit Button Clicks        | Event
// -Emit--------------Emit---------------> Dispatch 'try'              | Action
// -------------------------Success------> Dispatch 'success' response | Action
// --------Errors------------------------> Dispatch 'failure' response | Action

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var submitClickStream = new Rx.Subject();

var submitNotifyStream = submitClickStream.map({
    action: 'trySubmit'
});

var submitResponseStream = submitClickStream.flatMapLatest(function (formData) {
    return Rx.Observable.fromPromise(postFormData(formData));
}).map(function (response) {
    if (response !== 'ok') {
        return {
            action: 'submitFailure',
            errors: response
        };
    } else {
        return {
            action: 'submitSuccess'
        };
    }
});

// Actions
// ------------------------------

var submit = function submit(formData) {
    submitClickStream.onNext(formData);
};

var postFormData = function postFormData(formData) {
    var headers = {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    };

    return fetch('/', headers).then(function (response) {
        if (response.status === 200) return 'ok';else return response.json();
    });
};

exports.submit = submit;
exports.submitNotifyStream = submitNotifyStream;
exports.submitResponseStream = submitResponseStream;

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _ComponentsNameStepJsx = require('./../Components/NameStep.jsx');

var _ComponentsNameStepJsx2 = _interopRequireDefault(_ComponentsNameStepJsx);

var _ComponentsEmailStepJsx = require('./../Components/EmailStep.jsx');

var _ComponentsEmailStepJsx2 = _interopRequireDefault(_ComponentsEmailStepJsx);

var _ComponentsPhoneStepJsx = require('./../Components/PhoneStep.jsx');

var _ComponentsPhoneStepJsx2 = _interopRequireDefault(_ComponentsPhoneStepJsx);

var _ComponentsCauseStepJsx = require('./../Components/CauseStep.jsx');

var _ComponentsCauseStepJsx2 = _interopRequireDefault(_ComponentsCauseStepJsx);

var _IntentsNextStepJs = require('./../Intents/nextStep.js');

var _IntentsFormDataJs = require('./../Intents/formData.js');

var _IntentsSubmitJs = require('./../Intents/submit.js');

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
    steps: [{
        name: "name",
        error: false,
        component: _ComponentsNameStepJsx2['default']
    }, {
        name: "email",
        error: false,
        component: _ComponentsEmailStepJsx2['default']
    }, {
        name: "phone",
        error: false,
        component: _ComponentsPhoneStepJsx2['default']
    }, {
        name: "cause",
        error: false,
        component: _ComponentsCauseStepJsx2['default']
    }]
});

var updateState = function updateState(state, action) {
    switch (action.action) {
        // After the first action, we want to enable submitting from any step - so they can fix
        // their errors. Also set 'processing' to true so we can show a spinner. But it's probably unnecessary
        // because it happens so fast
        case 'trySubmit':
            return state.withMutations(function (state) {
                state.set('canSubmit', true);
                state.set('processingAjax', true);
            });
        // In the event of a failure, merge the errors back into the state and show that we're done with
        // the AJAX request
        case 'submitFailure':
            return state.withMutations(function (state) {
                var newSteps = state.get('steps').map(function (step, key) {
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
            return state.updateIn(['formData', action.field], function (value) {
                return action.value;
            });
        // When we want to advance, make sure we're going forward to a step that actually exists,
        // otherwise do nothing at all
        case 'nextStep':
            if (state.get('currentStep') < state.get('steps').count() - 1) return state.set('currentStep', state.get('currentStep') + 1);else return state;
        // Whe we want to go back, make sure we're not going into the negative indeces,
        // otherwise do nothing
        case 'prevStep':
            if (state.get('currentStep') > 0) return state.set('currentStep', state.get('currentStep') - 1);else return state;
        // When we want to go directly to a step, just do it. Nothing bad could ever happen, right?
        case 'goToStep':
            return state.set('currentStep', action.step);
    }
};

var state = Rx.Observable.merge(_IntentsNextStepJs.stepTransitionClickStream, _IntentsFormDataJs.formDataChangeStream, _IntentsSubmitJs.submitNotifyStream, _IntentsSubmitJs.submitResponseStream).scan(updateState, initialState).startWith(initialState);

exports.state = state;

},{"./../Components/CauseStep.jsx":1,"./../Components/EmailStep.jsx":2,"./../Components/NameStep.jsx":4,"./../Components/PhoneStep.jsx":5,"./../Intents/formData.js":6,"./../Intents/nextStep.js":7,"./../Intents/submit.js":8}],10:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersRestrict_to_pathJs = require('../helpers/restrict_to_path.js');

var _helpersRestrict_to_pathJs2 = _interopRequireDefault(_helpersRestrict_to_pathJs);

var _StoreContactFormJs = require('./Store/contactForm.js');

var _ComponentsFormJsx = require('./Components/Form.jsx');

var _ComponentsFormJsx2 = _interopRequireDefault(_ComponentsFormJsx);

(0, _helpersRestrict_to_pathJs2['default'])('/', function () {
    _StoreContactFormJs.state.subscribe(function (state) {
        ReactDOM.render(React.createElement(_ComponentsFormJsx2['default'], state.toJS()), document.getElementById('form'));
    });
});

},{"../helpers/restrict_to_path.js":13,"./Components/Form.jsx":3,"./Store/contactForm.js":9}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Map = (function (_React$Component) {
  _inherits(Map, _React$Component);

  function Map(props) {
    _classCallCheck(this, Map);

    _get(Object.getPrototypeOf(Map.prototype), 'constructor', this).call(this, props);

    this.state = {
      loading: false
    };
  }

  _createClass(Map, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.map = new google.maps.Map(this.refs.map, {
        center: this.props.origin,
        zoom: 15,
        mapTypeControl: false,
        streetViewControl: false,
        rotateControl: false,
        scrollwheel: false,
        draggable: window.innerWidth > 600
      });

      this.marker = new google.maps.Marker({
        position: this.props.origin,
        map: this.map,
        title: 'Tyler Web Dev'
      });

      this.directionsDisplay = new google.maps.DirectionsRenderer({
        map: this.map
      });

      this.forceUpdate();
    }
  }, {
    key: 'handleEnableDragging',
    value: function handleEnableDragging() {
      this.map.setOptions({ draggable: true });
      this.forceUpdate();
    }
  }, {
    key: 'handleGetDirections',
    value: function handleGetDirections() {
      var _this = this;

      this.setState({
        loading: true
      }, function () {
        navigator.geolocation.getCurrentPosition(function (position) {
          new google.maps.DirectionsService().route({
            destination: {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            },
            origin: _this.props.origin,
            travelMode: google.maps.TravelMode.DRIVING
          }, function (response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
              /**
               * Display the route on the map.
               */
              _this.directionsDisplay.setDirections(response);
            }

            /**
             * There was a problem with the route
             * TODO: nothing?
             */

            /**
             * Turn off loading
             */
            _this.setState({
              loading: false
            });
          });
        });
      });
    }
  }, {
    key: 'renderLoading',
    value: function renderLoading() {
      return React.createElement(
        'div',
        { className: 'loading' },
        React.createElement(
          'div',
          null,
          React.createElement('span', null)
        )
      );
    }
  }, {
    key: 'renderMap',
    value: function renderMap() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { className: 'map-controls-container' },
          this.map && this.map.draggable ? '' : React.createElement(
            'div',
            { onClick: this.handleEnableDragging.bind(this), className: 'map-button' },
            React.createElement('img', { src: '/img/icons/hand.svg', height: '20' })
          )
        ),
        React.createElement('div', { className: 'map', ref: 'map' }),
        React.createElement(
          'div',
          { style: { marginTop: '50px' } },
          navigator.geolocation ? React.createElement(
            'a',
            { className: 'button', onClick: this.handleGetDirections.bind(this) },
            'Get Directions!'
          ) : ''
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'map-component' },
        this.state.loading ? this.renderLoading() : '',
        this.renderMap()
      );
    }
  }]);

  return Map;
})(React.Component);

exports['default'] = Map;
module.exports = exports['default'];

},{}],12:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersRestrict_to_pathJs = require('../helpers/restrict_to_path.js');

var _helpersRestrict_to_pathJs2 = _interopRequireDefault(_helpersRestrict_to_pathJs);

var _ComponentsMapJsx = require('./Components/Map.jsx');

var _ComponentsMapJsx2 = _interopRequireDefault(_ComponentsMapJsx);

(0, _helpersRestrict_to_pathJs2['default'])('/', function () {
  ReactDOM.render(React.createElement(_ComponentsMapJsx2['default'], { origin: {
      lat: 32.285448,
      lng: -95.280382
    } }), document.getElementById('map-component'));
});

},{"../helpers/restrict_to_path.js":13,"./Components/Map.jsx":11}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = restrict_to_path;

function restrict_to_path(path, callback) {
  if (window.location.pathname === path) {
    callback();
  }
}

module.exports = exports["default"];

},{}],14:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersRestrict_to_pathJs = require('./helpers/restrict_to_path.js');

var _helpersRestrict_to_pathJs2 = _interopRequireDefault(_helpersRestrict_to_pathJs);

(0, _helpersRestrict_to_pathJs2['default'])('/', function () {
  document.getElementById('scroll-down-button').addEventListener('click', function () {
    d3.transition().duration(2000).tween("scroll", scrollTween(window.innerHeight));

    function scrollTween(offset) {
      return function () {
        var i = d3.interpolateNumber(window.pageYOffset || document.documentElement.scrollTop, offset);
        return function (t) {
          scrollTo(0, i(t));
        };
      };
    }
  });

  function generateMemberList(response) {
    var members = response.results;
    var membersList = document.createElement('ul');
    membersList.className = 'members-list';

    members.forEach(function (member) {
      var memberEntry = document.createElement('li');
      var name = document.createElement('strong');
      var duration = document.createElement('p');
      var avatar = document.createElement('div');
      avatar.className = 'avatar';
      avatar.style.background = 'url(' + (member.photo_url || '/img/Logo-Placeholder-Inv.png') + ')';

      var nameText = document.createTextNode(member.name);

      name.appendChild(nameText);

      memberEntry.appendChild(avatar);
      memberEntry.appendChild(name);
      memberEntry.appendChild(duration);

      membersList.appendChild(memberEntry);
    });

    document.getElementById('list-wrapper').appendChild(membersList);
  }

  (function () {
    /**
     * =========================================================================
     * Create the Members List
     * =========================================================================
     */
    fetch('https://meetup.tylerwebdev.io/members').then(function (response) {
      return response.json();
    }).then(generateMemberList);
  })();

  /**
   * =========================================================================
   * Create the patterned background
   * =========================================================================
   */
  var pattern = Trianglify({
    width: window.innerWidth,
    height: window.innerHeight,
    x_colors: 'YlGnBu',
    cell_size: 120
  });

  var tris = document.getElementById('tris');

  if (window.innerWidth >= 600) {
    tris.appendChild(pattern.svg());

    d3.select('#tris > svg').selectAll('path').attr('opacity', 0).attr('stroke-opacity', 0).transition().delay(function (d, i) {
      return Math.floor(Math.random() * 1000) + 1;
    }).duration(2500).attr('opacity', 1).attr('stroke-opacity', 1);

    window.onresize = function () {
      tris.removeChild(tris.lastChild);
      tris.appendChild(pattern.svg());
    };
  } else {
    tris.appendChild(pattern.canvas());

    window.onresize = function () {
      tris.removeChild(tris.lastChild);
      tris.appendChild(pattern.svg());
    };
  }

  /**
   * TODO: setup websocket server.
   */
  if (false) (function () {
    /**
     * =========================================================================
     * Play around with nyan cats
     * =========================================================================
     */

    // Setup a container for nyans
    var initialNyans = {};

    // Establish a WS connection to the nyan dispatcher
    var socket = io('http://localhost:9000');

    // Wrap the WS in an RX stream
    var eventStream = Rx.Observable.create(function (observer) {
      socket.on('event', function (data) {
        observer.onNext(data);
      });
    });

    // Establish an event stream that pushes mouse positions to the nyan dispatcher
    // on 100 ms intervals
    var movementStream = Rx.Observable.fromEvent(document.body, 'mousemove').map(function (event) {
      return {
        x: event.pageX,
        y: event.pageY
      };
    }).scan(function (coordWithHistory, newCoord) {
      return {
        prevX: coordWithHistory.x || 0,
        prevY: coordWithHistory.y || 0,
        x: newCoord.x,
        y: newCoord.y
      };
    }).sample(100);

    // Given a current nyanState and an event packet, figure out what to do
    var updateNyans = function updateNyans(nyanState, eventPacket) {
      switch (eventPacket.action) {
        case 'disconnect':
          delete nyanState[eventPacket.source];

          return nyanState;
        case 'move':
          nyanState[eventPacket.source] = {
            x: eventPacket.packet.x,
            y: eventPacket.packet.y,
            rot: Math.atan2(eventPacket.packet.x - eventPacket.packet.prevX, eventPacket.packet.y - eventPacket.packet.prevY) / (Math.PI / 180)
          };

          return nyanState;
      }
    };

    // Listen to the event stream from the WS and update the nyanState depending
    // on what it says is going on in the rest of the world
    var nyanState = eventStream.scan(updateNyans, initialNyans).startWith(initialNyans);

    // Every time we move the mouse on a 100 ms interval, alert the nyan dispatcher
    // that we've moved our mouse so it can tell everyone else
    movementStream.subscribe(function (coord) {
      socket.emit('move', coord);
    });

    // Whenver the nyanState changes, redraw all the nyans
    nyanState.subscribe(function (nyanCats) {
      for (nyan in nyanCats) {
        var cat = document.getElementById(nyan);

        if (cat === null) {
          cat = document.createElement('div');
          cat.id = nyan;
          cat.className = 'nyan';

          document.getElementById('nyans').appendChild(cat);
        }

        cat.style.left = nyanCats[nyan].x + 'px';
        cat.style.top = nyanCats[nyan].y + 'px';
      }
    });
  })();
});

},{"./helpers/restrict_to_path.js":13}],15:[function(require,module,exports){
'use strict';

require('./home');
require('./Form/app');
require('./Map/app');

},{"./Form/app":10,"./Map/app":12,"./home":14}]},{},[15]);

//# sourceMappingURL=main.js.map
