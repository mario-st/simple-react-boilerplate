
import expect, { createSpy, spyOn, isSpy } from "expect";
import React from "react/addons";
import ReactDom from "react-dom";
import Root from "../../src/components/root.jsx";

let TestUtils = React.addons.TestUtils;

describe("root component tests", function () {

    it("displays the content of the root element", () => {
        let root = TestUtils.renderIntoDocument(<Root/>);

        let headerText = TestUtils.findRenderedDOMComponentWithTag(root, "header");
        let mainText = TestUtils.findRenderedDOMComponentWithTag(root, "main");
        let footerText = TestUtils.findRenderedDOMComponentWithTag(root, "footer");

        expect(headerText.textContent).toEqual('it works!');
        expect(mainText.textContent).toEqual('have fun!');
        expect(footerText.textContent).toEqual('good bye!');
    });

});
