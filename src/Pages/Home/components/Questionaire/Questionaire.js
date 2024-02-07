import React, { useState } from "react";
import arrowUp from "../../images/arrowUp.png";
import arrowDown from "../../images/arrowDown.png";

export default function Questionaire() {
  const showMessage = (index, value) => {
    if (value === "dataOne") {
      const selected = dataO.filter((faqs, i) => {
        if (i === index) {
          faqs.isOpen = !faqs.isOpen;
        } else {
          faqs.isOpen = false;
        }
        return dataO;
      });
      setDataO(selected);
    } else {
      const selected = dataT.filter((faqs, i) => {
        if (i === index) {
          faqs.isOpen = !faqs.isOpen;
        } else {
          faqs.isOpen = false;
        }
        return dataT;
      });
      setDataT(selected);
    }
  };

  const [dataO, setDataO] = useState([
    {
      heading: "What type of photography do you specialize in?",
      description:
        "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.",
      isOpen: false,
    },
    {
      heading: "How can I book a photography session with you?",
      description:
        "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.",
      isOpen: false,
    },
    {
      heading: "What equipment do you use for your photography?",
      description:
        "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.",
      isOpen: false,
    },
    {
      heading: "Can I request a specific location for a",
      description:
        "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.",
      isOpen: false,
    },
  ]);
  const [dataT, setDataT] = useState([
    {
      heading: "What is your editing process like?",
      description:
        "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.",
      isOpen: false,
    },
    {
      heading: "Are digital files included in your photography packages?",
      description:
        "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.",
      isOpen: false,
    },
    {
      heading: "Do you offer prints of your photographs?",
      description:
        "Yes, prints are available for purchase. Explore the 'Prints' section for more details on sizes and pricing.",
      isOpen: false,
    },
    {
      heading:
        "How long does it take to receive the edited photos after a session?",
      description:
        "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.",
      isOpen: false,
    },
  ]);

  return (
    <div className="row w-100 m-0">
      <div className="col-lg-12 p-0">
        <div className="aboutSection faqsContainer">
          <div className="main">
            <div className="">
              <div className="heading">FAQ’s</div>
              <div className="nameTag"> Frequently Asked Questions</div>
            </div>
          </div>
          <div className="quesBoxCont">
            <div className="leftBox b-right">
              <div className="contentContainer">
                {dataO.map((item, index) => (
                  <div key={index} className="mainCont transition">
                    <div>
                      <div className="title">{item.heading}</div>
                      {item.isOpen ? (
                        <div className="">
                          <p>{item.description}</p>
                        </div>
                      ) : null}
                    </div>
                    <div
                      className=""
                      onClick={() => showMessage(index, "dataOne")}
                    >
                      {item.isOpen ? (
                        <img src={arrowUp} alt="img" className="arrows" />
                      ) : (
                        <img src={arrowDown} alt="img" className="arrows" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rightBox">
              <div className="contentContainer ">
                {dataT.map((item, index) => (
                  <div key={index} className="mainCont transition">
                    <div>
                      <div className="title">{item.heading}</div>
                      {item.isOpen ? (
                        <div className="">
                          <p>{item.description}</p>
                        </div>
                      ) : null}
                    </div>
                    <div
                      className=""
                      onClick={() => showMessage(index, "dataTwo")}
                    >
                      {item.isOpen ? (
                        <img src={arrowUp} alt="img" className="arrows " />
                      ) : (
                        <img src={arrowDown} alt="img" className="arrows " />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
