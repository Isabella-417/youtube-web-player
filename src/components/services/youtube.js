import axios from "axios";

const { REACT_APP_API_KEY, REACT_APP_URL_BASE } = process.env;
const NUMBER_RESULTS = 6;

// More info : https://developers.google.com/youtube/v3/docs/search/list?hl=es

/**
 * Search Video by name
 *
 * @param   {[string]}  searchedParameter  name to be searched
 * @return  {[object]}  response.items to access data
 */
export const searchVideos = async (searchedParameter) => {
  const response = await axios.get(`${REACT_APP_URL_BASE}/search`, {
    params: {
      part: "snippet",
      key: REACT_APP_API_KEY,
      maxResults: NUMBER_RESULTS,
      q: searchedParameter,
    },
  });
  return await response.data;
};

/**
 * [searchVideoByKey search video by the key that represents the identification]
 *
 * @param   {[string]}  keyVideo  [keyVideo => string of idVideo]
 * @return  {[array]}            [the data of the video]
 */
export const searchVideoByKey = async (keyVideo) => {
  const response = await axios.get(`${REACT_APP_URL_BASE}/videos`, {
    params: {
      part: "snippet",
      key: REACT_APP_API_KEY,
      maxResults: 1,
      id: keyVideo,
    },
  });
  return await response.data;
};

/**
 * [orderSearchedData Order the response of the API]
 *
 * @param   {[object]}  result  [result => object result from searched data]
 * @return  {[object]}          [return new object with the data needed]
 */
export const orderSearchedData = (result) => {
  return result.map((element) => {
    return {
      key: element.id.videoId ? element.id.videoId : element.id,
      label: element.snippet.title,
      image: element.snippet.thumbnails.high,
      url: `https://www.youtube.com/embed/${
        element.id.videoId ? element.id.videoId : element.id
      }`,
      description: element.snippet.description,
      title: element.snippet.title,
      channel_name: element.snippet.channelTitle,
    };
  });
};
