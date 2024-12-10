import { PieChart } from "@mui/x-charts/PieChart";

export default function BasicPie({ datas = [], width = 0, height = 0 }) {
  console.log(datas);
  return (
    <PieChart
      series={[
        {
          data: datas,
        },
      ]}
      width={width}
      height={height}
    />
  );
}
