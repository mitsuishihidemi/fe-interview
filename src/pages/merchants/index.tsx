import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../features/categories/categorySlice";
import { selectShouldFetchCategories } from "../../features/categories/categorySelectors";
import { fetchMerchants } from "../../features/merchants/merchantSlice";
import { selectShouldFetchMerchants } from "../../features/merchants/merchantSelectors";
import Container from "../../components/Container";
import Space from "../../components/Space";
import FilterProvider from "./FilterProvider";
import FilterSelector from "./FilterSelector";
import MerchantList from "./MerchantList";
import Text from "../../components/Text";

const Merchants: React.FC = () => {
  const dispatch = useDispatch();
  const shouldFetchMerchants = useSelector(selectShouldFetchMerchants);
  const shouldFetchCategories = useSelector(selectShouldFetchCategories);

  useEffect(() => {
    if (shouldFetchMerchants) {
      dispatch(fetchMerchants());
    }
  }, [dispatch, shouldFetchMerchants]);

  useEffect(() => {
    if (shouldFetchCategories) {
      dispatch(fetchCategories());
    }
  }, [dispatch, shouldFetchCategories]);

  return (
    <Container>
      <Text as="h1" fontSize="lg" bold margin="lg 0">
        Merchants
      </Text>
      <FilterProvider>
        <FilterSelector />
        <Space margin="0 0 md" />
        <MerchantList />
      </FilterProvider>
    </Container>
  );
};

export default Merchants;
