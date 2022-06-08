import { Box, Button, Center, Heading, Img, VStack } from "@chakra-ui/react";
import BackgroundImage from "../../assets/imagesPage/backgroundImage.svg";
import LogoLoomi from "../../assets/imagesPage/logoLoomi.svg";
import { InputChakra } from "../../components/inputChakra";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Center
      h="100vh"
      w="100vw"
      backgroundImage={BackgroundImage}
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="cover"
      bgColor="purple.50"
    >
      <Center h="100%" w="894px" bg="white">
        <Center flexDirection="column" w="400px">
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
          <VStack spacing={"30px"}>
            <InputChakra
              name="email"
              label="E-mail"
              placeholder="Digite seu e-mail"
              type="email"
              margin="0 0 20px 0"
            />
            <InputChakra
              name="password"
              label="Senha"
              placeholder="Digite sua senha"
              type={showPassword ? "text" : "password"}
              margin="0 0 20px 0"
              Icon={
                <Box
                  onClick={() => setShowPassword(!showPassword)}
                  transition="all 0.3s ease-in-out"
                  _hover={{
                    transform: "scale(1.1)",
                  }}
                >
                  {showPassword ? (
                    <FaRegEye cursor="pointer" size="30px" />
                  ) : (
                    <FaRegEyeSlash cursor="pointer" size="30px" />
                  )}
                </Box>
              }
            />
            <Button
              bg="purple.500"
              color="white"
              w="120px"
              h="40px"
              borderRadius="8px"
              fontFamily="Ubuntu"
              fontSize="20px"
              letterSpacing="0.8px"
              _hover={{ bg: "purple.600" }}
            >
              Entrar
            </Button>
          </VStack>
        </Center>
      </Center>
    </Center>
  );
};

export default Login;
