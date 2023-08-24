import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Hero = () => {
  const navigate = useNavigate();

  let user = useSelector((state) => state.auth.user);
  user = user && user.user;

  return (
    <div className="bg-[url('./images/hero.jpg')] w-[100vw] h-[90vh] bg-cover bg-no-repeat bg-center">
      <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-white">
        {user ? (
          <div className="w-1/3">
            <h1 className="flex justify-center">
              Hello{" "}
              {user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1)}
            </h1>
            <br />
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, molestiae similique beatae ad veniam voluptates
              impedit rerum esse sequi, sint non saepe necessitatibus hic.
              Obcaecati est assumenda ut error vitae!
            </h4>
            <br />
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, molestiae similique beatae ad veniam voluptates
              impedit rerum esse sequi, sint non saepe necessitatibus hic.
              Obcaecati est assumenda ut error vitae!
            </h4>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <h1>Hello from Flash Law</h1>
            <br />
            <br />
            <div className="flex flex-col w-64">
              <button onClick={() => navigate("/login")}>Log In</button>
              <button onClick={() => navigate("/register")}>Sign Up</button>
              <button onClick={() => navigate("/contact-us")}>
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
