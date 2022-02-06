import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar color="success" position="static" style={{ height: "64px" }}>
        <Toolbar>
            <Typography color="inherit" margin={"auto"}>Breaking Bad Random Quotes</Typography>
        </Toolbar>
    </AppBar>
  )
};
  
export default Header;
  