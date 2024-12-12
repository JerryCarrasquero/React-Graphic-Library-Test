import { BarChart } from "@mui/x-charts/BarChart";

export default function BasicBars({ datas = [], width = 0, height = 0 }) {


  return (
    <BarChart
      dataset={datas}
      yAxis={[{ scaleType: "band", dataKey: "campaing" }]}
      series={[{ dataKey: "error", label: "Failed to Send" },{ dataKey: "delivered", label: "Sent" },{ dataKey: "total", label: "Total Messages" }]}
      layout="horizontal"
      width={width}
      height={height}
    />
  );
}
