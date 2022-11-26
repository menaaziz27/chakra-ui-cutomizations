import type { NextPage } from "next";
import { Box, Text, Button } from "@chakra-ui/react";
import Mobile from "../src/components/Mobile";
import { Card } from "../src/components/Card";
import React from "react";

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  return (
    <>
      <Box
        bgColor={["red.200", "gray.200", "blue.300", "green.300", "blackAlpha.300", "whiteAlpha.300"]}
        border="1px"
        borderColor="red"
      >
        Hello
      </Box>
      <Mobile />
      <Card itemNumber="1" key={1} />
      <Card itemNumber="2" key={2} />
      <Text textStyle="display1">This is Display 1</Text>
      <Text textStyle="display2">This is Display 2</Text>
      <Text textStyle="h1Semi">This is H1 Semi</Text>
      <Text textStyle="body1Semi">This is Body 1 Semi</Text>
      <Text textStyle="body1">This is Body 1</Text>
      <Button
        isLoading={isLoading}
        onClick={() => {
          setIsLoading(true);
          setTimeout(() => {
            setIsLoading(false);
          }, 1000);
        }}
      >
        Submit
      </Button>
    </>
  );
};

export default Home;
