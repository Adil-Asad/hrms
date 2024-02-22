import { ReactElement } from "react";
import CandidatesComponents from "@/components/candidates";
import Head from "next/head";
import MainLayout from "../../layouts/mainLayout";

function Candidates() {
  return (
    <div className="dark:bg-black">
      <CandidatesComponents />
    </div>
  );
}

Candidates.getLayout = (page: ReactElement) => (
  <MainLayout>
    <Head>
      <title>Candidates | Career Dashboard</title>
    </Head>

    {page}
  </MainLayout>
);

export default Candidates;
