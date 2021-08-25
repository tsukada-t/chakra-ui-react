import { Button } from "@chakra-ui/react";
import { ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
  onClick?: () => void;
};

export const PrimaryBtn: VFC<Props> = (props) => {
  const { children, onClick } = props;

  return (
    <Button
      minW="150px"
      colorScheme="blue"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
