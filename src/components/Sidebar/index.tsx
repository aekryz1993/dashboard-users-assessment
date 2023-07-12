/** @jsxImportSource @emotion/react */
import { Box, Stack } from "@mui/material";
import Footer from "./Footer";
import Links from "./Links";
import { logoBoxStyle, sidebarLayout } from "./styles";
import Logo from "@/assets/icons/logo.svg";

function Sidebar() {
  return (
    <div css={sidebarLayout}>
      <Stack gap={6}>
        <Box css={logoBoxStyle}>
          <img src={Logo} width="100rem" height="100rem" />
        </Box>
        <Links />
      </Stack>
      <Footer />
    </div>
  );
}

export default Sidebar;
