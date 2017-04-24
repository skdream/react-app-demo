import React from 'react';
import TestUtils from 'react-dom/test-utils'
import Link from '../src/Link';

import renderer from 'react-test-renderer';

it('正确渲染', () => {
    const tree = renderer.create( 
    <Link page = "http://www.chebada.com" > 车巴达 </Link>
    ).toJSON();
    expect(tree).toMatchSnapshot();
})

it('没有设置page时渲染为一个锚点',() => {
    const tree = renderer.create(
        <Link>车巴达</Link>
    ).toJSON();
    expect(tree).toMatchSnapshot();
})

it('当hover时改变class',() => {
    const component = renderer.create(
        <Link page="http://www.chebada.com">车巴达</Link>
    )

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.onMouseEnter();
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();


    tree.props.onMouseLeave();
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})