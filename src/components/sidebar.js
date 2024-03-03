import React from 'react';
import kebabCase from 'lodash/kebabCase';
import { Link, useStaticQuery, graphql } from 'gatsby';

import Search from './search';
import '../styles/sidebar.scss';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "//posts//" }
          frontmatter: { published: { eq: true } }
        }
        sort: { frontmatter: { date: DESC } }
      ) {
        tags: group(field: { frontmatter: { tags: SELECT } }) {
          fieldValue
          totalCount
        }
        type: group(field: { frontmatter: { type: SELECT } }) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  return (
    <div className="sidebar">
      {/* <Search searchIndex={data.siteSearchIndex.index} /> */}
      <div className="mobileflex">
        <div>
          <h1>Tags</h1>
          <ul>
            {data.allMarkdownRemark.tags.map((tag) => (
              <li key={tag.fieldValue}>
                <Link to={`/tag/${kebabCase(tag.fieldValue)}`}>
                  {tag.fieldValue} ({tag.totalCount})
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* add part about archive/recent posts here */}

        {/* <div>
          <h1>Category</h1>
          <ul>
            {data.allMarkdownRemark.type.map((type) => (
              <li key={type.fieldValue}>
                <Link to={`/type/${kebabCase(type.fieldValue)}/`}>
                  {type.fieldValue} ({type.totalCount})
                </Link>
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </div>
  );
};
