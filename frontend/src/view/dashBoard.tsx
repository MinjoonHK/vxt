import React, { useState } from "react";
import { MailOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import type { MenuProps } from "antd";
import { Menu, Layout, ConfigProvider, Button } from "antd";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import About from "../components/about";
import MainArea from "../components/mainArea";
import vtxLogo from "../assets/vxtKorea.png";
import vtxLogo2 from "../assets/vxtLogo.png";
import TalentGrow from "../components/talentGrow";
import PartnerCompany from "../components/partnerCompany";
import DashboardFooter from "../components/footer";
import Marquee from "react-fast-marquee";
import DashBoardMenu from "../data/dashBoardItems";
import { link } from "fs";

const { Header, Content, Footer } = Layout;

const linkStyle = {
  textDecoration: "none",
  color: "black",
  fontSize: "18px",
};

function DashBoard() {
  const [current, setCurrent] = useState("mail");
  const [mailAcitve, setMailActive] = useState(true);

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  return (
    <div>
      <Layout style={{ backgroundColor: "transparent", marginBottom: "1%" }}>
        <Header
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "transparent",
          }}
        >
          <div style={{ marginTop: "15px" }}>
            <NavLink to="/">
              <div>
                <div style={{ width: "300px" }}>
                  <span>
                    <img
                      src={vtxLogo2}
                      alt="img not found"
                      style={{ width: "100px", height: "50px" }}
                    />
                  </span>
                  <span>
                    <img
                      src={vtxLogo}
                      alt="img not found"
                      style={{ width: "150px", height: "50px" }}
                    />
                  </span>
                </div>
              </div>
            </NavLink>
          </div>
          <div
            style={{
              marginTop: "0.5%",
              display: "flex",
              width: "40%",
              justifyContent: "space-between",
              fontWeight: "bold",
            }}
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
            >
              <Link style={linkStyle} to="about">
                About
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.2 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
            >
              <Link style={linkStyle} to="mainarea">
                Business
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.2 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
            >
              <Link style={linkStyle} to="talentdevelopment">
                Talent Development
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.2 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
            >
              <Link style={linkStyle} to="partners">
                Partners
              </Link>
            </motion.div>
            <Button style={{ marginTop: "3%", marginLeft: "2%" }}>
              <MailOutlined />
            </Button>
          </div>
        </Header>
      </Layout>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/mainarea" element={<MainArea />} />
        <Route path="/talentdevelopment" element={<TalentGrow />} />
        <Route path="/partners" element={<PartnerCompany />} />
        <Route path="/" element={<About />} />
      </Routes>
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
      <DashboardFooter />
    </div>
  );
}

export default DashBoard;
