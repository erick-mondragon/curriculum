import React from "react";
import { List } from "antd";
import { RightOutlined, MinusOutlined } from "@ant-design/icons";

import "./Experience.scss";

export default function Experience() {
  const info = [
    {
      company: "STF Group SA",
      position: "Analista Desarrollo Front Ecommerce",
      dates: "Abril 2021 - Actualidad",
      functions: [
        "Desarrollar landings para promocionar las nuevas colecciones de la empresa.",
        "Administrar todo el funcionamiento de la web a través de la plataforma VTex.",
        "Montar los respectivos banners para la comunicación de promociones a través de la página web.",
      ],
    },
    {
      company: "Alba Group SAS",
      position: "Ingeniero de Desarrollo",
      dates: "Septiembre 2016 - Abril 2021",
      functions: [
        "Desarrollo y mejoramiento de una aplicación web, usando ReactJS en lado cliente y NodeJS en el lado servidor, para el manejo estadístico de la información de la empresa.",
        "Desarrollo, mantenimiento y actualización de toda la infraestructura de la intranet de la empresa, usando MySQL como base de datos, PHP como lenguaje de servidor, y Javascript, CSS (Bootstrap) y HTML5 como lenguajes del lado del cliente.",
        "Desarrollo de una aplicación de escritorio, usando como lenguaje C#, para el manejo de la compra, venta y manejo de inventario de la Boutique interna de la empresa.",
        "Creación de procesos automáticos, en NodeJS, para obtener y actualizar la base de datos con información de tiempos de conexión y facturación de modelos, entregada por una API Rest externa.",
        "Creación de procesos automáticos, en NodeJs, para obtener y actualizar la base de datos con información de tiempos de conexión y facturación de modelos, haciendo scraping en la página web.",
        "Creación de una macro en Excel, usando Visual Basic, para el envío de correos automáticos con la información de los comprobantes de pago de las modelos",
      ],
    },
  ];

  return (
    <div className="experience">
      <h2 className="experience__title">Experiencia Laboral:</h2>
      <List
        dataSource={info}
        className="experience__list"
        renderItem={(item) => (
          <List.Item>
            <h3 className="company">
              <RightOutlined /> {item.company} - <span>{item.dates}</span>
            </h3>
            <h4 className="position">{item.position}</h4>
            <h3 className="title-funciones">Funciones:</h3>
            <List
              dataSource={item.functions}
              renderItem={(functionItem) => (
                <div>
                  <MinusOutlined /> <span>{functionItem}</span>
                </div>
              )}
            />
          </List.Item>
        )}
      />
    </div>
  );
}
