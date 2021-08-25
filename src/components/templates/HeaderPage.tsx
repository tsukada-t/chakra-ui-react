import { ReactChild, VFC } from "react";

import { Header } from "../organisms/Header";

type Props = {
  children: ReactChild,
};

export const HeaderPage: VFC<Props> = ({children}) => {
  return (
    <>
        <Header />
        {children}
    </>
  );
};
