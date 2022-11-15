import React, { Suspense } from "react";
import Header from "../components/Header";
import NewsLetter from "../components/NewsLetter";
import Loading from "./Loading";

const LazyAllNew = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("../components/Products/AllNew"));
    }, 500);
  });
});

function NewArrivals() {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loading />}>
        <LazyAllNew />
        <NewsLetter />
      </Suspense>
    </div>
  );
}

export default NewArrivals;
