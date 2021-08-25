import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

import "./HeaderMenu.scss";

export default function HeaderMenu() {
  const [itemSelected, setItemSelected] = useState("profile");

  const handleMenuChange = (ev) => {
    setItemSelected(ev.key);
  };

  return (
    <Menu
      mode="horizontal"
      onClick={handleMenuChange}
      selectedKeys={[itemSelected]}
      className="header-menu"
    >
      <Menu.Item key="profile">
        <Link to="/">Perfil</Link>
      </Menu.Item>
      <Menu.Item key="education">
        <Link to="/education">Formación Académica</Link>
      </Menu.Item>
      <Menu.Item key="experience">
        <Link to="/experience">Experiencia Laboral</Link>
      </Menu.Item>
    </Menu>
  );
}
