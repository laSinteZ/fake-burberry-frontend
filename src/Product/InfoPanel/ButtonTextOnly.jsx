import styled from 'styled-components';

const ButtonTextOnly = styled.button`
  padding: 0;
  border: none;
  color: #171717;
  text-align: left;
  font-size: 12px;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  line-height: 1.35;
  cursor: pointer;
  
  align-self: flex-start;

  margin-top: 0.5rem;
  background-color: Transparent;

  @media screen and (min-width: 62rem) {
    margin: 0;
  }
`;

export default ButtonTextOnly;
