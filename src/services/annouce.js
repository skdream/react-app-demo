import request from './request'


export function fetchNotice(params){
	return request({
		url:'/common/GetAnnounce',
		params:params|{}
	}).then(annouce => annouce)
}