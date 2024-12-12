import { Box } from "@mui/material";
import BasicPie from "./component/charts/PieChart";
import BasicBars from "./component/charts/BarChart"
import { useState } from "react";
//React
export default function MainPage() {
  const [ dataset, setDataset] = useState([
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
  ])

  return (
    <Box>
      <BasicPie
        datas={[
          { id: 0, value: 10, label: "series A" },
          { id: 1, value: 15, label: "series B" },
          { id: 2, value: 20, label: "series C" },
        ]}
        width={400}
        height={200}
      />
      <BasicBars datas ={dataset} width ={400} height ={500} />
    </Box>
  );
}
