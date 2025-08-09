import { Helmet } from "react-helmet";
import "../src/assets/scss/general.scss";

import routes from "./routes";
import { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";

function App() {
  const routesUsed = routes();
  const location = window.location.pathname;
  const [newDescription, setNewDescription] = useState("");

  const selectedLanguage =
    location.split("/")?.[1] || process.env.REACT_APP_DEFAULT_LANGUAGE;

  useEffect(() => {
    if (selectedLanguage === "fa") {
      setNewDescription(
        "دافی یک برند قدیمی در زمینه تولید محصولات بهداشتی، مانند انواع دستمال مرطوب‌ های آرایش پاک‌ کن و کودک، محلول آرایش پاک‌ کن و شوینده صورت، کرم و لوسیون بدن است."
      );
    } else {
      setNewDescription(
        "Dafi is an established brand specializing in health products, including makeup remover wipes, baby wipes, makeup remover solutions, face wash, body cream, and lotion."
      );
    }
  }, [selectedLanguage]);

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
