"use strict";

import React from "react";
import ReactDom from "react-dom";
import Root from "./components/root.jsx";

let rootElement = document.getElementById('root');

// == START REACT VERSION < 1 ==
let major = React.version.split('.')[ 0 ];
if (1 > +major) {
    require("react-tap-event-plugin")();
} else {
    console.warn('deprecated: "react-tap-event-plugin" is no longer needed.');
    console.info('npm rm react-tap-event-plugin --save');
    console.warn('cleanup app.js');
}
// === END REACT VERSION < 1 ===

ReactDom.render(<Root/>, rootElement);