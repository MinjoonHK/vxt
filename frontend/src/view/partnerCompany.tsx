import { useEffect, useState } from "react";

import vxtManpower from "../assets/img/vxtManpower.png";
import vxtConstruction from "../assets/img/vxtConstruction.png";
import vxtCollege from "../assets/img/vxtCollege.png";
import vivaXan from "../assets/img/vivaXan.png";
import vtc from "../assets/img/vtc.png";
import hinode from "../assets/img/hinode.png";
import atv from "../assets/img/atv.png";
import ttc from "../assets/img/ttc.png";
import simCo from "../assets/img/simCo.png";
import samsung from "../assets/img/samsung.png";
import sk from "../assets/img/SK.png";
import sevenEleven from "../assets/img/sevenEleven.png";
import daewoo from "../assets/img/daewoo.png";
import toyota from "../assets/img/toyota.png";
import rhodes from "../assets/img/rhodes.png";
import "../assets/css/partnerCompany.css";

const importedPartenrs = [samsung, sk, sevenEleven, daewoo, toyota, rhodes];

const imageDescripitons: string[] = [
  "vxt ManPower",
  "vxt Construction",
  "vxt College",
  "vivaxan",
  "VTC",
  "hinode",
  "ATV",
  "TTC",
  "SIMCO",
];

const importedImages = [
  vxtManpower,
  vxtConstruction,
  vxtCollege,
  vivaXan,
  vtc,
  hinode,
  atv,
  ttc,
  simCo,
];

function PartnerCompany() {
  return (
    <div>
      <div style={{ textAlign: "center", fontSize: "25px", margin: "5% 0" }}>
        Group Members
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          margin: "0 5% ",
        }}
      >
        {importedImages.map((image, idx) => {
          return (
            <div
              className="flipContainer"
              style={{
                width: "30%",
                marginBottom: "5%",
                display: "flex",
                justifyContent: "center",
                backfaceVisibility: "hidden",
                transition: "1s",
              }}
            >
              <div
                className="item front"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  border: "2px solid rgb(59,130,546)",
                  borderRadius: "400px",
                  width: "150px",
                  height: "150px",
                  transform: "transition 0.5s",
                }}
              ></div>
              <div
                className="item back"
                style={{
                  border: "2px solid rgb(59,130,546)",
                  width: "150px",
                  height: "150px",
                  borderRadius: "400px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  fontSize: "15px",
                }}
              >
                {imageDescripitons[idx]}
              </div>
            </div>
          );
        })}
      </div>
      <div style={{ textAlign: "center", fontSize: "25px", margin: "5% 0" }}>
        Trusted Partners
      </div>
      <div
        style={{
          display: "flex",

          flexWrap: "wrap",
          margin: "0 5% ",
        }}
      >
        {importedPartenrs.map((image) => {
          return (
            <div
              style={{
                width: "25%",
                marginBottom: "5%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundPosition: "center",
                  backgroundColor: "white",
                  backgroundRepeat: "no-repeat",
                  border: "2px solid black",
                  borderRadius: "25px",
                  width: "250px",
                  height: "100px",
                }}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PartnerCompany;
