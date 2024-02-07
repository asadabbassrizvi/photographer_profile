import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import servicesText from "../../images/all services.png";
import staricImg from "../../images/eventIcon.png";
import eventImg from "../../images/event.png";
import { TimelineLite } from "gsap/gsap-core";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { Power2 } from "gsap";
import "./service.scss";

export default function Services() {
  let serContainer = useRef(null);
  let serImage = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".imgS");
  const t1 = new TimelineLite();
  useEffect(() => {
    const item = document.querySelectorAll(".logoIconService");
    const Arrow = document.querySelectorAll(".logoArrowService");
    const tl = gsap.timeline({ repeat: -1 }); // Setting repeat to -1 makes it loop infinitely
    // Add the rotation animation to the timeline
    tl.to(item, { duration: 2, rotation: -360, ease: "none" }, "Start");
    tl.to(Arrow, { duration: 2, rotation: 360, ease: "none" }, "Start");

    // Start the animation
    tl.play(0);
  }, []);

  useEffect(() => {
    t1.to(serContainer, 1, { css: { visibility: "visible" } })
      .to(imageReveal, 1.4, { width: "0%", ease: Power2.easeInOut })
      .from(serImage, 1.4, { scale: 1.6, ease: Power2.easeInOut, delay: -1.6 });
  }, [t1]);

  return (
    <>
      <div className="serContainer">
        <div className="heading">
          <div className="text">
            <span>services</span>
            <div>my photography services</div>
          </div>
          <div className="buttons">
            <div className="btnContainer">
              <div className="">
                <button className="arrow btn btn-seconday">
                  <a
                    className="mr-1"
                    href="#carouselExampleIndicators2"
                    role="button"
                    data-slide="prev"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                    >
                      <path
                        d="M17.5 7L10.5 14L17.5 21"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </button>
              </div>
              <div className="">
                <button className=" arrow btn btn-secondary">
                  <a
                    className=""
                    href="#carouselExampleIndicators2"
                    role="button"
                    data-slide="next"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                    >
                      <path
                        d="M10.5 7L17.5 14L10.5 21"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </button>
              </div>
            </div>
            <div className="">
              <button className="servicesBtn btn">
                <img src={servicesText} alt="services" className="" />
              </button>
            </div>
          </div>
        </div>
        <div className="eventsContainer">
          <div className="eventsDetails">
            <div className="headingCon">
              <div className="headingSec">
                <span>events</span>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="logoArrowService"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.25 3.75L19.5 3.75C19.6989 3.75 19.8897 3.82902 20.0303 3.96967C20.171 4.11032 20.25 4.30109 20.25 4.5V15.75C20.25 16.1642 19.9142 16.5 19.5 16.5C19.0858 16.5 18.75 16.1642 18.75 15.75V6.31066L5.03033 20.0303C4.73744 20.3232 4.26256 20.3232 3.96967 20.0303C3.67678 19.7374 3.67678 19.2626 3.96967 18.9697L17.6893 5.25L8.25 5.25C7.83579 5.25 7.5 4.91421 7.5 4.5C7.5 4.08579 7.83579 3.75 8.25 3.75Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
              <div className="headingText">
                <p>
                  Our event photography service is dedicated to capturing the
                  magic of your special occasions. Whether it's a wedding,
                  corporate event, or milestone celebration, we're there to
                  document every heartfelt moment. We blend into the background,
                  ensuring natural and candid shots that reflect the emotions of
                  the day.
                </p>
              </div>
            </div>
            <div
              id="carouselExampleIndicators2"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="serHigh">Service Highlights</div>
                <div className="carousel-item active">
                  <div className="serHighlights">
                    <div className="serProvider">
                      <img
                        src={staricImg}
                        alt="img"
                        className="logoIconService"
                      />
                      <div>
                        Coverage for weddings, parties, corporate functions, and
                        more.
                      </div>
                    </div>
                    <div className="serProvider">
                      <img
                        src={staricImg}
                        alt="img"
                        className="logoIconService"
                      />
                      <div>
                        Skilled photographers who know how to seize the moment.
                      </div>
                    </div>
                    <div className="serProvider">
                      <img
                        src={staricImg}
                        alt="img"
                        className="logoIconService"
                      />
                      <div>
                        A mix of candid and posed shots for a comprehensive
                        story.
                      </div>
                    </div>
                    <div className="serProvider">
                      <img
                        src={staricImg}
                        alt="img"
                        className="logoIconService"
                      />
                      <div>
                        Quick turnaround for you to relive the day's highlights.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item ">
                  <div className="serHighlights">
                    {/* <div>Service Highlights</div> */}

                    <div className="serProvider">
                      <img
                        src={staricImg}
                        alt="img"
                        className="logoIconService"
                      />
                      <div>
                        A mix of candid and posed shots for a comprehensive
                        story.
                      </div>
                    </div>
                    <div className="serProvider">
                      <img
                        src={staricImg}
                        alt="img"
                        className="logoIconService"
                      />
                      <div>
                        Quick turnaround for you to relive the day's highlights.
                      </div>
                    </div>
                    <div className="serProvider">
                      <img
                        src={staricImg}
                        alt="img"
                        className="logoIconService"
                      />
                      <div>
                        Coverage for weddings, parties, corporate functions, and
                        more.
                      </div>
                    </div>
                    <div className="serProvider">
                      <img
                        src={staricImg}
                        alt="img"
                        className="logoIconService"
                      />
                      <div>
                        Skilled photographers who know how to seize the moment.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div ref={(el) => (serContainer = el)} className="imgSContainer">
            <div className="imgPreview">
              <img
                ref={(el) => (serImage = el)}
                src={eventImg}
                alt="img"
                className="imgS"
              />
            </div>
          </div>
          <div className="btnContainer small-screen">
            <div className="">
              <button className="arrow btn btn-seconday">
                <a
                  className="mr-1"
                  href="#carouselExampleIndicators2"
                  role="button"
                  data-slide="prev"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <path
                      d="M17.5 7L10.5 14L17.5 21"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </button>
            </div>
            <div className="">
              <button className=" arrow btn btn-secondary">
                <a
                  className=""
                  href="#carouselExampleIndicators2"
                  role="button"
                  data-slide="next"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <path
                      d="M10.5 7L17.5 14L10.5 21"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
