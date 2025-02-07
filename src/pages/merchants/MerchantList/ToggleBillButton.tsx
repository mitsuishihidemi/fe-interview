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
        data-testid="remove-bill.cta"
        title="Remove bill"
        ariaLabel="Remove bill"
        icon={DeleteIcon}
        onClick={() => dispatch(updateMerchant({ ...merchant, isBill: false }))}
        disabled={isPending}
      />
    );
  }

  return (
    <IconButton
      data-testid="add-bill.cta"
      title="Add as bill"
      ariaLabel="Add as bill"
      icon={AddIcon}
      onClick={() => dispatch(updateMerchant({ ...merchant, isBill: true }))}
      disabled={isPending}
    />
  );
};

export default ToggleBillButton;
