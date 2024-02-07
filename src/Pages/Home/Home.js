import React from "react";
import Header from "../../components/Header/Header";
import SubHeader from "./components/SubHeader/SubHeader";
import Work from "./components/Work/Work";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Slider from "./components/Slider/Slider";
import Questionaire from "./components/Questionaire/Questionaire";
import ClientsReview from "./components/ClientsReview/ClientsReview";
import Footer from "../../components/Footer/Footer";

function HomePage() {
  return (
    <>
      <Header />
      <SubHeader />
      <Work />
      <About />
      <Services />
      <Slider />
      <Questionaire />
      <ClientsReview />
      <Footer />
    </>
  );
}

export default HomePage;
