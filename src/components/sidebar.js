import React from "react"
import PropTypes from "prop-types"
import kebabCase from "lodash/kebabCase"
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"

import PostLink from "../components/postlink"
import style from '../styles/sidebar.module.css'

const Sidebar = () => {


    return(
        <div className={style.sidebar}>
            Hi
        </div>
    )
}

export default Sidebar

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//posts//" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "DD MMMM YYYY")
            title
            path
            tags
            location
            type
          }
        }
      }
    }
  }
`