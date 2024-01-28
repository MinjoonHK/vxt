import { Chart as ChartJS, ArcElement, Tooltip, Legend, Chart } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["조선", "농업", "건설", "간호"],
  datasets: [
    {
      label: "파견 인원수:",
      data: [627, 42, 70, 10],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
    },
  ],
};

export default function PieChart2022() {
  const total = data.datasets[0].data.reduce((acc, curr) => acc + curr, 0);

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || "";
            if (label) {
              const value = context.parsed;
              const percent = ((value / total) * 100).toFixed(2) + "%";
              return `${label}: ${value} (${percent})`;
            }
            return null;
          },
        },
      },
    },
  };
  return (
    <>
      <Pie data={data} options={options} />
      <div
        style={{
          display: "flex",
          marginTop: "3%",
          marginLeft: "25%",
        }}
      >
        <div style={{ fontWeight: "bold", fontSize: "15px" }}>
          2022년 총 파견 인원수: 850명
        </div>
      </div>
    </>
  );
}
