import { getInitialState } from "../../tests/helpers";
import {
  selectMerchants,
  selectMerchantsFilteredByBill,
  selectShouldFetchMerchants,
  selectIsMerchantsPending,
} from "./merchantSelectors";

describe("selectMerchants", () => {
  it("should select merchants with category names", () => {
    const state = getInitialState();
    expect(selectMerchants(state)).toMatchSnapshot();
  });
});

describe("selectMerchantsFilteredByBill", () => {
  it("should select merchants filtered by isBill", () => {
    const state = getInitialState();
    const isBill = true;
    expect(selectMerchantsFilteredByBill(state, isBill)).toMatchSnapshot();
  });
});

describe("selectShouldFetchMerchants", () => {
  it("should return true if merchants status is idle", () => {
    const state = getInitialState({ merchants: { status: "idle" } });
    expect(selectShouldFetchMerchants(state)).toBe(true);
  });
  it("should return false if merchants status is not idle", () => {
    const state = getInitialState({ merchants: { status: "pending" } });
    expect(selectShouldFetchMerchants(state)).toBe(false);
  });
});

describe("selectIsMerchantsPending", () => {
  it("should return true if merchants status is pending", () => {
    const state = getInitialState({ merchants: { status: "pending" } });
    expect(selectIsMerchantsPending(state)).toBe(true);
  });

  it("should return false if merchants status is not pending", () => {
    const state = getInitialState({ merchants: { status: "idle" } });
    expect(selectIsMerchantsPending(state)).toBe(false);
  });
});
