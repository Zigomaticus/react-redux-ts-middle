import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
// Hooks
import { useTypedSelector } from "../hooks/useTypedSelector";
// Pages
import Event from "../pages/Event";
import Login from "../pages/Login";

const AppRouter: FC = () => {
  const isAuth = useTypedSelector((state) => state.auth.isAuth);

  return isAuth ? (
    <Routes>
      <Route path="/login" element={<Event />} />;
      <Route path="*" element={<Event />} />;
    </Routes>
  ) : (
    <Routes>
      <Route path="/" element={<Login />} />;
      <Route path="*" element={<Login />} />;
    </Routes>
  );
};

export default AppRouter;
