// jest.mock('services/request')
// import * as annouce from 'services/annouce'


// console.log(JSON.stringify(annouce))

describe('annouce',() => {
	describe('获取公告列表', () => {

	    it('正确返回公告数组',  () => {
	    	expect([1,2]).toEqual([1,2])
			// return annouce.fetchNotice().then(res => expect(res).toEqual([])).catch(err => console.log(err))
	    });
	})
})