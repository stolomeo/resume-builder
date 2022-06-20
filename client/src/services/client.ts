import axios from "axios";

export const getClient = () => {
  return axios.create({
    baseURL: "https://us-central1-resume-builder-66554.cloudfunctions.net/api",
  });
};
// export const getClient = () => {
//   return axios.create({
//     baseURL: "http://localhost:5050",
//   });
// };
