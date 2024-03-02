import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import '../styles/navigation.module.css';

const Navigation = ({ nextPath, previousPath, nextLabel, previousLabel }) =>
  previousPath || nextPath ? (
    <div className="navigation">
      {previousPath && (
        <span className="button">
          <Link to={previousPath}>
            <span className="iconPrev">←</span>
            <span className="buttonText">{previousLabel}</span>
          </Link>
        </span>
      )}
      {nextPath && (
        <span className="button">
          <Link to={nextPath}>
            <span className="buttonText">{nextLabel}</span>
            <span className="iconNext">→</span>
          </Link>
        </span>
      )}
    </div>
  ) : null;

Navigation.propTypes = {
  nextPath: PropTypes.string,
  previousPath: PropTypes.string,
  nextLabel: PropTypes.string,
  previousLabel: PropTypes.string,
};

export default Navigation;
