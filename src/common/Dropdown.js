import styled from 'styled-components';
import arrow from '../assets/arrow.svg';

const Dropdown = styled.button`
  padding: 0;
  border: 0;
  display: inline-block;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  font-size: 12px;
  line-height: 1rem;
  font-weight: 600;  
  color: #999999;  
  background-color: Transparent;
  cursor: pointer;
  
  ::after{
    display: inline-block;    
    width: 12px;
    height: 6px;
    margin-left: 0.5rem;
    background: url(${arrow});
    background-size: cover;
    content: '';
  }
`;

export default Dropdown;
