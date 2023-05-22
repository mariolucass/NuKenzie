import React from "react";
import { IChildren } from "../../types/childrens";
import { IFilteredContext, ITransactions } from "../../types/contexts";

const FilteredContext = React.createContext({} as IFilteredContext);

export const FilteredProvider = ({ children }: IChildren) => {
  const [listFiltered, setListFiltered] = React.useState<ITransactions[]>([]);
  const [text, setText] = React.useState("nenhum lançamento");

  return (
    <FilteredContext.Provider
      value={{ text, setText, listFiltered, setListFiltered }}
    >
      {children}
    </FilteredContext.Provider>
  );
};

export const UseFilteredContext = () => React.useContext(FilteredContext);
