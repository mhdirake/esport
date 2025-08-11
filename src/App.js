import "../src/assets/scss/general.scss";

import routes from "./routes";
import { useRoutes } from "react-router-dom";

function App() {
  const routesUsed = routes();

  return (
    <>
      {/* <Helmet defaultTitle="Dafi" titleTemplate="%s - Dafi">
        <meta name="description" content={newDescription} />
      </Helmet> */}
      {useRoutes(routesUsed)}
    </>
  );
}

export default App;
