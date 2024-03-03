import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

const Seo = ({ description, lang, keywords, url, title }) => {
  const data = useStaticQuery(graphql`
    query DefaultSEOQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `);

  const {
    title: defaultTitle,
    description: defaultDescription,
    url: defaultUrl,
    author,
  } = data.site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: url || defaultUrl,
    author: author,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:creator" content={seo.author} />
      <meta name="twitter:description" content={seo.description} />
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"
      />
    </>
  );
};

Seo.defaultProps = {
  lang: `en`,
  keywords: [
    'floor plan',
    'blog',
    'yatch',
    'plans',
    'maps',
    'property',
    'real estate',
    'new york',
    'airplanes',
  ],
  url: 'https://metadome.rence.la',
  title: 'Metadome',
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  url: PropTypes.string,
  title: PropTypes.string,
};

export default Seo;
