import Axios from "../Axios";

const getAttorneys = async () => {
  const response = await Axios.get("/attorneys");

  return response.data;
};

const addAttorney = async (attorney, token) => {
  console.log("Added", attorney);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await Axios.put(
    `/users/add-attorney/${attorney}`,
    {},
    config
  );

  localStorage.setItem("user", JSON.stringify(response.data.user));

  return response.data.user;
};

const attorneyService = {
  getAttorneys,
  addAttorney,
};

export default attorneyService;
