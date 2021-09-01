import { Box, Image, Link, Stack, Text } from '@chakra-ui/react';
import { VFC } from 'react';

type Props = {
  src: string;
  name: string;
  description?: string;
  link?: string;
};

export const Card: VFC<Props> = (props) => {
  const { src, name, description = '説明', link } = props;

  return (
    <Box
      w={{ base: '150px', sm: '200px', md: '350px' }}
      mb={{ base: '70px', md: '100px' }}
      mx={{ base: '5px', xl: '40px' }}
      bg="white"
      boxShadow="lg"
      transition="0.3s"
      _hover={{boxShadow: "2xl"}}
    >
      <Link href={link} _hover={{textDecoration: "none"}}>
        <Image
          w="100%"
          objectFit="cover"
          h={{ base: '150px', md: '200px' }}
          borderTopRadius="base"
          src={src}
        />
        <Stack py={{ base: 3 }} px={2} spacing={{ base: 4 }}>
          <Text fontWeight="bold" fontSize={{ base: '16px', md: '20px' }}>
            {name}
          </Text>
          <Text fontSize={{ base: '12px', md: '14px' }}>{description}</Text>
        </Stack>
      </Link>
    </Box>
  );
};
