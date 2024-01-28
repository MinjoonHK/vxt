import { motion } from "framer-motion";
import { Layout } from "antd";
import { Link, NavLink } from "react-router-dom";
import vtxLogo from "../assets/img/vxtKorea.png";
import vtxLogo2 from "../assets/img/vxtLogo.png";

const { Header } = Layout;

const links: string[] = ["about", "mainarea", "talentdevelopment", "partners"];
const linkNames: string[] = [
  "About",
  "Main Area",
  "Talent Development",
  "Partners",
];
const importedImages: any = [vtxLogo2];

const linkStyle = {
  textDecoration: "none",
  color: "rgb(85,85,85)",
  fontSize: "18px",
};

const DashBoardHeader = () => {
  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "rgb(20,20,20)",
      }}
    >
      <div>
        <NavLink to="/">
          <div style={{ display: "flex", alignItems: "center" }}>
            {importedImages.map((images) => {
              return (
                <span key={images} style={{ marginTop: "10px" }}>
                  <img
                    src={images}
                    alt="img not found"
                    style={{
                      width: "100px",
                      height: "50px",
                    }}
                  />
                </span>
              );
            })}
            <span
              style={{
                color: "rgb(188,188,188)",
                fontWeight: "bold",
                fontSize: "25px",
                marginLeft: "10px",
                marginBottom: "10px",
              }}
            >
              VXT KOREA
            </span>
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
        {links.map((link, idx) => {
          return (
            <motion.div
              whileHover={{ scale: 1.2 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
            >
              <Link style={linkStyle} to={link}>
                {linkNames[idx]}
              </Link>
            </motion.div>
          );
        })}
      </div>
    </Header>
  );
};

export default DashBoardHeader;
