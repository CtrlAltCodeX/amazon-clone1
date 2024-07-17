// AppRouter.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Section from "./Components/Section";
import ProductPage from "./Components/ProductPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Section />} />
        <Route path="/product-page" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
