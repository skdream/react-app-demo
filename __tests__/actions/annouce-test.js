
jest.dontMock('es6-promise');
require('es6-promise').polyfill();

jest.mock('../../src/services/fetch')
// import * as annouce from '../../src/services/annouce'
import {fetchNotice} from '../../src/services/annouce'




console.log(fetchNotice)

describe('annouce',() => {
	describe('获取公告列表', () => {

	    it('正确返回公告数组',  () => {
	    	// expect([1,2]).toEqual([1,2])
			return fetchNotice().then(res => expect(res.data).toEqual([4,6,7])).catch(err => console.log(err))
	    });
	})
})