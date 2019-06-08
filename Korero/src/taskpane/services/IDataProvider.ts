import { IListItem } from "./IListItem";

interface IDataProvider {
    getGreetingsAndSignoffs(): Promise<IListItem[]>;
}

export default IDataProvider;