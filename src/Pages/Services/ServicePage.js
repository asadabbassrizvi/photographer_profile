import React from "react";
import Header from "../../components/Header/Header";
import ServiceContainer from "./ServiceContainer/ServiceContainer";
import PortraitPhotgraphy from "./PortraitPh/PortraitPhotgraphy";
import EventsPh from "./EventsPh/EventsPh";
import CommercialPh from "./CommercialPh/CommercialPh";
import Questionaire from "../Home/components/Questionaire/Questionaire";
import Footer from "../../components/Footer/Footer";

function ServicePage() {
  return (
    <>
      <Header />
      <ServiceContainer />
      <PortraitPhotgraphy />
      <EventsPh />
      <CommercialPh />
      <Questionaire />
      <Footer />
    </>
  );
}

export default ServicePage;
