import { Button } from "@mui/material";
import { useContext } from "react";
import { ManageQuotesContext } from "../../contexts/quotes.context";
import axios from "axios";
import CurrentQuote from "./CurrentQuote";
import { memo } from "react";

const GetQuote = () => {
  const dispatch = useContext(ManageQuotesContext);

  let image = "";

  const handleGetQuote = async () => {
    try {
      const { data } = await axios.get(
        "https://www.breakingbadapi.com/api/quote/random"
      );
      let newQuote = data[0];

      let author = newQuote.author;

      const makeImage = (quoteAuthor) => {
        if (author === "Walter White") {
          image =
            "https://static.wikia.nocookie.net/breakingbad/images/e/e7/BB-S5B-Walt-590.jpg";
        } else if (author === "Skyler White") {
          image =
            "https://static.wikia.nocookie.net/breakingbad/images/3/33/Skyler_S5b.jpg";
        } else if (author === "Jesse Pinkman") {
          image =
            "https://static.wikia.nocookie.net/breakingbad/images/0/0c/JesseS5B.jpg";
        } else if (author === "Hank Schrader") {
          image =
            "https://static.wikia.nocookie.net/breakingbad/images/7/7b/Hank_S5b.jpg";
        } else if (author === "Marie Schrader") {
          image =
            "https://static.wikia.nocookie.net/breakingbad/images/b/b7/Marie_S5b.jpg";
        } else if (author === "Walter White Jr.") {
          image =
            "https://static.wikia.nocookie.net/breakingbad/images/4/41/WaltJr_S5b.jpg";
        } else if (author === "Gustavo Fring") {
          image =
            "https://static.wikia.nocookie.net/breakingbad/images/b/be/Season_4_-_Gus.jpg";
        } else if (author === "Gus Fring") {
          image =
            "https://static.wikia.nocookie.net/breakingbad/images/b/be/Season_4_-_Gus.jpg";
        } else if (author === "Jimmy McGill") {
          image =
            "https://static.wikia.nocookie.net/breakingbad/images/a/a4/Saul_S5b.jpg";
        } else if (author === "Mike Ehrmantraut") {
          image =
            "https://static.wikia.nocookie.net/breakingbad/images/8/8b/MikeS5.jpg";
        } else if (author === "Lydia Rodarte-Quayle") {
          image =
            "https://static.wikia.nocookie.net/breakingbad/images/7/78/Lydia_S5b.jpg";
        } else if (author === "Todd Alquist") {
          image =
            "https://static.wikia.nocookie.net/breakingbad/images/f/f5/Todd_S5b.jpg";
        } else if (author === "Saul Goodman") {
          image =
            "https://static.wikia.nocookie.net/breakingbad/images/a/a4/Saul_S5b.jpg";
        } else if (author === "Chuck McGill") {
          image =
            "https://screenfiction.org/content/image/0/1/58/9fa04209-regular.webp";
        } else if (author === "Kim Wexler") {
          image =
            "https://static.wikia.nocookie.net/breakingbad/images/1/16/BCS_S3_KimWexler.jpg";
        } else if (author === "Hector Salamanca") {
          image =
            "https://static.wikia.nocookie.net/breakingbad/images/3/34/TioSalamanca.jpg";
        }
        return image;
      };

      let imageSrc = makeImage(author);

      dispatch({
        type: "ADD",
        author: newQuote.author,
        quote: newQuote.quote,
        quoteId: newQuote.quote_id,
        series: newQuote.series,
        imageSrc: imageSrc,
      });
    } catch (error) {
      return `No quotes available due to ${error}`;
    }
  };

  //console.log(quotes);

  return (
    <>
      <CurrentQuote />
      <Button
        className="get-quote-button"
        size="large"
        variant="contained"
        color="success"
        onClick={handleGetQuote}
      >
        Get Quote
      </Button>
    </>
  );
};

export default memo(GetQuote);
