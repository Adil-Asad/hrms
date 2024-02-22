import { ReactElement } from "react";
import Head from "next/head";
import MainLayout from "../../layouts/mainLayout";
import { Home } from "@/components/home";

function HomePage() {
  return <Home />;
}

HomePage.getLayout = (page: ReactElement) => {
  return (
    <MainLayout>
      <Head>
        <title>Career Dashboard</title>
      </Head>

      {page}
    </MainLayout>
  );
};

export default HomePage;
