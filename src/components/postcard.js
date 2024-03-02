import React from 'react';
import { Link } from 'gatsby';
import GatsbyImage from 'gatsby-plugin-image';
import { toKebabCase } from '../helpers';

import '../styles/postcard.module.css';

const Postcard = ({ title, path, coverImage, location, type, date }) => (
  <div className="post">
    <div className="postContent">
      <div className="postcard">
        <h1 className="title">
          <Link to={path}>{title}</Link>
        </h1>

        {/* {coverImage && (
          <GatsbyImage
            image={coverImage.childImageSharp.gatsbyImageData}
            className="coverImage"
          />
        )} */}

        <div className="meta">
          {location ? (
            <div className="tags">
              <Link
                to={`/place/${toKebabCase(location).toLowerCase()}/`}
                key={toKebabCase(location)}
              >
                <span className="tag">{location}</span>
              </Link>
            </div>
          ) : null}

          {type ? (
            <div className="tags">
              <Link
                to={`/type/${toKebabCase(type).toLowerCase()}/`}
                key={toKebabCase(type)}
              >
                <span className="tag">{type}</span>
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  </div>
);

export default Postcard;
