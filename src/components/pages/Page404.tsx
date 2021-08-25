import { useHistory } from "react-router-dom";
import { Center, Text } from "@chakra-ui/react";
import { HeaderPage } from "../templates/HeaderPage";
import { PrimaryBtn } from "../atoms/PrimaryBtn";

export const Page404 = () => {
  const history = useHistory();

  const onClickBack = () => {
    history.push("/");
  };

  return (
    <>
      <HeaderPage>
        <Center flexDirection="column" h="100vh">
          <Text mb={5}>ページは存在しません。</Text>
          <PrimaryBtn onClick={onClickBack}>Topに戻る</PrimaryBtn>
        </Center>
      </HeaderPage>
    </>
  );
};
