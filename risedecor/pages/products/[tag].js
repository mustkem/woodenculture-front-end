import React from "react";
import axios from "axios";

import Products from "../../Components/ProductList";

import { API_URL } from "../../config";

function ProductsPage({ products }) {
  return <Products products={products} />;
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await axios({
    method: "get",
    url: API_URL + "/common/categories",
  })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
  const categories = await res.categories;

  // Get the paths we want to pre-render based on posts
  const paths = [];
  categories.forEach((category) => {
    if (category.value) {
      paths.push({
        params: { tag: category.value },
      });
    }
  });

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await axios({
    method: "get",
    url: API_URL + "/feed/products",
    params: {
      category_slug: params.tag,
    },
  })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
  const products = await res.products;

  // Pass post data to the page via props
  return { props: { products } };
}

export default ProductsPage;
