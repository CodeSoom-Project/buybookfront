import {QueryClientProvider} from 'react-query'
import {Route, Routes} from "react-router-dom";
import {getClient} from "./queryClient";
import {ReactQueryDevtools} from 'react-query/devtools'
import MainPage from "./pages";
import ProductList from "./pages/products";
import ProductDetailPage from "./pages/products/[id]";
import Cart from "./pages/cart";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./pages/_layout";
import SearchResultContainer from "./pages/searchResultContainer";


const App = () => {
  // const elem = useRoutes(routes)
  const queryClient = getClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/products" element={<ProductList/>}/>
          <Route path="/products/:id" element={<ProductDetailPage/>}/>
          <Route path="/search/:word" element={<SearchResultContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/*" element={<NotFoundPage/>}/>
        </Route>
      </Routes>
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  )
}


export default App
