import styled from 'styled-components'
import { breakpoints } from 'styles/breakpoints'
import { primaryTextColor, secondaryColor } from 'styles/theme'

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 3rem 5rem;
`

export const CardContainer = styled.div`
	margin: 5rem;
	padding: 2rem;
	background: ${secondaryColor};
	display: flex;
	align-items: center;
	border-radius: 0.8rem 0;
	border: 2px solid #fff;
	@media (max-width: ${breakpoints.desktop}) {
		flex-direction: column;
	}
	@media (max-width: ${breakpoints.tablet}) {
		border: 2px solid transparent;
	}
`

export const Image = styled.div`
	min-width: 30rem;
	max-width: 30rem;
	height: 30rem;
	transform: translateX(-6rem);
	@media (max-width: ${breakpoints.desktop}) {
		transform: translate(0, -6rem);
	}

	@media (max-width: ${breakpoints.mobile}) {
		min-width: 20rem;
		max-width: 20rem;
		height: 20rem;
	}

	img {
		width: 100%;
		object-fit: cover;
		border: 2px solid #fff;
		border-radius: 0% 0.8rem;
	}
`

export const DetailsContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const Header = styled.h1`
	margin: 1.5rem 0 2rem;
	color: #cf99bf;
	font-weight: 2.5rem;
	font-size: 2.5rem;
	@media (max-width: ${breakpoints.tablet}) {
		align-items: center;
		font-size: 42px;
	}
	@media (max-width: ${breakpoints.desktop}) {
		align-items: center;
		font-size: 32px;
	}
`

export const Text = styled.p`
	color: ${primaryTextColor};
	margin-bottom: 3rem;
	font-size: 1.2rem;
	max-width: 50rem;
	@media (max-width: ${breakpoints.tablet}) {
		padding: 0 1rem;
	}
`

export const Span = styled.span`
	display: block;
	color: ${primaryTextColor};
	font-size: 1.2rem;
	font-weight: 500;
	margin: 0.5rem 0;
`

export const SpanInfo = styled.span`
	font-weight: 600;
	color: #5f7baacc;
`

export const StyledLink = styled.a`
	float: right;
	padding: 1.2rem 3rem;
	letter-spacing: 1px;
	text-transform: uppercase;
	font-size: 1.2rem;
	color: #fff;
	background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
	border-radius: 0.8rem;
	text-decoration: none;
	&:hover {
		background-image: linear-gradient(to right, #00f2fe 0%, #4facfe 110%);
	}
`

export const Im = styled.div`
img{
	width: 100px;
	height: 100px;
}
	
`
