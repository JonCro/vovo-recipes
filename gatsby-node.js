const path = require('path');

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve('./src/templates/blog.js')
  const recipesTemplate = path.resolve('./src/templates/recipes.js')
  const tagTemplate = path.resolve('./src/templates/tag.js')

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
      },
      allContentfulCategories {
        edges{
          node {
            type,
            slug,
            recipes {
              title,
              slug
            },
            contentful_id
          }
        }
      }
    }
  `)

  const blogPosts = res.data.allContentfulBlogPost.edges;
  blogPosts.forEach(({ node }) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${node.slug}`,
      context: {
        slug: node.slug
      }
    })
  })

  const recipes = res.data.allContentfulRecipes.edges;
  recipes.forEach(({ node }) => {
    createPage({
      component: recipesTemplate,
      path: `/recipes/${node.slug}`,
      context: {
        slug: node.slug
      }
    })
  })

  const tags = res.data.allContentfulCategories.edges;
  tags.forEach(({ node }) => {
    createPage({
      component: tagTemplate,
      path: `/recipes/tags/${node.slug}`,
      context: {
        slug: node.slug,
        jon: true
      }
    })
  })
}
