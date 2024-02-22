import React, { ReactElement } from "react";
import MainLayout from "../../layouts/mainLayout";
import Head from "next/head";
import Employees from "@/components/employees";

function EmployeesPage() {
  return <Employees />;
}

EmployeesPage.getLayout = (page: ReactElement) => (
  <MainLayout>
    <Head>
      <title>Employees | Career Dashboard</title>
    </Head>

    {page}
  </MainLayout>
);

export default EmployeesPage;
