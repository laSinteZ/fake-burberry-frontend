import React from "react";
import styled from "styled-components";

const ButtonColour = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  font-size: 0;

  margin-right: 1rem;

  border: ${props => (props.active ? 'solid 1px #232122' : 'none')};
  background-color: ${props => props.value};
`;

export default function(props) {
  return (
    <ButtonColour value={props.value} type="button" active={props.isActive}>
      {props.colourName + ' colour'} 
    </ButtonColour>
  );
}
