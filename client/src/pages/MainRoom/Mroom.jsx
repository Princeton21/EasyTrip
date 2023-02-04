import React from "react";
import "../MainRoom/components/Sdebar/Sdebar.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sdebar from "./components/Sdebar/Sdebar";
import Dashboard from "./page/Dashboard/Dashboard";
import Eat from "./page/Eat/Eat";
import Stay from "./page/Stay/Stay";
// import Comment from "./pages/Comment.jsx";
// import Product from "./pages/Product.jsx";
// import ProductList from "./pages/ProductList.jsx";

const App = () => {
  return (
      <Sdebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/eat" element={<Eat />} />
          <Route path="/stay" element={<Stay/>} />
        </Routes>
      </Sdebar>
  );
};

export default App;
