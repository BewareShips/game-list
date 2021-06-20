import styled from 'styled-components'
import { breakpoints } from 'styles/breakpoints'
import { secondaryColor } from 'styles/theme';

export const CardContainer = styled.div`
width: 100%;
max-width: 98rem;
padding: 5rem;
margin: 0 5rem;
background: ${secondaryColor};
display:flex;
align-items:center;
border-radius:.8rem 0;
border: 2px solid #fff;
@media (max-width: ${breakpoints.desktop}){
		flex-direction:column;
	}

`

export const Image = styled.div`
  min-width: 35rem;
  max-width: 35rem;
  height: 30rem;
  transform:translateX(-8rem);
  @media (max-width: ${breakpoints.desktop}){
		transform:translateX(1rem);
	}
  
  img {
    width: 100%;
    height: 100%;
    object-fit:cover;
    border: 2px solid #fff;
    border-radius: 0% .8rem;
  }
`;

export const DetailsContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 60vw;
  padding-right: 8rem;
  align-items:center;
`;

export const Header = styled.h1`
  margin: 1.5rem 0 2rem;
  color: #3a42c9;
  font-weight: 2.5rem;
  font-size: 2.5rem;
`;



export const Text = styled.p`
  color: rgba(0,0,0,.7);
  margin-bottom:3rem;
  font-size:1.2rem;
`;

export const Span = styled.span`
display: block;
color:rgba(0,0,0,.5);
font-size:1.2rem;
font-weight: 500;
margin: .5rem 0;
`

export const SpanInfo = styled.span`
font-weight: 600;
color: #2454a5cc;

`

export const Info = styled.div`
width:100%;
display:flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
`

export const StyledLink = styled.a`
display: inline-block;
padding: 15px 40px;
letter-spacing:1px;
font-size:1.2rem;
color:#fff;
background-color: red;
border:2px solid white;
text-decoration:none;
border-radius: .8rem;
`









