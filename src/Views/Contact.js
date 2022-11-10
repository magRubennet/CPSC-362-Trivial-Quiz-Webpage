import React from 'react'
import { Link } from "react-router-dom"
import { ButtonGroup, Spacer, Box, Text, Center, Flex, Button, useDisclosure,} from '@chakra-ui/react';
import { FormControl, FormLabel, Heading, IconButton, Input, InputGroup, InputLeftElement, Stack, Textarea, Tooltip, useClipboard, useColorModeValue, VStack,} from '@chakra-ui/react';
import { Container, Wrap, WrapItem, HStack, WrapIem,} from '@chakra-ui/react';
import { IconName, BsGithub, BsLinkedin, BsPerson, BsTwitter, BsDiscord,} from 'react-icons/bs';
import { MdEmail, MdOutlineEmail, MdPhone, MdLocationOn, MdFacebook,} from 'react-icons/md';



export default function ContactPage(){
   // const { hasCopied, onCopy } = useClipboard('example@example.com');

    //  return(

    //   <div>
    //      <Box
    //          color='black'
    //          bgGradient="linear(to-l, #FF9760, #FFE57A)"
    //          minWidth='max-content'
    //          minH={'665px'}
    //      >
    //         <Text as='b' fontSize='40'>
    //           <Center>  Contact Page </Center>
    //         </Text> 
    //      </Box> 
    //   </div>

    //  );

    return (
        <Container bg="#9DC4FB" maxW="full" mt={0} centerContent overflow="hidden">
          <Flex>
            <Box
            //   bg="#02054B"
              bgGradient="linear(to-l, #FF9760, #FFE57A)"
              color="black"
              borderRadius="lg"
              m={{ sm: 4, md: 16, lg: 10 }}
              p={{ sm: 5, md: 5, lg: 16 }}>
                <Heading><Center>Contact Page</Center></Heading>
{/* --------------------------------------------------------------------------------------------- */}
              <Box p={4}>
                <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                  <WrapItem>
                    <Box>
                      {/* <Heading>Contact Page</Heading> */}
                      <Text mt={{ sm: 3, md: 3, lg: 5 }} color="black.500" fontSize='4xl'>
                        Fill up the form beside to contact
                      </Text>
{/* --------------------------------------------------------------------------------------------- */}
                      <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                        <VStack pl={0} spacing={30} alignItems="flex-start">
                          <Button
                            size="md"
                            height="48px"
                            width="500px"
                            variant="ghost"
                            color="#000000"
                            fontSize='2xl'
                            _hover={{ border: '2px solid #1C6FEB' }}
                            leftIcon={<MdPhone color="#1970F1" size="30px" />}>
                            +1 (123)456-78910
                          </Button>
                          <Button
                            size="md"
                            height="48px"
                            width="500px"
                            variant="ghost"
                            color="#000000"
                            fontSize='2xl'
                            _hover={{ border: '2px solid #1C6FEB' }}
                            leftIcon={<MdEmail color="#1970F1" size="30px" />}>
                            hello@abc.com
                          </Button>
                          <Button
                            size="md"
                            height="48px"
                            width="500px"
                            variant="ghost"
                            color="#000000"
                            fontSize='2xl'
                            _hover={{ border: '2px solid #1C6FEB' }}
                            leftIcon={<MdLocationOn color="#1970F1" size="30px" />}>
                            Fullerton, California
                          </Button>
                        </VStack>
                      </Box>
{/* --------------------------------------------------------------------------------------------- */}
                      <HStack
                        mt={{ lg: 10, md: 10 }}
                        spacing={50}
                        px={129}
                        alignItems="flex-start">
                        <IconButton
                          aria-label="facebook"
                          variant="ghost"
                          size="lg"
                          isRound={true}
                          _hover={{ bg: '#0D74FF' }}
                          icon={<MdFacebook size="38px" />}
                        />
                        <IconButton
                          aria-label="github"
                          variant="ghost"
                          size="lg"
                          isRound={true}
                          _hover={{ bg: '#0D74FF' }}
                          icon={<BsGithub size="38px" />}
                        />
                        <IconButton
                          aria-label="discord"
                          variant="ghost"
                          size="lg"
                          isRound={true}
                          _hover={{ bg: '#0D74FF' }}
                          icon={<BsDiscord size="38px" />}
                        />
                      </HStack>
                    </Box>
                  </WrapItem>
{/* --------------------------------------------------------------------------------------------- */}
                  <WrapItem>
                    <Box bg="white" borderRadius="lg">
                      <Box m={8} color="#0B0E3F">
                        <VStack spacing={5}>
                          <FormControl id="name">
                            <FormLabel>Your Name</FormLabel>
                            <InputGroup borderColor="#E0E1E7">
                              <InputLeftElement
                                pointerEvents="none"
                                children={<BsPerson color="gray.800" />}
                              />
                              <Input type="text" size="md" />
                            </InputGroup>
                          </FormControl>
                          <FormControl id="name">
                            <FormLabel>Mail</FormLabel>
                            <InputGroup borderColor="#E0E1E7">
                              <InputLeftElement
                                pointerEvents="none"
                                children={<MdOutlineEmail color="gray.800" />}
                              />
                              <Input type="text" size="md" />
                            </InputGroup>
                          </FormControl>
                          <FormControl id="name">
                            <FormLabel>Message</FormLabel>
                            <Textarea
                              borderColor="gray.300"
                              _hover={{
                                borderRadius: 'gray.300',
                              }}
                              placeholder="message"
                            />
                          </FormControl>
                          <FormControl id="name" float="right">
                            <Button
                              variant="solid"
                              bg="#0D74FF"
                              color="white"
                              _hover={{}}>
                              Send Message
                            </Button>
                          </FormControl>
                        </VStack>
                      </Box>
                    </Box>
                  </WrapItem>

                </Wrap>
              </Box>

            </Box>
          </Flex>
        </Container>
      );

   

}


