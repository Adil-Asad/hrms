import React, { ReactElement } from "react";
import AuthLayout from "../../layouts/authLayout";
import Head from "next/head";
import ForgotPassword from "@/components/forgot-password";

function ForgotPasswordPage() {
  return <ForgotPassword />;
}

ForgotPasswordPage.getLayout = (page: ReactElement) => (
  <AuthLayout>
    <Head>
      <title>Forgot Password | Career Dashboard</title>
    </Head>

    {page}
  </AuthLayout>
);

export default ForgotPasswordPage;
