import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import CheckboxWidthLabel from 'CheckboxWithLabel';

it('CheckboxWithlabel changes the text after click', () => {
    const checkbox = TestUtils.renderIntoDocument( <
        CheckboxWidthLabel labelOn = "On"
        labelOff = "Off" / >
    );

    const checkboxNode = ReactDOM.findDOMNode(checkbox);

    expect(checkboxNode.textContent).toEqual('Off');

    TestUtils.Simulate.change(
        TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input')
    )

    expect(checkboxNode.textContent).toEqual('On');
})