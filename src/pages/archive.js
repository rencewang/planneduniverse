import React from "react"
import { graphql } from "gatsby"

import PostLink from "../components/postlink"
import Layout from '../components/layout'

import '../styles/archive.scss'

const Archive = ({data: {allMarkdownRemark: { edges }}}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <div className="archive-listing">
        {Posts}
      </div>
    </Layout>
)}

export default Archive

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