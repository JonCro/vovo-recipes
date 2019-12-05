// import React from 'react';
// import { graphql, useStaticQuery, Link } from 'gatsby';

// import Layout from '../components/layout';
// import recipesStyles from './recipes.module.scss';
// import Head from '../components/head'

// const TagsPage = (props) => {
//   console.log('tag page')
//   console.log(props);

//   const data = useStaticQuery(graphql`
//     query {
//       allContentfulCategories {
//         edges{
//           node {
//             type,
//             slug,
//             recipes {
//               title,
//               slug
//             },
//             contentful_id
//           }
//         }
//       }
//     }
//   `)

//   return (
//     <Layout>
//       <Head />
//       <h1>Tags: hello</h1>
//       <ol className={recipesStyles.recipes}>
//           {data.allContentfulCategories.edges.map(post => 
//           (
//             <li className={recipesStyles.card} key={post.node.contentful_id}>
//               <Link to={`/tags/${post.node.slug}`}>
//                 <h2>{post.node.type}</h2>
//               </Link>
//             </li>
//           ))}
//         </ol>
//     </Layout>
//   )
// }

// export default TagsPage;