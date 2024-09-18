import "./App.css";

import { Button, Flex } from "antd"; // for antd button

import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons"; // for navBar
import TopMenu from "./Components/NavBar";
import WorkoutTable from "./Components/Table";

function MyApp() {
  return (
    <div className="App">
      <div class="TopBanner" id="TopBanner">
        <TopMenu />
        <h1> WORKOUT PLANNER </h1>
      </div>
      <div class = "WorkoutTable" id = "WorkoutTable">
        
        <WorkoutTable/>
      </div>
    </div>
  );
}

export default MyApp;
