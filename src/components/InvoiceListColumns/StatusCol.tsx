/** @jsxImportSource @emotion/react */
import { memo } from "react";
import { StatusBox } from "./style";
import { upperCaseFirstLetter } from "@/utils/helpers";
import { INVOICE_STATUS } from "@/types/enums";

import type { InvoiceType } from "@/types/data";

const statusColor = {
  PENDING: "rgb(3, 168, 158)",
  COMPLETE: "rgb(58, 54, 219)",
  CANCEL: "rgb(255, 105, 180)",
} as { [key in INVOICE_STATUS]: string };

const bgStatusColor = {
  PENDING: "rgb(3, 168, 158, 0.10000000149011612)",
  COMPLETE: "rgb(58, 54, 219, 0.10000000149011612)",
  CANCEL: "rgb(255, 105, 180, 0.10000000149011612)",
} as { [key in INVOICE_STATUS]: string };

const StatusCol = memo(({ status }: Pick<InvoiceType, "status">) => {
  return (
    <StatusBox bgColor={bgStatusColor[status]} color={statusColor[status]}>
      <span>{upperCaseFirstLetter(status.toLowerCase())}</span>
    </StatusBox>
  );
});

export default StatusCol;
