import React, { useState } from "react";
import { Box, Button, Container, Flex, Heading, Image, Input, Link, Stack, Text, useToast, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const toast = useToast();

  const handleLogin = () => {
    if (username === "goitom" && password === "12345") {
      setIsLoggedIn(true);
      toast({
        title: "Login Successful",
        description: "You've successfully logged in.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Invalid Credentials",
        description: "Please check your username and password.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleSendMessage = () => {
    if (message) {
      setChat([...chat, message]);
      setMessage("");
    }
  };

  return (
    <Container maxW="container.xl">
      <Flex direction="column" minHeight="100vh">
        <Box as="header" p={4} bg="blue.600" color="white">
          <Flex justify="space-between" align="center">
            <Heading size="md">Debre Berhan University</Heading>
            {!isLoggedIn && (
              <Button onClick={() => handleLogin()} colorScheme="blue">
                Sign In
              </Button>
            )}
          </Flex>
        </Box>

        <VStack as="main" flex="1" p={4} spacing={4}>
          <Image src="https://images.unsplash.com/photo-1591710110747-dfeae9fa762a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxEZWJyZSUyMEJlcmhhbiUyMFVuaXZlcnNpdHl8ZW58MHx8fHwxNzE0NTUwNzY0fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
          <Text fontSize="lg">Debre Berhan University is one of the public universities in Ethiopia. Located in the town of Debre Berhan, it was inaugurated in March 2007. The university is committed to providing the highest quality education and research.</Text>
          {isLoggedIn ? (
            <VStack spacing={4} align="stretch">
              <Heading size="md">Chat with Us</Heading>
              <Stack direction="row" align="center">
                <Input placeholder="Type your message here..." value={message} onChange={(e) => setMessage(e.target.value)} />
                <Button onClick={handleSendMessage} colorScheme="blue" leftIcon={<FaPaperPlane />}>
                  Send
                </Button>
              </Stack>
              <VStack align="stretch" bg="gray.100" p={4} borderRadius="md">
                {chat.map((msg, index) => (
                  <Text key={index} bg="blue.100" p={2} borderRadius="md">
                    {msg}
                  </Text>
                ))}
              </VStack>
            </VStack>
          ) : (
            <VStack as="form" spacing={4}>
              <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
              <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <Button colorScheme="blue" onClick={handleLogin}>
                Sign In
              </Button>
            </VStack>
          )}
        </VStack>

        <Box as="footer" p={4} bg="gray.200">
          <Flex justify="center" gap={4}>
            <Link href="https://facebook.com/DebreBerhanU" isExternal>
              <FaFacebook />
            </Link>
            <Link href="https://twitter.com/DebreBerhanU" isExternal>
              <FaTwitter />
            </Link>
            <Link href="https://instagram.com/DebreBerhanU" isExternal>
              <FaInstagram />
            </Link>
            <Link href="https://linkedin.com/school/debre-berhan-university/" isExternal>
              <FaLinkedin />
            </Link>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
