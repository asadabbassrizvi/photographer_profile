import React from "react";
import Header from "../../components/Header/Header";
import Portfolio from "./components/Portfolio/Portfolio";
import Brand from "../../components/Brand/Brand";
import PortraitPh from "./components/Portrait/PortraitPh";
import EventPh from "./components/Event/EventPh";
import CommercialPh from "./components/Commercial/CommercialPh";
import Questionaire from "../Home/components/Questionaire/Questionaire";
import ClientsReview from "../Home/components/ClientsReview/ClientsReview";
import Footer from "../../components/Footer/Footer";

function PortfolioPage() {
  return (
    <>
      <Header />
      <Portfolio />
      <Brand />
      <PortraitPh />
      <EventPh />
      <CommercialPh />
      <Questionaire />
      <ClientsReview />
      <Footer />
    </>
  );
}

export default PortfolioPage;
