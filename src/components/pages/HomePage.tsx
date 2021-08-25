import { Box, Image, Text } from "@chakra-ui/react";

import firstView from "../../images/firstView.jpg";
import { CardList } from "../organisms/CardList";
import { MainPage } from "../templates/MainPage";

export const HomePage = () => {
  return (
    <>
      <MainPage>
        <Box>
          <Image src={firstView} objectFit="cover" w="100%" h="100vh" mb={{base: "100px", md: "150px"}} />
          <Text textAlign="center" fontWeight="bold" fontSize={{base: "24px", md: "35px"}} mb={{base: 7, md: 10}}>Title</Text>
          <CardList />
        </Box>
      </MainPage>
    </>
  );
};
