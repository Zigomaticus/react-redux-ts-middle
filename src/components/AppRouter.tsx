import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
// Pages
import Event from "../pages/Event";
import Login from "../pages/Login";

const AppRouter: FC = () => {
  const auth = false;

  return auth ? (
    <Routes>
      <Route path="/login" element={<Login />} />;
      <Route path="*" element={<Login />} />;
    </Routes>
  ) : (
    <Routes>
      <Route path="/" element={<Event />} />;
      <Route path="*" element={<Event />} />;
    </Routes>
  );
};

export default AppRouter;
