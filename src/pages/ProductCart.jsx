import React, { Suspense } from "react";
import NewsLetter from "../components/NewsLetter";
import Header from "../components/Header";
import Loading from "./Loading";

const LazyProductInfo = React.lazy(() =>
  import("../components/Products/ProductInfo")
);
const LazyRecommended = React.lazy(() =>
  import("../components/Products/Recommended")
);

function ProductCart() {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loading />}>
        <LazyProductInfo />
        <LazyRecommended />
        <NewsLetter />
      </Suspense>
    </div>
  );
}

export default ProductCart;
