import { useToast } from "@chakra-ui/react";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { IProduct } from "../@types";
import { api } from "../services/api";

interface AuthProviderProps {
  children: ReactNode;
}

interface ProductContextData {
  products: IProduct[];
  searchProduct: (search: string) => Promise<IProduct[]>;
  advancePage: () => void;
  backPage: () => void;
  currentPage: IProduct[];
  currentPageNum: number;
  totalPages: number;
  loading: boolean;
}

const AuthContext = createContext<ProductContextData>({} as ProductContextData);

const useProduct = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useProduct must be used within an ProductProvider");
  }

  return context;
};

const ProductProvider = ({ children }: AuthProviderProps) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [currentPage, setCurrentPage] = useState<IProduct[]>([]);
  const [currentPageNum, setCurrentPageNum] = useState(1);
  const [loading, setLoading] = useState(true);
  const totalPages =
    products.length % 7 === 0
      ? products.length / 7
      : Math.floor(products.length / 7) + 1;

  const toast = useToast();

  const searchProduct = useCallback(async (search: string) => {
    setLoading(true);
    const searchResponse = api
      .get(`/products?page=1&limit=7&search=${search}`)
      .then((response) => {
        if (response.data.length > 0) {
          setLoading(false);
          toast({
            title: "Produtos encontrados",
            description:
              response.data.length > 1
                ? `${response.data.length} Foram encontrados`
                : `${response.data.length} Foi encontrado`,
            status: "success",
            duration: 2000,
            isClosable: true,
            position: "top",
          });
        } else {
          toast({
            title: "Nenhum produto encontrado",
            description: "Não foi possível encontrar nenhum produto",
            status: "error",
            duration: 2000,
            isClosable: true,
            position: "top",
          });
          setLoading(false);
        }
        return response.data;
      })
      .catch((_) => {
        toast({
          title: "Erro ao buscar produtos",
          description: "Não foi possível buscar os produtos",
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
        setLoading(false);
      });

    return searchResponse;
  }, []);

  const advancePage = () => {
    setLoading(true);
    api.get(`/products?page=${currentPageNum + 1}&limit=7`).then(({ data }) => {
      if (data.length > 0) {
        setCurrentPage(data);
        if (totalPages !== currentPageNum) {
          setCurrentPageNum(currentPageNum + 1);
        }
      }
      setLoading(false);
    });
  };

  const backPage = () => {
    if (currentPageNum > 1) {
      setLoading(true);
      api
        .get(`/products?page=${currentPageNum - 1}&limit=7`)
        .then(({ data }) => {
          setCurrentPageNum(currentPageNum - 1);
          setCurrentPage(data);
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    api.get("/products").then((response) => {
      setProducts(response.data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    api.get(`/products?page=${currentPageNum}&limit=7`).then(({ data }) => {
      setCurrentPage(data);
      setLoading(false);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        products,
        searchProduct,
        advancePage,
        backPage,
        currentPage,
        currentPageNum,
        totalPages,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { ProductProvider, useProduct };
