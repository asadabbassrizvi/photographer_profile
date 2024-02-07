import React from "react";
import Banner from "../Banner/Banner";
import { useEffect } from "react";
import gsap from "gsap";

function Footer() {
  useEffect(() => {
    const item = document.querySelector(".logoIconFooter");
    const tl = gsap.timeline({ repeat: -1 }); // Setting repeat to -1 makes it loop infinitely
    // Add the rotation animation to the timeline
    tl.to(item, { duration: 2, rotation: 360, ease: "none" });
    // Start the animation
    tl.play();
  }, []);
  return (
    <div className="footerMainContainer">
      <div className="logoContainer">
        <div className="logoSection">
          <div className="logo">
            {/* <img src={Logo} alt="logo" className="" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="137"
              height="170"
              viewBox="0 0 137 170"
              fill="none"
            >
              <path
                d="M0.378906 169.502V0.501953H53.7271C55.3042 0.501953 58.222 0.541075 62.4804 0.61932C66.8177 0.697555 70.9578 1.01051 74.9007 1.5582C88.2279 3.20125 99.4259 7.93482 108.495 15.7589C117.642 23.583 124.542 33.5195 129.195 45.5686C133.848 57.5395 136.174 70.6839 136.174 85.002C136.174 99.3982 133.848 112.621 129.195 124.67C124.542 136.641 117.642 146.538 108.495 154.362C99.4259 162.108 88.2279 166.803 74.9007 168.446C70.9578 168.993 66.8177 169.306 62.4804 169.385C58.222 169.463 55.3042 169.502 53.7271 169.502H0.378906ZM25.6927 146.147H53.7271C56.4083 146.147 59.6021 146.069 63.3084 145.912C67.0148 145.756 70.2875 145.443 73.1264 144.973C81.8009 143.33 88.8193 139.614 94.1818 133.824C99.623 127.956 103.605 120.758 106.129 112.23C108.652 103.701 109.914 94.6256 109.914 85.002C109.914 75.0654 108.613 65.8721 106.011 57.4221C103.408 48.8939 99.3865 41.7739 93.9452 36.0624C88.5828 30.2725 81.6432 26.5952 73.1264 25.0304C70.2875 24.4827 66.9754 24.1698 63.1901 24.0915C59.4838 23.9351 56.3294 23.8568 53.7271 23.8568H25.6927V146.147Z"
                fill="#232329"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="147"
              height="170"
              viewBox="0 0 147 170"
              fill="none"
            >
              <path
                d="M0.269531 169.502L55.6286 0.501953H91.2334L146.593 169.502H120.924L69.9415 15.2895H76.3291L25.9382 169.502H0.269531ZM29.0137 131.36V108.357H117.967V131.36H29.0137Z"
                fill="#232329"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="169"
              height="170"
              viewBox="0 0 169 170"
              fill="none"
            >
              <path
                d="M0.813965 169.502V0.501953H23.1705L84.9172 127.604L146.309 0.501953H168.902V169.385H145.481V53.7839L90.4767 169.502H79.2393L24.1168 53.7839V169.502H0.813965Z"
                fill="#232329"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="170"
              viewBox="0 0 26 170"
              fill="none"
            >
              <path
                d="M0.40918 169.502V0.501953H25.1315V169.502H0.40918Z"
                fill="#232329"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="110"
              height="170"
              viewBox="0 0 110 170"
              fill="none"
            >
              <path
                d="M0.652832 169.502V0.501953H109.478V23.6221H25.3752V71.036H95.2837V94.1561H25.3752V146.382H109.478V169.502H0.652832Z"
                fill="#232329"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="135"
              height="170"
              viewBox="0 0 135 170"
              fill="none"
            >
              <path
                d="M0.88623 169.502V0.501953H25.9635L109.83 126.078V0.501953H134.907V169.502H109.83L25.9635 43.8082V169.502H0.88623Z"
                fill="#232329"
              />
            </svg>
          </div>
        </div>
        <div className="bannerContainer d-grid">
          <Banner />
        </div>
      </div>
      <div className="footerContainer">
        <div className="footerMain">
          <div className="abstractD">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="187"
              viewBox="0 0 80 187"
              fill="none"
            >
              <g clipPath="url(#clip0_136_2730)">
                <mask
                  id="mask0_136_2730"
                  style={{ maskType: "luminance" }}
                  maskUnits="userSpaceOnUse"
                  x="-107"
                  y="0"
                  width="187"
                  height="187"
                >
                  <path
                    d="M80 187L80 0L-107 -8.17403e-06L-107 187L80 187Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_136_2730)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M80 112.2L80 74.8L-22.85 74.8C-33.178 74.8 -41.55 66.4277 -41.55 56.1C-41.55 45.7723 -33.178 37.4 -22.85 37.4L80 37.4L80 0L-13.5 -4.08701e-06C-65.1382 -6.34419e-06 -107 41.8613 -107 93.5C-107 145.138 -65.1382 187 -13.5 187L80 187L80 149.6L-22.85 149.6C-33.178 149.6 -41.55 141.228 -41.55 130.9C-41.55 120.572 -33.178 112.2 -22.85 112.2L80 112.2Z"
                    fill="#1C1C21"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_136_2730">
                  <rect
                    width="187"
                    height="187"
                    fill="white"
                    transform="translate(80) rotate(90)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="phMes footerMes">
            {" "}
            {/*imported from sub header components */}
            <div className="welMessage">
              <span>A more meaningful home for photography</span>
            </div>
            <div>
              <div className="btnText">
                <span className="phText">let's</span>{" "}
                <button className="svgIcon">
                  {/* <img className="phIcon" src={icon} alt="icon" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="logoIconFooter"
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
              <div className="phText">work together</div>
            </div>
          </div>
          <div className="footerNavMain">
            <div className="linksContainer">
              <span>Home</span>
              <div className="fNavLink">
                <button>
                  <h6>About Me</h6>
                </button>
                <button>
                  <h6>My Works</h6>
                </button>
                <button>
                  <h6>Testimonials</h6>
                </button>
              </div>
            </div>
            <div className="linksContainer">
              <span>Clients</span>
              <div className="fNavLink">
                <button>
                  <h6>Klovesto</h6>
                </button>
                <button>
                  <h6>Nukeway</h6>
                </button>
                <button>
                  <h6>Cloven’s</h6>
                </button>
                <button>
                  <h6>MenVol</h6>
                </button>
              </div>
            </div>
            <div className="linksContainer">
              <span>Portfolio</span>
              <div className="fNavLink">
                <button>
                  <h6>Events</h6>
                </button>
                <button>
                  <h6>Portrait</h6>
                </button>
                <button>
                  <h6>Branding</h6>
                </button>
                <button>
                  <h6>Commerciale</h6>
                </button>
                <button>
                  <h6>Wedding</h6>
                </button>
              </div>
            </div>
            <div className="linksContainer">
              <span>Services</span>
              <div className="fNavLink">
                <button>
                  <h6>Events</h6>
                </button>
                <button>
                  <h6>Commercial</h6>
                </button>
              </div>
            </div>
          </div>
          <div className="abstractR">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="187"
              viewBox="0 0 80 187"
              fill="none"
            >
              <g clipPath="url(#clip0_136_2815)">
                <mask
                  id="mask0_136_2815"
                  style={{ maskType: "luminance" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="187"
                  height="187"
                >
                  <path
                    d="M8.17403e-06 187L0 0L187 -8.17403e-06L187 187L8.17403e-06 187Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_136_2815)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.90442e-06 112.2L3.26961e-06 74.8L102.85 74.8C113.178 74.8 121.55 66.4277 121.55 56.1C121.55 45.7723 113.178 37.4 102.85 37.4L1.63481e-06 37.4L0 0L93.5 -4.08701e-06C145.138 -6.34419e-06 187 41.8613 187 93.5C187 145.138 145.138 187 93.5 187L8.17403e-06 187L6.53922e-06 149.6L102.85 149.6C113.178 149.6 121.55 141.228 121.55 130.9C121.55 120.572 113.178 112.2 102.85 112.2L4.90442e-06 112.2Z"
                    fill="#1C1C21"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_136_2815">
                  <rect
                    width="187"
                    height="187"
                    fill="white"
                    transform="matrix(4.37114e-08 1 1 -4.37114e-08 0 0)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className="copyrightsMain">
          <div className="crMainCon">
            <div className="terms">Terms & Conditions</div>
            <span></span>
            <div className="terms">Privacy Policy</div>
          </div>
          <div className="btnIconsCont">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <g clipPath="url(#clip0_136_2750)">
                  <path
                    d="M18 9C18 4.02943 13.9706 0 9 0C4.02943 0 0 4.02943 0 9C0 13.4921 3.29115 17.2155 7.59375 17.8907V11.6016H5.30859V9H7.59375V7.01719C7.59375 4.76156 8.93742 3.51562 10.9932 3.51562C11.9776 3.51562 13.0078 3.69141 13.0078 3.69141V5.90625H11.873C10.755 5.90625 10.4062 6.60006 10.4062 7.3125V9H12.9023L12.5033 11.6016H10.4062V17.8907C14.7088 17.2155 18 13.4921 18 9Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_136_2750">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <g clipPath="url(#clip0_136_2753)">
                  <path
                    d="M5.66262 16.3125C12.4534 16.3125 16.1687 10.6851 16.1687 5.80646C16.1687 5.64825 16.1652 5.48653 16.1582 5.32833C16.8809 4.80566 17.5046 4.15825 18 3.41653C17.3269 3.71601 16.6122 3.9116 15.8804 3.99661C16.651 3.53474 17.2279 2.80917 17.5043 1.95439C16.7794 2.38398 15.9867 2.68702 15.1601 2.85052C14.6031 2.25873 13.8667 1.8669 13.0648 1.7356C12.2628 1.6043 11.4399 1.74085 10.7233 2.12413C10.0067 2.50742 9.43635 3.11609 9.10039 3.85604C8.76442 4.596 8.68157 5.42602 8.86465 6.21778C7.39687 6.14413 5.96095 5.76284 4.64999 5.09863C3.33902 4.43443 2.18227 3.50214 1.25473 2.3622C0.7833 3.17499 0.639042 4.1368 0.851273 5.05213C1.0635 5.96746 1.6163 6.76765 2.3973 7.29005C1.81097 7.27144 1.23748 7.11357 0.724219 6.8295V6.87521C0.723693 7.72817 1.01857 8.555 1.55873 9.21514C2.09889 9.87528 2.85099 10.328 3.68719 10.4963C3.14404 10.6449 2.57399 10.6666 2.02113 10.5596C2.25709 11.2931 2.71618 11.9347 3.33433 12.3948C3.95248 12.8549 4.69884 13.1105 5.46926 13.126C4.16132 14.1534 2.54563 14.7107 0.882422 14.708C0.587465 14.7076 0.292799 14.6895 0 14.6539C1.68964 15.7379 3.65515 16.3136 5.66262 16.3125Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_136_2753">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <g clipPath="url(#clip0_136_2756)">
                  <path
                    d="M16.6676 0H1.32891C0.594141 0 0 0.580078 0 1.29727V16.6992C0 17.4164 0.594141 18 1.32891 18H16.6676C17.4023 18 18 17.4164 18 16.7027V1.29727C18 0.580078 17.4023 0 16.6676 0ZM5.34023 15.3387H2.66836V6.74648H5.34023V15.3387ZM4.0043 5.57578C3.14648 5.57578 2.45391 4.8832 2.45391 4.02891C2.45391 3.17461 3.14648 2.48203 4.0043 2.48203C4.85859 2.48203 5.55117 3.17461 5.55117 4.02891C5.55117 4.87969 4.85859 5.57578 4.0043 5.57578ZM15.3387 15.3387H12.6703V11.1621C12.6703 10.1672 12.6527 8.88398 11.2816 8.88398C9.89297 8.88398 9.68203 9.97031 9.68203 11.0918V15.3387H7.01719V6.74648H9.57656V7.9207H9.61172C9.9668 7.2457 10.8387 6.53203 12.1359 6.53203C14.8395 6.53203 15.3387 8.31094 15.3387 10.6242V15.3387Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_136_2756">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
          <div className="allRights">
            © 2024 Murshid Template. feel free to contact us at
            asadabbassrizvi@gmail.com for any query.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
