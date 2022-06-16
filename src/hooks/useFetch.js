import {useState, useEffect} from 'react'

export function useFetch(url){

		const [data, setData] = useState([]);
		const [loading, setLoading] = useState(false);
		


		useEffect(() => {
				fetch(url, {mode: 'cors'})
						.then(response => response.json())
						.then(data => setData(data))
						.catch(e => setError(e))
						.finally(() => setLoading(false))
		}, [url])
				
		return {data, loading}
}

