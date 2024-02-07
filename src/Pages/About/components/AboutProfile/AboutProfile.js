import React, { useEffect, useRef } from "react";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { TimelineLite, Power2 } from "gsap";
import "./AboutProfile.scss";

function AboutProfile() {
  let container = useRef(null);
  let image = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".bgImg");

  const t1 = new TimelineLite();

  useEffect(() => {
    let displayValue = document.querySelectorAll(".counter");
    let interval = 5000;

    displayValue.forEach((displayValue) => {
      let startValue = 0;
      let endValue = parseInt(displayValue.getAttribute("data-value"));
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(() => {
        startValue += 1;
        displayValue.textContent = startValue + "+";
        if (startValue === endValue) {
          clearInterval(counter);
        }
      }, duration);
    });
  }, []);

  useEffect(() => {
    t1.to(container, 1, { css: { visibility: "visible" } })
      .to(imageReveal, 1.4, { width: "0%", ease: Power2.easeInOut })
      .from(image, 1.4, { scale: 1.6, ease: Power2.easeInOut, delay: -1.6 });
  }, [t1]);

  return (
    <div className="row m-0 w-100">
      <div className="col-lg-12 p-0">
        <div className="aboutMainContainer">
          <div className="aboutMain">
            <div className="aboutHeader">
              <div className="aboutText">
                <span>About</span>
                <div className="heading">About damien braun</div>
              </div>
              <div className="counterContainerMain">
                <div className="counterTextContainer">
                  <span className="counter" data-value="15">
                    15+
                  </span>
                  <div className="heading"> Years in Business</div>
                </div>
                <div className="counterTextContainer">
                  <span className="counter" data-value="500">
                    500+
                  </span>
                  <div className="heading">Happy Clients</div>
                </div>
                <div className="counterTextContainer">
                  <span className="counter" data-value="10">
                    10+
                  </span>
                  <div className="heading">Photography Awards</div>
                </div>
                <div className="counterTextContainer">
                  <span className="counter" data-value="05">
                    05+
                  </span>
                  <div className="heading">International Shoots</div>
                </div>
                <div className="counterTextContainer">
                  <span className="counter" data-value="1000">
                    1000+
                  </span>
                  <div className="heading">Social Media Followers</div>
                </div>
                <div className="counterTextContainer">
                  <span className="counter" data-value="90">
                    90%
                  </span>
                  <div className="heading">Client Retention Rate</div>
                </div>
              </div>
              <div className="aboutImgSec">
                <div ref={(el) => (container = el)} className="imgAContainer">
                  <div className="imgA">
                    <div ref={(el) => (image = el)} className="bgImg"></div>
                  </div>
                </div>
                <div className="aboutImgText">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100"
                      height="100"
                      viewBox="0 0 100 100"
                      fill="none"
                    >
                      <path
                        d="M49.9996 17.0659L54.6572 45.3424L82.9337 50L54.6572 54.6576L49.9996 82.9341L45.342 54.6576L17.0654 50L45.342 45.3424L49.9996 17.0659Z"
                        fill="#2F2F37"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M50 98.8024C76.9528 98.8024 98.8024 76.9528 98.8024 50C98.8024 23.0472 76.9528 1.1976 50 1.1976C23.0472 1.1976 1.1976 23.0472 1.1976 50C1.1976 76.9528 23.0472 98.8024 50 98.8024ZM50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z"
                        fill="#2F2F37"
                      />
                    </svg>
                  </div>
                  <div className="scrollText">
                    Scroll Down To See My Journey
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutBioGraphy ">
          <span>My Biography</span>
          <p>
            Damien Braun's love affair with photography began at a young age,
            nurtured by the captivating landscapes and vibrant cultures
            surrounding her in the heart of the USA. Her passion for
            storytelling through imagery led her to embark on a photography
            journey that has spanned over 15 years. Driven by an insatiable
            curiosity to explore the beauty in everyday moments, Damien has
            honed her craft meticulously. Her background in digital media
            provided her with a solid foundation, but it's her keen eye for
            detail and an innate ability to capture raw emotions that truly set
            her apart. Damien's journey is more than just taking pictures; it's
            about capturing the essence of the human spirit, the fleeting magic
            of nature, and the emotions that define our lives. With each click
            of her camera, she weaves stories that transcend time and space.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutProfile;
