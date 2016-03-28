(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cause = (function (_React$Component) {
    _inherits(Cause, _React$Component);

    function Cause() {
        _classCallCheck(this, Cause);

        _get(Object.getPrototypeOf(Cause.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(Cause, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "label",
                null,
                "Your Cause - Why do you deserve a free site?",
                React.createElement("textarea", { name: "cause" })
            );
        }
    }]);

    return Cause;
})(React.Component);

exports["default"] = Cause;
module.exports = exports["default"];

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Email = (function (_React$Component) {
    _inherits(Email, _React$Component);

    function Email() {
        _classCallCheck(this, Email);

        _get(Object.getPrototypeOf(Email.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(Email, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "label",
                null,
                "Email Address",
                React.createElement("input", { type: "text", name: "email" })
            );
        }
    }]);

    return Email;
})(React.Component);

exports["default"] = Email;
module.exports = exports["default"];

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _IntentsNextStepJs = require('./../Intents/nextStep.js');

var Form = (function (_React$Component) {
    _inherits(Form, _React$Component);

    function Form() {
        _classCallCheck(this, Form);

        _get(Object.getPrototypeOf(Form.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(Form, [{
        key: "goToNext",
        value: function goToNext(event) {
            event.preventDefault();
            (0, _IntentsNextStepJs.nextStep)();
        }
    }, {
        key: "goToPrev",
        value: function goToPrev(event) {
            event.preventDefault();
            (0, _IntentsNextStepJs.prevStep)();
        }
    }, {
        key: "render",
        value: function render() {
            var hasNext = this.props.currentStep < this.props.steps.length - 1;
            var hasPrev = this.props.currentStep > 0;
            var activeStep = this.props.steps[this.props.currentStep];
            var ActiveStepComponent = activeStep.component;

            return React.createElement(
                "form",
                { action: "#" },
                React.createElement(ActiveStepComponent, null),
                hasPrev ? React.createElement(
                    "button",
                    { "class": "button", onClick: this.goToPrev },
                    "Previous"
                ) : '',
                hasNext ? React.createElement(
                    "button",
                    { "class": "button", onClick: this.goToNext },
                    "Next"
                ) : ''
            );
        }
    }]);

    return Form;
})(React.Component);

exports["default"] = Form;
module.exports = exports["default"];

},{"./../Intents/nextStep.js":7}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

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
            (0, _IntentsFormDataJs.set)('name', event.target.value);
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'label',
                null,
                'Organization Name',
                React.createElement('input', { type: 'text', name: 'name', onChange: this.change })
            );
        }
    }]);

    return Name;
})(React.Component);

exports['default'] = Name;
module.exports = exports['default'];

},{"./../Intents/formData.js":6}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Phone = (function (_React$Component) {
    _inherits(Phone, _React$Component);

    function Phone() {
        _classCallCheck(this, Phone);

        _get(Object.getPrototypeOf(Phone.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(Phone, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "label",
                null,
                "Phone Number",
                React.createElement("input", { type: "text", name: "phone" })
            );
        }
    }]);

    return Phone;
})(React.Component);

exports["default"] = Phone;
module.exports = exports["default"];

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var formDataChangeStream = new Rx.Subject();

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
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var stepTransitionClickStream = new Rx.Subject();

var nextStep = function nextStep(data) {
    stepTransitionClickStream.onNext({
        action: "nextStep",
        formData: data
    });
};

var prevStep = function prevStep() {
    stepTransitionClickStream.onNext({
        action: 'prevStep'
    });
};

exports.nextStep = nextStep;
exports.prevStep = prevStep;
exports.stepTransitionClickStream = stepTransitionClickStream;

},{}],8:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _ComponentsNameStepJsx = require('./Components/NameStep.jsx');

var _ComponentsNameStepJsx2 = _interopRequireDefault(_ComponentsNameStepJsx);

var _ComponentsEmailStepJsx = require('./Components/EmailStep.jsx');

var _ComponentsEmailStepJsx2 = _interopRequireDefault(_ComponentsEmailStepJsx);

var _ComponentsPhoneStepJsx = require('./Components/PhoneStep.jsx');

var _ComponentsPhoneStepJsx2 = _interopRequireDefault(_ComponentsPhoneStepJsx);

var _ComponentsCauseStepJsx = require('./Components/CauseStep.jsx');

var _ComponentsCauseStepJsx2 = _interopRequireDefault(_ComponentsCauseStepJsx);

var _ComponentsFormJsx = require('./Components/Form.jsx');

var _ComponentsFormJsx2 = _interopRequireDefault(_ComponentsFormJsx);

var _IntentsNextStepJs = require('./Intents/nextStep.js');

var _IntentsFormDataJs = require('./Intents/formData.js');

var initialState = Immutable.fromJS({
    currentStep: 0,
    animation: null,
    formData: {
        name: "",
        email: "",
        phone: "",
        cause: ""
    },
    steps: [{
        name: "Name",
        component: _ComponentsNameStepJsx2['default']
    }, {
        name: "Email",
        component: _ComponentsEmailStepJsx2['default']
    }, {
        name: "Phone",
        component: _ComponentsPhoneStepJsx2['default']
    }, {
        name: "Cause",
        component: _ComponentsCauseStepJsx2['default']
    }]
});

var updateState = function updateState(state, action) {
    switch (action.action) {
        case 'setField':
            return state.updateIn(['formData', action.field], function (value) {
                return action.value;
            });
        case 'nextStep':
            return state.set('currentStep', state.get('currentStep') + 1);
        case 'prevStep':
            return state.set('currentStep', state.get('currentStep') - 1);
        default:
            return state;
    }
};

var state = Rx.Observable.merge(_IntentsNextStepJs.stepTransitionClickStream, _IntentsFormDataJs.formDataChangeStream).scan(updateState, initialState).startWith(initialState);

state.subscribe(function (state) {
    console.log(state.toJS());

    ReactDOM.render(React.createElement(_ComponentsFormJsx2['default'], state.toJS()), document.getElementById('form'));
});

},{"./Components/CauseStep.jsx":1,"./Components/EmailStep.jsx":2,"./Components/Form.jsx":3,"./Components/NameStep.jsx":4,"./Components/PhoneStep.jsx":5,"./Intents/formData.js":6,"./Intents/nextStep.js":7}]},{},[8]);
