import { Footer } from "antd/es/layout/layout";
import { CopyrightOutlined } from "@ant-design/icons";

function DashboardFooter() {
  return (
    <div>
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

export default DashboardFooter;
