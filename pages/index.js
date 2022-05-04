import { Button, Code, Heading, Text } from '@chakra-ui/react';
import Head from 'next/head';
import { useAuth } from '@/lib/auth';

const Home = () => {
  const auth = useAuth();

  return (
    <div className="container">
      <Head>
        <title>Fast Feedback</title>
      </Head>
      <main>
        <Heading>Fast Feedback</Heading>
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

export default Home;
