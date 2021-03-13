import React, { useEffect } from "react";

import Banner from "./components/Banner";
import Subcategories from "./components/Subcategories";
import SubcategoriesInteriors from "./components/Subcategories/SubcategoriesInteriors";

import ScreenBanner from "../Common/ScreenBanner";

import FeedBacks from "./components/OurCustomers";

function Home(props) {
  const { fetchSubCategories, subCategories } = props;

  const subCategoriesDetails = {
    fetchSubCategories,
    data: subCategories.data,
    loading: subCategories.loading,
    error: subCategories.error,
  };

  return (
    <div>
      <Banner />
      <Subcategories subCategoriesDetails={subCategoriesDetails} />
      <ScreenBanner />
      <SubcategoriesInteriors />
      <FeedBacks />
    </div>
  );
}

export default Home;
