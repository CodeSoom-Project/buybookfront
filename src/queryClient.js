import { QueryClient } from 'react-query';
import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';

// Create a client
export const getClient = (() => {
  let client = null;
  return () => {
    if (!client) {
      client = new QueryClient({
        defaultOptions: {
          queries: {
            cacheTime: 1000 * 60 * 60 * 24,
            staleTime: 1000,
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
          },
        },
      });
    }
    return client;
  };
})();

export const fetcher = async ({
  method,
  path,
  body,
  params,
}) => {
  try {
    let url = `${BASE_URL}${path}`;
    const fetchOptions = {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': BASE_URL,
      },
    };
    if (params) {
      const searchParams = new URLSearchParams(params);
      url += `?${searchParams.toString()}`;
    }

    if (body) fetchOptions.body = JSON.stringify(body);

    // const res = await axios(url, fetchOptions);
    // return res;
    const res = await fetch(url, fetchOptions);
    const json = await res.json();
    return json;
  } catch (err) {
    console.error(err);
  }
};
// export const fetcher = async ({
//   method,
//   path,
//   body,
//   params,
// }) => {
//   try {
//     let url = `${BASE_URL}${path}`;
//     const fetchOptions = {
//       url
//       method,
//       headers: {
//         // 'Accept':'application/json',
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': BASE_URL,
//       },
//     };
//     if (params) {
//       const searchParams = new URLSearchParams(params);
//       url += `?${searchParams.toString()}`;
//     }
//
//     if (body) fetchOptions.body = JSON.stringify(body);
//
//     // const res = await axios(url, fetchOptions);
//     // return res;
//     const res = await axios(url, fetchOptions);
//     const json = await res.json();
//     return json;
//   } catch (err) {
//     console.error(err);
//   }
// };
// https://velog.io/@shin6403/React-axios%EB%9E%80-feat.-Fetch-API

export const QueryKeys = {
  PRODUCTS: 'PRODUCTS',
};
