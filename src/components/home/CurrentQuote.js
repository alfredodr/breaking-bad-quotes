import { Box } from "@mui/material";
import { List } from "@mui/material";
import { ListItemText } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemAvatar } from "@mui/material";
import { Avatar } from "@mui/material";
import { QuotesContext } from "../../contexts/quotes.context";
import { useContext } from "react";

export default function CurrentQuote() {
  const quotes = useContext(QuotesContext);

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

  let currentQuote = lastQuote.map(function (item) {
    return (
      <List key={item.id}>
        <p className="quote">{item.quote}</p>
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
      </List>
    );
  });

  return (
    <Box component="div" style={{ marginTop: "1rem" }}>
      {lastQuote !== undefined ? currentQuote : null}
    </Box>
  );
}
