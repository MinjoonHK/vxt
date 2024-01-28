import { Col, Row } from "antd";
import { motion } from "framer-motion";
import circle1 from "../assets/img/circle1.png";
import circle2 from "../assets/img/circle2.png";
import circle3 from "../assets/img/circle3.png";
import circle4 from "../assets/img/circle4.png";

const imgStyle = {
  height: "300px",
  width: "300px",
  margin: "2% 0 ",
};

const bubbleStyle = {
  marginTop: "5%",
  color: "black",
  fontSize: "25px",
};

const imgBoxStyle = {
  justifyContent: "center",
  display: "flex",
};

const rowStyle = {
  marginTop: "",
};

function MainArea() {
  return (
    <div style={{ fontFamily: "NanumSquareNeoHeavy" }}>
      <div>
        <div>
          <div
            style={{
              background: "transparent",
            }}
          >
            <motion.div
              initial={{ x: 1000 }}
              animate={{ x: 0 }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <Row style={rowStyle}>
                <Col span={12} style={imgBoxStyle}>
                  <img src={circle2} alt="" style={imgStyle} />
                </Col>
                <Col span={12} style={bubbleStyle}>
                  <p style={{ marginRight: "10%" }}>
                    전문직종(E-7-1): <br />
                    기업 고위임원, 경영지원 관리자 등 관리자 15개 직종 <br />
                    생명과학전문가, 해외영업원 등 전문가 52개 직종
                  </p>
                </Col>
              </Row>
              <hr style={{ border: "2px solid gray" }} />
            </motion.div>
          </div>
          <div
            style={{
              background: "transparent",
            }}
          >
            <motion.div
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <Row style={rowStyle}>
                <Col span={12} style={bubbleStyle}>
                  <p style={{ marginLeft: "20%" }}>
                    준전문직종(E-7-2): <br /> 의료코디네이터 등 사무종사자 5개
                    직종 <br />
                    주방장 및 조리사 등 서비스 종사자 4개 직종
                  </p>
                </Col>
                <Col span={12} style={imgBoxStyle}>
                  <img src={circle4} alt="" style={imgStyle} />
                </Col>
              </Row>
              <hr style={{ border: "2px solid gray" }} />
            </motion.div>
          </div>
          <div
            style={{
              background: "transparent",
            }}
          >
            <motion.div
              initial={{ x: 1000 }}
              animate={{ x: 0 }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <Row style={rowStyle}>
                <Col span={12} style={imgBoxStyle}>
                  <img src={circle3} alt="" style={imgStyle} />
                </Col>
                <Col span={12} style={bubbleStyle}>
                  <p style={{ marginRight: "10%" }}>
                    일반기능직종(E-7-3): <br /> 양식기술자 등 일반기능인력 8개
                    직종
                  </p>
                </Col>
              </Row>
              <hr style={{ border: "2px solid gray" }} />
            </motion.div>
          </div>
          <div
            style={{
              background: "transparent",
            }}
          >
            <motion.div
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <Row style={rowStyle}>
                <Col span={12} style={bubbleStyle}>
                  <p style={{ marginLeft: "20%" }}>
                    숙련기능직종(E-7-4): <br /> 농림축산어업, 제조, 건설 등 분야{" "}
                    <br />
                    숙련기능인력 3개 직종
                  </p>
                </Col>
                <Col span={12} style={imgBoxStyle}>
                  <img src={circle1} alt="" style={imgStyle} />
                </Col>
              </Row>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainArea;
