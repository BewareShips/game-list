import React, { ChangeEvent, ReactElement } from 'react'
import { GENRES, PLATFORMS, SORT_BY } from './constants'
import { Form, Label, Select} from './styles'

interface Props {
	onChange: (e: ChangeEvent<HTMLFormElement>) => void
}

const GameFilter = ({ onChange }: Props): ReactElement => {
	return (
		<Form onChange={onChange}>
			<Label htmlFor="platform-select">
				Platform:
				<Select name="platform" id="platform-select">
					{PLATFORMS.map(el => (
						<option key={el.value} value={el.value}>
							{el.display}
						</option>
					))}
				</Select>
			</Label>

			<Label htmlFor="genre-select">
				GENRES:
				<Select name="genre" id="genre-select">
					{GENRES.map(el => (
						<option key={el.value} value={el.value}>
							{el.display}
						</option>
					))}
				</Select>
			</Label>

			<Label htmlFor="sortBy-select">
				Sort By:
				<Select name="sortBy" id="sortBy-select">
					{SORT_BY.map(el => (
						<option key={el.value} value={el.value}>
							{el.display}
						</option>
					))}
				</Select>
			</Label>
		</Form>
	)
}

export default GameFilter
