import styles from "../../styles/Home.module.css";
import { Paper } from "@mui/material";
import useQuoteState from "../../hooks/useQuoteState";
import GetQuote from "./GetQuote";
import ShowSpeedDial from "./ShowSpeedDial";
import Recent from "./Recent";
import Navigation from "./Navigation";
import Archive from "./Archive";
import Favorite from "./Favorite";

const QuoteApp = () => {
    const { quoteInfo, quotes, imgSrc, lastQuote, currentQuote, recentQuotes, favoriteQuotes, favorites, removeFavorite,
        archiveQuotes, getData, addToFavorites, addToArchives, showRecentsQuotes, showFavoritesQuotes,
        showArchivesQuotes, clearData, archives } = useQuoteState([]);

    return (
        <>
            <Paper className={styles.quote_info_container}>
                <GetQuote
                    getData={getData}
                    imgSrc={imgSrc}
                    lastQuote={lastQuote}
                    currentQuote={currentQuote} />
                <ShowSpeedDial
                    quoteInfo={quoteInfo}
                    addToFavorites={addToFavorites}
                    addToArchives={addToArchives} />
                <Navigation
                    quoteInfo={quoteInfo}
                    showRecentsQuotes={showRecentsQuotes}
                    showFavoritesQuotes={showFavoritesQuotes}
                    showArchivesQuotes={showArchivesQuotes}
                    clearData={clearData} />
                <Recent
                    quotes={quotes}
                    recentQuotes={recentQuotes} />
                <Favorite
                    favoriteQuotes={favoriteQuotes}
                    favorites={favorites}
                    removeFavorite={removeFavorite} />
                <Archive
                    archiveQuotes={archiveQuotes}
                    archives={archives} />
            </Paper>
        </>
    );
};

export default QuoteApp;