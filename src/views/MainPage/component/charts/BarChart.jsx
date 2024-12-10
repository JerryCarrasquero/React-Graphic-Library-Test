import { BarChart } from "@mui/x-charts/BarChart";

export default function BasicBars({ datas = [], width = 0, height = 0 }) {
  const dataset = [
    {
      error: 5,
      delivered: 6,
      total: 11,
      campaing: "campaing 1",
    },
    {
      error: 4,
      delivered: 6,
      total: 10,
      campaing: "campaing 2",
    },
    {
      error: 5,
      delivered: 6,
      total: 11,
      campaing: "campaing 3",
    },
    {
      error: 5,
      delivered: 6,
      total: 11,
      campaing: "campaing 4",
    },
    {
      error: 5,
      delivered: 4,
      total: 9,
      campaing: "campaing 5",
    },
    {
      error: 3,
      delivered: 2,
      total: 5,
      campaing: "campaing 6",
    },
  ];

  return (
    <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: "band", dataKey: "campaing" }]}
      series={[{ dataKey: "error", label: "Failed to Send" },{ dataKey: "delivered", label: "Sent" },{ dataKey: "total", label: "Total Messages" }]}
      layout="horizontal"
      width={500}
      height={300}
    />
  );
}
