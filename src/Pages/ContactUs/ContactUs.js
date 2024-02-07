import React, { useEffect, useRef } from "react";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { Power2, gsap } from "gsap";
import "./ContactUs.scss";
import Header from "../../components/Header/Header";
import ClientsReview from "../Home/components/ClientsReview/ClientsReview";
import Footer from "../../components/Footer/Footer";
import { Timeline } from "gsap/gsap-core";

function ContactUs() {
  let container = useRef(null);
  let image = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".imgCn");
  const t1 = new Timeline();
  useEffect(() => {
    t1.to(container, 1, { css: { visibility: "visible" } })
      .to(imageReveal, 1.4, { width: "0%", ease: Power2.easeInOut })
      .from(image, 1.4, { scale: 1.6, ease: Power2.easeInOut, delay: -1.6 });
  }, [t1]);

  useEffect(() => {
    const item = document.querySelectorAll(".contactArrow");

    // Add the rotation animation to the timeline
    const tl = gsap.timeline({ repeat: -1 }); // Setting repeat to -1 makes it loop infinitely

    tl.to(item, { duration: 2, rotation: 360, ease: "none" });

    // Start the animation
    tl.play(0);
  }, []);

  return (
    <>
      <Header />
      <div className="row m-0 w-100">
        <div className="col-lg-12 p-0">
          <div className="contactMainContainer">
            <div className="contactContainer">
              <div className="contactIconsContainer">
                <div className="contactTextContainer">
                  <div className="contactCM">Contact Me</div>
                  <h5>Get in Touch with Me</h5>
                </div>
                <p>
                  Step into a world of timeless photography with Damien Braun.
                  Explore our range of photography services, each crafted to
                  tell your unique story through captivating images. Whether
                  it's the magic of portraits, the emotion of events, or the
                  allure of commercial photography, we're here to bring your
                  vision to life.
                </p>
                <div className="contactBtnContainer">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_161_7812)">
                        <path
                          d="M20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_161_7812">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_161_7815)">
                        <path
                          d="M6.2918 18.125C13.8371 18.125 17.9652 11.8723 17.9652 6.45161C17.9652 6.27583 17.9613 6.09614 17.9535 5.92036C18.7566 5.33961 19.4496 4.62027 20 3.79614C19.2521 4.12889 18.458 4.34621 17.6449 4.44067C18.5011 3.92748 19.1421 3.12129 19.4492 2.17153C18.6438 2.64886 17.763 2.98557 16.8445 3.16724C16.2257 2.5097 15.4075 2.07432 14.5164 1.92844C13.6253 1.78255 12.711 1.93427 11.9148 2.36014C11.1186 2.78601 10.4848 3.46232 10.1115 4.28449C9.73825 5.10666 9.64619 6.02891 9.84961 6.90864C8.21874 6.8268 6.62328 6.40315 5.16665 5.66514C3.71002 4.92714 2.42474 3.89126 1.39414 2.62466C0.870333 3.52776 0.710047 4.59643 0.945859 5.61347C1.18167 6.63051 1.79589 7.5196 2.66367 8.10005C2.01219 8.07937 1.37498 7.90396 0.804688 7.58833V7.63911C0.804104 8.58685 1.13175 9.50555 1.73192 10.239C2.3321 10.9725 3.16777 11.4755 4.09687 11.6625C3.49338 11.8277 2.85999 11.8517 2.2457 11.7329C2.50788 12.5479 3.01798 13.2608 3.70481 13.772C4.39164 14.2832 5.22093 14.5672 6.07695 14.5844C4.62369 15.726 2.82848 16.3452 0.980469 16.3422C0.652739 16.3417 0.325333 16.3216 0 16.2821C1.87738 17.4865 4.06128 18.1262 6.2918 18.125Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_161_7815">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_161_7818)">
                        <path
                          d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_161_7818">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
                <span>Scroll Down To Send me a Message</span>
              </div>
              <div ref={(el) => (container = el)} className="imgCnContainer">
                <div className="imgCn">
                  <div
                    ref={(el) => (image = el)}
                    className="contactBgImg"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 p-0">
          <div className="contactInformationSection">
            <div className="contactTextInfoMain">
              <div className="contactTextInfo">
                <span>Contact Information</span>
                <p>
                  Feel free to reach out to us through various channels. We are
                  available by phone, email, and social media for your
                  convenience.
                </p>
              </div>
              <div className="contactBtnInfo">
                <button>
                  <span>+923421102248</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="contactArrow"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.25 3.75L19.5 3.75C19.6989 3.75 19.8897 3.82902 20.0303 3.96967C20.171 4.11032 20.25 4.30109 20.25 4.5V15.75C20.25 16.1642 19.9142 16.5 19.5 16.5C19.0858 16.5 18.75 16.1642 18.75 15.75V6.31066L5.03033 20.0303C4.73744 20.3232 4.26256 20.3232 3.96967 20.0303C3.67678 19.7374 3.67678 19.2626 3.96967 18.9697L17.6893 5.25L8.25 5.25C7.83579 5.25 7.5 4.91421 7.5 4.5C7.5 4.08579 7.83579 3.75 8.25 3.75Z"
                      fill="white"
                    />
                  </svg>
                </button>
                <button>
                  <span>asadabbassrizvi@gmail.com</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="contactArrow"
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
            </div>
            <div className="contactTextInfoMain">
              <div className="contactTextInfo">
                <span>Send Me a Message</span>
                <p>
                  Have a specific inquiry or message for us? Please use the
                  contact form below, and we'll get back to you promptly.
                </p>
              </div>
              <div className="contactForm">
                <div className="cFormContainer">
                  <div className="cFormData">
                    <span>First Name</span>
                    <input placeholder="First Name" />
                  </div>
                  <div className="cFormData">
                    <span>Last Name</span>
                    <input placeholder="Last Name" />
                  </div>
                </div>
                <div className="cFormContainer">
                  <div className="cFormData">
                    <span>Email</span>
                    <input placeholder="Email Address" />
                  </div>
                  <div className="cFormData">
                    <span>Phone Number</span>
                    <input placeholder="Phone Number" />
                  </div>
                </div>
                <div className="cFormContainer">
                  <div className="cFormData">
                    <span>Your Message</span>
                    <input placeholder="Message" />
                  </div>
                </div>
                <div className="cMessageContainer">
                  <span>send message</span>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="31"
                      viewBox="0 0 30 31"
                      fill="none"
                      className="contactArrow"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.3125 5.1875L24.375 5.1875C24.6236 5.1875 24.8621 5.28627 25.0379 5.46209C25.2137 5.6379 25.3125 5.87636 25.3125 6.125V20.1875C25.3125 20.7053 24.8928 21.125 24.375 21.125C23.8572 21.125 23.4375 20.7053 23.4375 20.1875V8.38833L6.28791 25.5379C5.9218 25.904 5.3282 25.904 4.96209 25.5379C4.59597 25.1718 4.59597 24.5782 4.96209 24.2121L22.1117 7.0625L10.3125 7.0625C9.79473 7.0625 9.375 6.64277 9.375 6.125C9.375 5.60723 9.79473 5.1875 10.3125 5.1875Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ClientsReview />
      <Footer />
    </>
  );
}

export default ContactUs;
