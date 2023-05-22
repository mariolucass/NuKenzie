import React from "react";
import { IChildren } from "../../types/childrens";
import { IHomeContext, ITransactions } from "../../types/contexts";

const HomeContext = React.createContext({} as IHomeContext);

export const HomeProvider = ({ children }: IChildren) => {
  const [isStart, setStart] = React.useState(true);
  const [listTransactions, setListTransactions] = React.useState<
    ITransactions[]
  >([] as ITransactions[]);

  React.useEffect(() => {
    setListTransactions([]);
  }, []);

  return (
    <HomeContext.Provider
      value={{ isStart, setStart, listTransactions, setListTransactions }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export const UseHomeContext = () => React.useContext(HomeContext);
