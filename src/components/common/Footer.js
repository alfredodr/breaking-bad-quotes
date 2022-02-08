import styles from "../../../styles/Home.module.css";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <AppBar
      color="success"
      position="static"
      style={{ height: "64px" }}
      className={styles.footer_container}
    >
      <Toolbar>
        <Typography
          color="inherit"
          margin={"auto"}
          className={styles.footer_text}
        >
          2022 Alfredo Dominguez
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;

//<footer className={styles.footer_container}>
//<p className={styles.footer_text}>2022 Alfredo Dominguez</p>
//</footer>
