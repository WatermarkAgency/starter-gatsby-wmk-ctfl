import { ContentfulImageQuery, GatsbyImageData } from "wmk-image";

/* Uncomment once connected to Contentful */
// import { graphql } from "gatsby";

// export const NodeImageAssetFields = graphql`
//   fragment NodeImageAsset on ContentfulAsset {
//     title
//     file {
//       url
//       contentType
//     }
//     description
//   }
// `;

// export const NodeImageQueryFields = graphql`
//   fragment NodeImageQuery on ContentfulAsset {
//     ...NodeImageAsset
//     gatsbyImageData
//   }
// `;

// export const NodeSeoImageQuery = graphql`
//   fragment NodeSeoImageQuery on ContentfulAsset {
//     ...NodeImageQueryFields
//     ogImage: gatsbyImageData(width: 1200, height: 630, quality: 80)
//     twitterImage: gatsbyImageData(width: 876, height: 438, quality: 80)
//   }
// `;

export interface SeoImageQuery extends ContentfulImageQuery {
  ogImage: GatsbyImageData;
  twitterImage: GatsbyImageData;
}
