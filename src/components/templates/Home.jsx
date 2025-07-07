import { useContext, useEffect, useRef } from "react";
import { Context } from "../../context/context";

import { ListCards } from "../organisms/ListCards/ListCards";
import { Navbar } from "../organisms/Navbar/Navbar";
import { VideoDetails } from "../organisms/VideoDetails/VideoDetails";
import { Search } from "../molecules/Search/Search";

import "../templates/Home.scss";
import { searchVideos, orderSearchedData } from "../services/youtube";

export const Home = () => {
  const { video, setVideo } = useContext(Context);
  const ref = useRef(null);

  const handleSearch = (e) => {
    if (e.charCode === 13) {
      const searchedTerm = e.target.value;
      searchVideos(searchedTerm)
        .then((response) => {
          const data = orderSearchedData(response.items);
          setVideo({ playlist: data });
        })
        .catch((message) => {
          console.error(message);
        });
    }
  };

  const focusVideo = () => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    searchVideos("TypeScript advanced patterns")
      .then((response) => {
        const data = orderSearchedData(response.items);
        setVideo({ playlist: data });
      })
      .catch((message) => {
        console.error(message);
      });
  }, []);

  return (
    <>
      <Navbar>
        <Search onKeyPress={handleSearch} />
      </Navbar>
      <div className="main-container" ref={ref}>
        <main>
          <VideoDetails />
        </main>
        <aside>
          <ListCards data={video.playlist.slice(1)} focus={focusVideo} />
        </aside>
      </div>
    </>
  );
};
