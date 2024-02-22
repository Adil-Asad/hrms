import AuthLayout from "../../layouts/authLayout";
import React, { ReactElement } from "react";
import Head from "next/head";
import SetNewPassword from "@/components/set-new-password";

function SetNewPasswordPage() {
  return <SetNewPassword />;
}

SetNewPasswordPage.getLayout = (page: ReactElement) => (
  <AuthLayout>
    <Head>
      <title>Set New Password | Career Dashboard</title>
    </Head>

    {page}
  </AuthLayout>
);

export default SetNewPasswordPage;
