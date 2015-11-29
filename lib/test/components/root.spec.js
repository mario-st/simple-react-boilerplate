"use strict";

var _expect = require("expect");

var _expect2 = _interopRequireDefault(_expect);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _root = require("../../components/root");

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("root component tests", function () {

    it("should exist", function () {
        (0, _expect2.default)(_root2.default).toExist();
    });
});
//# sourceMappingURL=root.spec.js.map
