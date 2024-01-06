import React from "react";
import { Carousel, Divider } from "antd";
import img1 from "../assets/img2.jpg";
import { Col, Row } from "antd";
import { Footer } from "antd/es/layout/layout";
import { CopyrightOutlined } from "@ant-design/icons";
import "../assets/animation.css";
import Marquee from "react-fast-marquee";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "100%",
  lineHeight: "100%",
  textAlign: "center",
};

function About() {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <div>
      <Carousel autoplay={true} dots={false}>
        <div>
          <h3 style={contentStyle}>
            <img style={{ height: "100%", width: "100%" }} src={img1} />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img style={{ height: "100%", width: "100%" }} src={img1} />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img style={{ height: "100%", width: "100%" }} src={img1} />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img style={{ height: "100%", width: "100%" }} src={img1} />
          </h3>
        </div>
      </Carousel>
      <div
        style={{
          marginTop: "3%",
          marginLeft: "5%",
          marginRight: "5%",
        }}
      >
        <Row>
          <Col span={8}>
            <div style={{ margin: "0 15%" }}>
              <Divider style={{ border: "1px solid gray" }}></Divider>
            </div>
          </Col>
          <Col span={16} style={{ fontWeight: "bold", fontSize: "25px" }}>
            VXT KOREA는 다양한 분야의 인력 공급 및 파견을 주도하고 있는 맨파워
            <br />
            회사입니다. 인력부족으로 어려움을 격고 있는 각 분야 기업들과 협업
            하고 <br />
            청년 일자리 창출하여 더 나은 미래를 항해 나아갈 것 입니다
          </Col>
        </Row>
      </div>
      <div
        style={{
          marginLeft: "10%",
          marginRight: "10%",
          marginBottom: "5%",
          marginTop: "5%",
        }}
      >
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
            quas deserunt laborum quam at numquam ut assumenda facilis
            aspernatur. Cupiditate consequatur possimus cumque quos, aperiam
            sequi aspernatur maxime saepe ab. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Culpa commodi vero, eaque possimus
            labore, voluptatibus quos beatae suscipit temporibus obcaecati
            laborum? Quia voluptatem voluptas alias eum delectus quod nulla
            quis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Maiores nam ex quibusdam deserunt nemo alias maxime accusantium a
            sunt tempora atque omnis est labore voluptatem nostrum ipsum, vel
            quod. Qui?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
            qui provident optio delectus ipsum sequi amet soluta reiciendis
            quisquam totam dolores est expedita hic minus esse doloribus, quia
            ullam beatae. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Molestias sint tempore culpa perspiciatis vitae a suscipit eum
            enim harum id. Cum vel ullam libero id fuga odio, necessitatibus
            debitis! Deserunt?
          </p>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "black",
          fontSize: "25px",
          color: "rgb(186,186,186)",
        }}
      >
        <Marquee autoFill={true} speed={120}>
          <p style={{ marginRight: "50px" }}>Hello - Let's Connect</p>
        </Marquee>
      </div>
      <Footer style={{ backgroundColor: "black", color: "rgb(186,186,186)" }}>
        <div
          style={{
            width: "100%",
            fontSize: "12px",
          }}
        >
          <span>
            브이엑스티코리아 주식회사 CEO 정영민 | 주소 서울특별시 서대문구
            서대문구 신촌로 25. 2층 2463호 (창천동) | 사업자등록번호:
            831-87-02285{" "}
          </span>
          <span style={{ marginLeft: "30%" }}>
            <CopyrightOutlined />
            VTX Korea All Rights Reserved
          </span>
        </div>
      </Footer>
    </div>
  );
}

export default About;
