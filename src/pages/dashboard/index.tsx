import { Flex } from "@chakra-ui/react";
import Header from "../../components/header";
import BackgroundImage from "../../assets/imagesPage/backgroundImage.svg";
import LogoLoomi from "../../assets/imagesPage/logoLoomi.svg";


const Dashboard = () => {
  return (
    <Flex
      h="100vh"
      w="100vw"
      backgroundImage={BackgroundImage}
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="cover"
      bgColor="purple.50"
    >
      <Header userName="eduardo"/>
    </Flex>
  );
};

export default Dashboard;
