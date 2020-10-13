import React from "react";
import Header from "../Shared/Header/Header";
import SecondaryHeader from "../Shared/Header/SecondaryHeader";
import Footer from "../Shared/Footer/Footer";

export default function (props) {
  return (
    <div>
      <SecondaryHeader />
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
