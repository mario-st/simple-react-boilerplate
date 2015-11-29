"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
    displayName: "root",
    render: function render() {
        return _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
                "header",
                null,
                _react2.default.createElement(
                    "h1",
                    null,
                    "it works!"
                )
            ),
            _react2.default.createElement(
                "main",
                null,
                _react2.default.createElement(
                    "p",
                    null,
                    "have fun!"
                )
            ),
            _react2.default.createElement(
                "footer",
                null,
                _react2.default.createElement(
                    "p",
                    null,
                    "good bye!"
                )
            )
        );
    }
});
//# sourceMappingURL=root.js.map
