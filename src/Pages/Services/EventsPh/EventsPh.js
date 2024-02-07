import { React } from "react";
import carousel1 from "../images/Image1.png";
import carousel2 from "../images/Image2.png";
import carousel3 from "../images/Image3.png";
import "./EventsPh.scss";

function EventsPh() {
  return (
    <div className="ppMainContainer">
      <div className="ppSubContainer">
        <div className="ppTextContainerMain">
          <div className="ppTextContainer">
            <h3>Events Photography</h3>
            <p>
              Our event photography service is dedicated to capturing the magic
              of your special occasions. Whether it's a wedding, corporate
              event, or milestone celebration, we're there to document every
              heartfelt moment. We blend into the background, ensuring natural
              and candid shots that reflect the emotions of the day.
            </p>
            <button>
              <span> View Project </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.2085 3.125L16.5835 3.125C16.7493 3.125 16.9082 3.19085 17.0254 3.30806C17.1426 3.42527 17.2085 3.58424 17.2085 3.75V13.125C17.2085 13.4702 16.9287 13.75 16.5835 13.75C16.2383 13.75 15.9585 13.4702 15.9585 13.125V5.25888L4.52544 16.6919C4.28136 16.936 3.88563 16.936 3.64155 16.6919C3.39748 16.4479 3.39748 16.0521 3.64155 15.8081L15.0746 4.375L7.2085 4.375C6.86332 4.375 6.5835 4.09518 6.5835 3.75C6.5835 3.40482 6.86332 3.125 7.2085 3.125Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <div className="ppSliderContainer">
            <div
              id="eventsSlider"
              className="carousel slide carouselIndicators3"
              data-ride="carousel"
            >
              {/* carousel for desktop screen  */}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="carouselContiner">
                    <div className="carouselItemCon">
                      <img src={carousel2} alt="img" className="" />
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="carouselContiner">
                    <div className="carouselItemCon">
                      <img src={carousel1} alt="img" className="" />
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="carouselContiner">
                    <div className="carouselItemCon">
                      <img src={carousel3} alt="img" className="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ppSliderButtonContainer">
              <div className="">
                <button className="arrow btn btn-seconday">
                  <a
                    className="mr-1"
                    href="#eventsSlider"
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
                    href="#eventsSlider"
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
      </div>
      <div className="PPRateContainer">
        <div className="ppRate">
          <div className="ppRateBody">
            <span>Wedding Photography</span>
            <div className="ratesContainer">
              <span>$1,500</span>
              <button>
                <span>Book a call</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.875 3.125L16.25 3.125C16.4158 3.125 16.5747 3.19085 16.6919 3.30806C16.8092 3.42527 16.875 3.58424 16.875 3.75V13.125C16.875 13.4702 16.5952 13.75 16.25 13.75C15.9048 13.75 15.625 13.4702 15.625 13.125V5.25888L4.19194 16.6919C3.94786 16.936 3.55214 16.936 3.30806 16.6919C3.06398 16.4479 3.06398 16.0521 3.30806 15.8081L14.7411 4.375L6.875 4.375C6.52982 4.375 6.25 4.09518 6.25 3.75C6.25 3.40482 6.52982 3.125 6.875 3.125Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="dealsContainer">
            <div className="dealsMain">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                className="serStaricImg"
              >
                <g clipPath="url(#clip0_161_5584)">
                  <mask
                    id="mask0_161_5584"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="30"
                    height="30"
                  >
                    <path d="M30 0H0V30H30V0Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_161_5584)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M28.3412 15C28.9153 15 29.4716 14.9229 30 14.7785C29.5799 14.6899 29.1443 14.6433 28.6979 14.6433H21.2782C20.0527 14.6433 18.9092 14.2922 17.9429 13.685C18.1541 12.4484 18.7369 11.263 19.6915 10.3084L24.4337 5.56641C24.8397 5.16036 25.1784 4.71253 25.4501 4.23678C25.0902 4.47119 24.7493 4.74624 24.4337 5.06194L19.1871 10.3084C18.3206 11.175 17.2637 11.7353 16.1511 11.9893C15.426 10.9655 15 9.71507 15 8.36513V1.6589C15 1.08466 14.9229 0.528435 14.7785 0C14.6899 0.420107 14.6433 0.855699 14.6433 1.30218V8.72184C14.6433 9.94733 14.2922 11.0908 13.685 12.0572C12.4485 11.8459 11.263 11.263 10.3084 10.3084L5.56641 5.56641C5.16036 5.16036 4.71253 4.82156 4.23678 4.55001C4.47119 4.90973 4.74624 5.25071 5.06194 5.56641L10.3084 10.8129C11.175 11.6795 11.7353 12.7363 11.9893 13.8489C10.9655 14.5739 9.71507 15 8.36513 15H1.6589C1.08466 15 0.528434 15.0771 0 15.2215C0.42011 15.3101 0.855704 15.3567 1.30218 15.3567H8.72184C9.94734 15.3567 11.0908 15.7079 12.0572 16.3151C11.8459 17.5515 11.263 18.7369 10.3084 19.6915L5.56641 24.4337C5.16038 24.8397 4.82157 25.2875 4.55002 25.7633C4.90974 25.5288 5.25071 25.2537 5.56641 24.9381L10.8129 19.6915C11.6795 18.825 12.7363 18.2648 13.8489 18.0107C14.5739 19.0345 15 20.285 15 21.635V28.3412C15 28.9153 15.0771 29.4716 15.2215 30C15.3101 29.5799 15.3567 29.1443 15.3567 28.6979V21.2781C15.3567 20.0526 15.7079 18.9092 16.3151 17.9429C17.5515 18.1541 18.7369 18.7369 19.6915 19.6915L24.4337 24.4337C24.8397 24.8397 25.2875 25.1784 25.7633 25.4501C25.5288 25.0902 25.2537 24.7493 24.9381 24.4337L19.6915 19.1871C18.825 18.3206 18.2648 17.2637 18.0108 16.1511C19.0345 15.426 20.285 15 21.635 15H28.3412Z"
                      fill="#474752"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_161_5584">
                    <rect width="30" height="30" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>Capture the magic of your special day.</span>
            </div>

            <div className="dealsMain">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                className="serStaricImg"
              >
                <g clipPath="url(#clip0_161_5584)">
                  <mask
                    id="mask0_161_5584"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="30"
                    height="30"
                  >
                    <path d="M30 0H0V30H30V0Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_161_5584)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M28.3412 15C28.9153 15 29.4716 14.9229 30 14.7785C29.5799 14.6899 29.1443 14.6433 28.6979 14.6433H21.2782C20.0527 14.6433 18.9092 14.2922 17.9429 13.685C18.1541 12.4484 18.7369 11.263 19.6915 10.3084L24.4337 5.56641C24.8397 5.16036 25.1784 4.71253 25.4501 4.23678C25.0902 4.47119 24.7493 4.74624 24.4337 5.06194L19.1871 10.3084C18.3206 11.175 17.2637 11.7353 16.1511 11.9893C15.426 10.9655 15 9.71507 15 8.36513V1.6589C15 1.08466 14.9229 0.528435 14.7785 0C14.6899 0.420107 14.6433 0.855699 14.6433 1.30218V8.72184C14.6433 9.94733 14.2922 11.0908 13.685 12.0572C12.4485 11.8459 11.263 11.263 10.3084 10.3084L5.56641 5.56641C5.16036 5.16036 4.71253 4.82156 4.23678 4.55001C4.47119 4.90973 4.74624 5.25071 5.06194 5.56641L10.3084 10.8129C11.175 11.6795 11.7353 12.7363 11.9893 13.8489C10.9655 14.5739 9.71507 15 8.36513 15H1.6589C1.08466 15 0.528434 15.0771 0 15.2215C0.42011 15.3101 0.855704 15.3567 1.30218 15.3567H8.72184C9.94734 15.3567 11.0908 15.7079 12.0572 16.3151C11.8459 17.5515 11.263 18.7369 10.3084 19.6915L5.56641 24.4337C5.16038 24.8397 4.82157 25.2875 4.55002 25.7633C4.90974 25.5288 5.25071 25.2537 5.56641 24.9381L10.8129 19.6915C11.6795 18.825 12.7363 18.2648 13.8489 18.0107C14.5739 19.0345 15 20.285 15 21.635V28.3412C15 28.9153 15.0771 29.4716 15.2215 30C15.3101 29.5799 15.3567 29.1443 15.3567 28.6979V21.2781C15.3567 20.0526 15.7079 18.9092 16.3151 17.9429C17.5515 18.1541 18.7369 18.7369 19.6915 19.6915L24.4337 24.4337C24.8397 24.8397 25.2875 25.1784 25.7633 25.4501C25.5288 25.0902 25.2537 24.7493 24.9381 24.4337L19.6915 19.1871C18.825 18.3206 18.2648 17.2637 18.0108 16.1511C19.0345 15.426 20.285 15 21.635 15H28.3412Z"
                      fill="#474752"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_161_5584">
                    <rect width="30" height="30" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>
                Includes full-day coverage, a second photographer, and 300+
                professionally edited images.
              </span>
            </div>

            <div className="dealsMain">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                className="serStaricImg"
              >
                <g clipPath="url(#clip0_161_5584)">
                  <mask
                    id="mask0_161_5584"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="30"
                    height="30"
                  >
                    <path d="M30 0H0V30H30V0Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_161_5584)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M28.3412 15C28.9153 15 29.4716 14.9229 30 14.7785C29.5799 14.6899 29.1443 14.6433 28.6979 14.6433H21.2782C20.0527 14.6433 18.9092 14.2922 17.9429 13.685C18.1541 12.4484 18.7369 11.263 19.6915 10.3084L24.4337 5.56641C24.8397 5.16036 25.1784 4.71253 25.4501 4.23678C25.0902 4.47119 24.7493 4.74624 24.4337 5.06194L19.1871 10.3084C18.3206 11.175 17.2637 11.7353 16.1511 11.9893C15.426 10.9655 15 9.71507 15 8.36513V1.6589C15 1.08466 14.9229 0.528435 14.7785 0C14.6899 0.420107 14.6433 0.855699 14.6433 1.30218V8.72184C14.6433 9.94733 14.2922 11.0908 13.685 12.0572C12.4485 11.8459 11.263 11.263 10.3084 10.3084L5.56641 5.56641C5.16036 5.16036 4.71253 4.82156 4.23678 4.55001C4.47119 4.90973 4.74624 5.25071 5.06194 5.56641L10.3084 10.8129C11.175 11.6795 11.7353 12.7363 11.9893 13.8489C10.9655 14.5739 9.71507 15 8.36513 15H1.6589C1.08466 15 0.528434 15.0771 0 15.2215C0.42011 15.3101 0.855704 15.3567 1.30218 15.3567H8.72184C9.94734 15.3567 11.0908 15.7079 12.0572 16.3151C11.8459 17.5515 11.263 18.7369 10.3084 19.6915L5.56641 24.4337C5.16038 24.8397 4.82157 25.2875 4.55002 25.7633C4.90974 25.5288 5.25071 25.2537 5.56641 24.9381L10.8129 19.6915C11.6795 18.825 12.7363 18.2648 13.8489 18.0107C14.5739 19.0345 15 20.285 15 21.635V28.3412C15 28.9153 15.0771 29.4716 15.2215 30C15.3101 29.5799 15.3567 29.1443 15.3567 28.6979V21.2781C15.3567 20.0526 15.7079 18.9092 16.3151 17.9429C17.5515 18.1541 18.7369 18.7369 19.6915 19.6915L24.4337 24.4337C24.8397 24.8397 25.2875 25.1784 25.7633 25.4501C25.5288 25.0902 25.2537 24.7493 24.9381 24.4337L19.6915 19.1871C18.825 18.3206 18.2648 17.2637 18.0108 16.1511C19.0345 15.426 20.285 15 21.635 15H28.3412Z"
                      fill="#474752"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_161_5584">
                    <rect width="30" height="30" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>
                Customizable packages are available to suit your specific
                wedding needs.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="PPRateContainer">
        <div className="ppRate">
          <div className="ppRateBody">
            <span>Party Coverage</span>
            <div className="ratesContainer">
              <span>$800</span>
              <button>
                <span>Book a call</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.875 3.125L16.25 3.125C16.4158 3.125 16.5747 3.19085 16.6919 3.30806C16.8092 3.42527 16.875 3.58424 16.875 3.75V13.125C16.875 13.4702 16.5952 13.75 16.25 13.75C15.9048 13.75 15.625 13.4702 15.625 13.125V5.25888L4.19194 16.6919C3.94786 16.936 3.55214 16.936 3.30806 16.6919C3.06398 16.4479 3.06398 16.0521 3.30806 15.8081L14.7411 4.375L6.875 4.375C6.52982 4.375 6.25 4.09518 6.25 3.75C6.25 3.40482 6.52982 3.125 6.875 3.125Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="dealsContainer">
            <div className="dealsMain">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                className="serStaricImg"
              >
                <g clipPath="url(#clip0_161_5584)">
                  <mask
                    id="mask0_161_5584"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="30"
                    height="30"
                  >
                    <path d="M30 0H0V30H30V0Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_161_5584)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M28.3412 15C28.9153 15 29.4716 14.9229 30 14.7785C29.5799 14.6899 29.1443 14.6433 28.6979 14.6433H21.2782C20.0527 14.6433 18.9092 14.2922 17.9429 13.685C18.1541 12.4484 18.7369 11.263 19.6915 10.3084L24.4337 5.56641C24.8397 5.16036 25.1784 4.71253 25.4501 4.23678C25.0902 4.47119 24.7493 4.74624 24.4337 5.06194L19.1871 10.3084C18.3206 11.175 17.2637 11.7353 16.1511 11.9893C15.426 10.9655 15 9.71507 15 8.36513V1.6589C15 1.08466 14.9229 0.528435 14.7785 0C14.6899 0.420107 14.6433 0.855699 14.6433 1.30218V8.72184C14.6433 9.94733 14.2922 11.0908 13.685 12.0572C12.4485 11.8459 11.263 11.263 10.3084 10.3084L5.56641 5.56641C5.16036 5.16036 4.71253 4.82156 4.23678 4.55001C4.47119 4.90973 4.74624 5.25071 5.06194 5.56641L10.3084 10.8129C11.175 11.6795 11.7353 12.7363 11.9893 13.8489C10.9655 14.5739 9.71507 15 8.36513 15H1.6589C1.08466 15 0.528434 15.0771 0 15.2215C0.42011 15.3101 0.855704 15.3567 1.30218 15.3567H8.72184C9.94734 15.3567 11.0908 15.7079 12.0572 16.3151C11.8459 17.5515 11.263 18.7369 10.3084 19.6915L5.56641 24.4337C5.16038 24.8397 4.82157 25.2875 4.55002 25.7633C4.90974 25.5288 5.25071 25.2537 5.56641 24.9381L10.8129 19.6915C11.6795 18.825 12.7363 18.2648 13.8489 18.0107C14.5739 19.0345 15 20.285 15 21.635V28.3412C15 28.9153 15.0771 29.4716 15.2215 30C15.3101 29.5799 15.3567 29.1443 15.3567 28.6979V21.2781C15.3567 20.0526 15.7079 18.9092 16.3151 17.9429C17.5515 18.1541 18.7369 18.7369 19.6915 19.6915L24.4337 24.4337C24.8397 24.8397 25.2875 25.1784 25.7633 25.4501C25.5288 25.0902 25.2537 24.7493 24.9381 24.4337L19.6915 19.1871C18.825 18.3206 18.2648 17.2637 18.0108 16.1511C19.0345 15.426 20.285 15 21.635 15H28.3412Z"
                      fill="#474752"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_161_5584">
                    <rect width="30" height="30" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>Preserve the fun and excitement of your event.</span>
            </div>

            <div className="dealsMain">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                className="serStaricImg"
              >
                <g clipPath="url(#clip0_161_5584)">
                  <mask
                    id="mask0_161_5584"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="30"
                    height="30"
                  >
                    <path d="M30 0H0V30H30V0Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_161_5584)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M28.3412 15C28.9153 15 29.4716 14.9229 30 14.7785C29.5799 14.6899 29.1443 14.6433 28.6979 14.6433H21.2782C20.0527 14.6433 18.9092 14.2922 17.9429 13.685C18.1541 12.4484 18.7369 11.263 19.6915 10.3084L24.4337 5.56641C24.8397 5.16036 25.1784 4.71253 25.4501 4.23678C25.0902 4.47119 24.7493 4.74624 24.4337 5.06194L19.1871 10.3084C18.3206 11.175 17.2637 11.7353 16.1511 11.9893C15.426 10.9655 15 9.71507 15 8.36513V1.6589C15 1.08466 14.9229 0.528435 14.7785 0C14.6899 0.420107 14.6433 0.855699 14.6433 1.30218V8.72184C14.6433 9.94733 14.2922 11.0908 13.685 12.0572C12.4485 11.8459 11.263 11.263 10.3084 10.3084L5.56641 5.56641C5.16036 5.16036 4.71253 4.82156 4.23678 4.55001C4.47119 4.90973 4.74624 5.25071 5.06194 5.56641L10.3084 10.8129C11.175 11.6795 11.7353 12.7363 11.9893 13.8489C10.9655 14.5739 9.71507 15 8.36513 15H1.6589C1.08466 15 0.528434 15.0771 0 15.2215C0.42011 15.3101 0.855704 15.3567 1.30218 15.3567H8.72184C9.94734 15.3567 11.0908 15.7079 12.0572 16.3151C11.8459 17.5515 11.263 18.7369 10.3084 19.6915L5.56641 24.4337C5.16038 24.8397 4.82157 25.2875 4.55002 25.7633C4.90974 25.5288 5.25071 25.2537 5.56641 24.9381L10.8129 19.6915C11.6795 18.825 12.7363 18.2648 13.8489 18.0107C14.5739 19.0345 15 20.285 15 21.635V28.3412C15 28.9153 15.0771 29.4716 15.2215 30C15.3101 29.5799 15.3567 29.1443 15.3567 28.6979V21.2781C15.3567 20.0526 15.7079 18.9092 16.3151 17.9429C17.5515 18.1541 18.7369 18.7369 19.6915 19.6915L24.4337 24.4337C24.8397 24.8397 25.2875 25.1784 25.7633 25.4501C25.5288 25.0902 25.2537 24.7493 24.9381 24.4337L19.6915 19.1871C18.825 18.3206 18.2648 17.2637 18.0108 16.1511C19.0345 15.426 20.285 15 21.635 15H28.3412Z"
                      fill="#474752"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_161_5584">
                    <rect width="30" height="30" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>
                Includes up to 4 hours of coverage and 150+ professionally
                edited images.
              </span>
            </div>

            <div className="dealsMain">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                className="serStaricImg"
              >
                <g clipPath="url(#clip0_161_5584)">
                  <mask
                    id="mask0_161_5584"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="30"
                    height="30"
                  >
                    <path d="M30 0H0V30H30V0Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_161_5584)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M28.3412 15C28.9153 15 29.4716 14.9229 30 14.7785C29.5799 14.6899 29.1443 14.6433 28.6979 14.6433H21.2782C20.0527 14.6433 18.9092 14.2922 17.9429 13.685C18.1541 12.4484 18.7369 11.263 19.6915 10.3084L24.4337 5.56641C24.8397 5.16036 25.1784 4.71253 25.4501 4.23678C25.0902 4.47119 24.7493 4.74624 24.4337 5.06194L19.1871 10.3084C18.3206 11.175 17.2637 11.7353 16.1511 11.9893C15.426 10.9655 15 9.71507 15 8.36513V1.6589C15 1.08466 14.9229 0.528435 14.7785 0C14.6899 0.420107 14.6433 0.855699 14.6433 1.30218V8.72184C14.6433 9.94733 14.2922 11.0908 13.685 12.0572C12.4485 11.8459 11.263 11.263 10.3084 10.3084L5.56641 5.56641C5.16036 5.16036 4.71253 4.82156 4.23678 4.55001C4.47119 4.90973 4.74624 5.25071 5.06194 5.56641L10.3084 10.8129C11.175 11.6795 11.7353 12.7363 11.9893 13.8489C10.9655 14.5739 9.71507 15 8.36513 15H1.6589C1.08466 15 0.528434 15.0771 0 15.2215C0.42011 15.3101 0.855704 15.3567 1.30218 15.3567H8.72184C9.94734 15.3567 11.0908 15.7079 12.0572 16.3151C11.8459 17.5515 11.263 18.7369 10.3084 19.6915L5.56641 24.4337C5.16038 24.8397 4.82157 25.2875 4.55002 25.7633C4.90974 25.5288 5.25071 25.2537 5.56641 24.9381L10.8129 19.6915C11.6795 18.825 12.7363 18.2648 13.8489 18.0107C14.5739 19.0345 15 20.285 15 21.635V28.3412C15 28.9153 15.0771 29.4716 15.2215 30C15.3101 29.5799 15.3567 29.1443 15.3567 28.6979V21.2781C15.3567 20.0526 15.7079 18.9092 16.3151 17.9429C17.5515 18.1541 18.7369 18.7369 19.6915 19.6915L24.4337 24.4337C24.8397 24.8397 25.2875 25.1784 25.7633 25.4501C25.5288 25.0902 25.2537 24.7493 24.9381 24.4337L19.6915 19.1871C18.825 18.3206 18.2648 17.2637 18.0108 16.1511C19.0345 15.426 20.285 15 21.635 15H28.3412Z"
                      fill="#474752"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_161_5584">
                    <rect width="30" height="30" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>Additional hours can be added at $150 per hour.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="PPRateContainer">
        <div className="ppRate">
          <div className="ppRateBody">
            <span>Corporate Events</span>
            <div className="ratesContainer">
              <div className="cstPricing">Custom Pricing</div>
              <button>
                <span>Book a call</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.875 3.125L16.25 3.125C16.4158 3.125 16.5747 3.19085 16.6919 3.30806C16.8092 3.42527 16.875 3.58424 16.875 3.75V13.125C16.875 13.4702 16.5952 13.75 16.25 13.75C15.9048 13.75 15.625 13.4702 15.625 13.125V5.25888L4.19194 16.6919C3.94786 16.936 3.55214 16.936 3.30806 16.6919C3.06398 16.4479 3.06398 16.0521 3.30806 15.8081L14.7411 4.375L6.875 4.375C6.52982 4.375 6.25 4.09518 6.25 3.75C6.25 3.40482 6.52982 3.125 6.875 3.125Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="dealsContainer">
            <div className="dealsMain">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                className="serStaricImg"
              >
                <g clipPath="url(#clip0_161_5584)">
                  <mask
                    id="mask0_161_5584"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="30"
                    height="30"
                  >
                    <path d="M30 0H0V30H30V0Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_161_5584)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M28.3412 15C28.9153 15 29.4716 14.9229 30 14.7785C29.5799 14.6899 29.1443 14.6433 28.6979 14.6433H21.2782C20.0527 14.6433 18.9092 14.2922 17.9429 13.685C18.1541 12.4484 18.7369 11.263 19.6915 10.3084L24.4337 5.56641C24.8397 5.16036 25.1784 4.71253 25.4501 4.23678C25.0902 4.47119 24.7493 4.74624 24.4337 5.06194L19.1871 10.3084C18.3206 11.175 17.2637 11.7353 16.1511 11.9893C15.426 10.9655 15 9.71507 15 8.36513V1.6589C15 1.08466 14.9229 0.528435 14.7785 0C14.6899 0.420107 14.6433 0.855699 14.6433 1.30218V8.72184C14.6433 9.94733 14.2922 11.0908 13.685 12.0572C12.4485 11.8459 11.263 11.263 10.3084 10.3084L5.56641 5.56641C5.16036 5.16036 4.71253 4.82156 4.23678 4.55001C4.47119 4.90973 4.74624 5.25071 5.06194 5.56641L10.3084 10.8129C11.175 11.6795 11.7353 12.7363 11.9893 13.8489C10.9655 14.5739 9.71507 15 8.36513 15H1.6589C1.08466 15 0.528434 15.0771 0 15.2215C0.42011 15.3101 0.855704 15.3567 1.30218 15.3567H8.72184C9.94734 15.3567 11.0908 15.7079 12.0572 16.3151C11.8459 17.5515 11.263 18.7369 10.3084 19.6915L5.56641 24.4337C5.16038 24.8397 4.82157 25.2875 4.55002 25.7633C4.90974 25.5288 5.25071 25.2537 5.56641 24.9381L10.8129 19.6915C11.6795 18.825 12.7363 18.2648 13.8489 18.0107C14.5739 19.0345 15 20.285 15 21.635V28.3412C15 28.9153 15.0771 29.4716 15.2215 30C15.3101 29.5799 15.3567 29.1443 15.3567 28.6979V21.2781C15.3567 20.0526 15.7079 18.9092 16.3151 17.9429C17.5515 18.1541 18.7369 18.7369 19.6915 19.6915L24.4337 24.4337C24.8397 24.8397 25.2875 25.1784 25.7633 25.4501C25.5288 25.0902 25.2537 24.7493 24.9381 24.4337L19.6915 19.1871C18.825 18.3206 18.2648 17.2637 18.0108 16.1511C19.0345 15.426 20.285 15 21.635 15H28.3412Z"
                      fill="#474752"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_161_5584">
                    <rect width="30" height="30" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>
                Tailored solutions for corporate gatherings, conferences, and
                seminars.
              </span>
            </div>

            <div className="dealsMain">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                className="serStaricImg"
              >
                <g clipPath="url(#clip0_161_5584)">
                  <mask
                    id="mask0_161_5584"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="30"
                    height="30"
                  >
                    <path d="M30 0H0V30H30V0Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_161_5584)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M28.3412 15C28.9153 15 29.4716 14.9229 30 14.7785C29.5799 14.6899 29.1443 14.6433 28.6979 14.6433H21.2782C20.0527 14.6433 18.9092 14.2922 17.9429 13.685C18.1541 12.4484 18.7369 11.263 19.6915 10.3084L24.4337 5.56641C24.8397 5.16036 25.1784 4.71253 25.4501 4.23678C25.0902 4.47119 24.7493 4.74624 24.4337 5.06194L19.1871 10.3084C18.3206 11.175 17.2637 11.7353 16.1511 11.9893C15.426 10.9655 15 9.71507 15 8.36513V1.6589C15 1.08466 14.9229 0.528435 14.7785 0C14.6899 0.420107 14.6433 0.855699 14.6433 1.30218V8.72184C14.6433 9.94733 14.2922 11.0908 13.685 12.0572C12.4485 11.8459 11.263 11.263 10.3084 10.3084L5.56641 5.56641C5.16036 5.16036 4.71253 4.82156 4.23678 4.55001C4.47119 4.90973 4.74624 5.25071 5.06194 5.56641L10.3084 10.8129C11.175 11.6795 11.7353 12.7363 11.9893 13.8489C10.9655 14.5739 9.71507 15 8.36513 15H1.6589C1.08466 15 0.528434 15.0771 0 15.2215C0.42011 15.3101 0.855704 15.3567 1.30218 15.3567H8.72184C9.94734 15.3567 11.0908 15.7079 12.0572 16.3151C11.8459 17.5515 11.263 18.7369 10.3084 19.6915L5.56641 24.4337C5.16038 24.8397 4.82157 25.2875 4.55002 25.7633C4.90974 25.5288 5.25071 25.2537 5.56641 24.9381L10.8129 19.6915C11.6795 18.825 12.7363 18.2648 13.8489 18.0107C14.5739 19.0345 15 20.285 15 21.635V28.3412C15 28.9153 15.0771 29.4716 15.2215 30C15.3101 29.5799 15.3567 29.1443 15.3567 28.6979V21.2781C15.3567 20.0526 15.7079 18.9092 16.3151 17.9429C17.5515 18.1541 18.7369 18.7369 19.6915 19.6915L24.4337 24.4337C24.8397 24.8397 25.2875 25.1784 25.7633 25.4501C25.5288 25.0902 25.2537 24.7493 24.9381 24.4337L19.6915 19.1871C18.825 18.3206 18.2648 17.2637 18.0108 16.1511C19.0345 15.426 20.285 15 21.635 15H28.3412Z"
                      fill="#474752"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_161_5584">
                    <rect width="30" height="30" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>
                Contact us for a personalized quote based on your event's
                requirements.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventsPh;
