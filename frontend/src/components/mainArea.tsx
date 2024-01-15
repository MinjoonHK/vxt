import { Col, Row } from "antd";
import { motion } from "framer-motion";
import circle1 from "../assets/circle1.png";
import circle2 from "../assets/circle2.png";
import circle3 from "../assets/circle3.png";
import circle4 from "../assets/circle4.png";

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
    <div>
      <div>
        <div>
          <div
            style={{
              background: "linear-gradient(to bottom,rgb(241,245,248),#FFFFFF)",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 1 },
              }}
            >
              <Row style={rowStyle}>
                <Col span={12} style={imgBoxStyle}>
                  <img src={circle1} alt="" style={imgStyle} />
                </Col>
                <Col span={12} style={bubbleStyle}>
                  <p style={{ marginRight: "10%" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat quod nobis voluptates et eaque eligendi cum itaque
                    facilis, maxime atque consectetur consequuntur laborum!
                    Suscipit modi temporibus, quod impedit ex ratione.
                  </p>
                </Col>
              </Row>
            </motion.div>
          </div>
          <div
            style={{
              background: "linear-gradient(to bottom,#FFFD92,#FFFFFF)",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5 },
              }}
            >
              <Row style={rowStyle}>
                <Col span={12} style={bubbleStyle}>
                  <p style={{ marginLeft: "10%" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat quod nobis voluptates et eaque eligendi cum itaque
                    facilis, maxime atque consectetur consequuntur laborum!
                    Suscipit modi temporibus, quod impedit ex ratione.
                  </p>
                </Col>
                <Col span={12} style={imgBoxStyle}>
                  <img src={circle2} alt="" style={imgStyle} />
                </Col>
              </Row>
            </motion.div>
          </div>
          <div
            style={{
              background:
                "linear-gradient(to bottom, rgb(218,255,246),#FFFFFF)",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5 },
              }}
            >
              <Row style={rowStyle}>
                <Col span={12} style={imgBoxStyle}>
                  <img src={circle3} alt="" style={imgStyle} />
                </Col>
                <Col span={12} style={bubbleStyle}>
                  <p style={{ marginRight: "10%" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat quod nobis voluptates et eaque eligendi cum itaque
                    facilis, maxime atque consectetur consequuntur laborum!
                    Suscipit modi temporibus, quod impedit ex ratione.
                  </p>
                </Col>
              </Row>
            </motion.div>
          </div>
          <div
            style={{
              background:
                "linear-gradient(to bottom, rgb(235,246,254),#FFFFFF)",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5 },
              }}
            >
              <Row style={rowStyle}>
                <Col span={12} style={bubbleStyle}>
                  <p style={{ marginLeft: "10%" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat quod nobis voluptates et eaque eligendi cum itaque
                    facilis, maxime atque consectetur consequuntur laborum!
                    Suscipit modi temporibus, quod impedit ex ratione.
                  </p>
                </Col>
                <Col span={12} style={imgBoxStyle}>
                  <img src={circle4} alt="" style={imgStyle} />
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
