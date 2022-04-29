import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'
import Postcard from '../components/postcard'
import Navigation from '../components/navigation'

import '../styles/layout.css'

const Index = ({ data, pageContext: { nextPagePath, previousPagePath } }) => {
  const {
    allMarkdownRemark: { edges: posts },
  } = data

  // let isMouseHover = false
  // const test = document.getElementById("scroll")

  // useEffect(()=>{
  //   test.addEventListener("mouseleave", function (event) {
  //     isMouseHover = false
  //     // event.target.textContent = "mouse out"
  //     console.log(isMouseHover)
  //   }, false)
  //   test.addEventListener("mouseover", function (event) {
  //     isMouseHover = true
  //     // event.target.textContent = "mouse in"
  //     console.log(isMouseHover)
  //   }, false)
  //   document.addEventListener('wheel', horizontalScroll, {passive: false})
  //   document.addEventListener('mousewheel', horizontalScroll, {passive: false})
  //   if(!isMouseHover) {
  //     document.removeEventListener('wheel', horizontalScroll, {passive: false})
  //     document.removeEventListener('mousewheel', horizontalScroll, {passive: false})
  //   }
  // })

  // const horizontalScroll = e => {
  //   if(isMouseHover) {
  //     e.preventDefault()
  //     var container = document.getElementById('scroll')
  //     var containerScrollPosition = document.getElementById('scroll').scrollLeft
  //     container.scrollTo({
  //         top: 0,
  //         left: containerScrollPosition + e.deltaY
  //     })
  //   }
  // }

  return (
    <>
      <SEO />
      <Layout>

        <div className="index-container">
        {posts.map(({ node }) => {
        const {
          id,
          excerpt: autoExcerpt,
          frontmatter: {
            title,
            date,
            path,
            coverImage,
            excerpt,
            tags,
            location,
            type,
          },
        } = node

        return (
          <Postcard
            key={id}
            title={title}
            date={date}
            path={path}
            coverImage={coverImage}
            tags={tags}
            location={location}
            type={type}
            excerpt={excerpt || autoExcerpt}
          />
        )
        })}

        <Navigation
          previousPath={previousPagePath}
          previousLabel="Newer posts"
          nextPath={nextPagePath}
          nextLabel="Older posts"
        />
        </div>

      </Layout>
    </>
  )
}

Index.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.shape({
    nextPagePath: PropTypes.string,
    previousPagePath: PropTypes.string,
  }),
}

export const postsQuery = graphql`
  query($limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//posts//" }, frontmatter: { published: { eq: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
            path
            excerpt
            tags
            location
            type
            coverImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Index
