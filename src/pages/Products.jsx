import React, { Suspense } from "react";
import Header from "../components/Header";
import NewsLetter from "../components/NewsLetter";
import Loading from "./Loading";

const LazyAllProdByCat = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("../components/Products/AllProdByCat"));
    }, 1000);
  });
});


function Products() {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loading />}>
        <LazyAllProdByCat />
        <NewsLetter />
      </Suspense>
    </div>
  );
}

export default Products;
