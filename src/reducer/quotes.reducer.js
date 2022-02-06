import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

export const quotesReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: uuidv4(),
          author: action.author,
          quote: action.quote,
          quoteId: action.quoteId,
          series: action.series,
          isFavorite: false,
          isArchive: false,
          imgSrc: action.imageSrc,
        },
      ];
    case "FAVORITE":
      return state.map((quote) =>
        quote.id === action.quoteId
          ? { ...quote, isFavorite: !quote.isFavorite }
          : quote
      );
    case "ARCHIVE":
      return state.map((quote) =>
        quote.id === action.quoteId
          ? { ...quote, isArchive: !quote.isArchive }
          : quote
      );
    case "REMOVE":
      return state.filter((quote) => quote.id !== action.quoteId);
    case "CLEAR":
      return (state = []);
    default:
      return state;
  }
};

//let audio=new Audio("https://ringtonesdump.com/sounds/mp3/breaking-bad-theme-ringtone.mp3").play();
//let audio=new Audio("https://www.101soundboards.com/sounds/204258-say-my-name").play();
