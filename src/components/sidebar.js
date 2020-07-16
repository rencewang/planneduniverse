import React from "react"
import kebabCase from "lodash/kebabCase"
import { Link, useStaticQuery, graphql } from "gatsby"

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
                {data.allMarkdownRemark.type.map(type => (
                <li key={type.fieldValue}>
                    <Link to={`/type/${kebabCase(type.fieldValue)}/`}>
                    {type.fieldValue} ({type.totalCount})
                    </Link>
                </li>
                ))}
            </ul>
            
        </div>
    )
}