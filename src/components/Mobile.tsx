import { useMediaQuery, Text } from "@chakra-ui/react";

const Mobile = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  return <>{isMobile && <Text bg="red.200">Is Mobile</Text>}</>;
};

export default Mobile;
