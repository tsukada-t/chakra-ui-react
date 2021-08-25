import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { HeaderPage } from "../templates/HeaderPage";

export const ContactPage = () => {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputDetail, setInputDetail] = useState("");

  const onChangeName = (e: any) => {
    setInputName(e.target.value);
  };
  const onChangeEmail = (e: any) => {
    setInputEmail(e.target.value);
  };
  const onChangeDetail = (e: any) => {
    setInputDetail(e.target.value);
  };

  const disabled =
    inputName === "" || inputEmail === "" || inputDetail === "" ? true : false;
  const onClickSend = () => {};

  return (
    <>
      <HeaderPage>
        <Container
          centerContent
          maxW={{ base: "container.md", md: "container.lg" }}
          h="100vh"
          position="relative"
        >
          <Box
            bg="white"
            p={4}
            boxShadow="lg"
            minW={{ base: "300px", md: "lg", lg: "2xl" }}
            transform="translate(-50%, -50%)"
            position="absolute"
            top="50%"
            left="50%"
          >
            <Stack spacing={6}>
              <Heading>Contact</Heading>
              <Input
                type="text"
                placeholder="フルネーム"
                value={inputName}
                onChange={(e) => {
                  onChangeName(e);
                }}
              />
              <Input
                type="email"
                placeholder="メールアドレス"
                value={inputEmail}
                onChange={(e) => {
                  onChangeEmail(e);
                }}
              />
              <Textarea
                rows={7}
                placeholder="お問い合せ内容"
                value={inputDetail}
                onChange={(e) => {
                  onChangeDetail(e);
                }}
              />
              <Button disabled={disabled} onClick={onClickSend}>
                送信
              </Button>
            </Stack>
          </Box>
        </Container>
      </HeaderPage>
    </>
  );
};
