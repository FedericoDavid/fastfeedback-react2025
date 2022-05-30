import { Button, Code, Heading, Text, Icon } from '@chakra-ui/react';
import Head from 'next/head';
import { useAuth } from '@/lib/auth';
import { defaultLogo } from '@/styles/icons';

const Home = () => {
  const auth = useAuth();

  return (
    <div className="container">
      <Head>
        <title>Fast Feedback</title>
      </Head>
      <main>
        <Heading>Fast Feedback</Heading>
        <Icon as={defaultLogo} color="black" w={12} h={12} />
        <Text>
          Current User: <Code>{auth?.user ? auth.user.email : 'None'}</Code>
        </Text>
        {auth.user ? (
          <Button onClick={() => auth.signOut()}>Sign Out</Button>
        ) : (
          <Button onClick={() => auth.signinWithGitHub()}>Sign in</Button>
        )}
      </main>
    </div>
  );
};
//7.51
export default Home;
