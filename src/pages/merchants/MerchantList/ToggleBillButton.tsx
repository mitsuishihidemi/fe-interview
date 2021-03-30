import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsMerchantsPending } from "../../../features/merchants/merchantSelectors";
import { updateMerchant } from "../../../features/merchants/merchantSlice";
import { FilterContext } from "../FilterProvider";
import { Merchant } from "../../../types/merchant";
import IconButton from "../../../components/IconButton";
import AddIcon from "../../../icons/AddIcon";
import DeleteIcon from "../../../icons/DeleteIcon";

type ToggleBillButtonProps = {
  merchant: Merchant;
};

const ToggleBillButton: React.FC<ToggleBillButtonProps> = ({ merchant }) => {
  const dispatch = useDispatch();
  const { isBill } = useContext(FilterContext);
  const isPending = useSelector(selectIsMerchantsPending);

  if (isBill) {
    return (
      <IconButton
        title="Remove bill"
        aria-label="Remove bill"
        icon={DeleteIcon}
        onClick={() => dispatch(updateMerchant({ ...merchant, isBill: false }))}
        disabled={isPending}
      />
    );
  }

  return (
    <IconButton
      title="Add as bill"
      aria-label="Add as bill"
      icon={AddIcon}
      onClick={() => dispatch(updateMerchant({ ...merchant, isBill: true }))}
      disabled={isPending}
    />
  );
};

export default ToggleBillButton;
