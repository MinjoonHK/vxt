import { MenuProps } from "antd";
import { Link } from "react-router-dom";

const menuStyle = {
  fontWeight: "bold",
  fontSize: "16px",
};

const DashBoardMenu: MenuProps["items"] = [
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
];

export default DashBoardMenu;
