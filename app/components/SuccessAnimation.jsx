import React from "react";
import successanimation from "../animation/success.json";
import Lottie from "react-lottie";

const SuccessAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: successanimation, // This is your animation JSON data
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const animationStyle = {
    width: "100px", 
  };
  return (
    <div>
      <Lottie options={defaultOptions} style={animationStyle}/>
    </div>
  );
};

export default SuccessAnimation;
