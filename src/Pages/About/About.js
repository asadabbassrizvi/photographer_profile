import React from "react";
import AboutContiner from "./components/AboutProfile/AboutProfile";
import Header from "../../components/Header/Header";
import Timeline from "./components/Timeline/Timeline";
import ClientsReview from "../Home/components/ClientsReview/ClientsReview";
import Footer from "../../components/Footer/Footer";

function AboutPage() {
  return (
    <>
      <Header />
      <AboutContiner />
      <Timeline />
      <ClientsReview />
      <Footer />
    </>
  );
}

export default AboutPage;
