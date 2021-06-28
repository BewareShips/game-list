import useFetchSingle from 'hooks/useFetchSingle'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import {
	CardContainer,
	ButtonContainer,
	Image,
	DetailsContainer,
	Header,
	Text,
	Span,
	SpanInfo,
	StyledLink,
	StyledBtn,
} from './styles'

const GameInfo = () => {
	const { id } = useParams<{ id: string }>()
	const { game } = useFetchSingle(id)
	const [slideIndex, setSlideIndex] = useState(1)

	const nextSlide = () => {
		if (slideIndex !== game.screenshots.length) {
			setSlideIndex(slideIndex + 1)
		} else if (slideIndex === game.screenshots.length) {
			setSlideIndex(1)
		}
	}

	const prevSlide = () => {
		if (slideIndex !== 1) {
			setSlideIndex(slideIndex - 1)
		} else if (slideIndex === 1) {
			setSlideIndex(game.screenshots.length)
		}
	}

	return (
		<CardContainer>
			{game?.screenshots.map((el, i) => (
				
					slideIndex === i + 1 && (
					<Image key={el.id}>
						<img src={el.image} />
						<ButtonContainer>
							<StyledBtn onClick={nextSlide}>Next</StyledBtn>
							<StyledBtn onClick={prevSlide}>Prev</StyledBtn>
						</ButtonContainer>
					</Image>
					)
			
			))}

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
				<StyledLink href={game?.game_url}>Link to game</StyledLink>
			</div>
		</CardContainer>
	)
}

export default React.memo(GameInfo)
