import { Home } from "./templates/Home";
import { Provider } from "../context/context";

const App = () => {
  return (
    <Provider>
      <Home />
    </Provider>
  );
};

export default App;
