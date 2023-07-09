/** @jsxImportSource @emotion/react */
import { Outlet } from "react-router-dom";
import { Sidebar } from "@/components";
import { homeLayout, mainLayout } from "./styles";

function Home() {
  return <div css={homeLayout}>
    <Sidebar />
    <main css={mainLayout}>
      <Outlet />
    </main>
  </div>
}

export default Home;