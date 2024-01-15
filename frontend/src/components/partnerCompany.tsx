import partnersPhoto from "../assets/partners.jpg";

function PartnerCompany() {
  return (
    <div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          margin: "3% 0 ",
        }}
      >
        <div>Partners</div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginBottom: "2%",
        }}
      >
        <div>
          <img
            width="500px"
            height="400px"
            src={partnersPhoto}
            alt="img not found"
          />
        </div>
      </div>
    </div>
  );
}

export default PartnerCompany;
