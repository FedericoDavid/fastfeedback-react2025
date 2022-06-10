import { Button, Icon, Flex } from '@chakra-ui/react';
import Head from 'next/head';

import { defaultLogo } from '@/styles/icons';
import { useAuth } from '@/lib/auth';

const Home = () => {
  const auth = useAuth();

  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh"
    >
      <Head>
        <title>Fast Feedback</title>
      </Head>
      <Icon as={defaultLogo} color="black" w={18} h={18} />
      {auth.user ? (
        <Button onClick={() => auth.signOut()}>Sign Out</Button>
      ) : (
        <Button mt={4} size="sm" onClick={() => auth.signinWithGitHub()}>
          Sign in
        </Button>
      )}
    </Flex>
  );
};

export default Home;
