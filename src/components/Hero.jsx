import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[url('./images/hero.jpg')] w-[100vw] h-[90vh] bg-cover bg-no-repeat bg-center">
      <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-white">
        <h1>Hello from Flash Law</h1>
        <button onClick={() => navigate("/")}>Log in</button>
        <button onClick={() => navigate("/")}>Sign up</button>
        <button onClick={() => navigate("/attorneys")}>Contact Us</button>
      </div>
    </div>
  );
};

export default Hero;
