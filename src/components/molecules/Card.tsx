import { Box, Image, Text } from "@chakra-ui/react";
import { VFC } from "react";

type Props = {
  src: string,
  name: string
};

export const Card: VFC<Props> = (props) => {
  const {src, name} = props;

  return (
    <Box w={{base: "200px", md: "350px"}} bg="white" mb={{base: "30px", md: "50px"}} mx={{base: 0, xl: "40px"}} boxShadow="lg">
      <Image w="100%"src={src} />
      <Text fontWeight="bold" textAlign="center">{name}</Text>
    </Box>
  );
};