import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllAttorneys,
  addAttorney,
  reset,
} from "../features/attorneys/attorneySlice";
import Axios from "../features/Axios";
import { useNavigate } from "react-router-dom";
import AttorneyList from "../components/AttorneyList";

const Attorneys = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // let user = useSelector((state) => state.auth.user);
  // user = user && user.user;

  const { attorneys, isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.attorneys.attorneys
  );

  useEffect(() => {
    dispatch(getAllAttorneys());
    dispatch(reset());
  }, []);

  const addAttorney = (id) => {
    dispatch(addAttorney(id));
  };

  return (
    <div className="flex justify-center mt-16">
      <ul role="list" className="divide-y divide-gray-100 w-[70vw]">
        {attorneys &&
          attorneys.map((attorney) => (
            <div key={attorney.id}>
              <AttorneyList attorney={attorney} addAttorney={addAttorney} />
            </div>
          ))}
      </ul>
    </div>
  );
};

export default Attorneys;
