import React from "react";
import logoOne from "../images/Logo1.png";
import logo2 from "../images/Logo2.png";
import logo3 from "../images/Logo3.png";
import logo4 from "../images/Logo4.png";
import logo5 from "../images/Logo5.png";
import logo6 from "../images/Logo6.png";
import "./Brand.scss";

export default function Brand() {
  return (
    <div className="bannerContainer">
      <span>bRANDS i hAVE wORKED wITH</span>
      <div className="bannerSlider d-grid">
        <div className="sliderContainer p-0 m-0">
          <div className="slider">
            <div className="sliderItem">
              <span>
                <img src={logoOne} className="logo1" alt="staric" />
              </span>
            </div>

            <div className="sliderItem logo23C">
              <div className="logo23">
                <span className="mr-3">
                  <img src={logo3} className="logo3" alt="staric" />
                </span>
                <span>
                  <img src={logo2} className="logo2" alt="staric" />
                </span>
              </div>
            </div>

            <div className="sliderItem">
              <span>
                <img src={logo4} className="logo4" alt="staric" />
              </span>
            </div>

            <div className="sliderItem logo23C">
              <span>
                <img src={logo5} className="logo5" alt="staric" />
              </span>
            </div>

            <div className="sliderItem">
              <span>
                <img src={logo6} className="logo6" alt="staric" />
              </span>
            </div>
          </div>

          <div className="slider">
            <div className="sliderItem">
              <span>
                <img src={logoOne} className="logo1" alt="staric" />
              </span>
            </div>

            <div className="sliderItem logo23C">
              <div className="logo23">
                <span className="mr-3">
                  <img src={logo3} className="logo3" alt="staric" />
                </span>
                <span>
                  <img src={logo2} className="logo2" alt="staric" />
                </span>
              </div>
            </div>

            <div className="sliderItem ">
              <span>
                <img src={logo4} className="logo4" alt="staric" />
              </span>
            </div>

            <div className="sliderItem logo23C">
              <span>
                <img src={logo5} className="logo5" alt="staric" />
              </span>
            </div>

            <div className="sliderItem">
              <span>
                <img src={logo6} className="logo6" alt="staric" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
