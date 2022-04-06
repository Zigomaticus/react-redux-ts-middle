// Css
import "./App.css";
// Libraies
import React, { FC } from "react";
// Components
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
// Ant
import { Layout } from "antd";
const { Content } = Layout;

const App: FC = () => {
  return (
    <Layout>
      <Navbar />
      <Content>
        <AppRouter />
      </Content>
    </Layout>
  );
};

export default App;
