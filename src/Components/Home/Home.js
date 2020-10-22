import React from "react";
import Container from "react-bootstrap/Container";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from "react-twitter-embed";

import { Link } from "react-router-dom";

import Layout from "../Layout/Layout";
import Banner from "./components/Banner";
import Subcategories from "./components/Subcategories";
import ScreenBanner from "../Common/ScreenBanner";

function Home() {
  return (
    <Layout>
      <Banner />
      <Subcategories />
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
    </Layout>
  );
}

export default Home;
