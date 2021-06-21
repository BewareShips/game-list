import useFetchSingle from 'hooks/useFetchSingle'
import React  from 'react'
import { useParams } from 'react-router-dom'
import {
	CardContainer,
	Image,
	DetailsContainer,
	Header,
	Text,

	Span,
	SpanInfo,
	StyledLink,
} from './styles'

const GameInfo = () => {
	const { id } = useParams<{ id: string }>()
	const { game, error } = useFetchSingle(id)

	return (
		
			<CardContainer>
				<Image>
					<img src="https://picsum.photos/1000/1000" />
				</Image>
				<div>
					<DetailsContainer>
						<Header>{game?.title}</Header>

						<Span>
							<SpanInfo>Status:</SpanInfo>
							{game?.status}
						</Span>
						<Span>
							<SpanInfo>Genre:</SpanInfo>
							{game?.genre}
						</Span>
						<Span>
							<SpanInfo>Publisher:</SpanInfo>
							{game?.publisher}
						</Span>
						<Span>
							<SpanInfo>Release date:</SpanInfo>
							{game?.release_date}
						</Span>
					</DetailsContainer>

					<Text>{game?.description}</Text>
					<StyledLink href={game?.game_url}>Read</StyledLink>
				</div>
			</CardContainer>
		
	)
}

export default GameInfo
