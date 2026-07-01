import React from "react";
import BackToTop from "../../Components/BackToTop";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import JobList from "./Components/JobList";

export default function ReCruit() {
  return (
    <>
      <Header />
      <JobList />
      <Footer />
      <BackToTop />
    </>
  );
}
