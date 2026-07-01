import React, { useEffect } from "react";
import BackToTop from "../../Components/BackToTop";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

import MenuBn from "./Components/MenuBn";
import MenuContent from "./Components/MenuContent";

export default function Menu() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Header />
      <MenuBn />
      <MenuContent />
      <Footer />
      <BackToTop />
    </>
  );
}
