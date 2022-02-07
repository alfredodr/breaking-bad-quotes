import styles from "../../../styles/Home.module.css";
import { Box } from "@mui/material";
import GetQuote from "./GetQuote";
import Navigation from "./Navigation";
import { QuotesProvider } from "../../contexts/quotes.context";

const QuoteApp = () => {
  return (
    <>
      <Box className={styles.quote_info_container}>
        <QuotesProvider>
          <GetQuote />
          <Navigation />
        </QuotesProvider>
      </Box>
    </>
  );
};

export default QuoteApp;
