import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Seo from '../components/seo';
import Layout from '../components/layout';
import Postcard from '../components/postcard';
import Navigation from '../components/navigation';

import '../styles/layout.scss';

const Tags = ({
  data,
  pageContext: { nextPagePath, previousPagePath, tag },
}) => {
  const {
    allMarkdownRemark: { edges: posts },
  } = data;

  return (
    <Layout>
      <div className="category-title">
        Posts with tag: <span>{tag}</span>
      </div>

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
    </Layout>
  );
};

Tags.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.shape({
    nextPagePath: PropTypes.string,
    previousPagePath: PropTypes.string,
  }),
};

export const postsQuery = graphql`
  query ($limit: Int!, $skip: Int!, $tag: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$tag] } } }
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

export default Tags;

export const Head = () => <Seo />;
