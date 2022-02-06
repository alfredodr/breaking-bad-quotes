import { Box } from "@mui/system";
import { Paper } from "@mui/material";
import { BottomNavigation } from "@mui/material";
import { BottomNavigationAction } from "@mui/material";
import { useState, useContext } from "react";
import { Badge } from "@mui/material";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import { QuotesContext } from "../../contexts/quotes.context";
import { ManageQuotesContext } from "../../contexts/quotes.context";
import Recent from "./Recent";
import Favorite from "./Favorite";
import Archive from "./Archive";

const Navigation = () => {
  const quotes = useContext(QuotesContext);

  const dispatch = useContext(ManageQuotesContext);

  const [value, setValue] = useState(0);

  const recentCount = quotes.length;

  const favoriteCount = quotes.filter((item) => item.isFavorite === true);

  const archiveCount = quotes.filter((item) => item.isArchive === true);

  const userAction = [
    {
      icon: (
        <Badge badgeContent={recentCount} color="secondary">
          <RestoreIcon />
        </Badge>
      ),
      name: "Recent",
      label: "Recents",
    },
    {
      icon: (
        <Badge badgeContent={favoriteCount.length} color="secondary">
          <FavoriteIcon />
        </Badge>
      ),
      name: "Favorite",
      label: "Favorite",
    },
    {
      icon: (
        <Badge badgeContent={archiveCount.length} color="secondary">
          <ArchiveIcon />
        </Badge>
      ),
      name: "Archive",
      label: "Archive",
    },
    { icon: <ClearAllIcon />, name: "Clear", label: "Clear All" },
  ];

  const showBottomNavigation = () => {
    return (
      <Box sx={{ pb: 7 }} mt={5}>
        <Paper>
          <BottomNavigation
            className="bottom-navigation-container"
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            {userAction.map((action) => (
              <BottomNavigationAction
                key={action.name}
                icon={action.icon}
                label={action.label}
                onClick={() => {
                  handleClickBotttomNav(action.name);
                }}
              />
            ))}
          </BottomNavigation>
        </Paper>
      </Box>
    );
  };

  const [recentQuotes, setRecentQuotes] = useState(false);
  const [favoriteQuotes, setFavoriteQuotes] = useState(false);
  const [archiveQuotes, setArchiveQuotes] = useState(false);

  const handleClickBotttomNav = (operationNav) => {
    if (operationNav === "Recent") {
      showRecentsQuotes();
    } else if (operationNav === "Favorite") {
      showFavoritesQuotes();
    } else if (operationNav === "Archive") {
      showArchivesQuotes();
    } else if (operationNav === "Clear") {
      clearData();
    }
  };

  const showRecentsQuotes = () => {
    setRecentQuotes(!recentQuotes);
    setFavoriteQuotes(false);
    setArchiveQuotes(false);
  };

  const showFavoritesQuotes = () => {
    setFavoriteQuotes(!favoriteQuotes);
    setRecentQuotes(false);
    setArchiveQuotes(false);
  };

  const showArchivesQuotes = () => {
    setArchiveQuotes(!archiveQuotes);
    setRecentQuotes(false);
    setFavoriteQuotes(false);
  };

  const clearData = () => {
    dispatch({ type: "CLEAR" });
  };

  return (
    <>
      <Box component="div">
        {quotes.length !== 0 ? showBottomNavigation() : null}
        {recentQuotes === true ? <Recent /> : null}
        {favoriteQuotes === true ? <Favorite /> : null}
        {archiveQuotes === true ? <Archive /> : null}
      </Box>
    </>
  );
};
export default Navigation;
