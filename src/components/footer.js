import React from 'react'

const Footer = () => (
  <footer>
    <div>
      <span className="footerCopyrights">
        © {(new Date()).getFullYear()} Planned Universe
      </span>
      <span className="footerCopyrights">
        Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
      </span>
    </div>
  </footer>
)

export default Footer
