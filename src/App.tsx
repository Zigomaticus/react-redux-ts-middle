import React, { FC, useEffect } from "react";
// Componetns
import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";
// Hooks
import { useActions } from "./hooks/useActions";
// Models
import { IUser } from "./models/IUser";
// Ant
import { Layout } from "antd";
// Css
import "./App.css";

const App: FC = () => {
  const { setUser, setIsAuth } = useActions();

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setUser({ username: localStorage.getItem("username" || "") } as IUser);
      setIsAuth(true);
    }
  }, []);

  return (
    <Layout>
      <Navbar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  );
};

export default App;
