import axios from "axios";
// import Vue from "vue";

const BASE_URL = "api/";

export const getCollegeList = async () => {
  const result = await axios.post("http://119.91.234.90:5000/tour/" + "get_college_list");
  return result.data;
};

export const getTourList = async (params) => {
  const result = await axios.post("http://119.91.234.90:5000/tour/" + "get_tour_list", params);
  return result.data;
};
