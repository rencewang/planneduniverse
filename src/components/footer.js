import React from 'react'
import PropTypes from 'prop-types'

const Footer = () => (
  <footer>
    <div>
      <span className="footerCopyrights">
        © {(new Date()).getFullYear()} built with <a href="https://www.gatsbyjs.org">Gatsby</a> <span> </span> 
        template by <a href="https://radoslawkoziel.pl">panr</a>
      </span>
    </div>
  </footer>
)

export default Footer
