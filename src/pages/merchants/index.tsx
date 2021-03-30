import React from "react";
import useFetchInitialData from "../../hooks/useFetchInitialData";
import Container from "../../components/Container";
import FilterProvider from "./FilterProvider";
import FilterSelector from "./FilterSelector";
import Merchants from "./Merchants";
import Space from "../../components/Space";
import Text from "../../components/Text";
import Footer from "../../components/Footer";
import Loader from "./Loader";

const MerchantsPage: React.FC = () => {
  useFetchInitialData();

  return (
    <Container>
      <Text as="h1" fontSize="lg" bold margin="lg 0">
        Merchants
      </Text>
      <FilterProvider>
        <FilterSelector />
        <Space margin="0 0 md" />
        <Loader>
          <Merchants />
        </Loader>
      </FilterProvider>
      <Footer />
    </Container>
  );
};

export default MerchantsPage;
