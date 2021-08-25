import React from "react";
import { List, Rate } from "antd";
import {
  CheckOutlined,
  SwapRightOutlined,
  RightOutlined,
} from "@ant-design/icons";

import "./Education.scss";

export default function Education() {
  const courses = [
    {
      title: "Web Personal MERN Full Stack: MongoDB, Express, React y Node",
      college: "Udemy",
    },
    {
      title: "React testing con jest y enzyme",
      college: "Udemy",
    },
    {
      title: "Software Design and Architecture",
      college: "University of Alberta / Coursera",
    },
    {
      title: "React Native Expo: Creando un TripAdvisor de Restaurantes",
      college: "Udemy",
    },
    {
      title: "Scrum Master + Liderar Equipos Scrum y Ágil",
      college: "Udemy",
    },
  ];

  const softskills = [
    {
      title: "Autodidacta",
    },
    {
      title: "Proactivo",
    },
    {
      title: "Trabajo en equipo",
    },
    {
      title: "Pensamiento lógico",
    },
    {
      title: "Resolución de problemas",
    },
    {
      title: "Actitud positiva",
    },
  ];

  const hardskills = [
    {
      title: "Javascript / ES6",
      rate: 5,
    },
    {
      title: "HTML5",
      rate: 5,
    },
    {
      title: "CSS3",
      rate: 5,
    },
    {
      title: "React JS",
      rate: 5,
    },
    {
      title: "React Native",
      rate: 4,
    },
    {
      title: "Node JS",
      rate: 4,
    },
    {
      title: "PHP",
      rate: 3,
    },
    {
      title: "MySQL",
      rate: 4,
    },
    {
      title: "MongoDB",
      rate: 4,
    },
    {
      title: "C#",
      rate: 3,
    },
    {
      title: "JAVA",
      rate: 3,
    },
  ];

  return (
    <div className="education">
      <h2 className="education__title">Formación Académica:</h2>
      <div className="education__degree">
        <CheckOutlined /> Ingeniero Electrónico -{" "}
        <span>Universidad del Valle (2006 - 2012)</span>
      </div>
      <h3 className="education__semititle">Cursos:</h3>
      <List
        dataSource={courses}
        className="education__list"
        renderItem={(item) => (
          <List.Item>
            <div>
              <SwapRightOutlined /> {`${item.title} - ${item.college}`}
            </div>
          </List.Item>
        )}
      />
      <div className="education__skills">
        <div className="education__skills-soft">
          <h3 className="education__semititle">Habilidades Blandas:</h3>
          <List
            dataSource={softskills}
            className="soft-list"
            renderItem={(item) => (
              <List.Item>
                <div>
                  <RightOutlined /> {item.title}
                </div>
              </List.Item>
            )}
          />
        </div>
        <div className="education__skills-hard">
          <h3 className="education__semititle">Habilidades Fuertes:</h3>
          <List
            dataSource={hardskills}
            className="hard-list"
            renderItem={(item) => (
              <List.Item>
                <div>
                  <RightOutlined /> {item.title}
                  <span className="item-rate">
                    <Rate disabled defaultValue={item.rate} />
                  </span>
                </div>
              </List.Item>
            )}
          />
        </div>
      </div>
    </div>
  );
}
