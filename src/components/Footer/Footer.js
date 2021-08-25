import React from "react";
import { Row, Col } from "antd";
import {
  WhatsAppOutlined,
  MailOutlined,
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

import "./Footer.scss";

export default function Footer() {
  return (
    <Row className="footer">
      <Col lg={20} xs={24} className="footer__content">
        <div className="footer__content-info">
          <h2>Contacto:</h2>
          <h3 className="whatsapp">
            <WhatsAppOutlined /> +57 316 3616046
          </h3>
          <h3 className="email">
            <MailOutlined /> erickmmondragon@gmail.com
          </h3>
        </div>
        <div className="footer__content-social">
          <a
            href="https://www.facebook.com/erickmmondragon5"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookOutlined />
          </a>
          <a
            href="https://www.instagram.com/erickmmondragon"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramOutlined />
          </a>
          <a
            href="https://www.linkedin.com/in/erickmmondragon/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinOutlined />
          </a>
          <a
            href="https://twitter.com/erickmmondragon"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterOutlined />
          </a>
        </div>
      </Col>
    </Row>
  );
}
