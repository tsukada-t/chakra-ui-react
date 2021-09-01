import {
  Box,
  Flex,
  Heading,
  List,
  ListItem,
  Link,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import { VFC } from 'react';

type Lists = {
  name: string;
  path: string;
};
type FooterLists = {
  title: string;
  lists: Lists[];
};

export const Footer: VFC = () => {
  const footerLists: FooterLists[] = [
    {
      title: 'news',
      lists: [
        {
          name: 'news1',
          path: '/',
        },
        {
          name: 'news2',
          path: '/',
        },
        {
          name: 'news3',
          path: '/',
        },
      ],
    },
    {
      title: 'product',
      lists: [
        {
          name: 'product1',
          path: '/',
        },
        {
          name: 'product2',
          path: '/',
        },
        {
          name: 'product3',
          path: '/',
        },
      ],
    },
    {
      title: 'other',
      lists: [
        {
          name: 'other1',
          path: '/',
        },
        {
          name: 'other2',
          path: '/',
        },
        {
          name: 'other3',
          path: '/',
        },
      ],
    },
  ];

  return (
    <>
      {/* モバイル画面 */}
      <Box
        w="100vw"
        minH="150px"
        bg="white"
        color="black"
        px="6"
        py="3"
        display={{ base: 'block', md: 'none' }}
      >
        <Accordion allowMultiple allowToggle>
          {footerLists.map((lists, index) => (
            <List flex="1" mb="4" key={index}>
              <AccordionItem>
                <Heading>
                  <AccordionButton>
                    <Box
                      flex="1"
                      textAlign="left"
                      as="h5"
                      fontSize="20px"
                      fontWeight="bold"
                    >
                      {lists.title}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel>
                  {lists.lists.map((list, index) => (
                    <ListItem key={index}>
                      <Link
                        as={ReactLink}
                        to={list.path}
                        w="100%"
                        display="block"
                        p="3px 5px"
                      >
                        {list.name}
                      </Link>
                    </ListItem>
                  ))}
                </AccordionPanel>
              </AccordionItem>
            </List>
          ))}
        </Accordion>
        <Box mb="3" textAlign="center">
          <Heading as="h2">LOGO</Heading>
          <Text display="block" as="small">
            example company
          </Text>
        </Box>
      </Box>

      {/* PC画面 */}
      <Flex
        w="100vw"
        minH="200px"
        bg="white"
        color="black"
        pr="10"
        py="10"
        display={{ base: 'none', md: 'flex' }}
      >
        <Box my="auto" textAlign="center" minW="200px">
          <Heading as="h2">LOGO</Heading>
          <Text display="block" as="small">
            example company
          </Text>
        </Box>

        {footerLists.map((lists, index) => (
          <List flex="1" ml="3" key={index}>
            <Heading
              as="h5"
              fontSize="24px"
              fontWeight="bold"
              borderBottom="1px"
              mb="3"
            >
              {lists.title}
            </Heading>
            {lists.lists.map((list, index) => (
              <ListItem key={index}>
                <Link
                  as={ReactLink}
                  to={list.path}
                  w="100%"
                  display="block"
                  mb="5px"
                  p="3px 5px"
                  opacity=".3s"
                  _hover={{
                    bg: 'black',
                    color: 'white',
                    textDecoration: 'none',
                  }}
                >
                  {list.name}
                </Link>
              </ListItem>
            ))}
          </List>
        ))}
      </Flex>
    </>
  );
};
