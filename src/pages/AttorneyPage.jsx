import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const AttorneyPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { attorney } = useSelector((state) => state.attorneys.attorneys);

  console.log(attorney);

  return (
    <div>
      <h1>{attorney.firstName}</h1>
    </div>
  );
};

export default AttorneyPage;
