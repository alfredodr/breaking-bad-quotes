import { createContext } from "react";
import { quotesReducer } from "../reducer/quotes.reducer";
import { useReducer } from "react";

export const QuotesContext = createContext();

export const ManageQuotesContext = createContext();

export const QuotesProvider = (props) => {
  const defaultQuotes = [];

  const [quotes, dispatch] = useReducer(quotesReducer, defaultQuotes);

  return (
    <QuotesContext.Provider value={quotes}>
      <ManageQuotesContext.Provider value={dispatch}>
        {props.children}
      </ManageQuotesContext.Provider>
    </QuotesContext.Provider>
  );
};
