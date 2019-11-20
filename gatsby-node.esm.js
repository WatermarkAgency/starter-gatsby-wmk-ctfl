import Theme from './src/vars/ThemeOptions'

const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
  createRedirect({fromPath: '/', toPath: `${Theme.paths.home}`, isPermanent: true, redirectInBrowser: true})
  const pageTemplate = path.resolve("./src/node/page.js")
  return graphql(`
  {
    allWordpressPage {
      edges {
        node {
          id
          slug
          status
          template
          title
          content
        }
      }
    }
  }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post pages.
    result.data.allWordpressPage.edges.forEach(edge => {
      createPage({
        // Path for this page — required
        path: `${edge.node.slug}`,
        component: pageTemplate,
        context: edge.node,
      })
    })
  })
}