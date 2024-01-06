import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu, Layout, ConfigProvider } from "antd";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import About from "../components/about";
import MainArea from "../components/mainArea";
import vtxLogo from "../assets/vxtKorea.png";
import vtxLogo2 from "../assets/vxtLogo.png";
import TalentGrow from "../components/talentGrow";
import PartnerCompany from "../components/partnerCompany";
import Contact from "../components/contact";

const { Header, Content, Footer } = Layout;

const menuStyle = {
  fontWeight: "bold",
  fontSize: "16px",
};

const menuItems: MenuProps["items"] = [
  {
    key: "about",
    label: (
      <Link to="about" style={menuStyle}>
        About
      </Link>
    ),
  },
  {
    key: "mainarea",
    label: (
      <Link to="mainarea" style={menuStyle}>
        Business
      </Link>
    ),
  },
  {
    key: "talentdevelopment",
    label: (
      <Link to="talentdevelopment" style={menuStyle}>
        Talent Development
      </Link>
    ),
  },
  {
    key: "partners",
    label: (
      <Link to="partners" style={menuStyle}>
        Partners
      </Link>
    ),
  },
  {
    key: "contact",
    label: (
      <Link to="contact" style={menuStyle}>
        Contact
      </Link>
    ),
  },
];

function DashBoard() {
  const [current, setCurrent] = useState("mail");

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
          <ConfigProvider
            theme={{
              components: {
                Menu: {
                  horizontalItemSelectedColor: "rgb(111,111,111)",
                },
              },
            }}
          >
            <Menu
              onClick={onClick}
              selectedKeys={[current]}
              mode="horizontal"
              style={{ backgroundColor: "transparent" }}
              items={menuItems}
              disabledOverflow={true}
            />
          </ConfigProvider>
        </Header>
      </Layout>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/mainarea" element={<MainArea />} />
        <Route path="/talentdevelopment" element={<TalentGrow />} />
        <Route path="/partners" element={<PartnerCompany />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<About />} />
      </Routes>
    </div>
  );
}

export default DashBoard;
