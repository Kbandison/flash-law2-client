import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllAttorneys,
  addAttorney,
  reset,
} from "../features/attorneys/attorneySlice";
import { getUser, updateUser } from "../features/auth/authSlice";
import Axios from "../features/Axios";
import { useNavigate } from "react-router-dom";
import AttorneyList from "../components/AttorneyList";

const Attorneys = () => {
  const [shouldRefresh, setShouldRefresh] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let user = useSelector((state) => state.auth.user);

  const { attorneys, isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.attorneys.attorneys
  );

  useEffect(() => {
    dispatch(getAllAttorneys());
    dispatch(reset());
  }, [user, dispatch]);

  const addToAttorney = async (id) => {
    await dispatch(addAttorney(id));
    dispatch(updateUser());
    dispatch(reset());
  };

  return (
    <div className="flex justify-center mt-16">
      <ul role="list" className="divide-y divide-gray-100 w-[70vw]">
        {attorneys &&
          attorneys.map((attorney) => (
            <div key={attorney.id}>
              <AttorneyList
                attorney={attorney}
                addToAttorney={addToAttorney}
                user={user}
                setShouldRefresh={setShouldRefresh}
              />
            </div>
          ))}
      </ul>
    </div>
  );
};

export default Attorneys;
