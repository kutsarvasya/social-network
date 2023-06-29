import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navigate from "../Navigate/Navigate";

function Layout() {
  return (
    <>
      <header>
        <Navigate />
      </header>
      <main>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
export default Layout;
