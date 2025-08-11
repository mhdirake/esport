import Default from 'layout/Default';
import { Navigate } from 'react-router-dom';
import Products from 'pages/Products';


const routes = () => {

  return [
    {
      element: <Default />,
      path: `/`,
      children: [{ path: `/`, element: <Products /> }],
    },
    {
      element: <Navigate to={`/#shop`} />,
      path: `*`,
    },
  ];
};

export default routes;
