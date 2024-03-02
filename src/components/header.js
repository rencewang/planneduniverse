import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

import Menu from './menu';
import '../styles/header.module.css';

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
            <Menu onChangeTheme={onChangeTheme} />
          </span>
        </div>
      </header>
    </>
  );
};

Header.propTypes = {
  logoText: PropTypes.string,
  defaultTheme: PropTypes.string,
};

export default Header;
