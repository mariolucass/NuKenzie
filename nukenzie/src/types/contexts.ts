export interface IHomeContext {
  isStart: boolean;
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
  listTransactions: ITransactions[];
  setListTransactions: React.Dispatch<React.SetStateAction<ITransactions[]>>;
}

export interface ITransactions {
  description: string;
  type: string;
  value: number;
}

export interface IFilteredContext {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  listFiltered: ITransactions[];
  setListFiltered: React.Dispatch<React.SetStateAction<ITransactions[]>>;
}
