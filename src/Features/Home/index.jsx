import React from "react";
import BackToTop from "../../Components/BackToTop";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Banner from "./Components/Banner";
import HotDeal from "./Components/HotDeal";
import NewFeed from "./Components/NewFeed";
import Space from "./Components/Space";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <NewFeed />
      <HotDeal />
      <Space />
      <Footer />
      <BackToTop />
    </>
  );
}
