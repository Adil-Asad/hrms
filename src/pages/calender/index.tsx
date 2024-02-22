import { ReactElement } from "react";
import MainLayout from "../../layouts/mainLayout";
import Head from "next/head";

import CalendarPage from "@/components/calender";

export const myevents = [
  {
    id: 0,
    title: "training",
    start: new Date(2021, 5, 8, 9, 0, 0),
    end: new Date(2021, 5, 8, 13, 0, 0),
    resourceId: 1,
  },
  {
    id: 1,
    title: "late lunch",
    start: new Date(2021, 5, 8, 14, 0, 0),
    end: new Date(2021, 5, 8, 16, 30, 0),
    resourceId: 1,
  },
  {
    id: 2,
    title: "fight",
    start: new Date(2021, 5, 8, 8, 30, 0),
    end: new Date(2021, 5, 8, 12, 30, 0),
    resourceId: 1,
  },
  {
    id: 3,
    title: "party",
    start: new Date(2021, 5, 8, 7, 0, 0),
    end: new Date(2021, 5, 8, 10, 30, 0),
    resourceId: 1,
  },
];

export const myresources = [{ id: 1 }];

function Calender() {
  return (
    <div className="">
     
      <CalendarPage />
    </div>
  );
}

Calender.getLayout = (page: ReactElement) => (
  <MainLayout >
    <Head >
      <title>Calender | Career Dashboard</title>
    </Head>

    {page}
  </MainLayout>
);

export default Calender;
