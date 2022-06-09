import React from 'react';
import { Heading, Text, Button, Box } from '@chakra-ui/react';

import DashboardShell from './DashboardShell';

const EmptyState = () => (
  <DashboardShell>
    <Box width="100%" backgroundColor="white" borderRadius="8px" p={8}>
      <Heading size="md">You havent added any sites</Heading>
      <Text>Welcome 🖐 Lets get started</Text>
      <Button>Add Your First Site</Button>
    </Box>
  </DashboardShell>
);

export default EmptyState;
