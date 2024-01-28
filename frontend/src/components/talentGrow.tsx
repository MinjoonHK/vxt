import { Col, Row } from "antd";
import { motion } from "framer-motion";
import square1 from "../assets/img/square1.jpg";
import square2 from "../assets/img/square2.jpg";
import square3 from "../assets/img/square3.jpg";
import longSquare1 from "../assets/img/longSquare1.jpg";

const bubbleStyle = {
  marginTop: "9%",
  color: "black",
  fontSize: "25px",
};

const imgBoxStyle = {
  justifyContent: "center",
  display: "flex",
  margin: "4% 0",
};

const rowStyle = {
  marginTop: "",
};

const ImportedImages = [square1, square2, square3];

function TalentGrow() {
  return (
    <div>
      <div>
        <div>
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
                <Col span={12} style={imgBoxStyle}>
                  <img
                    src={longSquare1}
                    alt=""
                    style={{
                      height: "300px",
                      width: "400px",
                      borderRadius: "25px",
                    }}
                  />
                </Col>
                <Col span={12} style={bubbleStyle}>
                  <p style={{ marginRight: "10%" }}>
                    VXT KOREA는 글로벌 인재 양성을 위해 영어, 한국어, 일본어
                    온라인 수업을 학생들에게 제공합니다.
                  </p>
                </Col>
              </Row>
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
                <Col span={12} style={bubbleStyle}>
                  <p style={{ marginLeft: "20%" }}>
                    주요 교육 직종: E7 비자를 기반으로 한 용접 취부, 주조, 금형,
                    표면처리, 열처리, 요리사
                  </p>
                </Col>
                <Col span={12} style={imgBoxStyle}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "700px",
                    }}
                  >
                    {ImportedImages.map((image) => {
                      return (
                        <img
                          src={image}
                          alt="image not Found"
                          style={{
                            height: "300px",
                            width: "200px",
                            borderRadius: "25px",
                          }}
                        />
                      );
                    })}
                  </div>
                </Col>
              </Row>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TalentGrow;
