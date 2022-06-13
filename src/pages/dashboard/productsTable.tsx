import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { InputChakra } from "../../components/inputChakra";
import { BiSearch } from "react-icons/bi";
import CardProducts from "../../components/cardProducts";
import ProductImage from "../../assets/imagesPage/product.png";
import Paginate from "../../components/paginate";

const ProductsTable = () => {
  const theadThStyles = {
    fontSize: "16px",
    fontWeight: "500",
    fontFamily: "Ubuntu",
    color: "white",
    textTransform: "uppercase",
    letterSpacing: "0.64px",
    backgroundColor: "gray.600",
    height: "50px",
  };

  const scrollBarStyle = {
    "&::-webkit-scrollbar": {
      width: "15px",
      height: "13px",
    },
    "&::-webkit-scrollbar-track": {
      width: "6px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#5A4CA7",
      borderRadius: "10px",
    },
  };

  return (
    <Flex
      minH="1182px"
      minW="70%"
      bg="white"
      fontFamily="Ubuntu"
      borderRadius="20px"
      mr="40px"
      flexDirection="column"
      padding="55px 40px"
    >
      <Center w="100%" justifyContent="space-between">
        <Heading
          fontFamily="Ubuntu"
          as="h2"
          color="black.400"
          letterSpacing="0.6px"
        >
          Listagem de produtos
        </Heading>

        <Box>
          <InputChakra
            name="search"
            placeholder="Pesquisar produtos"
            Icon={<BiSearch color="#989899" size="25px" />}
            fontFamily="Ubuntu"
            _placeholder={{ color: "black.400", opacity: 0.4 }}
            paddingLeft="40px"
          />
        </Box>
      </Center>
      <TableContainer mt="50px" minH="800px" mb="40px" sx={scrollBarStyle}>
        <Table>
          <Thead>
            <Tr>
              <Th sx={theadThStyles} w="546px" borderRadius="9px">
                PRODUTO
              </Th>
              <Th w="40px" border="none"></Th>
              <Th borderRadius="9px 0 0 9px" sx={theadThStyles}>
                <Flex
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  CORES
                  <Divider bg="white" h="25px" orientation="vertical" />
                </Flex>
              </Th>

              <Th sx={theadThStyles} w="33%">
                <Flex
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  ESPECIFICAÇÕES
                  <Divider bg="white" h="25px" orientation="vertical" />
                </Flex>
              </Th>
              <Th sx={theadThStyles} borderRadius="0 9px 9px 0">
                STATUS
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <CardProducts img={ProductImage} description="Banco Cajá" />
          </Tbody>
        </Table>
      </TableContainer>
      <Flex justifyContent="flex-end" mt="20px">
        <Paginate currentPage={1} advance={() => {}} back={() => {}} />
      </Flex>
    </Flex>
  );
};

export default ProductsTable;
