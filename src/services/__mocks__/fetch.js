// jest.dontMock('es6-promise');
// require('es6-promise').polyfill();

const actions = {
	"GetAnnounce":{data:["公告公告公告","公告2公告2公告2"]}
}

export default function fetch(params){


	return new Promise((resolve, reject) => {


		const actionType = params.url.substr('/common/'.length)


		const res = actions[actionType];



	    process.nextTick(
	      () => res ? resolve(res) : reject({
	        error: 'action with ' + actionType + ' not found.',
	      })
	    );




		// if(res){
		// 	resolve(res)
		// }else{
		// 	reject('not found')
		// }
	})
}



