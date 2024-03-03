import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import Postcard from '../components/postcard';

import '../styles/pages.scss';

const Archive = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter((edge) => !!edge.node.frontmatter.date)
    .map(({ node: post }) => {
      return (
        <div key={post.id}>
          <Link to={post.frontmatter.path}>
            <div className="archive-title">{post.frontmatter.title}</div>
          </Link>
          <div className="archive-details">
            on {post.frontmatter.date} <br />
            in {post.frontmatter.location} <span> </span>
            of {post.frontmatter.type}
          </div>
        </div>
        // <Postcard
        //   key={post.id}
        //   title={post.frontmatter.title}
        //   date={post.frontmatter.date}
        //   path={post.frontmatter.path}
        //   tags={post.frontmatter.tags}
        //   location={post.frontmatter.location}
        //   type={post.frontmatter.type}
        //   excerpt={post.excerpt || post.autoExcerpt}
        // />
      );
    });

  return (
    <Layout>
      <div className="archive-listing">{Posts}</div>
    </Layout>
  );
};

export default Archive;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//posts//" } }
      sort: { frontmatter: { date: DESC } }
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
`;
