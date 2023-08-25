import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let user = useSelector((state) => state.auth.user);
  user = user && user;

  console.log(user);

  const [editUser, setEditUser] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phoneNumber: user.phoneNumber,
  });

  const [edit, setEdit] = useState(false);

  const handleLogout = () => {};

  const handleChange = (e) => {
    const { name, value } = e.target;

    setEditUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleEdit = () => {
    setEdit(true);
  };

  const editSubmit = () => {
    setEdit(false);
    // dispatch
  };

  return (
    <div>
      <br />
      <br />
      <h1>Account Information</h1>
      {edit ? (
        <div className="">
          <form action="" className="border">
            <div contentEditable="true">
              <label htmlFor="">First Name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={editUser.firstName}
                onChange={handleChange}
              />
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={editUser.lastName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                value={editUser.email}
                onChange={handleChange}
              />
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                value={editUser.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <button onClick={editSubmit}>Save</button>
          </form>
        </div>
      ) : (
        <div>
          <h3>ID: {user.id}</h3>
          <h3>First Name: {user.firstName}</h3>
          <h3>Last Name: {user.lastName}</h3>
          <h3>Email: {user.email}</h3>
          <h3>Phone: {user.phoneNumber}</h3>
          <h3>Attorney Assigned: {user.attorney_assigned}</h3>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Account;
