import React from 'react';
import { PropTypes } from 'prop-types';

import placeholder from '../assets/beer-placeholder.png';

export default function BeerItem({ beer }) {
  return (
    (beer?.name && beer?.description)
      ? (
        <li>
          <h3>{beer?.name}</h3>
          <div>
            <picture>
              <img src={beer?.image_url || placeholder} alt={beer?.name} />
            </picture>
            <p>{beer?.description}</p>
          </div>
          <hr />
        </li>
      )
      : ''
  );
}

BeerItem.propTypes = {
  beer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image_url: PropTypes.string,
  }).isRequired,
};
