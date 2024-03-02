import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Postcard from '../components/postcard';
import Navigation from '../components/navigation';

import '../styles/layout.css';

const Types = ({
  data,
  pageContext: { nextPagePath, previousPagePath, type },
}) => {
  const {
    allMarkdownRemark: { edges: posts },
  } = data;

  return (
    <>
      <SEO />
      <Layout>
        <div className="infoBanner">
          Plans of: <span>{type}</span>
        </div>

        <div className="index-container">
          {posts.map(({ node }) => {
            const {
              id,
              excerpt: autoExcerpt,
              frontmatter: {
                title,
                date,
                path,
                author,
                coverImage,
                excerpt,
                tags,
                location,
                type,
              },
            } = node;

            return (
              <Postcard
                key={id}
                title={title}
                date={date}
                path={path}
                author={author}
                tags={tags}
                location={location}
                type={type}
                coverImage={coverImage}
                excerpt={excerpt || autoExcerpt}
              />
            );
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
  );
};

Types.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.shape({
    nextPagePath: PropTypes.string,
    previousPagePath: PropTypes.string,
  }),
};

export const postsQuery = graphql`
  query ($limit: Int!, $skip: Int!, $type: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { type: { in: [$type] } } }
      sort: { frontmatter: { date: DESC } }
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
            author
            excerpt
            tags
            location
            type
            coverImage {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 800)
              }
            }
          }
        }
      }
    }
  }
`;

export default Types;
