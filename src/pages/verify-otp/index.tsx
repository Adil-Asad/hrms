import AuthLayout from "../../layouts/authLayout";
import React, { ReactElement } from "react";
import Head from "next/head";
import VerifyOtp from "@/components/verify-otp";

function VerifyOtpPage() {
  return <VerifyOtp />;
}

VerifyOtpPage.getLayout = (page: ReactElement) => (
  <AuthLayout>
    <Head>
      <title>Verify OTP | Career Dashboard</title>
    </Head>

    {page}
  </AuthLayout>
);

export default VerifyOtpPage;
