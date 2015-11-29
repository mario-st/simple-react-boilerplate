"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _root = require("./components/root.jsx");

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootElement = document.getElementById('root');

// == START REACT VERSION < 1 ==
var major = _react2.default.version.split('.')[0];
if (1 > +major) {
    require("react-tap-event-plugin")();
} else {
    console.warn('deprecated: "react-tap-event-plugin" is no longer needed.');
    console.info('npm rm react-tap-event-plugin --save');
    console.warn('cleanup app.js');
}
// === END REACT VERSION < 1 ===

_reactDom2.default.render(_react2.default.createElement(_root2.default, null), rootElement);
//# sourceMappingURL=app.js.map
