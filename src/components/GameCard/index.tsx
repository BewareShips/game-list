import React, { ReactElement } from 'react'

import { Game } from 'types'

import {
	Img,
	StyledL,
	Title,
	Details,
	Description,
	Genre,
	Icon,
} from './styles'
import { BROWSER, WINDOWS } from './constans'

import windowIcon from 'assets/icons/windows.svg'
import browserIcon from 'assets/icons/browser.svg'

interface Props {
	content: Game
}

const GameCard = ({ content }: Props): ReactElement => {
	const { id, title, thumbnail, short_description, genre, platform } = content

	const icons = platform.split(',').map(el => {
		let icon = null
		switch (el.trim()) {
			case BROWSER:
				icon = (
					<Icon key={`${id}-browser`} alt="browser icon" src={browserIcon} />
				)
				break
			case WINDOWS:
				icon = <Icon key={`${id}-window`} alt="window icon" src={windowIcon} />
				break
			default:
				break
		}
		return icon
	})
	const link = `/game/${id}`
	return (
		<>
			<StyledL to={link}>
				<Img alt={`${title}`} src={thumbnail} />
				<Details>
					<Title>{title}</Title>
					<Description>{short_description}</Description>
					<Genre>{genre}</Genre>
					{icons}
				</Details>
			</StyledL>
		</>
	)
}

export default GameCard
