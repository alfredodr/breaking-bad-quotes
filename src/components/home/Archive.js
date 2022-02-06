import { Box } from "@mui/system";
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
                dispatch({ type: "ARCHIVE", quoteId: item.id });
              }}
            >
              <Delete />
            </IconButton>
          </ListItemSecondaryAction>
        </List>
      </Box>
    );
  });
  return <Box component="div">{archives}</Box>;
};

export default Archive;
