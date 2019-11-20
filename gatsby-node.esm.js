import Theme from './src/vars/ThemeOptions'

const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
  createRedirect({fromPath: '/', toPath: `${Theme.paths.home}`, isPermanent: true, redirectInBrowser: true})
  const pageTemplate = path.resolve("./src/node/page.js")
  return graphql(`
  {
    allContentfulBasicPages {
      edges {
        node {
          slug
          title
        }
      }
    }
  }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create site pages
    result.data.allContentfulBasicPages.edges.forEach(edge => {
      createPage({
        // Path for this page — required
        path: `${edge.node.slug}`,
        component: pageTemplate,
        context: edge.node,
      })
    })
  })
}