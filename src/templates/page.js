import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Seo from '../components/seo';
import Layout from '../components/layout';
import Post from '../components/post';

const PageTemplate = ({ data, pageContext }) => {
  const {
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
    excerpt: autoExcerpt,
    id,
    html,
  } = data.markdownRemark;
  const { next, previous } = pageContext;

  return (
    <Layout>
      <Seo title={title} description={excerpt || autoExcerpt} />
      <Post
        key={id}
        title={title}
        date={date}
        path={path}
        author={author}
        coverImage={coverImage}
        html={html}
        tags={tags}
        location={location}
        type={type}
        previousPost={previous}
        nextPost={next}
      />
    </Layout>
  );
};

export default PageTemplate;

PageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.shape({
    next: PropTypes.object,
    previous: PropTypes.object,
  }),
};

export const pageQuery = graphql`
  query ($path: String) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
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
      id
      html
      excerpt
    }
  }
`;
