import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import Login from "./pages/login";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Login />
  </ChakraProvider>
);
