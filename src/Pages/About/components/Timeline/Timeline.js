import React from "react";
import "./Timeline.scss";

function Timeline() {
  return (
    <div className="row w-100 m-0">
      <div className="col-lg-12 p-0 ">
        <div className="timeLineMainContainer">
          <div className="timelineTextContainer">
            <span>Journey</span>
            <h4>Damien's Journey - A Timeline</h4>
          </div>
          <div className="timelineCardsContainer">
            <div className="timelineCardsMain">
              <div className="timelineCard">
                <span>Year - 2005</span>
                <p>
                  In 2005, Damien acquired her first camera, igniting her
                  passion for photography. She started experimenting with
                  landscapes and candid shots, marking the beginning of her
                  visual storytelling journey.
                </p>
              </div>
              <div className="timelineCard">
                <span>Year - 2010</span>
                <p>
                  Damien pursued a degree in Fine Arts with a focus on
                  photography, refining her technical skills and artistic
                  sensibilities. 
                </p>
              </div>
            </div>
            <div className="timelineCardsMain">
              <div className="timelineCard">
                <span>Year - 2012</span>
                <p>
                  In 2012, Damien held her first solo exhibition, showcasing her
                  unique perspective on nature and people through her lens.
                </p>
              </div>
              <div className="timelineCard">
                <span>Year - 2015</span>
                <p>
                  Damien officially launched her photography business in 2015,
                  offering portrait, event, and commercial photography services.
                </p>
              </div>
            </div>
            <div className="timelineCardsMain">
              <div className="timelineCard">
                <span>Year - 2017</span>
                <p>
                  Damien's work took her beyond the USA, capturing breathtaking
                  scenes and cultures from around the world.
                </p>
              </div>
              <div className="timelineCard">
                <span>Year - 2020</span>
                <p>
                  In 2020, Damien's dedication and creativity earned her several
                  prestigious photography awards, solidifying her position as a
                  visionary photographer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
