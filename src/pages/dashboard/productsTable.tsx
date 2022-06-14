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
import { useProduct } from "../../contexts/ProductsContext";
import { useEffect, useState } from "react";
import { IProduct } from "../../@types";
import SkeletonCardProducts from "../../components/skeletonCardProducts";

const ProductsTable = () => {
  const [search, setSearch] = useState("");
  const [foundProducts, setFoundProducts] = useState<IProduct[]>([]);
  const heithTh = {
    lg: "20px",
    xl: "30px",
    "2xl": "50px",
  };

  const fontSizeTh = {
    lg: "16px",
    xl: "17px",
    "2xl": "18px",
  };

  const {
    currentPage,
    currentPageNum,
    searchProduct,
    advancePage,
    backPage,
    totalPages,
    loading,
  } = useProduct();

  const theadThStyles = {
    fontWeight: "500",
    fontFamily: "Ubuntu",
    color: "white",
    textTransform: "uppercase",
    letterSpacing: "0.64px",
    backgroundColor: "gray.600",
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

  const handleSearch = async (evt: any) => {
    evt.preventDefault();
    const response: IProduct[] = await searchProduct(search);
    if (response?.length > 0) {
      setFoundProducts(response);
    }
  };

  useEffect(() => {
    if (!search.length) {
      setFoundProducts([]);
    }
  }, [search]);

  return (
    <Flex
      minH={{
        lg: "700px",
        xl: "800px",
        "2xl": "1182px",
      }}
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
          fontSize={{
            lg: "20px",
            xl: "25px",
            "2xl": "30px",
          }}
        >
          Listagem de produtos
        </Heading>

        <Flex as="form" onSubmit={handleSearch}>
          <InputChakra
            name="search"
            placeholder="Pesquisar produtos"
            fontSize={{
              lg: "15px",
              xl: "18px",
              "2xl": "25px",
            }}
            Icon={
              <Box
                fontSize={{
                  lg: "15px",
                  xl: "18px",
                  "2xl": "25px",
                }}
              >
                <BiSearch color="#989899" />
              </Box>
            }
            fontFamily="Ubuntu"
            _placeholder={{ color: "black.400", opacity: 0.4 }}
            paddingLeft="40px"
            onChange={(e) => setSearch(e.target.value)}
            h={{
              lg: "30px",
              xl: "40px",
              "2xl": "60px",
            }}
          />
        </Flex>
      </Center>
      <TableContainer
        mt="50px"
        minH={{
          lg: "400px",
          xl: "600px",
          "2xl": "800px",
        }}
        mb={{
          lg: "15px",
          xl: "25px",
          "2xl": "40px",
        }}
        sx={scrollBarStyle}
      >
        <Table>
          <Thead>
            <Tr>
              <Th sx={theadThStyles} borderRadius="9px" fontSize={fontSizeTh}>
                PRODUTO
              </Th>
              <Th w="40px" border="none"></Th>
              <Th
                borderRadius="9px 0 0 9px"
                sx={theadThStyles}
                fontSize={fontSizeTh}
              >
                <Flex
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  CORES
                  <Divider bg="white" h="25px" orientation="vertical" />
                </Flex>
              </Th>

              <Th sx={theadThStyles} w="33%" fontSize={fontSizeTh}>
                <Flex
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  ESPECIFICAÇÕES
                  <Divider bg="white" h={heithTh} orientation="vertical" />
                </Flex>
              </Th>
              <Th
                sx={theadThStyles}
                borderRadius="0 9px 9px 0"
                fontSize={fontSizeTh}
              >
                STATUS
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {loading && <SkeletonCardProducts />}

            {foundProducts.length > 0 &&
              !loading &&
              foundProducts.map(({ id, name, description, status }) => (
                <CardProducts
                  key={id}
                  img={ProductImage}
                  description={description}
                  name={name}
                  status={status}
                />
              ))}

            {!foundProducts.length &&
              !loading &&
              currentPage.map(({ id, name, description, status }) => (
                <CardProducts
                  key={id}
                  img={ProductImage}
                  description={description}
                  name={name}
                  status={status}
                />
              ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Flex justifyContent="flex-end" mt="20px">
        {!foundProducts.length && (
          <Paginate
            currentPage={currentPageNum}
            advance={advancePage}
            back={backPage}
            totalPages={totalPages}
          />
        )}
      </Flex>
    </Flex>
  );
};

export default ProductsTable;
