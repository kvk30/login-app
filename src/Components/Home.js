import React from "react";
import { useSpring, animated } from "@react-spring/web";
import "./Home.css";

const Home = ({ handleLogout }) => {
  const videoSpringProps = useSpring({
    from: { transform: "rotateY(-90deg) rotateX(0deg)", opacity: 0 },
    to: { transform: "rotateY(0deg) rotateX(0deg)", opacity: 1 },
    config: { tension: 200, friction: 50 },
  });

  const cardSpringProps = useSpring({
    from: { transform: "rotateY(0deg) rotateX(-90deg)", opacity: 0 },
    to: { transform: "rotateY(0deg) rotateX(0deg)", opacity: 1 },
    delay: 300,
    config: { tension: 200, friction: 50 },
  });

  return (
    <div className="home-wrapper">
      <div className="row">
        <animated.div style={videoSpringProps} className="box video-section">
          <video src="video.mp4" controls className="video">
            Your browser does not support the video tag.
          </video>
          <p>ClanX goes beyond just connecting talents. They have...</p>
        </animated.div>
        <animated.div style={cardSpringProps} className="box text-section">
          <h3>Top-tier tech talent for Growth</h3>
          <p>
            Hire elite software engineers, designers and product managers within
            48 hours.
          </p>
        </animated.div>
      </div>
      <div className="row">
        <animated.div style={cardSpringProps} className="box text-section">
          <h3>100%</h3>
          <p>Match Rate</p>
        </animated.div>
        <animated.div style={cardSpringProps} className="box text-section">
          <p>
            ClanX is a true partner. We were able to build a solid team and our
            entire company was eventually acquired.
          </p>
          <h4>Jayson Dmello</h4>
          <p>Head of Product, The Girl Tribe</p>
        </animated.div>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
