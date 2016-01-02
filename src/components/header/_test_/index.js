import React from 'react';
import TestUtils from 'react-addons-test-utils';
import test from 'tape';
import Header from '../';

test('The component...', t => {

    const renderer = TestUtils.createRenderer();
    renderer.render(<Header/>);
    const output = renderer.getRenderOutput();

    t.plan(2);
    t.same(output.type, 'div', 'is a div');
    t.ok(output.props.children.includes('Hello'), `contains a "${ output.props.children }" text`);
});
