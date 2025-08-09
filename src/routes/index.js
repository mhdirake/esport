import Default from "layout/Default";
import { Navigate } from "react-router-dom";
import ProductSingle from "pages/ProductSingle";
import Products from "pages/Products";

const allowedLangs = process.env?.REACT_APP_LANGUAGES;
const formattedAllowedLangs = allowedLangs?.split(",") || [];
const defaultLang = process.env.REACT_APP_DEFAULT_LANGUAGE;

const routes = () => {
  const routesWithLanguages = formattedAllowedLangs?.map((lang) => ({
    element: <Default />,
    path: `/${lang}`,
    children: [
      { path: `/${lang}`, element: <Products /> },
      {
        path: `/${lang}/products/:slug`,
        element: <ProductSingle />,
      },
    ],
  }));

  return [
    ...routesWithLanguages,

    {
      element: <Navigate to={`/${defaultLang}`} />,
      path: `*`,
    },
  ];
};

export default routes;
