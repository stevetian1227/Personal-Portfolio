import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element-education"
          date="2016-2019"
          icon={<SchoolIcon />}
          iconStyle={{ background: "#3e497a", color: "#fff" }}
        >
          <h3>Monash University, Victoria, Australia</h3>
          <p>Bahelor of Data Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element-education"
          date="2020-2022"
          icon={<SchoolIcon />}
          iconStyle={{ background: "#3e497a", color: "#fff" }}
        >
          <h3>University of Adelaide, South Australia, Australia</h3>
          <p>Master of Software Engineering</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
