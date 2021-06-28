import { secondaryTextColor, backgroundColor } from './../../styles/theme/index';
import styled from 'styled-components';
import { breakpoints } from 'styles/breakpoints';

export const Form = styled.form`
display:flex;
justify-content:space-between;
box-sizing:border-box;
max-width:542px;
padding: 0 16px;
margin: 24px auto;
color:${secondaryTextColor};

@media (min-width: ${breakpoints.tablet}){
  max-width: ${breakpoints.tablet};
}

@media (min-width: ${breakpoints.desktop}){
  max-width: 1010px;
}
`;

export const Label = styled.label`
  /* margin-right:16px; */
  flex-basis:25%;
  margin: 5px 10px;

  &:last-of-type{
    margin-right:0
  }
`;

export const Select = styled.select`

  width:100%;
  margin-top:0;
  color:white;
  padding:5px 10px;
  outline: none;
  font-size: 16px;
  background-color: ${backgroundColor}
`;

