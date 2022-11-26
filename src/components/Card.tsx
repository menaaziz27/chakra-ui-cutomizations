import React, { useState } from "react";
import { Flex, Box } from "@chakra-ui/react";

type Props = {
  itemNumber: string;
  boxStyle?: Record<string, any>;
};

export const Card = ({ itemNumber, boxStyle }: Props) => {
  const [isSelected, setIsSelected] = useState(false);

  const layerStyle = isSelected ? "selectedBorder" : "transparentBorder";

  return (
    <Flex my={5} layerStyle={layerStyle} {...boxStyle} onClick={() => setIsSelected(!isSelected)}>
      <Flex w="full">
        <Box>{itemNumber} Item</Box>
      </Flex>
    </Flex>
  );
};
