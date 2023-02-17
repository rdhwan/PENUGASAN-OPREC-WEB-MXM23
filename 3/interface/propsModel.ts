import { IBiography } from "./biographyModel";
import { IQuotes } from "./quotesModel";

export interface InitialQuotesProps {
    quotes: IQuotes,
    bio: IBiography
}