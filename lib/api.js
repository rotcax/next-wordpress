const API_URL = process.env.WP_API_URL

const fetchAPI = async (query, { variables } = {}) => {
  const headers = { 'Content-Type': 'application/json' }

  const res = await fetch('http://pintalo-wordpress.thecodeworkers.com/index.php?graphql', {
    method: 'POST',
    headers,
    body: JSON.stringify({ query, variables })
  })

  const json = await res.json()

  if(json.errors) {
    console.log(json.errors)
    throw new Error('Failed to fetch API')
  }

  return json.data
}

export const getAllPosts = async () => {
  const data = await fetchAPI(
    `
      query AllPosts {
        posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
          edges {
            node {
              id
              date
              title
              slug
            }
          }
        }
      }
    `
  )

  return data?.posts
}
