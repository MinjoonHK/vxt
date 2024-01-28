import { Layout } from "antd";
import { Route, Routes } from "react-router-dom";
import About from "./about";
import MainArea from "./mainArea";
import TalentGrow from "./talentGrow";
import PartnerCompany from "./partnerCompany";
import DashboardFooter from "../components/footer";
import Marquee from "react-fast-marquee";
import DashBoardHeader from "../components/header";
import bgImage from "../assets/img/bgImage.png";

function DashBoard() {
  return (
    <div>
      <div style={{ backgroundImage: `url(${bgImage})` }}>
        <Layout>
          <DashBoardHeader />
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
    </div>
  );
}

export default DashBoard;
