import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Seo from '../components/seo';
import Layout from '../components/layout';
import Postcard from '../components/postcard';
import Navigation from '../components/navigation';

import '../styles/layout.scss';

const Index = ({ data, pageContext: { nextPagePath, previousPagePath } }) => {
  const {
    allMarkdownRemark: { edges: posts },
  } = data;

  return (
    <>
      <Seo />
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
            } = node;

            return (
              <Postcard
                key={id}
                title={title}
                date={date}
                path={path}
                coverImage={coverImage.childImageSharp.gatsbyImageData}
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
        </div>
      </Layout>
    </>
  );
};

Index.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.shape({
    nextPagePath: PropTypes.string,
    previousPagePath: PropTypes.string,
  }),
};

export const postsQuery = graphql`
  query ($limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "//posts//" }
        frontmatter: { published: { eq: true } }
      }
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

export default Index;
