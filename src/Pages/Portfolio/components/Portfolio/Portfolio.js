import React, { useEffect, useRef } from "react";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { TimelineLite, Power2 } from "gsap";

function Portfolio() {
  let container = useRef(null);
  let image = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".imgP");

  const t1 = new TimelineLite();
  useEffect(() => {
    t1.to(container, 1, { css: { visibility: "visible" } })
      .to(imageReveal, 1.4, { width: "0%", ease: Power2.easeInOut })
      .from(image, 1.4, { scale: 1.6, ease: Power2.easeInOut, delay: -1.6 });
  }, [t1]);

  return (
    <div className="row m-0 w-100">
      <div className="col-lg-12 p-0">
        <div className="aboutMainContainer">
          <div className="aboutMain cst_height">
            <div className="aboutHeader">
              <div className="portfolioMain aboutText">
                <span>Portfolio</span>
                <div className="heading">Visual Poetry in Pixels</div>
                <p className="portfolioMes">
                  Step into a visual journey that encapsulates the essence of my
                  lens. Each photograph in this portfolio is a narrative, a
                  frozen moment in time, and a testament to the artistry and
                  passion poured into every frame. Explore the diverse tapestry
                  of stories I've had the privilege to capture and witness the
                  world through my lens.
                </p>
              </div>
              <div className="aboutImgSec">
                <div ref={(el) => (container = el)} className="imgPContainer">
                  <div className="imgP">
                    <div
                      ref={(el) => (image = el)}
                      className="bgPortfolioImg"
                    ></div>
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
                  <div className="scrollText">Scroll Down To See The Works</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
