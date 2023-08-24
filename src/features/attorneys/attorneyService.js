import Axios from "../Axios";

const getAttorneys = async () => {
  const response = await Axios.get("/attorneys");

  return response.data;
};

const addAttorney = async () => {
  const response = await Axios.put(`/attorneys/add-attorney/${id}`, user);

  return response.data;
};

const attorneyService = {
  getAttorneys,
  addAttorney,
};

export default attorneyService;
