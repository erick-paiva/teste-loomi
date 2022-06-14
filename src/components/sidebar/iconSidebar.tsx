import {
  Box,
  Center,
  Flex,
  Img,
  Text,
  Tooltip,
  keyframes,
  useMediaQuery,
} from "@chakra-ui/react";

interface IconSidebarProps {
  data: {
    Icon: string;
    name: string;
  };
  show: boolean;
  showToolTip: boolean;
}

const IconSidebar = ({
  data,
  show = true,
  showToolTip = true,
}: IconSidebarProps) => {
  const animation = keyframes`
    from {opacity: 0; transform: translateX(-100px); z-index: -1;}
    to {opacity: 1;}
  `;

  const [isLargerThan1000] = useMediaQuery("(max-width: 1440px)");

  return (
    <Flex
      key={data.name}
      cursor="pointer"
      justifyContent="center"
      alignItems="center"
      position="relative"
      fontFamily="Ubuntu"
    >
      <Tooltip
        hasArrow
        display={showToolTip ? "flex" : "none"}
        label={data.name}
        placement="right-start"
        color="gray.600"
        marginTop="5px"
        bg="gray.200"
        ml="30px"
        h="33px"
        minW="80px"
        letterSpacing="0.32px"
        alignItems="center"
        justifyContent="center"
        opacity={1}
      >
        <Center
          as="figure"
          {...(show && { marginLeft: "24px" })}
          transition="all 0.35s ease-in-out"
        >
          <Img
            src={data.Icon}
            alt={data.name}
            {...(isLargerThan1000 && { height: "30px" })}
          />
          {show && (
            <Text
              animation={`${animation} 0.35s ease-in-out`}
              ml="24px"
              color="gray.600"
              fontSize={isLargerThan1000 ? "15px" : "22px"}
              letterSpacing="0.44px"
              opacity="1"
            >
              {data.name}
            </Text>
          )}
        </Center>
      </Tooltip>
    </Flex>
  );
};

export default IconSidebar;
