import { Box, MenuItem, TextField, styled, Link } from "@mui/material";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import {
  Outlet as RouterOutlet,
  matchRoutes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useEffect, useState } from "react";

import { ALL_LANGUAGES } from "constants/languages";
import Loader from "pages/Products/Components/Loader";
import dafiLogo from "assets/logo/logo-w.png";
import routes from "routes";
import { useTranslation } from "react-i18next";

function Default() {
  const location = useLocation();
  const navigate = useNavigate();
  const route = matchRoutes(routes(), location);
  const isMainPage = route?.[0].pathname === location.pathname;

  const selectedLanguage =
    location.pathname.split("/")?.[1] || process.env.REACT_APP_DEFAULT_LANGUAGE;

  const [loading, setLoading] = useState(true);

  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [i18n, selectedLanguage]);

  useEffect(() => {
    console.clear();
    console.log("Designed and Developed By Matican Group LLC");
  }, []);

  const handleChange = async (event) => {
    const path =
      (await location.pathname.split(`/${selectedLanguage}/`)?.[1]) || "";

    navigate(`/${event.target.value}${path ? `/${path}` : ""}`);
    i18n.changeLanguage(event.target.value);
  };

  function checkImagesAreLoaded() {
    setLoading(true);

    setTimeout(() => {
      const loadedImages = [];
      const images = document.getElementsByTagName("img");

      if (images) {
        for (let i = 0; i < images.length; i++) {
          const element = images[i];
          if (element.complete) {
            loadedImages.push(element);
          }
        }
        if (loadedImages.length === images.length) {
          setLoading(false);
        } else {
          setTimeout(() => {
            checkImagesAreLoaded();
          }, 400);
        }
      }
    }, 4000);
  }

  useEffect(() => {
    checkImagesAreLoaded();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const allLanguages = process.env?.REACT_APP_LANGUAGES;
  const formattedLanguages = allLanguages?.split(",") || [];
  return (
    <>
      <TransitionGroup>
        <CSSTransition key={location.key} timeout={450} classNames="fade">
          <Box className="page">
            <Loader loading={loading} />
            <BoxStyle isMainPage={isMainPage}>
              {formattedLanguages && formattedLanguages?.length ? (
                <TextFieldSelect
                  select
                  value={selectedLanguage}
                  onChange={handleChange}
                  SelectProps={{
                    IconComponent: "",
                  }}
                >
                  {formattedLanguages?.map((lang) => (
                    <MenuItem value={lang}>
                      <img
                        src={ALL_LANGUAGES[lang].image}
                        alt="dafi"
                        width={20}
                        height={20}
                      />
                    </MenuItem>
                  ))}
                </TextFieldSelect>
              ) : (
                ""
              )}
            </BoxStyle>

            <Box className="page-logo">
              <img src={dafiLogo} alt="dafi logo" id="page-logo-img" />
            </Box>

            <RouterOutlet />

            <MaticanLink>
              <Link href="https://maticangroup.com/" target="_blank">
                By Matican Group LLC
              </Link>
            </MaticanLink>
          </Box>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}
const MaticanLink = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "100%",
  display: "flex",
  justifyContent: "end",
  bottom: "10px",
  right: "10px",
  zIndex: 9999999,
  a: {
    textDecoration: "none",
    fontSize: "9px",
    color: "#6e6d6d",
  },
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
    bottom: "10px",
    right: "0px",

    a: {
      fontSize: "8px",
    },
  },
}));
const TextFieldSelect = styled(TextField)(() => ({
  outline: "none !important",

  ".MuiSelect-select ": {
    padding: "5px 15px !important",
    outline: "none !important",
    display: "flex",
    alignItems: "center",
  },
  ".MuiPaper-root": {
    background: "#f0f8ff00 !important",
    boxShadow: "none !important",
  },
  fieldset: {
    border: "none",
  },
}));

const BoxStyle = styled(Box)(({ isMainPage }) => {
  return {
    position: "fixed",
    left: isMainPage ? "20px" : "100px",
    top: isMainPage ? "20px" : "25px",
    zIndex: "2",
  };
});
export default Default;
