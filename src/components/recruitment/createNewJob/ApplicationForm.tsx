import AcademicLevel from "./AcademicLevel";
import AddQuestions from "./AddQuestions";
import AditionalInfo from "./AditionalInfo";
import WorkExperience from "./WorkExperience";

function ApplicationForm() {
  return (
    <div className="flex w-full justify-between gap-3 ">
      <div className="w-full  px-5 pt-5 pb-[30px] bg-white rounded-lg flex flex-col justify-start gap-[13px] dark:bg-black dark:text-white">
        <AditionalInfo />
        <AcademicLevel />
        <WorkExperience />
      </div>
      <AddQuestions />
    </div>
  );
}

export default ApplicationForm;
