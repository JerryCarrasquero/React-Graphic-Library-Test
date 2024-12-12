import { BarChart } from "@mui/x-charts/BarChart";
/**
 * The BasicBars function renders a horizontal bar chart using the provided data and dimensions.
 * @returns A function component named BasicBars is being returned. It takes in three props: datas
 * (default value is an empty array), width (default value is 0), and height (default value is 0).
 * Inside the component, a BarChart component is being rendered with specific dataset, yAxis
 * configuration, series configuration, layout, width, and height props.
 */

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
