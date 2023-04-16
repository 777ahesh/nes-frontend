import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./styles/Timeline.css";
import regLogo from "../assets/registration.png";
import entertainLogo from "../assets/entertainment.png";
import entertain2Logo from "../assets/entertainment-2.png";
import founderLogo from "../assets/Founder.png";
import expertLogo from "../assets/expert-session.png";
import guestLogo from "../assets/guest-session.png";
import starLogo from "../assets/star-session.png";

function Timeline({ imgSrc }) {
  return (
    <>
      <div className="timeline">
        <div className="title">
          <h1 className="col ">Event Timeline</h1>
        </div>
        <VerticalTimeline
          lineColor={"linear-gradient(to bottom, #F04393, #F9C449)"}
          animate={true}
        >
          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{
              background: "linear-gradient(to top left, #3C4CAD, #F04393)",
              color: "#fff",
              borderRadius: "50px 5px 50px",
              boxShadow: "3px 10px 10px #000000",
            }}
            contentArrowStyle={{ borderRight: "10px solid  rgb(33, 150, 243)" }}
            date="Day-1 07:00 AM"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<img alt="hello" src={regLogo} />}
          >
            <h3 className="vertical-timeline-element-title">
              REGISTRATION & INAUGURATION
            </h3>
            <p>
              Join us for a grand celebration: Register now for the event's
              inauguration!
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Day-1 11:00 AM"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentStyle={{
              background: "linear-gradient(to bottom left, #F9C449, #F04393)",
              color: "#fff",
              borderRadius: "5px 50px 5px",
              boxShadow: "3px 10px 10px #000000",
            }}
            icon={<img alt="hello" src={guestLogo} />}
          >
            <h3 className="vertical-timeline-element-title">GUEST SESSIONS</h3>
            <p>
              Learn from the best: Join our guest session and gain valuable
              insights!
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Day-1 02:30 PM"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentStyle={{
              background: "linear-gradient(to top left, #3C4CAD, #F04393)",
              color: "#fff",
              borderRadius: "50px 5px 50px",
              boxShadow: "3px 10px 10px #000000",
            }}
            icon={<img alt="hello" src={expertLogo} />}
          >
            <h3 className="vertical-timeline-element-title">
              ECC 2.0 & EXPERT SESSION
            </h3>
            <p>Unlock new possibilities with ECC 2.0 and our expert session</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Day-1 06:00 PM"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentStyle={{
              background: "linear-gradient(to bottom left, #F9C449, #F04393)",
              color: "#fff",
              borderRadius: "5px 50px 5px",
              boxShadow: "3px 10px 10px #000000",
            }}
            icon={<img alt="hello" src={starLogo} />}
          >
            <h3 className="vertical-timeline-element-title">STAR SESSION</h3>
            <p>Discover the secrets of success with our star session</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Day-1 07:30 PM"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            contentStyle={{
              background: "linear-gradient(to top left, #3C4CAD, #F04393)",
              color: "#fff",
              borderRadius: "50px 5px 50px",
              boxShadow: "3px 10px 10px #000000",
            }}
            icon={<img alt="hello" src={entertainLogo} />}
          >
            <h3 className="vertical-timeline-element-title">ENTERTAINMENT</h3>
            <p>
              Get ready for an unforgettable experience: Join us for an evening
              of entertainment!
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Day-2 09:00 AM"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            contentStyle={{
              background: "linear-gradient(to bottom left, #F9C449, #F04393)",
              color: "#fff",
              borderRadius: "5px 50px 5px",
              boxShadow: "3px 10px 10px #000000",
            }}
            icon={<img alt="hello" src={expertLogo} />}
          >
            <h3 className="vertical-timeline-element-title">EXPERT SESSION</h3>
            <p>Gain valuable insights from industry experts</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Day-2 11:00 AM"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            contentStyle={{
              background: "linear-gradient(to top left, #3C4CAD, #F04393)",
              color: "#fff",
              borderRadius: "50px 5px 50px",
              boxShadow: "3px 10px 10px #000000",
            }}
            icon={<img alt="hello" src={founderLogo} />}
          >
            <h3 className="vertical-timeline-element-title">
              FOUNDER'S FUSION
            </h3>
            <p>
              Experience the innovation: Join us for Founder's Fusion and
              discover the future of entrepreneurship!
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Day-2 02:30 PM"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            contentStyle={{
              background: "linear-gradient(to bottom left, #F9C449, #F04393)",
              color: "#fff",
              borderRadius: "5px 50px 5px",
              boxShadow: "3px 10px 10px #000000",
            }}
            icon={<img alt="hello" src={expertLogo} />}
          >
            <h3 className="vertical-timeline-element-title">
              CXO'S & EXPERT SESSION
            </h3>
            <p>
              Get inspired and learn from the best: Join our CXO's and expert
              session now
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Day-2 06:00 PM"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            contentStyle={{
              background: "linear-gradient(to top left, #3C4CAD, #F04393)",
              color: "#fff",
              borderRadius: "50px 5px 50px",
              boxShadow: "3px 10px 10px #000000",
            }}
            icon={<img alt="hello" src={starLogo} />}
          >
            <h3 className="vertical-timeline-element-title">STAR SESSION</h3>
            <p>
              Unleash your potential with our star session: Join us for a
              transformative experience!
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Day-2 07:30 PM"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            contentStyle={{
              background: "linear-gradient(to bottom left, #F9C449, #F04393)",
              color: "#fff",
              borderRadius: "5px 50px 5px",
              boxShadow: "3px 10px 10px #000000",
            }}
            icon={<img alt="hello" src={entertain2Logo} />}
          >
            <h3 className="vertical-timeline-element-title">Entertainment</h3>
            <p>
              Join us for a grand celebration: Register now for the event's
              inauguration!{" "}
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
}

export default Timeline;
