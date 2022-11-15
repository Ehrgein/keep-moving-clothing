import React, { Suspense } from "react";
import Header from "../components/Header";
import NewsLetter from "../components/NewsLetter";
import AllProdByCat from "../components/Products/AllProdByCat";
import Loading from "./Loading";

const LazyAllProdByCat = React.lazy(() =>
  import("../components/Products/AllProdByCat")
);

function Products() {
  return (
    <div className="">
      <Header />
      <Suspense fallback={<Loading />}>
        <LazyAllProdByCat />
      </Suspense>
      <NewsLetter />
    </div>
  );
}

export default Products;
