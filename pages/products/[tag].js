import React from "react";
import axios from "axios";
import { connect } from "react-redux";

import Products from "../../Components/ProductList";

import { wrapper as storeWrapper } from "../../store-thunk/store";
import { productsActions } from "../../store-thunk/products";

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
// export async function getStaticProps({ params }) {
//   const res = await axios({
//     method: "get",
//     url: API_URL + "/feed/products",
//     params: {
//       category_slug: params.tag,
//     },
//   })
//     .then(function (response) {
//       return response.data;
//     })
//     .catch(function (error) {
//       return error;
//     });
//   const products = await res.products;

//   // Pass post data to the page via props
//   return { props: { products } };
// }

export const getStaticProps = storeWrapper.getStaticProps(async ({ params, store }) => {
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

  await store.dispatch(productsActions.fetchProductsSuccess(res));

  return { props: { products: store.getState().products.fetchProducts.data?.products } };
});

const mapStateToprops = (state) => {
  return {
    products: state.products.fetchProducts.data?.products,
  };
};

export default connect(mapStateToprops)(ProductsPage);
