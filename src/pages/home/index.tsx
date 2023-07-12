/** @jsxImportSource @emotion/react */
import { Outlet, useNavigation } from "react-router-dom";
import { Sidebar } from "@/components";
import { homeLayout, mainLayout } from "./styles";
import { PageShimmer } from "@/components";

function Home() {
  const navigation = useNavigation();

  return (
    <div css={homeLayout}>
      <Sidebar />
      <main css={mainLayout}>
        {navigation.state === "loading" ? <PageShimmer /> : <Outlet />}
      </main>
    </div>
  );
}

export default Home;
