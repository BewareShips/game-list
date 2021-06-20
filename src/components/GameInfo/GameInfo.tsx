import useFetchSingle from 'hooks/useFetchSingle'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Game } from 'types'
import {
	CardContainer,
	Image,
	DetailsContainer,
	Header,
	Text,
	Info,
	Span,
	SpanInfo,
	StyledLink,
} from './styles'

const GameInfo = () => {
	const [data, setData] = useState<Game>()
	const [GameError, setGameError] = useState({})

	const { id } = useParams<{ id: string }>()

	const sendRequest = async (id: string) => {
		const { game, error } = await useFetchSingle(id)
		if (game) {
			setData(game)
		} else {
			setGameError(error)
		}
	}

	useEffect(() => {
		sendRequest(id)
	}, [id])

	return (
			<CardContainer>
				<Image>
					<img src="https://picsum.photos/1000/1000" />
				</Image>

				<DetailsContainer>
					<Header>{data?.title}</Header>
					<Info>
						<Span>
							<SpanInfo>Status:</SpanInfo>
							{data?.status}
						</Span>
						<Span>
							<SpanInfo>Genre:</SpanInfo>
							{data?.genre}
						</Span>
						<Span>
							<SpanInfo>Publisher:</SpanInfo>
							{data?.publisher}
						</Span>
						<Span>
							<SpanInfo>Release date:</SpanInfo>
							{data?.release_date}
						</Span>
					</Info>

					<Text>{data?.description}</Text>
					<StyledLink href={data?.game_url}>Read</StyledLink>
				</DetailsContainer>
			</CardContainer>
	)
}

export default GameInfo
