import React, { FC } from "react";
// Componetns
import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";
// Ant
import { Layout } from "antd";
// Css
import "./App.css";

const App: FC = () => {
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
