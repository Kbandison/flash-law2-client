import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllAttorneys, reset } from "../features/attorneys/attorneySlice";
import Axios from "../features/Axios";

const Attorneys = () => {
  const dispatch = useDispatch();

  const { attorneys, isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.attorneys.attorneys
  );

  console.log(attorneys);

  useEffect(() => {
    dispatch(getAllAttorneys());
    dispatch(reset());
  }, []);

  return (
    <div className="flex justify-center mt-16">
      <ul role="list" className="divide-y divide-gray-100 w-[70vw]">
        {attorneys &&
          attorneys.map((attorney) => (
            <li
              key={attorney.id}
              className="flex justify-between gap-x-6 py-5 my-8"
            >
              <div className="flex min-w-0 gap-x-4">
                <img
                  className="h-24 w-24 flex-none rounded-full bg-gray-50"
                  src={attorney.photo}
                  alt={`${attorney.firstName} ${attorney.lastName}`}
                />
                <div className="">
                  <div className="min-w-0 flex flex-col justify-between items-center gap-8">
                    <div className="">
                      <p className="text-xl font-semibold leading-6 text-gray-900">
                        {attorney.firstName} {attorney.lastName}
                      </p>
                      <p className="mt-1 truncate text-lg leading-5 text-gray-500">
                        {attorney.education}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button>Hire Attorney</button>
                      <button>Message Attorney</button>
                      <button>Learn More</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-lg leading-6 text-gray-900">
                  <b>Specialty:</b> {attorney.specialty}
                </p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Attorneys;
