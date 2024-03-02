import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

import Icon from './icon';
import '../styles/header.css';
import '../styles/menu.css';

const toggleIcon = `M22 41C32.4934 41 41 32.4934 41 22C41 11.5066 32.4934 3 22
3C11.5066 3 3 11.5066 3 22C3 32.4934 11.5066 41 22 41ZM7 22C7
13.7157 13.7157 7 22 7V37C13.7157 37 7 30.2843 7 22Z`;

const Header = (props) => {
  const { logoText, defaultTheme } = props;

  const defaultThemeState =
    (typeof window !== 'undefined' && window.localStorage.getItem('theme')) ||
    null;
  const [userTheme, changeTheme] = useState(defaultThemeState);

  const onChangeTheme = () => {
    const opositeTheme =
      (userTheme || defaultTheme) === 'light' ? 'dark' : 'light';
    changeTheme(opositeTheme);

    typeof window !== 'undefined' &&
      window.localStorage.setItem('theme', opositeTheme);
  };

  return (
    <>
      <Helmet>
        <body
          className={
            (userTheme || defaultTheme) === 'light'
              ? 'light-theme'
              : 'dark-theme'
          }
        />
      </Helmet>

      <header className="header">
        <div className="inner">
          <Link to="/">
            <div className="logo">
              <span className="text">{logoText}</span>
              <span className="cursor" />
            </div>
          </Link>

          <span className="right">
            <button
              className="themeToggle"
              onClick={onChangeTheme}
              type="button"
              aria-label="Theme toggle"
            >
              <Icon style={{ cursor: 'pointer' }} size={24} d={toggleIcon} />
            </button>
          </span>
        </div>
      </header>
    </>
  );
};

Header.propTypes = {
  logoText: PropTypes.string,
  defaultTheme: PropTypes.string,
  onChangeTheme: PropTypes.func,
};

export default Header;
