import { Box } from "@mui/system";

const Favorite = ({ favoriteQuotes, favorites }) => {

  return (
    <Box component="div">{favoriteQuotes === true ? favorites : null}</Box>
  )
}

export default Favorite;