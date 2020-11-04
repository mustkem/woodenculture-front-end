import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";

import { DataApi } from "../../data/data";

import { TwitterTweetEmbed } from "react-twitter-embed";

import Banner from "./components/Banner";
import Subcategories from "./components/Subcategories";
import ScreenBanner from "../Common/ScreenBanner";

function Home(props) {
  const { fetchSubCategories, subCategories } = props;

  const subCategoriesDetails = {
    fetchSubCategories,
    data: subCategories.data,
    loading: subCategories.loading,
    error: subCategories.error,
  };

  useEffect(() => {
    fetchSubCategories();
  }, [fetchSubCategories]);

  console.log("subCategoriesDetails", subCategoriesDetails);

  return (
    <div>
      <Banner />
      <Subcategories subCategoriesDetails={subCategoriesDetails} />
      <ScreenBanner />
      <div className="social-reach">
        <Container>
          <h2>What do people say about us</h2>
          <ul className="social-feedback">
            <li className="item">
              <TwitterTweetEmbed tweetId={"1312528618635976704"} />
            </li>
            <li className="item">
              <TwitterTweetEmbed tweetId={"1307111816250748933"} />
            </li>
            <li className="item">
              <TwitterTweetEmbed tweetId={"1310687132961431553"} />
            </li>
          </ul>
        </Container>
      </div>
    </div>
  );
}

export default Home;
