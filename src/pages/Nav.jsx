import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";

const Nav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (user || isLoggedIn) {
      const timeout = setTimeout(() => {
        setIsLoggedIn(false);
        dispatch(logout());
        navigate("/login");
      }, 900000);
      return () => clearTimeout(timeout);
    }
  }, [user, isLoggedIn, dispatch, navigate]);

  return (
    <div>
      <NavBar />
      <Outlet context={setIsLoggedIn} />
    </div>
  );
};

export default Nav;
