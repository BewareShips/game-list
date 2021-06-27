import { API_KEY, API_HOST } from 'hooks/constants'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { SingleGame } from 'types'

const useFetchSingle = (params: string) => {
	const [game, setGame] = useState<SingleGame >()
	const [err, setErr] = useState<string>('')

	useEffect(() => {
		axios({
			url: `https://${API_HOST}/api/game`,
			method: 'get',
			headers: {
				'x-rapidapi-key': API_KEY,
				'x-rapidapi-host': API_HOST,
			},
			params: {
				id: params,
			},
		})
			.then(res => setGame(res.data))
			.catch(e => setErr(e.message))
	}, [params])
	return {
		game,
		error: err,
	}
}

export default useFetchSingle
