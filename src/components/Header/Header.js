import React from "react";
import { Row, Col, Avatar } from "antd";
import HeaderMenu from "./HeaderMenu";
import FotoPerfil from "../../assets/images/foto_perfil.jpg";

import "./Header.scss";

export default function Header() {
  return (
    <Row className="header">
      <Col lg={20} xs={24}>
        <Row className="header__top">
          <Col lg={8} xs={20} className="header__top-image">
            <Avatar size="large" className="avatar-profile" src={FotoPerfil} />
          </Col>
          <Col lg={16} xs={22} className="header__top-info">
            <h1 className="name">Erick Mauricio Mondragón Aparicio</h1>
            <h1 className="degree">Ingeniero de Desarrollo</h1>
            <h3 className="id">Cédula: 1.113.638.972 de Palmira</h3>
            <h3 className="birth">Fecha de Nacimiento: 05 de Mayo de 1989</h3>
            <h3 className="age">Edad: 32 Años</h3>
          </Col>
        </Row>
        <Row className="header__menu">
          <Col span={24}>
            <HeaderMenu />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
