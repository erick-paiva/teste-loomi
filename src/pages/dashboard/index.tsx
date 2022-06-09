import { Flex } from "@chakra-ui/react";
import Header from "../../components/header";
import BackgroundImage from "../../assets/imagesPage/backgroundImage.svg";
import LogoLoomi from "../../assets/imagesPage/logoLoomi.svg";
import Sidebar from "../../components/sidebar";


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
      flexDirection="column"
    >
      <Header userName="eduardo"/>


      <Sidebar />

    </Flex>
  );
};

export default Dashboard;
