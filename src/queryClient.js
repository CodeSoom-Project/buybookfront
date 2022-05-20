import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const BASE_URL = `https://fakestoreapi.com`

// Create a client
export const getClient =(() => {
  let client = null;
  return() => {
    if(!client) client = new QueryClient({})
    return client
  }
})()

export const fetcher = async ({
  method,
  path,
  body,
  params,
}) => {
  try {
    let url = `${BASE_URL}${path}`
    const fetchOptions = {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': BASE_URL
      }
    }
    if (params) {
      const searchParams = new URLSearchParams(params)
      url += '?' + searchParams.toString()
    }

    if(body) fetchOptions.body = JSON.stringify(body)

    const res = await fetch(url, fetchOptions)
    const json = await res.json()
    return json
  } catch (err) {
    console.error(err)
  }
}

export const QueryKeys = {
  PRODUCTS: 'PRODUCTS',
}
