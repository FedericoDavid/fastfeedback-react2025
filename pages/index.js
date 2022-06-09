import { Button, Icon, Flex } from '@chakra-ui/react';
import Head from 'next/head';

import { useAuth } from '@/lib/auth';
import { defaultLogo } from '@/styles/icons';
import EmptyState from '@/components/EmptyState';

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
      <Icon as={defaultLogo} color="black" w={16} h={16} />
      {auth?.user ? (
        <EmptyState />
      ) : (
        // <Button onClick={() => auth.signOut()}>Sign Out</Button>
        <Button mt={4} size="sm" onClick={() => auth.signinWithGitHub()}>
          Sign in
        </Button>
      )}
    </Flex>
  );
};

export default Home;
