import { Box } from "@mui/system";

const Recent = ({ recentQuotes, quotes }) => {
  return (
    <Box component="div">{recentQuotes === true ? quotes : null}</Box>
  )
};

export default Recent;