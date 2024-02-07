import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./work.scss";
import img1 from "../../images/Image (7).png";
import img2 from "../../images/Image (2).png";
import img3 from "../../images/Image (3).png";
import img4 from "../../images/Image (4).png";
import img5 from "../../images/Image (5).png";
import img6 from "../../images/Image (6).png";
import Banner from "../../../../components/Banner/Banner";

export default function Work() {
  const fadeElementsRef = useRef([]);

  useEffect(() => {
    const fadeElements = document.querySelectorAll(".image");
    fadeElementsRef.current = Array.from(fadeElements);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(entry.target, {
              opacity: 1,
              duration: 1,
              ease: "power2.out",
            });
          } else {
            gsap.to(entry.target, {
              opacity: 0.35,
              duration: 1,
              ease: "power2.out",
            });
          }
        });
      },
      { threshold: 1 }
    ); // Change the threshold as needed

    fadeElementsRef.current.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      fadeElementsRef.current.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="row w-100 m-0">
      <div className="col-lg-12 p-0">
        <Banner />
      </div>
      <div className="col-lg-12 p-0">
        <div className="d-flex cstPad">
          <div className="mainContainer">
            <div>
              <img src={img1} alt="img" className="img1 image" />
            </div>

            <div className="img3Container">
              <img src={img3} alt="img" className="img3 image" />
            </div>
            <div>
              <img src={img6} alt="img" className="img6 image" />
            </div>
          </div>
          <div className="mainContainer">
            <div>
              <img src={img2} alt="img" className="img2 image" />
            </div>
          </div>
          <div className="mainContainer">
            <div>
              <img src={img4} alt="img" className="img4 image" />
            </div>
            <div>
              <img src={img5} alt="img" className="img5 image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
