import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMerchants } from "./merchantSlice";
import { shouldFetchMerchants } from "./merchantSelectors";
import Container from "../../components/grid/Container";

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
    </Container>
  );
};

export default Merchants;
