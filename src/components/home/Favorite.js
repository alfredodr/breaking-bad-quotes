import { Box } from "@mui/material";
import { useContext } from "react";
import { QuotesContext } from "../../contexts/quotes.context";
import { ManageQuotesContext } from "../../contexts/quotes.context";
import { List } from "@mui/material";
import { ListItemText } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemAvatar } from "@mui/material";
import { Avatar } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import styles from "../../../styles/Home.module.css";

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
      <List key={index}>
        <ListItemText className={styles.quote_text}>{item.quote}</ListItemText>
        <ListItem className={styles.author_container}>
          <ListItemAvatar>
            <Avatar
              alt={item.author}
              src={item.imgSrc}
              sx={{ width: 56, height: 56 }}
            />
          </ListItemAvatar>
          <ListItemText className={styles.author_text}>
            {item.author}
          </ListItemText>
          <IconButton
            aria-label="Remove favorite"
            onClick={() => {
              dispatch({ type: "FAVORITE", quoteId: item.id });
            }}
          >
            <Delete />
          </IconButton>
        </ListItem>
      </List>
    );
  });

  return <Box component="div">{favorites}</Box>;
};

export default Favorite;
