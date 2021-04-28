import axios from "axios";

const { REACT_APP_API_KEY, REACT_APP_URL_BASE } = process.env;
const NUMBER_RESULTS = 6;

export const searchVideos = async (searchedParameter) => {
  const response = await axios.get(REACT_APP_URL_BASE, {
    params: {
      part: "snippet",
      key: REACT_APP_API_KEY,
      maxResults: NUMBER_RESULTS,
      q: searchedParameter,
    },
  });
  return await response.data;
};

export const orderSearchedData = (result) => {
  return result.map((element) => {
    return {
      key: element.id.videoId,
      label: element.snippet.title,
      image: element.snippet.thumbnails.default,
      url: `https://www.youtube.com/embed/${element.id.videoId}?controls=0`,
      description: element.snippet.description,
    };
  });
};
