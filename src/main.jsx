import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/Root.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Index from "./components/Index/Index";
import Adoption from "./components/Adoption/Adoption";
import AdoptionFaqs from "./components/Adoption/AdoptionFaqs/AdoptionFaqs";
import AdoptionResources from "./components/Adoption/AdoptionResources/AdoptionResources";
import Motherhood from "./components/Adoption/Motherhood/Motherhood";
import Ministry from "./components/Ministry/Ministry";
import BiblicalFeasts from "./components/Ministry/BiblicalFeasts/BiblicalFeasts";
import ApexHouse from "./components/Ministry/ApexHouse/ApexHouse";
import FaithAndFertility from "./components/Ministry/FaithAndFertility/FaithAndFertility";
import Health from "./components/Health/Health";
import ComeOil from "./components/Health/ComeOil/ComeOil";
import OilsFaqs from "./components/Health/OilsFaqs/OilsFaqs";
import Birth from "./components/Birth/Birth";
import DoulaCare from "./components/Birth/DoulaCare/DoulaCare";
import Homebirth from "./components/Birth/Homebirth/Homebirth";
import BirthClasses from "./components/Birth/BirthClasses/BirthClasses";
import BirthResources from "./components/Birth/BirthResources/BirthResources";
import FertilityResources from "./components/Fertility/FertilityResources/FertilityResources";
import Fertility from "./components/Fertility/Fertility";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Checkout from "./components/Checkout/Checkout";
import Post from "./components/Posts/Post/Post";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      {
        path: "adoption",
        element: <Adoption />,
      },
      {
        path: "adoption/faqs",
        element: <AdoptionFaqs />,
      },
      {
        path: "adoption/resources",
        element: <AdoptionResources />,
      },
      {
        path: "adoption/motherhood",
        element: <Motherhood />,
      },
      {
        path: "ministry",
        element: <Ministry />,
      },
      {
        path: "ministry/feasts",
        element: <BiblicalFeasts />,
      },
      {
        path: "ministry/apex-house",
        element: <ApexHouse />,
      },
      {
        path: "ministry/faith-and-fertility",
        element: <FaithAndFertility />,
      },
      {
        path: "health",
        element: <Health />,
      },
      {
        path: "health/oil-with-me",
        element: <ComeOil />,
      },
      {
        path: "health/oils-101",
        element: <OilsFaqs />,
      },
      {
        path: "health/blog",
        element: <Blog />,
      },
      {
        path: "birth",
        element: <Birth />,
      },
      {
        path: "birth/care",
        element: <DoulaCare />,
      },
      {
        path: "birth/homebirth",
        element: <Homebirth />,
      },
      {
        path: "birth/classes",
        element: <BirthClasses />,
      },
      {
        path: "birth/resources",
        element: <BirthResources />,
      },
      {
        path: "fertility",
        element: <Fertility />,
      },
      {
        path: "fertility/resources",
        element: <FertilityResources />,
      },
      {
        path: "fertility/calls",
        element: <FaithAndFertility />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "wellness-consulation",
        element: <Checkout />,
      },
      {
        path: "post/:id",
        element: <Post />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
