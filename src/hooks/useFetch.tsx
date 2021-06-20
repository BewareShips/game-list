import { API_KEY, API_HOST } from 'hooks/constants'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Filter, Response, Game } from 'types'

const useFetch = (params: Filter,search:string): Response => {
	const [games, setGames] = useState<Game[]>([])
	const [err, setErr] = useState<string>('')
	const { platform, genre, tag, sortBy } = params

	useEffect(() => {
		axios({
			url: `https://${API_HOST}/api/${search}`,
			method: 'get',
			headers: {
				'x-rapidapi-key': API_KEY,
				'x-rapidapi-host': API_HOST,
			},
			params: {
				platform,
				category: genre,
				tag,
				'sort-by': sortBy,
			},
		})
			.then(res => setGames(res.data))
			.catch(e => setErr(e.message))
	}, [platform, genre, tag, sortBy])
	return {
		games,
		error: err,
	}
}

export default useFetch
