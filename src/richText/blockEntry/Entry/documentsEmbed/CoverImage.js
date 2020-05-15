import React from "react";
import Image from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

export default ({ title }) => {
  const { image } = useStaticQuery(query).file;
  return image && image.fixed ? (
    <Image fixed={image.fixed} alt={title + " cover image"} />
  ) : null;
};

const query = graphql`
  {
    file(name: { eq: "coverImage" }) {
      image: childImageSharp {
        fixed(width: 162, height: 230) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
