function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function parseJSON(response) {
  return response.json()
}

/**
 * 发送网络请求
 * @param params
 * @returns {promise}
 */
export default function fetch(params){

	params = params || {}
	return new Promise((resolve, reject) => {
        var config = {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                credentials: 'include', //send cookie
                method: params.method || 'POST',
                timeout: 5000,
                body: JSON.stringify(params.body || {})
            };

            resolve({data:[4,6,7]})

/*		fetch(params.url,config)
			.then(checkStatus)
			.then(parseJSON)
			.then(data => {
				resolve(data)
			}).catch(error => {
				reject(error)
			})*/
	})
}