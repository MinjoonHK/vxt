import React, { useEffect, useState } from "react";
import { Button, Carousel, Divider } from "antd";
import img1 from "../assets/img/img2.jpg";
import vtx1 from "../assets/img/vxt1.png";
import vtx2 from "../assets/img/vxt2.png";
import vtx3 from "../assets/img/vxt5.png";

import { Col, Row } from "antd";
import { ArrowUpOutlined, MailOutlined } from "@ant-design/icons";
import MailModal from "../components/mailModal";
import { BarChart } from "../components/barChart";
import PieChart from "../components/pieChart2021";
import PieChart2022 from "../components/pieChart2022";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "100%",
  lineHeight: "100%",
  textAlign: "center",
};

const importedImages = [vtx2, vtx1, vtx3, img1];

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [mailOpen, setMailOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      <Carousel autoplay={true} dots={false}>
        {importedImages.map((images) => {
          return (
            <div>
              <h3 style={contentStyle}>
                <img style={{ height: "450px", width: "100%" }} src={images} />
              </h3>
            </div>
          );
        })}
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
          marginBottom: "2%",
          marginTop: "5%",
        }}
      >
        <div>
          <p style={{ fontSize: "20px", marginBottom: "5%" }}>
            VXT 트레이닝 센터는 국제적인 전문가와 교사들을 초청하여 고객의
            미래를 위해 유럽 표준에 따른 기술을 교육하는 과정을 통해 인재를
            양성합니다. 이러한 종합적인 장점으로 인해 우리는 국내 및 전 세계
            프로젝트에 VXT는 수백만 명의 베트남 시민을 성공적으로
            파견해왔습니다.이 분야에서 오랜 경험과 평판을 바탕으로 한국, 일본,
            대만, 루마니아, 폴란드, 헝가리, 라트비아, 슬로바키아, 체코 등 유럽
            국가, 아랍 에미리트, 사우디 아라비아, 바레인, 카타르, 오만 등 다양한
            국가들에 수백만명의 숙련된 인력을 제공하며 글로벌 기업으로
            성장하였습니다.
            <br />
            <br />
            <br />
            조선, 자동차, 반도체, 건설, 의료, 서비스등 다양한 산업에 필요로 하는
            우수한 인재들을 추천, 고객사의 성공적인 사업을 위하여 최상의
            서비스를 제공하고 있습니다. 또한 베트남을 비롯하여 세계의 다양한
            프로젝트에 대한 인력 입찰도 제공합니다.
            <br />
            <b>"적절한 일자리에 적절한 인재"</b>
            라는 슬로건을 기반으로 ISO 프로세스를 통해 관리되는 서비스를 통해
            세계의 다양한 기업을 위해 인력 품질을 효과적으로 관리해왔습니다.
          </p>
        </div>

        <div>
          <Row>
            <Col span={12}>
              <div
                style={{
                  marginRight: "10%",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20%",
                  height: "100%",
                }}
              >
                <div>
                  <p style={{ fontSize: "25px", fontWeight: "bold" }}>
                    VXT KOREA 는 한국 시장의 가능성을 믿습니다. 현재 300명의
                    인원을 파견하였고 5년이내 현재의 5배의 수치인 1500명을
                    목표로 하고있습니다.
                  </p>
                </div>
              </div>
            </Col>
            <Col span={12}>
              <div style={{ height: 500 }}>
                <BarChart />
              </div>
            </Col>
          </Row>
        </div>
        <div
          style={{ textAlign: "center", fontWeight: "bold", fontSize: "40px" }}
        >
          "성장하는 VXT"
        </div>
        <div style={{ marginLeft: "5%", marginTop: "5%" }}>
          <Row>
            <Col span={12}>
              <div style={{ height: 500 }}>
                <PieChart />
              </div>
            </Col>
            <Col span={12}>
              <div style={{ height: 500 }}>
                <PieChart2022 />
              </div>
            </Col>
          </Row>
        </div>
        <div style={{ marginTop: "20%" }}>
          <Row>
            <Col span={12}>
              <div
                style={{
                  marginRight: "10%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <div>
                  <p
                    style={{
                      textAlign: "center",
                      fontSize: "25px",
                      fontWeight: "bold",
                    }}
                  >
                    문의 및 건의 사항은 오른쪽 메일 버튼을 <br />
                    클릭하여 메일을 보내주세요. <br />
                    <br />
                    여러분의 연락을 기다립니다.
                  </p>
                </div>
              </div>
            </Col>
            <Col span={12}>
              <div
                style={{
                  marginRight: "10%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Button
                  shape="round"
                  size="large"
                  onClick={() => {
                    setMailOpen(true);
                  }}
                  style={{
                    marginTop: "3%",
                    marginLeft: "2%",
                    fontSize: "18px",
                    fontWeight: "bold",
                    border: "2px solid black",
                  }}
                >
                  클릭하여 메일 보내기
                  <MailOutlined
                    onClick={() => {
                      setMailOpen(true);
                    }}
                  />
                </Button>
              </div>
            </Col>
          </Row>
        </div>

        {/* <div style={{ display: "flex", justifyContent: "center" }}>
          <Button shape="round" onClick={scrollToTop}>
            Scroll To Top <ArrowUpOutlined />
          </Button>
        </div> */}
      </div>
      <MailModal
        open={mailOpen}
        onClose={() => {
          setMailOpen(false);
        }}
      />
    </div>
  );
}

export default About;
