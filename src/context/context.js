import { createContext, useState } from "react";
import {
  orderSearchedData,
  searchVideoByKey,
} from "../components/services/youtube";
import testData from "../assets/data/testData.json";

const initialData = {
  playlist: orderSearchedData(testData),
};

export const Context = createContext(initialData);

export const Provider = ({ children }) => {
  const [video, setVideo] = useState(initialData);

  const updatePlaylist = (idVideo) => {
    searchVideoByKey(idVideo)
      .then((response) => {
        let videoToDisplay = orderSearchedData(response.items);
        setVideo({ playlist: videoToDisplay.concat(video.playlist.slice(1)) });
      })
      .catch((message) => {
        console.error(message);
      });
  };

  return (
    <Context.Provider value={{ video, setVideo, updatePlaylist }}>
      {children}
    </Context.Provider>
  );
};
