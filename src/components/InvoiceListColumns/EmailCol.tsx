/** @jsxImportSource @emotion/react */
import { memo } from "react";
import EmailIcon from "@mui/icons-material/Email";
import { Box } from "@mui/material";
import { boxStyle } from "./style";

import type { UserType } from "@/types/data";

const EmailCol = memo(({ email }: Pick<UserType, "email">) => {
  return (
    <Box css={boxStyle} color="#3A36DB">
      <EmailIcon />
      <span>{email}</span>
    </Box>
  );
})

export default EmailCol;
