import React from "react"
import PropTypes from "prop-types"
import kebabCase from "lodash/kebabCase"
import { Helmet } from "react-helmet"
import { Link, useStaticQuery, graphql } from "gatsby"

import PostLink from "../components/postlink"
import style from '../styles/sidebar.module.css'

export default () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "//posts//" } }
                sort: { fields: [frontmatter___date], order: DESC }
            ) {
                location: group(field: frontmatter___location) {
                    fieldValue
                    totalCount
                }
                type: group(field: frontmatter___type) {
                    fieldValue
                    totalCount
                }
            }
        }
    `)

    return (
        <div className={style.sidebar}>

            <h1>Places</h1>
            <ul>
                {data.allMarkdownRemark.location.map(location => (
                <li key={location.fieldValue}>
                    <Link to={`/place/${kebabCase(location.fieldValue)}/`}>
                    {location.fieldValue} ({location.totalCount})
                    </Link>
                </li>
                ))}
            </ul>

            <h1>Type</h1>
            <ul>
                {data.allMarkdownRemark.type.map(location => (
                <li key={location.fieldValue}>
                    <Link to={`/place/${kebabCase(location.fieldValue)}/`}>
                    {location.fieldValue} ({location.totalCount})
                    </Link>
                </li>
                ))}
            </ul>
            
        </div>
    )

    // <StaticQuery 
    //     query={graphql`
    //         query {
    //             allMarkdownRemark(
    //                 filter: { fileAbsolutePath: { regex: "//posts//" } }
    //                 sort: { fields: [frontmatter___date], order: DESC }
    //             ) {
    //                 edges {
    //                     node {
    //                         id
    //                         excerpt(pruneLength: 250)
    //                         frontmatter {
    //                         date(formatString: "DD MMMM YYYY")
    //                         title
    //                         path
    //                         tags
    //                         location
    //                         type
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     `}
    //     render={({
    //         data: {
    //             allMarkdownRemark: { edges },
    //         },
    //     }) => (
    //         <div className={style.sidebar}>
    //             Hi
    //         </div>
    //     )}
    // />
}

// const Sidebar = ({ data }) => {
//     const {
//       allMarkdownRemark: { edges: posts },
//     } = data

//     return(
//         <div className={style.sidebar}>
//             Hi
//         </div>
//     )
// }

// const postsQuery = graphql`
//   query{
//     allMarkdownRemark(
//       filter: { fileAbsolutePath: { regex: "//posts//" } }
//       sort: { fields: [frontmatter___date], order: DESC }
//     ) {
//       edges {
//         node {
//           id
//           excerpt
//           frontmatter {
//             title
//             date(formatString: "DD MMMM YYYY")
//             path
//             excerpt
//             tags
//             coverImage {
//               childImageSharp {
//                 fluid(maxWidth: 800) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `

// export default Sidebar