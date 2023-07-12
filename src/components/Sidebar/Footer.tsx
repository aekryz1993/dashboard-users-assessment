/** @jsxImportSource @emotion/react */
import { Stack } from "@mui/material";
import { AvatarImg, footerStyle, logoutStyle, subTextStyle } from "./styles";
import userAvatar from "@/assets/images/user.svg";
import LogoutIcon from '@mui/icons-material/Logout';

function Footer() {
  return (
    <Stack direction="row" css={footerStyle} alignItems='center' gap={1}>
      <AvatarImg url={userAvatar} />
      <Stack>
        <span>Easin Arafat</span>
        <span css={subTextStyle}>
          Free Account
        </span>
      </Stack>
      <LogoutIcon css={logoutStyle}  />
    </Stack>
  );
}

export default Footer;
