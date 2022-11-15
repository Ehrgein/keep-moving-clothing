import React, { Suspense } from "react";
import Header from "../components/Header";
import Loading from "./Loading";
import Recommended from "../components/Products/Recommended";
import NewsLetter from "../components/NewsLetter";

const LazyAllProdByCat = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("../components/Products/ProductInfo"));
    }, 500);
  });
});

function ProductCart() {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loading />}>
        <LazyProductInfo />
        <Recommended />
        <NewsLetter />
      </Suspense>
    </div>
  );
}

export default ProductCart;
