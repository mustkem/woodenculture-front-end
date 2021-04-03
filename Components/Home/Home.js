import React from "react";

import Banner from "./components/Banner";
import Subcategories from "./components/Subcategories";
import SubcategoriesInteriors from "./components/Subcategories/SubcategoriesInteriors";

import ScreenBanner from "../Common/ScreenBanner";

import FeedBacks from "./components/OurCustomers";
import Layout from "../Layout";

function Home(props) {
  const { fetchSubCategories, subCategories = {} } = props;

  const subCategoriesDetails = {
    fetchSubCategories,
    data: subCategories.data,
    loading: subCategories.loading,
    error: subCategories.error,
  };

  return (
    <Layout>
      <div>
        <Banner />
        <Subcategories subCategoriesDetails={subCategoriesDetails} />
        <SubcategoriesInteriors />
        <ScreenBanner />
        <FeedBacks />
      </div>
    </Layout>
  );
}

export default Home;
