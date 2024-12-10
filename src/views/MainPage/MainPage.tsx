import { Box } from "@mui/material";
import BasicPie from "./component/charts/PieChart";
import BasicBars from "./component/charts/BarChart"
//React
export default function MainPage() {
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
      <BasicBars/>
    </Box>
  );
}
