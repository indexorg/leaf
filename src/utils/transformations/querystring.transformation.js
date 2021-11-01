export const queryString = (object, fullPath = true) => {
	// start with a question mark to append to the api url
	var requestString = fullPath ? '?' : '&'

	for (var key in object) {
		if(object[key] !== null && object[key] !== undefined && object[key].length) {
            if(typeof object[key] == 'object') {
                requestString = `${requestString}${key}=${JSON.stringify(object[key])}`
            } else {
                requestString = `${requestString}${key}=${object[key]}`
            }

			requestString = `${requestString}&`
		}
	}

	// return formatted string (eg: ?page=4,include=[24,50,67,854])
	return requestString.substring(0, requestString.length - 1)
}