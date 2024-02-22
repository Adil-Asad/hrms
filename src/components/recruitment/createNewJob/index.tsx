import { useState } from "react";
import ContactInformation from "./ContactInfo";
import CreateJobNewLayout from "./CreateNewJobLayout";

import ApplicationForm from "./ApplicationForm";

function CreateNewJob() {
  const [tab, setTab] = useState(0);
  return (
    <div className="w-full px-[30px] ">
      <CreateJobNewLayout
        handleChange={(value: number) => setTab(value)}
        tab={tab}
      />
      {tab === 0 ? <ContactInformation /> : <ApplicationForm />}
    </div>
  );
}

export default CreateNewJob;
