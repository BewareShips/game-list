import React, { useState, ReactElement, useEffect } from 'react'
import axios from 'axios'
import { Game } from 'types'
import { API_HOST, API_KEY } from './constants'
import GameList from './GameList'

const GameListContainer = (): ReactElement => {
	const [games, setGames] = useState<Game[]>([])
	const [err, setErr] = useState<string>('')

	useEffect(() => {

    axios({
      url: `https://${API_HOST}/api/games`,
      method: 'get',
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': API_HOST,
      },
      params: {
        platform: 'browser',
      },
   })
   .then(res => setGames(res.data))
			.catch(e => setErr(e.message))
	},[])
  console.log(games)
	return <GameList err={err} games={games} />
}

export default GameListContainer
