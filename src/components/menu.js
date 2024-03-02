import React from 'react';
import PropTypes from 'prop-types';

import Icon from './icon';
import '../styles/menu.css';

const toggleIcon = `M22 41C32.4934 41 41 32.4934 41 22C41 11.5066 32.4934 3 22
3C11.5066 3 3 11.5066 3 22C3 32.4934 11.5066 41 22 41ZM7 22C7
13.7157 13.7157 7 22 7V37C13.7157 37 7 30.2843 7 22Z`;

const Menu = ({ onChangeTheme }) => {
  return (
    <>
      <button
        className="themeToggle"
        onClick={onChangeTheme}
        type="button"
        aria-label="Theme toggle"
      >
        <Icon style={{ cursor: 'pointer' }} size={24} d={toggleIcon} />
      </button>
    </>
  );
};

Menu.propTypes = {
  onChangeTheme: PropTypes.func,
};

export default Menu;
