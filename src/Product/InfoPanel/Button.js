import styled from 'styled-components';

const Button = styled.button`
  padding: 1rem 0rem;
  border: 1px solid #171717;
  border-radius: 2px;
  background-color: Transparent;
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  line-height: 1.2;
  margin-bottom: 1rem;
  width: 100%;
  
  ${props =>
    props.primary &&
    `
    border: 1px solid #171717;
    background-color: #171717;
    color: #ffffff;
  `};
`;

export default Button;
