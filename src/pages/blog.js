import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

import Layout from '../components/layout';

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title,
              date
            },
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div>
        <h1>Blog</h1>
        <ol>
          {data.allMarkdownRemark.edges.map(post => (
            <li>
              <Link to={`/blog/${post.node.fields.slug}`}>
                <h2>{post.node.frontmatter.title}</h2>
                <p>{post.node.frontmatter.date} - time to read {post.node.timeToRead}</p>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </Layout>
  )
}

export default BlogPage;
