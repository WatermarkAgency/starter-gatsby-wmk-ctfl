/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ description, lang, title, path, slug }) => {
  const { site } = useStaticQuery(query);
  const slugVar = !slug || slug === "/" ? "" : slug;
  const pathVar = !slug || slug === "/" ? "" : path;
  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      link={[
        {
          rel: "canonical",
          href: `${site.baseUrl}${pathVar}${slugVar}`
        }
      ]}
      title={title}
      titleTemplate={`%s | ${site.title}`}
      meta={
        [
          {
            name: `description`,
            content: description
          },
          {
            property: `og:title`,
            content: title
          },
          {
            property: `og:description`,
            content: description
          },
          {
            property: `og:type`,
            content: `website`
          },
          {
            name: `twitter:card`,
            content: `summary`
          },
          {
            name: `twitter:creator`,
            content: site.title
          },
          {
            name: `twitter:title`,
            content: title
          },
          {
            name: `twitter:description`,
            content: description
          }
        ] //.concat(meta)
      }
    ></Helmet>
  );
};

SEO.defaultProps = {
  lang: `en`,
  description: ``,
  path: "/"
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
  path: PropTypes.string,
  slug: PropTypes.string.isRequired
};

export default SEO;
