import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";

const Schema = ({ graphs }) => {
  const { meta, options, people } = useStaticQuery(query);

  const generateGraph = (type, graphMeta = {}) => {
    const info = {
      "@type": type,
      "@id": meta.baseUrl + "/#" + type.toLowerCase()
    };
    return {
      ...info,
      ...graphMeta
    };
  };

  const organization = generateGraph("Organization", {
    name: meta.title,
    url: meta.baseUrl,
    sameAs: options.social.map(s => s.url),
    employee: people.edges.map(e => {
      const person = e.node;
      const name = person.name.split(" ");
      return {
        "@type": "Person",
        name: person.name,
        image:
          person.mainImage && person.mainImage.file && person.mainImage.file.url
            ? person.mainImage.file.url
            : "",
        familyName: name[name.length - 1],
        givenName: name[0],
        jobTitle: person.jobTitle,
        sameAs: person.websiteUrl
      };
    }),
    address: {
      "@type": "PostalAddress",
      streetAddress: options.street,
      addressLocality: options.city,
      addressRegion: options.state,
      postalCode: options.zip,
      addressCountry: "USA"
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Sales",
      telephone: options.phone.replace(/\D/g, ""),
      email: options.email
    },
    logo: {
      "@type": "ImageObject",
      "@id": meta.baseUrl + "/#logo",
      url: options.logo.file.url,
      caption: meta.title
    }
  });

  const website = generateGraph("WebSite", {
    name: meta.title,
    url: meta.baseUrl,
    publisher: {
      "@id": meta.baseUrl + "/#organization"
    }
  });

  graphs.push(organization, website);
  const schema = {
    "@context": "https://schema.org",
    "@graph": []
  };
  graphs.forEach(graph => schema["@graph"].push(graph));
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default Schema;

Schema.defaultProps = {
  graphs: []
};

Schema.propTypes = {
  graphs: PropTypes.array
};


