import Login from "@/components/login";
import AuthLayout from "../../layouts/authLayout";
import Head from "next/head";
import React, { ReactElement } from "react";

function LoginPage() {
  return <Login />;
}

LoginPage.getLayout = (page: ReactElement) => (
  <AuthLayout>
    <Head>
      <title>Login | Career Dashboard</title>
    </Head>

    {page}
  </AuthLayout>
);

export default LoginPage;
