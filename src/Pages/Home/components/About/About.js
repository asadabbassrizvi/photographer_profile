import React, { useEffect, useRef } from "react";
import text from "../../images/Text.png";
import aboutImg from "../../images/aboutImg.png";
import fb from "../../images/fb.png";
import str from "../../images/staricIcon.png";
import linkedin from "../../images/in.jpg";
import skype from "../../images/skype.png";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { TimelineLite, Power2 } from "gsap";
import "./about.scss";

export default function About() {
  let container = useRef(null);
  let image = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".imgC");

  const t1 = new TimelineLite();
  useEffect(() => {
    t1.to(container, 1, { css: { visibility: "visible" } })
      .to(imageReveal, 1.4, { width: "0%", ease: Power2.easeInOut })
      .from(image, 1.4, { scale: 1.6, ease: Power2.easeInOut, delay: -1.6 });
  });

  return (
    <div className="row w-100 m-0">
      <div className="col-lg-12 p-0">
        <div className="aboutSection">
          <div className="main">
            <div className="">
              <div className="heading">About</div>
              <div className="nameTag"> i am damien</div>
            </div>
            <div className="">
              <button className="button btn btn-secondary">
                <img src={text} alt="text" />{" "}
              </button>
            </div>
          </div>
          <div className="introductionS">
            <div ref={(el) => (container = el)} className="imgCContainer">
              <div className="imgC">
                <img
                  ref={(el) => (image = el)}
                  src={aboutImg}
                  alt="img"
                  className="aImg"
                />
              </div>
            </div>

            <div className="contSection">
              <div className="introContainer">
                <div className="d-flex align-items-center">
                  <span>
                    <img src={fb} className="staricIcon" alt="str" />{" "}
                  </span>
                  <span className="intro">Introduction</span>
                </div>

                <p>
                  {" "}
                  My journey as a photographer has been a lifelong quest to
                  capture the extraordinary in the ordinary, to freeze fleeting
                  moments in time, and to share the world's beauty as I see it.
                  Based in the enchanting landscapes of the USA, I find
                  inspiration in every corner of this diverse and vibrant
                  country. Join me as we embark on a visual odyssey, where each
                  photograph tells a story, and every frame is a piece of my
                  heart.
                </p>
              </div>
              <div className="contactInfo">
                <div className="d-flex align-items-center">
                  <span>
                    <img src={fb} className="staricIcon" alt="str" />{" "}
                  </span>
                  <span className="intro">Contact Information</span>
                </div>
                <div className="d-flex block w-100">
                  <div className="emailSection">
                    <div className="email">Email</div>
                    <div className="address">damienbraun@gmail.com</div>
                  </div>
                  <div className="emailSection ml-16">
                    <div className="email">Phone</div>
                    <div className="address">+00 000000000</div>
                  </div>
                </div>
                <div className="socialM">
                  <div className="d-flex icons">
                    <img src={str} className="socIcon" alt="icon" />
                    <img src={skype} className="socIcon" alt="icon" />
                    <img src={linkedin} className="socIcon" alt="icon" />
                  </div>
                  <div className="btnGroup">
                    <button className="btn btn-secondary"> Let’s Work </button>
                    <button className="btn btn-secondary"> Download CV </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
