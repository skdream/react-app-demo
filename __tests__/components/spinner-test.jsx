import React from 'react';

import {shallow, mount, render} from 'enzyme';

import Spinner from '../../src/components/spinner.jsx'

describe('Spinner测试',function(){
	it('正确渲染组件',function(){
		expect(shallow(<Spinner/>).contains(<div className="spinner"></div>)).toBe(true);
	});

	it('loading使用默认文字',function(){
		expect(mount(<Spinner/>).find('.text').text()).toEqual('Loading')
	})

	it('loading使用自定义文字',function(){
		expect(mount(<Spinner text="加载中..."/>).find('.text').text()).toEqual('加载中...')
	})
}) 