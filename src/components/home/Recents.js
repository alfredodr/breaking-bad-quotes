import { Box } from "@mui/system";
import { useContext, memo } from "react";
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
import { Favorite } from "@mui/icons-material";
import ArchiveIcon from "@mui/icons-material/Archive";
import styles from "../../../styles/Home.module.css";

const Recents = () => {
  const quotes = useContext(QuotesContext);

  const dispatch = useContext(ManageQuotesContext);

  const allQuotes = quotes.map(function (item, index) {
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
            aria-label="Delete"
            onClick={() => {
              dispatch({ type: "REMOVE", quoteId: item.id });
            }}
          >
            <Delete />
          </IconButton>
          <IconButton
            aria-label="Favorite"
            onClick={() => {
              dispatch({ type: "FAVORITE", quoteId: item.id });
            }}
          >
            <Favorite />
          </IconButton>
          <IconButton
            aria-label="Archive"
            onClick={() => {
              dispatch({ type: "ARCHIVE", quoteId: item.id });
            }}
          >
            <ArchiveIcon />
          </IconButton>
        </ListItem>
      </List>
    );
  });

  return <Box component="div">{allQuotes}</Box>;
};

export default memo(Recents);

//{ recentQuotes, quotes }
