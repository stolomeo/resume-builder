import axios from "axios";

export const getClient = () => {
  return axios.create({
    baseURL: "https://us-central1-resume-builder-66554.cloudfunctions.net/api",
  });
};
