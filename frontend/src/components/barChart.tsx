import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "2023 - 2027 5년간 한국 시장 개척 계획",
    },
  },
};

const labels = ["2023", "2024", "2025", "2026", "2027"];

export const data = {
  labels,
  datasets: [
    {
      label: "파견 인원 수",
      data: [300, 500, 700, 1000, 1500],
      backgroundColor: "rgb(75,192,192)",
      barThickness: 50,
    },
  ],
};

export function BarChart() {
  return (
    <div style={{ width: "700px" }}>
      <Bar options={options} data={data} />
    </div>
  );
}
