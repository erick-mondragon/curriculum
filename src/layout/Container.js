import React from "react";
import { Layout, Row, Col } from "antd";
import Routes from "../routes/Routes";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "./Container.scss";

export default function Container() {
  return (
    <Layout className="layout">
      <Header />
      <Row className="layout__content">
        <Col lg={20} xs={24} className="layout__content-pages">
          <Routes />
        </Col>
      </Row>
      <Footer />
    </Layout>
  );
}
