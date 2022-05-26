import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import UserBar from '../components/UserBar';

function Layout() {
  return (
    <div>
      <UserBar />
      <Header />
      <Suspense fallback="loading...">
        <Outlet />
      </Suspense>
    </div>
  );
}
export default Layout;
