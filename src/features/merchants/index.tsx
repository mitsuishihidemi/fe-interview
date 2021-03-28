import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMerchants } from "./merchantSlice";
import { RootState } from "../../store";

const Merchants: React.FC = () => {
  const dispatch = useDispatch();
  const merchantStatus = useSelector(
    (state: RootState) => state.merchants.status
  );

  useEffect(() => {
    if (merchantStatus === "idle") {
      dispatch(fetchMerchants());
    }
  }, [dispatch, merchantStatus]);

  return <h1>Merchants</h1>;
};

export default Merchants;
