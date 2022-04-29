import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import Sidebar from './sidebar'

import '../styles/layout.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          logo {
            src
            alt
          }
          logoText
          defaultTheme
          showMenuItems
        }
      }
    }
  `)
  const {
    logoText,
    defaultTheme,
  } = data.site.siteMetadata

  return (
    <div className="container">
      <Header
        logoText={logoText}
        defaultTheme={defaultTheme}
      />
      <div className="content">{children}</div>
      <Sidebar />
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
