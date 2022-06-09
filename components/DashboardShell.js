import React from 'react';
import {
  Link,
  Icon,
  Flex,
  Stack,
  Avatar,
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbItem,
  Heading,
} from '@chakra-ui/react';

import { defaultLogo } from '@/styles/icons';

const DashboardShell = ({ children }) => (
  <Flex flexDirection="column">
    <Flex
      backgroundColor="white"
      alignItems="center"
      justifyContent="space-between"
      p={4}
    >
      <Stack isInline spacing={4}>
        <Icon as={defaultLogo} color="black" />
        <Link>Feedback</Link>
        <Link>Sites</Link>
      </Stack>
      <Flex alignItems="center">
        <Link mr={4}>Account</Link>
        <Avatar size="sm" />
      </Flex>
    </Flex>
    <Flex backgroundColor="gray.100" p={8} height="100%">
      <Flex
        maxWidth="800px"
        justifyContent="center"
        alignItems="center"
        ml="auto"
        mr="auto"
      >
        <Breadcrumb>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink color="black">Sites</BreadcrumbLink>
          </BreadcrumbItem>
          <Heading color="black">Sites</Heading>
          {children}
        </Breadcrumb>
      </Flex>
    </Flex>
  </Flex>
);

export default DashboardShell;
