import { ReactElement } from "react";
import MainLayout from "../../layouts/mainLayout";
import Head from "next/head";
import CreateNewJob from "@/components/recruitment/createNewJob";

function CreateNewJobPage() {
  return <CreateNewJob />;
}
CreateNewJobPage.getLayout = (page: ReactElement) => (
  <MainLayout>
    <Head>
      <title>Create New Job | Career Dashboard</title>
    </Head>

    {page}
  </MainLayout>
);
export default CreateNewJobPage;
