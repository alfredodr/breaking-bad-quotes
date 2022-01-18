import { Box } from "@mui/system";

const Archive = ({ archives, archiveQuotes }) => {
    return (
        <Box component="div">{archiveQuotes === true ? archives : null}</Box>
    )
}

export default Archive;