import React, { useEffect } from "react";
import staric from "../../Pages/Home/images/staric.png";
import { gsap } from "gsap";
export default function Banner() {
  useEffect(() => {
    const item = document.querySelectorAll(".staricImg");
    const tl = gsap.timeline({ repeat: -1 }); // Setting repeat to -1 makes it loop infinitely
    // Add the rotation animation to the timeline
    tl.to(item, { duration: 5, rotation: -360, ease: "none" });
    // Start the animation
    tl.play(0);
  }, []);
  return (
    <div className="sliderContainer p-0 m-0">
      <div className="slider">
        <div className="sliderItem">
          <span>
            <img src={staric} className="staricImg" alt="staric" />
          </span>
          <span className="staricText">event photography</span>
        </div>

        <div className="sliderItem">
          <span>
            <img src={staric} className="staricImg" alt="staric" />
          </span>
          <span className="staricText">commercal photography</span>
        </div>

        <div className="sliderItem">
          <span>
            <img src={staric} className="staricImg" alt="staric" />
          </span>
          <span className="staricText">product photography</span>
        </div>

        <div className="sliderItem">
          <span>
            <img src={staric} className="staricImg" alt="staric" />
          </span>
          <span className="staricText">wedding photography</span>
        </div>

        <div className="sliderItem">
          <span>
            <img src={staric} className="staricImg" alt="staric" />
          </span>
          <span className="staricText">landscape photography</span>
        </div>

        <div className="sliderItem">
          <span>
            <img src={staric} className="staricImg" alt="staric" />
          </span>
          <span className="staricText">brandings photography</span>
        </div>

        <div className="sliderItem">
          <span>
            <img src={staric} className="staricImg" alt="staric" />
          </span>
          <span className="staricText">portrait photography</span>
        </div>
      </div>

      <div className="slider">
        <div className="sliderItem">
          <span>
            <img src={staric} className="staricImg" alt="staric" />
          </span>
          <span className="staricText">event photography</span>
        </div>

        <div className="sliderItem">
          <span>
            <img src={staric} className="staricImg" alt="staric" />
          </span>
          <span className="staricText">commercal photography</span>
        </div>

        <div className="sliderItem">
          <span>
            <img src={staric} className="staricImg" alt="staric" />
          </span>
          <span className="staricText">product photography</span>
        </div>

        <div className="sliderItem">
          <span>
            <img src={staric} className="staricImg" alt="staric" />
          </span>
          <span className="staricText">wedding photography</span>
        </div>

        <div className="sliderItem">
          <span>
            <img src={staric} className="staricImg" alt="staric" />
          </span>
          <span className="staricText">landscape photography</span>
        </div>

        <div className="sliderItem">
          <span>
            <img src={staric} className="staricImg" alt="staric" />
          </span>
          <span className="staricText">brandings photography</span>
        </div>

        <div className="sliderItem">
          <span>
            <img src={staric} className="staricImg" alt="staric" />
          </span>
          <span className="staricText">portrait photography</span>
        </div>
      </div>
    </div>
  );
}
