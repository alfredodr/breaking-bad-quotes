import { Box } from "@mui/system";
import { Button } from "@mui/material";

const GetQuote = ({ getData, lastQuote, currentQuote }) => {
    return (
        <>
            <Box component="div" style={{ marginTop: "1rem" }}>{lastQuote !== undefined ? currentQuote : null}</Box>
            <Button
                className="get-quote-button"
                size="large"
                variant="contained"
                color="success"
                onClick={getData}
            >
                Get Quote
            </Button>
        </>
    )
};

export default GetQuote;