import { ReactChild, VFC } from "react";
import { Footer } from "../organisms/Footer";

import { Header } from "../organisms/Header";

type Props = {
  children: ReactChild,
};

export const MainPage: VFC<Props> = ({children}) => {
  return (
    <>
        <Header />
        {children}
        <Footer />
    </>
  );
};
