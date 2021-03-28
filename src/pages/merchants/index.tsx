import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMerchants } from "../../features/merchants/merchantSlice";
import { shouldFetchMerchants } from "../../features/merchants/merchantSelectors";
import Container from "../../components/grid/Container";
import FilterProvider from "./FilterProvider";
import FilterSelector from "./FilterSelector";
import MerchantList from "./MerchantList";

const Merchants: React.FC = () => {
  const dispatch = useDispatch();
  const shouldFetch = useSelector(shouldFetchMerchants);

  useEffect(() => {
    if (shouldFetch) {
      dispatch(fetchMerchants());
    }
  }, [dispatch, shouldFetch]);

  return (
    <Container>
      <h1>Merchants</h1>
      <FilterProvider>
        <FilterSelector />
        <MerchantList />
      </FilterProvider>
    </Container>
  );
};

export default Merchants;
