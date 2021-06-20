import React, { useState, ReactElement, useCallback, ChangeEvent } from 'react'

import { Filter } from 'types'
import useFetch from 'hooks/useFetch'
import GameList from './GameList'
import { GAMES_API } from 'hooks/constants';

const GameListContainer = (): ReactElement => {
	const [filter, setFilter] = useState<Filter>({
		platform: 'browser',
		sortBy: 'relevance',
	})
	const { games, error} = useFetch(filter,GAMES_API)

	const onFilterChange = useCallback((e: ChangeEvent<HTMLFormElement>) => {
		setFilter(current => ({
			...current,
			[e.target.name]: e.target.value,
		}))
		e.preventDefault()
	}, [])

	return <GameList err={error} games={games} onFilterChange={onFilterChange} />
}

export default GameListContainer
