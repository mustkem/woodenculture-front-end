import React, { useState } from "react";
import Provider from "../../stories/Provider";

import HomeStory from "../Home/Home";

export default {
  title: "Home Page",
  decorators: [
    (Story) => (
      <Provider>
        <Story />
      </Provider>
    ),
  ],
};

export const Home = () => {
  const [bannerData, setBannerDetails] = useState({});

  const fetchBannerDetails = () => {
    setTimeout(() => {
      setBannerDetails(banner);
    }, 500);
  };
  const bannerDetails = {
    fetchBannerDetails,
    bannerData,
  };
  return <HomeStory bannerDetails={bannerDetails} />;
};

const banner = {
  payload: {
    data: [],
    loading: true,
    error: false,
  },
};
