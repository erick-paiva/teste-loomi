import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Img,
  VStack,
} from "@chakra-ui/react";
import BackgroundImage from "../../assets/imagesPage/backgroundImage.svg";
import LogoLoomi from "../../assets/imagesPage/logoLoomi.svg";
import { InputChakra } from "../../components/inputChakra";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useAuth } from "../../contexts/AuthContext";

interface FormData {
  email: string;
  password: string;
}

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signIn } = useAuth();

  const signInSchema = yup.object().shape({
    email: yup
      .string()
      .email("Digite um email valido!")
      .required("O email é obrigatório"),
    password: yup.string().required("A senha é obrigatória"),
  });

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormData>({
    resolver: yupResolver(signInSchema),
  });

  const handleSignIn = async (data: FormData) => {
    await signIn(data);
  };

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
        <Center flexDirection="column">
          <Img
            src={LogoLoomi}
            alt="logoLoomi"
            h={{
              lg: "150px",
              xl: "170px",
              "2xl": "226px",
            }}
          />
          <Heading
            as="h3"
            fontFamily="Nunito Sans"
            fontSize={{
              lg: "15px",
              xl: "20px",
              "2xl": "24px",
            }}
            fontWeight="600"
            margin="40px 0 65px"
          >
            Entrar na plataforma
          </Heading>
          <VStack
            spacing={"30px"}
            as="form"
            w="400px"
            onSubmit={handleSubmit(handleSignIn)}
          >
            <Flex w="100%">
              <InputChakra
                label="E-mail"
                placeholder="Digite seu e-mail"
                type="email"
                margin="0 0 20px 0"
                error={errors.email}
                {...register("email")}
              />
            </Flex>
            <Flex w="100%">
              <InputChakra
                label="Senha"
                placeholder="Digite sua senha"
                type={showPassword ? "text" : "password"}
                margin="0 0 20px 0"
                error={errors.password}
                {...register("password")}
                Icon={
                  <Box
                    onClick={() => setShowPassword(!showPassword)}
                    transition="all 0.3s ease-in-out"
                    _hover={{
                      transform: "scale(1.1)",
                    }}
                    fontSize={{
                      lg: "15px",
                      xl: "20px",
                      "2xl": "30px",
                    }}
                  >
                    {showPassword ? (
                      <FaRegEye cursor="pointer" />
                    ) : (
                      <FaRegEyeSlash cursor="pointer" />
                    )}
                  </Box>
                }
              />
            </Flex>
            <Button
              bg="purple.500"
              color="white"
              w="120px"
              h="40px"
              borderRadius="8px"
              type="submit"
              fontFamily="Ubuntu"
              fontSize="20px"
              letterSpacing="0.8px"
              _hover={{ bg: "purple.600" }}
              _active={{ bg: "purple.500" }}
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
