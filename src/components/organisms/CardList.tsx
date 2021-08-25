import { VFC } from "react";
import { Flex } from "@chakra-ui/react";

import { Card } from "../molecules/Card";

export const CardList: VFC = () => {
  return (
    <Flex mb={{base: "60px", md: "100px"}} flexWrap="wrap" alignItems={{base: "center", md: "none"}} justifyContent="space-around" >
      <Card src="https://source.unsplash.com/random" name="name" />
      <Card src="https://source.unsplash.com/random" name="name" />
      <Card src="https://source.unsplash.com/random" name="name" />
      <Card src="https://source.unsplash.com/random" name="name" />
      <Card src="https://source.unsplash.com/random" name="name" />
      <Card src="https://source.unsplash.com/random" name="name" />
    </Flex>
  );
};
