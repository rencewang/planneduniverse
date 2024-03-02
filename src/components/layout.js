import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Sidebar from './sidebar';

import '../styles/layout.scss';

const Layout = ({ children }) => {
  return (
    <main>
      <header>
        <div className="header-container">
          <Link to="/">
            <div className="logo">
              <span className="logo-text">Metadome</span>
              <span className="logo-cursor" />
            </div>
          </Link>
        </div>
      </header>

      <section className="content">
        <div className="content-container">{children}</div>
      </section>

      <Sidebar />

      <footer>
        <div>
          <span className="footerCopyrights">
            © {new Date().getFullYear()} Metadome
          </span>
          <span className="footerCopyrights">
            Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
          </span>
        </div>
      </footer>
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
