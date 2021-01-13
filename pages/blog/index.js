import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { getAllPosts } from '../../lib/api'

// { allPosts: { edges } }
const Blog = () => (
  <div className={styles.container}>
    <Head>
      <title>Blog articles page</title>
      <link rel="icon" href="/favicon.ico"/>
    </Head>
    <main>
      <h1 className={styles.title}>Latest blog articles</h1>
      <hr/>
      <section>
        {/* {
          edges.map(({ node }) => (
            <div key={node.id}>
              <div>
                <h2>{node.title}</h2>
                <p>{node.extraPostInfo.authorExcerpt}</p>
              </div>
            </div>
          ))
        } */}
      </section>
    </main>
  </div>
)

// export const getStaticProps = async () => {
//   const allPosts = await getAllPosts()
//   return {
//     props: {
//       allPosts
//     }
//   }
// }

export default Blog
