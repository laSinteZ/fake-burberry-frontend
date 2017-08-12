import styled from "styled-components";
import Button from "./Button"

const ButtonSize = Button.extend`
  width: auto;
  padding: 0.5rem 1rem;
  
  margin-right: 0.5rem;
  margin-bottom: 2rem;
  ${props =>
    props.isActive &&
    `
    font-weight: bold;
  `};
`;

export default ButtonSize;
