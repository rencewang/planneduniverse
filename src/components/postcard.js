import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { toKebabCase } from '../helpers';

import '../styles/postcard.css';

const Postcard = ({ title, path, coverImage, tags, location, type, date }) => (
  <div className="post">
    <div className="postContent">
      <div className="postcard">
        <h1 className="title">
          <Link to={path}>{title}</Link>
        </h1>
        <h2>{date}</h2>

        {coverImage && (
          <GatsbyImage image={coverImage} className="coverImage" />
        )}

        <div className="metadata">
          <div className="tags">
            {tags.map((tag) => (
              <Link to={`/tag/${toKebabCase(tag).toLowerCase()}/`} key={tag}>
                <span className="tag">{tag}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Postcard;
