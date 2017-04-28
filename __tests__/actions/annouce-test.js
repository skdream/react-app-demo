

jest.mock('services/fetch')
// import * as annouce from '../../src/services/annouce'
import {fetchNotice} from 'services/annouce'






describe('annouce',() => {
	describe('获取公告列表', () => {

	    it('正确返回公告数组',  () => {
	    	// expect([1,2]).toEqual([1,2])
			return fetchNotice().then(res => expect(res.data).toHaveLength(2)).catch(err => console.log(err))
	    });


	    it('正确返回公告数组',  () => {
	    	// expect([1,2]).toEqual([1,2])
			return fetchNotice().then(res => expect(res.data).toBeTruthy())
	    });
	    it('正确返回公告数组',  () => {
	    	// expect([1,2]).toEqual([1,2])
			return fetchNotice().then(res => expect(res.data).toContain('公告公告公告'))
	    });
	})
})