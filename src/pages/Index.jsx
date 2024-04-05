import { Button, Heading, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <VStack spacing={8} align="center" justify="center" minHeight="100vh">
      <Heading as="h1" size="4xl">
        The Rockers
      </Heading>

      <Text fontSize="xl" textAlign="center" maxW="600px">
        The Rockers are an energetic indie rock band known for their electrifying live performances. Get ready to rock out!
      </Text>

      <Button colorScheme="blue" size="lg">
        View Upcoming Shows
      </Button>
    </VStack>
  );
};

export default Index;
