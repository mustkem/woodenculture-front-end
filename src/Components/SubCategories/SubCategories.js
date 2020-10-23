import React from "react";
import { useParams } from "react-router-dom";
import { path } from "ramda";

import Subcategories from "./components/Subcategories";
import ScreenBanner from "../Common/ScreenBanner";
import ContactBar from "../Common/ContactBar";

function Home() {
  const params = useParams();
  const pageData = path([params.category], metaData);
  return (
    <div>
      <Subcategories headingData={pageData} />
      <ScreenBanner />
      <ContactBar />
    </div>
  );
}

export default Home;

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
