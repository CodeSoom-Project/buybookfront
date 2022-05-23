import {Suspense} from "react";
import {Outlet} from 'react-router-dom';
import Header from "../components/Header";

const Layout = () => {
  return (
    <div>
      <Header/>
      <Suspense fallback={'loading...'}>
        <Outlet/>
      </Suspense>
    </div>
  );
};
export default Layout;
