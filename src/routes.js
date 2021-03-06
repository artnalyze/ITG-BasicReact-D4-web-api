import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/backend/dashboard/Dashboard";
import Product from "./pages/backend/product/Product";
import Forgotpassword from "./pages/forgotpassword/Forgotpassword";
import Login from "./pages/login/Login";
import PageNotFound from "./pages/pagenotfound/PageNotFound";
import Register from "./pages/register/Register";

const Mainroutes = () => {
  return (
    <Routes>
      {/* Frontend */}
      <Route path="/" exect={true} element={<Login />} />
      <Route path="/login" exect={true} element={<Login />} />
      <Route path="/register" exect={true} element={<Register />} />
      <Route path="/forgotpassword" exect={true} element={<Forgotpassword />} />
      <Route path="*" element={<PageNotFound />} />
      {/* 404NotFound : https://ui.dev/react-router-handling-404-pages/ */}
      {/* Backend */}
      <Route path="/backend/dashboard" exect={true} element={<Dashboard />} />
      <Route path="/backend/product" exect={true} element={<Product />} />
      {/* <Route path="/" exect={true} element={} /> */}
    </Routes>
  );
};

export default Mainroutes;
