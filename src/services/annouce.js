import fetch from './fetch'


export function fetchNotice(params){
	return fetch({
		url:'/common/GetAnnounce',
		params:params|{}
	}).then(annouce => annouce)
}

export function getAllNotice(params){
	return params || {}
}