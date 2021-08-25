import {
  Box,
  Flex,
  Heading,
  Link,
  Spacer,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useHistory, Link as ReactLink } from "react-router-dom";

export const Header = () => {
  const history = useHistory();
  const handleLink = (path: string) => history.push(path);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const headerNavs = [
    {
      name: "contact",
      path: "/contact",
    },
    {
      name: "shop",
      path: "/shop",
    },
    {
      name: "company",
      path: "/company",
    },
  ];

  return (
    <Flex
      position="fixed"
      w="100vw"
      p={{ base: "6", md: "10" }}
      bg="white"
      zIndex="100"
      boxShadow="lg"
    >
      <Box>
        <Heading
          as="h1"
          cursor="pointer"
          onClick={() => {
            handleLink("/");
          }}
        >
          LOGO
        </Heading>
      </Box>
      <Spacer />

      {/* モバイル画面 */}
      <IconButton
        icon={<HamburgerIcon w={8} h={8} />}
        aria-label="Open Menu"
        variant="none"
        autoFocus={false}
        _focus={{ outline: "none" }}
        display={{ base: "block", md: "none" }}
        onClick={onOpen}
      />
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bgColor="gray.100" maxW="85%">
          <DrawerHeader>
            <Text>Menu</Text>
            <DrawerCloseButton
              variant="none"
              fontSize="20px"
              autoFocus={false}
              _hover={{ bgColor: "none" }}
              _focus={{ outline: "none" }}
            />
          </DrawerHeader>
          <DrawerBody m="0" p="0">
            {headerNavs.map((nav, index) => (
              <Button
                w="100%"
                borderY="1px"
                borderColor="white"
                borderRadius="none"
                variant="none"
                _hover={{ textDecoration: "none" }}
                onClick={() => handleLink(nav.path)}
                key={index}
              >
                {nav.name}
              </Button>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* PC画面 */}
      <Flex
        display={{ base: "none", md: "flex" }}
        alignItems="center"
        fontSize="20px"
      >
        {headerNavs.map((nav, index) =>
          index + 1 === headerNavs.length ? (
            <Link
              as={ReactLink}
              to={nav.path}
              key={index}
              px={4}
              _hover={{ textDecoration: "none", bg: "black", color: "white" }}
            >
              {nav.name}
            </Link>
          ) : (
            <Link
              as={ReactLink}
              to={nav.path}
              mr="16px"
              px={4}
              key={index}
              _hover={{ textDecoration: "none", bg: "black", color: "white" }}
            >
              {nav.name}
            </Link>
          )
        )}
      </Flex>
    </Flex>
  );
};
