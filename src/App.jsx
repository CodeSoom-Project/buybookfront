import { QueryClientProvider } from 'react-query';
import { Route, Routes } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';
import { getClient } from './queryClient';
import MainPage from './pages';
import LoginPageContainer from './pages/LoginPageContainer';
import ProductList from './pages/products';
import ProductDetailPage from './pages/products/[id]';
import Layout from './pages/_layout';
import SearchResultContainer from './pages/searchResultContainer';
import Cart from './pages/cart';
import NotFoundPage from './pages/NotFoundPage';
import SignUpPageContainer from './pages/SignUpPageContainer';

function App() {
  const queryClient = getClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="signup" element={<SignUpPageContainer />} />
          <Route path="login" element={<LoginPageContainer />} />
          <Route path="products" element={<ProductList />} />
          <Route path="products/:id" element={<ProductDetailPage />} />
          <Route path="search/:word" element={<SearchResultContainer />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
