import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { toKebabCase } from '../helpers';

import '../styles/post.scss';

const Post = ({
  title,
  date,
  path,
  coverImage,
  excerpt,
  tags,
  html,
  category,
  type,
  previousPost,
  nextPost,
}) => {
  const previousPath = previousPost && previousPost.frontmatter.path;
  const previousLabel = previousPost && previousPost.frontmatter.title;
  const nextPath = nextPost && nextPost.frontmatter.path;
  const nextLabel = nextPost && nextPost.frontmatter.title;

  return (
    <div className="post">
      <div className="postContent">
        <h1 className="title">
          <Link to={path}>{title}</Link>
        </h1>

        <div className="metadata">
          <div className="tags">
            {tags.map((tag) => (
              <Link to={`/tag/${toKebabCase(tag).toLowerCase()}/`} key={tag}>
                <span className="tag">{tag}</span>
              </Link>
            ))}
          </div>
        </div>

        <div
          className="markdowncontent"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
};

Post.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  path: PropTypes.string,
  coverImage: PropTypes.object,
  excerpt: PropTypes.string,
  html: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  category: PropTypes.string,
  type: PropTypes.string,
  previousPost: PropTypes.object,
  nextPost: PropTypes.object,
};

export default Post;
