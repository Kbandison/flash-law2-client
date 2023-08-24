import Axios from "../Axios";

const getAttorneys = async () => {
  const response = await Axios.get("/attorneys");

  return response.data;
};

const addAttorney = async (attorney) => {
  console.log(attorney);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await Axios.put(
    `/attorneys/add-attorney/${attorney}`,
    config
  );

  return response.data;
};

const attorneyService = {
  getAttorneys,
  addAttorney,
};

export default attorneyService;
