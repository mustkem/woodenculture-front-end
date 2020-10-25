import React from "react";
import { useParams } from "react-router-dom";
import { path } from "ramda";

import { DataApi } from "../../data/data";

import Subcategories from "./components/Subcategories";
import ScreenBanner from "../Common/ScreenBanner";
import ContactBar from "../Common/ContactBar";

function Index(props) {
  const {} = props;
  const params = useParams();

  const dataObj = new DataApi();

  const subCategoriesDetails = {
    fetchSubCategories: () => {},
    data: {
      payload: dataObj.getSubCategories({ category: params.category }),
      loading: true,
      error: null,
    },
  };
  const pageData = path([params.category], metaData);
  return (
    <div>
      <Subcategories headingData={pageData} subCategoriesDetails={subCategoriesDetails} />
      <ScreenBanner />
      <ContactBar />
    </div>
  );
}

export default Index;

const metaData = {
  "living-room": {
    title: "Living Room",
    desc: "Living Rooms",
  },
  bedroom: {
    title: "Bedroom",
    desc: "Fine Bedrooms",
  },
  dining: {
    title: "Dining",
    desc: "Living Rooms",
  },
  office: {
    title: "Office",
    desc: "Living Rooms",
  },
  kids: {
    title: "Kids",
    desc: "Living Rooms",
  },
  decor: {
    title: "Decor",
    desc: "Living Rooms",
  },
  bar: {
    title: "Bar",
    desc: "Living Rooms",
  },
};
