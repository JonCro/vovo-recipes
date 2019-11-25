const path = require('path');

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve('./src/templates/blog.js')
  const recipesTemplate = path.resolve('./src/templates/recipes.js')

  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      },
      allContentfulRecipes {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  const blogPosts = res.data.allContentfulBlogPost.edges;
  blogPosts.forEach((edge) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  })

  const recipes = res.data.allContentfulRecipes.edges;
  recipes.forEach(({node}) => {
    createPage({
      component: recipesTemplate,
      path: `/recipes/${node.slug}`,
      context: {
        slug: node.slug
      }
    })
  })
}
