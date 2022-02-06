import { Box } from "@mui/system";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import ShareIcon from "@mui/icons-material/Share";
import { useContext } from "react";
import { QuotesContext } from "../../contexts/quotes.context";
import { ManageQuotesContext } from "../../contexts/quotes.context";

const ShowSpeedDial = () => {
  const quotes = useContext(QuotesContext);

  const dispatch = useContext(ManageQuotesContext);

  let lastQuote = [];

  const getLastQuote = () => {
    if (quotes.length !== 0) {
      let listIndexes = Object.keys(quotes);
      let lastIndex = listIndexes.length - 1;
      lastQuote.push(quotes[lastIndex]);
      return lastQuote;
    }
  };
  getLastQuote();

  const addToFavorites = () => {
    let currentQuoteId = lastQuote[0].id;
    dispatch({ type: "FAVORITE", quoteId: currentQuoteId });
  };

  const addToArchives = () => {
    let currentQuoteId = lastQuote[0].id;
    dispatch({ type: "ARCHIVE", quoteId: currentQuoteId });
  };

  const actions = [
    { icon: <FavoriteIcon />, name: "Favorites" },
    { icon: <ArchiveIcon />, name: "Archive" },
    { icon: <ShareIcon />, name: "Share" },
  ];

  const showSpeedDial = () => {
    const handleClick = (operation) => {
      if (operation === "Favorites") {
        addToFavorites();
      } else if (operation === "Archive") {
        addToArchives();
      } else if (operation === "Share") {
      }
    };
    return (
      <SpeedDial
        ariaLabel="Quotes Menu"
        sx={{ position: "absolute", bottom: 0, right: 0 }}
        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
        onClick={handleClick}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => {
              handleClick(action.name);
            }}
          />
        ))}
      </SpeedDial>
    );
  };

  return (
    <Box component="div">{quotes.length !== 0 ? showSpeedDial() : null}</Box>
  );
};

export default ShowSpeedDial;

//{ quoteInfo, addToFavorites, addToArchives }
