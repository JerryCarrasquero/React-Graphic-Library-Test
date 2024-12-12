import { PieChart } from "@mui/x-charts/PieChart";
/* This code snippet is a React component named `BasicPie` that renders a `PieChart` component from the
`@mui/x-charts` library. the data prop passes the data required to be displayed 
and the dimension of the graph can be modified with widht and height */

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
