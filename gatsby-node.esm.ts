import path from "path";

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
 // const pageTemplate = path.resolve("./src/node/page.tsx");

 /* uncomment / modify once data & queries are ready
  return graphql(`
    {
      pages: allContentfulPage {
        edges {
          node {
            slug
            parentPath
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

        result.data.pages.edges.forEach((edge) => {
      const { slug, parentPath } = edge.node;
      if (slug !== "home") {
        createPage({
          // Path for this page — required
          path: `${
            parentPath !== "/" && parentPath !== null ? parentPath : ""
          }/${slug}`,
          component: pageTemplate,
          context: {
            slug,
            parentPath
          }
        });
      }
    });

    
  });*/
};

