import Head from "next/head";
import Home from "./home";
import MainLayout from "@/layouts/mainLayout";

function HomePage() {
  return (
    <div className={`overflow-x-hidden `}>
      <Head>
        <title>Home | CAREER DASHBOARD</title>
      </Head>
      <MainLayout>
        <Home />
      </MainLayout>
    </div>
  );
}

export default HomePage;
