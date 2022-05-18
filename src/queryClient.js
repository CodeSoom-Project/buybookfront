import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
// import { getTodos, postTodo } from '../my-api'

const BASE_URL = 'https://fakestoreapi.com'

// Create a client
export const getClient =(() => {
  let client = null;
  return() => {
    if(!client) client = new QueryClient({

    })
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
    const url = `${BASE_URL}`
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
