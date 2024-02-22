import React, { ReactElement, useState } from "react";
import MainLayout from "../../layouts/mainLayout";
import Head from "next/head";
import Recruitment from "@/components/recruitment";
import UIUXDesigner from "@/components/uiUxDesigner";

function RecruitmentPage() {
  const [showRecruitment, setShowRecruitment] = useState(true);

  const handleChildComponentClick = () => {
    setShowRecruitment(false);
  };

  const handleBackButtonClick = () => {
    setShowRecruitment(true);
  };

  return (
    <>
      {showRecruitment ? (
        <Recruitment onChildComponentClick={handleChildComponentClick} />
      ) : (
        <UIUXDesigner onBackButtonClick={handleBackButtonClick} />
      )}
    </>
  );
}

RecruitmentPage.getLayout = (page: ReactElement) => (
  <MainLayout>
    <Head>
      <title>Recruitment | Career Dashboard</title>
    </Head>

    {page}
  </MainLayout>
);

export default RecruitmentPage;
