/** @jsxImportSource @emotion/react */
import { memo } from "react";
import { UserType } from "@/types/data";
import { Box } from "@mui/material";
import { AvatarImg, boxStyle } from "./style";

const NameCol = memo(
  ({
    firstName,
    lastName,
    avatarUrl,
  }: Pick<UserType, "firstName" | "lastName" | "avatarUrl">) => {
    return (
      <Box css={boxStyle}>
        <AvatarImg url={avatarUrl} />
        <span>{`${firstName} ${lastName}`}</span>
      </Box>
    );
  },
);

export default NameCol;
