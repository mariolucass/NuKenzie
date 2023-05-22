import { UseHomeContext } from "./contexts";
import * as Page from "./pages";

export const App = () => {
  const { isStart } = UseHomeContext();
  return isStart ? <Page.LandingPage /> : <Page.MainPage />;
};
