import { Box, Center, Flex, Heading, Img } from "@chakra-ui/react";
import BackgroundImage from "../../assets/imagesPage/backgroundImage.svg";
import LogoLoomi from "../../assets/imagesPage/logoLoomi.svg";

const Login = () => {
  return (
    <Center
      h="100vh"
      w="100vw"
      backgroundImage={BackgroundImage}
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="cover"
    >
      <Center h="100%" w="894px" bg="white">
        <Center flexDirection="column">
          <Img src={LogoLoomi} alt="logoLoomi" />
          <Heading
            as="h3"
            fontFamily="Nunito Sans"
            fontSize="24px"
            fontWeight="600"
            margin="40px 0 65px"
          >
            Entrar na plataforma
          </Heading>
        </Center>
      </Center>
    </Center>
  );
};

export default Login;
