"use strict";

var React = require('react');
var ReactDom = require('react-dom');

var Root = require('./components/root');
var rootElement = document.getElementById('root');

var appRunner = function appRunner() {
    // == START REACT VERSION < 1 ==
    var major = React.version.split('.')[0];
    if (1 > +major) {
        require("react-tap-event-plugin")();
    } else {
        console.warn('deprecated: "react-tap-event-plugin" is no longer needed.');
        console.info('npm rm react-tap-event-plugin --save');
        console.warn('cleanup app.js');
    }
    // === END REACT VERSION < 1 ===

    ReactDom.render(React.createElement(Root, null), rootElement);
};

if (global.Intl) {
    appRunner();
} else {
    require.ensure(['intl'], function (require) {
        require('intl');
        appRunner();
    });
}
//# sourceMappingURL=app.js.map
