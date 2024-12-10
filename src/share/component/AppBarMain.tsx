import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Logo from "../../assets/logo/logo";

/**
 * The function `AppBarMain` returns a JSX component for the main app bar with a logo and text "Graph
 * Test".
 * @returns The `AppBarMain` component is being returned. It consists of an AppBar component with a
 * Toolbar containing a Logo component and a Typography component displaying the text "Graph Test".
 */
export default function AppBarMain() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Logo />
        <Typography
          variant="h6"
          component="div"
          sx={{
            ml: 4,
            display: { xs: "none", md: "flex" },
            fontWeight: 700,
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Graph Test
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
