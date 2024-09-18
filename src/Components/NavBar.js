import React, { useState } from "react";
import {
  CalculatorOutlined,
  UnorderedListOutlined,
  AimOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { isDisabled } from "@testing-library/user-event/dist/utils";

const items = [
  {
    label: "Routine",
    key: "routine",
    icon: <UnorderedListOutlined style={{ padding: "5px 0px 5px 0px", fontSize: "15px" }} />,
    
  },
  {
    label: "Calculator",
    key: "calculator",
    icon: <CalculatorOutlined style={{ padding: "5px 0px 5px 18px", fontSize: "15px"  }} />,
  },
  {
    label: "One-Rep Max",
    key: "SubMenu",
    icon: <AimOutlined style={{ padding: "5px 0px 5px 0px", fontSize: "15px"  }} />,
    disabled: true,
  },
];

const TopMenu = () => {
  const [menuTheme, setMenuTheme] = useState("dark");
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Menu
      theme="dark"
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};
export default TopMenu;
