import { ListCards } from "../organisms/ListCards/ListCards";
import { Search } from "../molecules/Search/Search";
import { VideoDetails } from "../organisms/VideoDetails/VideoDetails";
import "../templates/Home.scss";

import { orderSearchedData } from "../services/youtube";
import testData from "../services/testData.json";

export const Home = () => {
  const exampleData = orderSearchedData(testData);
  return (
    <>
      <Search />

      <div className="main-container">
        <main>
          <VideoDetails
            url="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0"
            title="Dynamic Websites vs Static Pages vs Single Page Apps (SPAs)"
            description="Should you only build SPAs? Why might dynamic pages be better? And there even is a third option! Join the full 'React.js - The Complete Guide' course at 90% ..."
          />
        </main>
        <aside>
          <ListCards data={exampleData} />
        </aside>
      </div>
    </>
  );
};
