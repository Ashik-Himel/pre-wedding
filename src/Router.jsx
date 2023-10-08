import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import ServiceDetails from "./pages/private/ServiceDetails";
import PrivateRoute from "./pages/private/PrivateRoute";
import PrivateRouteAlt from "./pages/private/PrivateRouteAlt";
import Login from "./pages/private/Login";
import Register from "./pages/private/Register";
import WeddingGallery from "./pages/private/WeddingGallery";
import VendorDirectory from "./pages/private/VendorDirectory";
import ErrorPage from "./pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/service-details/:id',
        element: <PrivateRoute><ServiceDetails /></PrivateRoute>,
        loader: () => fetch('/data/services.json')
      },
      {
        path: '/wedding-gallery',
        element: <PrivateRoute><WeddingGallery /></PrivateRoute>
      },
      {
        path: '/vendor-directory',
        element: <PrivateRoute><VendorDirectory /></PrivateRoute>
      },
      {
        path: '/login',
        element: <PrivateRouteAlt><Login /></PrivateRouteAlt>
      },
      {
        path: '/register',
        element: <PrivateRouteAlt><Register /></PrivateRouteAlt>
      }
    ]
  }
])