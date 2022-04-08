// Libraries
import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
// Pages
import Login from "../pages/Login";
import Event from "../pages/Event";
// Routes
import { privateRoutes, publicRoutes } from "../routes";
// Hooks
import { useTypedSelector } from "../hooks/useTypedSelector";

const AppRouter: FC = () => {
  const { auth } = useTypedSelector((state) => state.auth);

  return auth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
        />
      ))}
      <Route path="*" element={<Event />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
        />
      ))}
      <Route path="*" element={<Login />} />
    </Routes>
  );
};

export default AppRouter;
