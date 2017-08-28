import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function ButtonLike(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15">
      <defs>
        <path
          id="a"
          d="M7.001 14L1.2 7.749c-1.634-1.806-1.592-4.695.083-6.455 1.571-1.647 4.064-1.738 5.718-.18 1.676-1.558 4.19-1.467 5.76.225 1.634 1.76 1.655 4.627.042 6.41L7.001 14z" // eslint-disable-line
        />
      </defs>
      <use
        fillRule="nonzero"
        stroke="#171717"
        transform="translate(1 1)"
        xlinkHref="#a"
        fill={props.isLiked ? '#171717' : 'none'}
      />
    </svg>
  );
}

ButtonLike.propTypes = {
  isLiked: PropTypes.bool.isRequired,
};
