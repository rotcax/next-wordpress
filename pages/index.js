import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { getAllPosts } from '../lib/api'

export const getStaticProps = async () => {
  const allPosts = await getAllPosts()
  console.log(allPosts);
  return {
    props: {
      allPosts
    }
  }
}

export default function Home({ allPosts: { edges } }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to our demo blog!</h1>
        <p>
          You can find more articles on the{' '}
          <Link href='/blog'>
          <a>blog articles page</a>
          </Link>
        </p>
        {
          edges.map(({ node }) => (
            <div key={node.id}>
              <div>
                <h2>{node.title}</h2>
                <p>{node.extraPostInfo.authorExcerpt}</p>
              </div>
            </div>
          ))
        }
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
