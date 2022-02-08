import { Box } from "@mui/system";
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

const Archive = () => {
  const quotes = useContext(QuotesContext);

  const dispatch = useContext(ManageQuotesContext);

  let archives = [];

  let selectArchiveQuotes = quotes.map((item) =>
    item.isArchive === true ? { ...item } : null
  );

  for (let i = 0; i < selectArchiveQuotes.length; i++) {
    if (selectArchiveQuotes[i] === null) {
      delete selectArchiveQuotes[i];
    }
  }

  archives = selectArchiveQuotes.map(function (item, index) {
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
            aria-label="Remove from archives"
            onClick={() => {
              dispatch({ type: "ARCHIVE", quoteId: item.id });
            }}
          >
            <Delete />
          </IconButton>
        </ListItem>
      </List>
    );
  });
  return <Box component="div">{archives}</Box>;
};

export default Archive;
