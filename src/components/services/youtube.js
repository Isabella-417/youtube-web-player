import axios from "axios";

const { REACT_APP_API_KEY, REACT_APP_URL_BASE } = process.env;

export const searchVideos = async (searchedParameter) => {
  const response = await axios.get(REACT_APP_URL_BASE, {
    params: {
      part: "snippet",
      key: REACT_APP_API_KEY,
      maxResults: 5,
      q: searchedParameter,
    },
  });
  return await response.data;
};
