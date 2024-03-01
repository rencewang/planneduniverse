import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Navigation from './navigation';
import { toKebabCase } from '../helpers';

import style from '../styles/post.module.css';

const Post = ({
  title,
  date,
  path,
  coverImage,
  excerpt,
  tags,
  html,
  location,
  type,
  previousPost,
  nextPost,
}) => {
  const previousPath = previousPost && previousPost.frontmatter.path;
  const previousLabel = previousPost && previousPost.frontmatter.title;
  const nextPath = nextPost && nextPost.frontmatter.path;
  const nextLabel = nextPost && nextPost.frontmatter.title;

  return (
    <div className={style.post}>
      <div className={style.postContent}>
        <h1 className={style.title}>
          {excerpt ? <Link to={path}>{title}</Link> : title}
        </h1>

        <div className={style.meta}>
          {location ? (
            <div className={style.tags}>
              <Link
                to={`/place/${toKebabCase(location).toLowerCase()}/`}
                key={toKebabCase(location)}
              >
                <span className={style.tag}>{location}</span>
              </Link>
            </div>
          ) : null}

          {type ? (
            <div className={style.tags}>
              <Link
                to={`/type/${toKebabCase(type).toLowerCase()}/`}
                key={toKebabCase(type)}
              >
                <span className={style.tag}>{type}</span>
              </Link>
            </div>
          ) : null}
        </div>

        {excerpt ? (
          <>
            <p>{excerpt}</p>
            <Link to={path} className={style.readMore}>
              Read more →
            </Link>
          </>
        ) : (
          <>
            <div
              className={style.markdowncontent}
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <Navigation
              previousPath={previousPath}
              previousLabel={previousLabel}
              nextPath={nextPath}
              nextLabel={nextLabel}
            />
          </>
        )}
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
  location: PropTypes.string,
  type: PropTypes.string,
  previousPost: PropTypes.object,
  nextPost: PropTypes.object,
};

export default Post;
