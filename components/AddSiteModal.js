import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { mutate } from 'swr';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  Button,
  FormLabel,
  Input,
  useToast,
  useDisclosure,
} from '@chakra-ui/react';

import { createSite } from '@/lib/db';
import { useAuth } from '@/lib/auth';

const AddSiteModal = ({ children }) => {
  const initialRef = useRef();

  const { isOpen, onOpen, onClose, reset } = useDisclosure();
  const { handleSubmit, register } = useForm();

  const toast = useToast();
  const auth = useAuth();

  const onCancel = () => {
    onClose();
    reset();
  };

  const onCreateSite = ({ name, url }) => {
    const newSite = {
      authorId: auth.user.uid,
      createdAt: new Date().toISOString(),
      name,
      url,
    };

    createSite(newSite);

    toast({
      title: 'Success!',
      description: "We've added your site.",
      status: 'success',
      duration: 4000,
      isClosable: true,
    });

    mutate(
      ['/api/sites', auth.user.token],
      async (data) => {
        return { sites: [...data.sites, newSite] };
      },
      false,
    );

    onClose();
  };

  return (
    <>
      <Button
        onClick={onOpen}
        backgroundColor="gray.900"
        color="white"
        fontWeight="medium"
        _hover={{ bg: 'gray.700' }}
        _active={{ bg: 'gray.800', transform: 'scale(0.95)' }}
      >
        {children}
      </Button>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onCreateSite)}>
          <ModalHeader fontWeight="bold">Add Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                autoFocus
                placeholder="My site"
                {...register('name', { required: 'Required' })}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input
                placeholder="https://website.com"
                {...register('url', { required: 'Required' })}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onCancel} mr={3} fontWeight="medium">
              Cancel
            </Button>
            <Button colorScheme="purple" fontWeight="medium" type="submit">
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddSiteModal;
