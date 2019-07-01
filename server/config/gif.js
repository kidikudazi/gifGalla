const gifApi = (request) =>{
	const getGif = (rating,mycallback)=>{
		const API_KEY = "QQe5QJ8JsKWMKCh8m6Czr1ZRgUvNY83r";
		const options = {
			url: `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=27&rating=${rating}`,
			headers : {
                'content-type': 'application/json',
                'cache-control': 'no-cache'    
            }
		}

		const callback = (error, response, body)=>{
			return mycallback(error, body);
		}

		request(options, callback);
	}

	const loadMoreGif = (totalCount,rating,mycallback)=>{
		const API_KEY = "QQe5QJ8JsKWMKCh8m6Czr1ZRgUvNY83r";
		const options = {
			url: `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${totalCount}&rating=${rating}`,
			headers : {
                'content-type': 'application/json',
                'cache-control': 'no-cache'    
            }
		}

		const callback = (error, response, body)=>{
			return mycallback(error, body);
		}

		request(options, callback);
	}

	return {getGif, loadMoreGif};
}

module.exports = gifApi;