import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import arrow from '../assets/arrow.svg';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;

  transform: translate3d(274px, 0, 0);
  transition: 0.3s cubic-bezier(0.77, 0, 0.175, 1);
  background: #ffffff;
  ${props => props.isOpened && css`transform: translate3d(0, 0, 0);`};
`;

const ButtonBack = styled.button`
  position: relative;
  flex-basis: 100%;
  padding: 0.9375rem 0.5rem;
  padding-left: 1.375rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  font-size: 0.875rem;
  text-align: left;
  color: #171717;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &::before {
    position: absolute;
    top: 1.1875rem;
    left: 0.3125rem;
    display: block;
    width: 0.75rem;
    height: 0.375rem;
    background: url(${arrow}) no-repeat;
    background-size: contain;
    transform: rotate(90deg);
    content: '';
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 169px;

  background: url(${props => props.image}) no-repeat left center;
  background-size: cover;
`;

const Title = styled.h2`
  width: 100%;
  display: block;

  margin: 0;
  padding: 1rem 0.5rem;

  background-color: rgba(255, 255, 255, 0.7);
  font-family: Lora, serif;
  font-weight: normal;
  font-size: 1.25rem;
  line-height: 1.25rem;
  color: #171717;
`;

const Links = styled.div`padding: 1rem 0.5rem;`;

const Link = styled(NavLink)`
  display: block;

  padding: 0.625rem 0;
  margin: 0;
  margin-bottom: 0.25rem;

  font-size: 0.875rem;
  font-weight: normal;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  line-heigth: 1rem;
  color: #171717;
  text-decoration: none;

  &.active {
    font-weight: bold;
    font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  }
`;

export default function Subsection(props) {
  return (
    <Wrapper isOpened={props.isOpened}>
      <ButtonBack type="button" onClick={props.close}>
        Home
      </ButtonBack>
      <Header image={props.content.image}>
        <Title>{props.content.title}</Title>
      </Header>
      <Links>
        {props.content.links.map(link => (
          <Link to={link.url} onClick={props.toggleHamburger} key={link.url}>
            {link.title}
          </Link>
        ))}
      </Links>
    </Wrapper>
  );
}

Subsection.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        url: PropTypes.string,
      }),
    ),
  }).isRequired,
  isOpened: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  toggleHamburger: PropTypes.func.isRequired,
};
