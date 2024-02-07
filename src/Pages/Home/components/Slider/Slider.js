import React from "react";
import workText from "../../images/allWork.png";
import carousel1 from "../../images/carousel1.png";
import carousel2 from "../../images/carousel3.png";
import carousel3 from "../../images/carousel2.png";
import "./slider.scss";

export default function Slider() {
  return (
    <div className="serContainer carouselBlock">
      <div className="heading">
        <div className="text">
          <span>Portfolio</span>
          <div>Explore My photography work.</div>
        </div>
        <div className="buttons">
          <div className="btnContainer">
            <div className="">
              <button className="arrow btn btn-seconday">
                <a
                  className="mr-1"
                  href="#carouselExampleIndicators3"
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
                  href="#carouselExampleIndicators3"
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
              <img src={workText} alt="services" className="" />
            </button>
          </div>
        </div>
      </div>
      <div
        id="carouselExampleIndicators3"
        className="carousel slide carouselIndicators3"
        data-ride="carousel"
      >
        {/* carousel for desktop screen  */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="carouselContiner">
              <div className="carouselItemCon">
                <img src={carousel1} alt="img" className="" />
                <div className="carouselText">
                  <div className="">
                    <div className="title">Faces of Resilience</div>
                    <div className="date">March 2022</div>
                  </div>
                  <div className="viewP">
                    <span>view project</span>
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
                  </div>
                </div>
              </div>
              <div className="carouselItemCon desktop-screen">
                <img src={carousel2} alt="img" className="" />
                <div className="carouselText">
                  <div className="">
                    <div className="title">A Wedding Tale</div>
                    <div className="date">January 2020</div>
                  </div>
                  <div className="viewP">
                    <span>view project</span>
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
                  </div>
                </div>
              </div>
              <div className="carouselItemCon desktop-screen">
                <img src={carousel3} alt="img" className="" />
                <div className="carouselText">
                  <div className="">
                    <div className="title">Product Elegance</div>
                    <div className="date">January 2020</div>
                  </div>
                  <div className="viewP">
                    <span>view project</span>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carouselContiner">
              <div className="carouselItemCon">
                <img src={carousel2} alt="img" className="" />
                <div className="carouselText">
                  <div className="">
                    <div className="title">A Wedding Tale</div>
                    <div className="date">January 2020</div>
                  </div>
                  <div className="viewP">
                    <span>view project</span>
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
                  </div>
                </div>
              </div>

              <div className="carouselItemCon desktop-screen">
                <img src={carousel3} alt="img" className="" />
                <div className="carouselText">
                  <div className="">
                    <div className="title">Product Elegance</div>
                    <div className="date">January 2020</div>
                  </div>
                  <div className="viewP">
                    <span>view project</span>
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
                  </div>
                </div>
              </div>
              <div className="carouselItemCon desktop-screen">
                <img src={carousel1} alt="img" className="" />
                <div className="carouselText">
                  <div className="">
                    <div className="title">Faces of Resilience</div>
                    <div className="date">March 2022</div>
                  </div>
                  <div className="viewP">
                    <span>view project</span>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carouselContiner">
              <div className="carouselItemCon desktop-screen">
                <img src={carousel1} alt="img" className="" />
                <div className="carouselText">
                  <div className="">
                    <div className="title">Faces of Resilience</div>
                    <div className="date">March 2022</div>
                  </div>
                  <div className="viewP">
                    <span>view project</span>
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
                  </div>
                </div>
              </div>
              <div className="carouselItemCon desktop-screen">
                <img src={carousel2} alt="img" className="" />
                <div className="carouselText">
                  <div className="">
                    <div className="title">A Wedding Tale</div>
                    <div className="date">January 2020</div>
                  </div>
                  <div className="viewP">
                    <span>view project</span>
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
                  </div>
                </div>
              </div>

              <div className="carouselItemCon ">
                <img src={carousel3} alt="img" className="" />
                <div className="carouselText">
                  <div className="">
                    <div className="title">Product Elegance</div>
                    <div className="date">January 2020</div>
                  </div>
                  <div className="viewP">
                    <span>view project</span>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="btnContainer small-screen">
          <div className="">
            <button className="arrow btn btn-seconday">
              <a
                className="mr-1"
                href="#carouselExampleIndicators3"
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
                href="#carouselExampleIndicators3"
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
  );
}
