import { useEffect } from "react";
import { gsap } from "gsap";

export default function SubHeader() {
  useEffect(() => {
    const item = document.querySelector(".logoIcon");
    const tl = gsap.timeline({ repeat: -1 }); // Setting repeat to -1 makes it loop infinitely
    // Add the rotation animation to the timeline
    tl.to(item, { duration: 2, rotation: 360, ease: "none" });
    // Start the animation
    tl.play();
  }, []);

  return (
    <div className="row m-0 w-100">
      <div className="col-lg-12 p-0">
        <div className="subHeaderMain">
          <div className="phInt">
            <div className="phTitle">stunning photography by</div>
            <div className="phName">damien braun</div>
          </div>
          <div className="phMes">
            <div className="">
              <div className="btnText">
                <span className="phText">let's</span>{" "}
                <button className="svgIcon ">
                  {/* <img className="phIcon" src={icon} alt="icon" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="logoIcon"
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
        </div>
      </div>
    </div>
  );
}
