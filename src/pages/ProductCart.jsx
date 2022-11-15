import React, { Suspense } from "react";
import Header from "../components/Header";
import Loading from "./Loading";

const LazyProductInfo = React.lazy(() =>
  import("../components/Products/ProductInfo")
);
const LazyRecommended = React.lazy(() =>
  import("../components/Products/Recommended")
);

const LazyNewsLetter = React.lazy(() => {
  import("/components/NewsLetter");
});

function ProductCart() {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loading />}>
        <LazyProductInfo />
        <LazyRecommended />
        <LazyNewsLetter />
      </Suspense>
    </div>
  );
}

export default ProductCart;
