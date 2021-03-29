import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../features/categories/categorySlice";
import { selectShouldFetchCategories } from "../features/categories/categorySelectors";
import { fetchMerchants } from "../features/merchants/merchantSlice";
import { selectShouldFetchMerchants } from "../features/merchants/merchantSelectors";

const useFetchInitialData = () => {
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
};

export default useFetchInitialData;
