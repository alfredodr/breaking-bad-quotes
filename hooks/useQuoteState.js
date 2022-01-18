import { useState } from "react";
import axios from "axios";
import { Box } from "@mui/system";
import { List } from "@mui/material";
import { ListItemText } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemAvatar } from "@mui/material";
import { Avatar } from "@mui/material";
import { ListItemSecondaryAction } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";

function useQuoteState() {
    const [quoteInfo, setRandomQuote] = useState([]);
    const [recentQuotes, setRecentQuotes] = useState(false);
    const [favoriteQuotes, setFavoriteQuotes] = useState(false);
    const [archiveQuotes, setArchiveQuotes] = useState(false);
    let quotes = [];
    let lastQuote = [];
    let imgSrc = "";
    let favorites = [];
    let archives = [];


    function makeImage(indexValue) {
        if (quoteInfo[indexValue].author === "Walter White") {
            imgSrc = "https://static.wikia.nocookie.net/breakingbad/images/e/e7/BB-S5B-Walt-590.jpg";
        } else if (quoteInfo[indexValue].author === "Skyler White") {
            imgSrc = "https://static.wikia.nocookie.net/breakingbad/images/3/33/Skyler_S5b.jpg";
        } else if (quoteInfo[indexValue].author === "Jesse Pinkman") {
            imgSrc = "https://static.wikia.nocookie.net/breakingbad/images/0/0c/JesseS5B.jpg";
        } else if (quoteInfo[indexValue].author === "Hank Schrader") {
            imgSrc = "https://static.wikia.nocookie.net/breakingbad/images/7/7b/Hank_S5b.jpg";
        } else if (quoteInfo[indexValue].author === "Marie Schrader") {
            imgSrc = "https://static.wikia.nocookie.net/breakingbad/images/b/b7/Marie_S5b.jpg";
        } else if (quoteInfo[indexValue].author === "Walter White Jr.") {
            imgSrc = "https://static.wikia.nocookie.net/breakingbad/images/4/41/WaltJr_S5b.jpg";
        } else if (quoteInfo[indexValue].author === "Gustavo Fring") {
            imgSrc = "https://static.wikia.nocookie.net/breakingbad/images/b/be/Season_4_-_Gus.jpg";
        } else if (quoteInfo[indexValue].author === "Gus Fring") {
            imgSrc = "https://static.wikia.nocookie.net/breakingbad/images/b/be/Season_4_-_Gus.jpg";
        } else if (quoteInfo[indexValue].author === "Jimmy McGill") {
            imgSrc = "https://static.wikia.nocookie.net/breakingbad/images/a/a4/Saul_S5b.jpg";
        } else if (quoteInfo[indexValue].author === "Mike Ehrmantraut") {
            imgSrc = "https://static.wikia.nocookie.net/breakingbad/images/8/8b/MikeS5.jpg";
        } else if (quoteInfo[indexValue].author === "Lydia Rodarte-Quayle") {
            imgSrc = "https://static.wikia.nocookie.net/breakingbad/images/7/78/Lydia_S5b.jpg";
        } else if (quoteInfo[indexValue].author === "Todd Alquist") {
            imgSrc = "https://static.wikia.nocookie.net/breakingbad/images/f/f5/Todd_S5b.jpg";
        } else if (quoteInfo[indexValue].author === "Saul Goodman") {
            imgSrc = "https://static.wikia.nocookie.net/breakingbad/images/a/a4/Saul_S5b.jpg";
        } else if (quoteInfo[indexValue].author === "Chuck McGill") {
            imgSrc = "https://screenfiction.org/content/image/0/1/58/9fa04209-regular.webp";
        } else if (quoteInfo[indexValue].author === "Kim Wexler") {
            imgSrc = "https://static.wikia.nocookie.net/breakingbad/images/1/16/BCS_S3_KimWexler.jpg";
        } else if (quoteInfo[indexValue].author === "Hector Salamanca") {
            imgSrc = "https://static.wikia.nocookie.net/breakingbad/images/3/34/TioSalamanca.jpg";
        };
        return imgSrc;
    };

    quotes = quoteInfo.map(function (item, index) {
        makeImage(index);
        return (
            <List key={index}>
                <p className="quote">"{item.quote}."</p>
                <ListItem className="author-container">
                    <ListItemAvatar>
                        <Avatar
                            alt={item.author}
                            src={imgSrc}
                            sx={{ width: 56, height: 56 }}
                        />
                    </ListItemAvatar>
                    <ListItemText className="author-text">{item.author}.</ListItemText>
                </ListItem>
            </List>
        );
    });//making a copy of the quote data in the state to show it, index will be the index of every element in the array(0,1,2,3....). The key={index}
    //to let react differentiate every element of the array

    const getLastQuote = () => {
        if (quoteInfo.length !== 0) {
            let listIndexes = Object.keys(quoteInfo);
            let lastIndex = listIndexes.length - 1;
            lastQuote.push(quoteInfo[lastIndex]);
            return lastQuote;
        };
    };
    getLastQuote();

    let currentQuote = lastQuote.map(function (item) {
        makeImage(item.quoteIndex);
        return (
            <List key={item.quoteIndex}>
                <p className="quote">"{item.quote}."</p>
                <ListItem className="author-container">
                    <ListItemAvatar>
                        <Avatar
                            alt={item.author}
                            src={imgSrc}
                            sx={{ width: 56, height: 56 }}
                        />
                    </ListItemAvatar>
                    <ListItemText className="author-text">{item.author}.</ListItemText>
                </ListItem>
            </List>
        );
    });

    const removeFavorite = quoteIndex => {
        const updatedQuotes = quoteInfo.map(item =>
            item.quoteIndex === quoteIndex ? { ...item, isFavorite: !item.isFavorite } : item
        );
        setRandomQuote(updatedQuotes);
    };

    const showFavoriteQuotes = () => {
        let selectFavoriteQuotes = quoteInfo.map(item =>
            item.isFavorite === true ? { ...item } : null
        );

        for (let i = 0; i < selectFavoriteQuotes.length; i++) {
            if (selectFavoriteQuotes[i] === null) {
                delete selectFavoriteQuotes[i];
            }
        }

        favorites = selectFavoriteQuotes.map(function (item, index) {
            makeImage(index);
            return (
                <Box key={index}>
                    <List key={index}>
                        <ListItemText className="quote">"{item.quote}."</ListItemText>
                        <ListItem className="author-container">
                            <ListItemAvatar>
                                <Avatar
                                    alt={item.author}
                                    src={imgSrc}
                                    sx={{ width: 56, height: 56 }}
                                />
                            </ListItemAvatar>
                            <ListItemText className="author-text">{item.author}.</ListItemText>
                        </ListItem>
                        <ListItemSecondaryAction>
                            <IconButton aria-label="Delete" onClick={() => { removeFavorite(index) }}>
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </List>
                </Box>
            );
        });
    };
    showFavoriteQuotes();

    const removeArchive = quoteIndex => {
        const updatedQuotes = quoteInfo.map(item =>
            item.quoteIndex === quoteIndex ? { ...item, isArchive: !item.isArchive } : item
        );
        setRandomQuote(updatedQuotes);
    };

    const showArchives = () => {
        let selectArchiveQuotes = quoteInfo.map(item =>
            item.isArchive === true ? { ...item } : null
        );

        for (let i = 0; i < selectArchiveQuotes.length; i++) {
            if (selectArchiveQuotes[i] === null) {
                delete selectArchiveQuotes[i];
            }
        }
        archives = selectArchiveQuotes.map(function (item, index) {
            makeImage(index);
            return (
                <List key={index}>
                    <ListItemText className="quote">"{item.quote}."</ListItemText>
                    <ListItem className="author-container">
                        <ListItemAvatar>
                            <Avatar
                                alt={item.author}
                                src={imgSrc}
                                sx={{ width: 56, height: 56 }}
                            />
                        </ListItemAvatar>
                        <ListItemText className="author-text">{item.author}.</ListItemText>
                    </ListItem>
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Delete" onClick={() => { removeArchive(index) }}>
                            <Delete />
                        </IconButton>
                    </ListItemSecondaryAction>
                </List>
            );
        });
    };
    showArchives();

    return {
        quoteInfo,
        setRandomQuote,
        makeImage,
        quotes,
        imgSrc,
        lastQuote,
        currentQuote,
        recentQuotes,
        favorites,
        removeFavorite,
        showFavoriteQuotes,
        favoriteQuotes,
        archives,
        showArchives,
        archiveQuotes,
        getData: async () => {
            try {
                const { data } = await axios.get("https://www.breakingbadapi.com/api/quote/random");
                let newQuote = data[0];
                setRandomQuote((item) => [...item, { ...newQuote, isFavorite: false, isArchive: false, quoteIndex: item.length }]);//updating the state with the data     
            } catch (error) {
                return `No quotes available due to ${error}`;
            };
            //let audio=new Audio("https://ringtonesdump.com/sounds/mp3/breaking-bad-theme-ringtone.mp3").play();
            //let audio=new Audio("https://www.101soundboards.com/sounds/204258-say-my-name").play();
        },
        addToFavorites: () => {
            let currentQuoteId = lastQuote[0].quote_id;

            const updatedQuotes = quoteInfo.map(item =>
                item.quote_id === currentQuoteId ? { ...item, isFavorite: !item.isFavorite } : item
            );
            setRandomQuote(updatedQuotes);
        },
        addToArchives: () => {
            let currentQuoteId = lastQuote[0].quote_id;

            const updatedQuotes = quoteInfo.map(item =>
                item.quote_id === currentQuoteId ? { ...item, isArchive: !item.isArchive } : item
            );
            setRandomQuote(updatedQuotes);
        },
        showRecentsQuotes: () => {
            setRecentQuotes(!recentQuotes);
            setFavoriteQuotes(false);
            setArchiveQuotes(false);
        },
        showFavoritesQuotes: () => {
            setFavoriteQuotes(!favoriteQuotes);
            setRecentQuotes(false);
            setArchiveQuotes(false);
        },
        showArchivesQuotes: () => {
            setArchiveQuotes(!archiveQuotes);
            setRecentQuotes(false);
            setFavoriteQuotes(false);
        },
        clearData: () => { setRandomQuote([]); }
    }
};//contains all the methods
export default useQuoteState;
