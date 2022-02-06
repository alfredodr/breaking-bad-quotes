import { Box } from "@mui/material";
import { useContext } from "react";
import { QuotesContext } from "../../contexts/quotes.context";
import { ManageQuotesContext } from "../../contexts/quotes.context";
import { List } from "@mui/material";
import { ListItemText } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemAvatar } from "@mui/material";
import { Avatar } from "@mui/material";
import { ListItemSecondaryAction } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const Favorite = () => {
  const quotes = useContext(QuotesContext);

  const dispatch = useContext(ManageQuotesContext);

  let favorites = [];

  let selectFavoriteQuotes = quotes.map((item) =>
    item.isFavorite === true ? { ...item } : null
  );

  for (let i = 0; i < selectFavoriteQuotes.length; i++) {
    if (selectFavoriteQuotes[i] === null) {
      delete selectFavoriteQuotes[i];
    }
  }

  favorites = selectFavoriteQuotes.map(function (item, index) {
    return (
      <Box key={index}>
        <List key={index}>
          <ListItemText className="quote">{item.quote}</ListItemText>
          <ListItem className="author-container">
            <ListItemAvatar>
              <Avatar
                alt={item.author}
                src={item.imgSrc}
                sx={{ width: 56, height: 56 }}
              />
            </ListItemAvatar>
            <ListItemText className="author-text">{item.author}</ListItemText>
          </ListItem>
          <ListItemSecondaryAction>
            <IconButton
              aria-label="Delete"
              onClick={() => {
                dispatch({ type: "FAVORITE", quoteId: item.id });
              }}
            >
              <Delete />
            </IconButton>
          </ListItemSecondaryAction>
        </List>
      </Box>
    );
  });

  return <Box component="div">{favorites}</Box>;
};

export default Favorite;
