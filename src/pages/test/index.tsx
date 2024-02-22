
import MainLayout from "@/layouts/mainLayout";

import React, { ReactElement } from "react";
import CalenderModal from "@/components/calender/calenderModal";
;
import Head from "next/head";

function Test() {
  return (
    <div className="min-h-screen w-full   bg-yellow-100 ">
      <CalenderModal />
    </div>
  );
}

Test.getLayout = (page: ReactElement) => (
  <MainLayout>
    <Head>
      <title>Test | Career Dashboard</title>
    </Head>
    {page}
  </MainLayout>
);

export default Test;

