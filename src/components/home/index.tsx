import CandidatesInterview from "./candidatesInterview";
import OpenRecruitment from "./openRecruitment";
import RecentJobs from "./recentJobs";
import UpcomingInterviews from "./upcomingInterviews";
import Calendar from "./calendar";
import ApplyCandidates from "./applyCandidates";

export function Home() {
  return (
    <div className="w-full px-[32px] flex gap-[24px] py-[24px] justify-center items-start">
      {/* Left Section */}
      <div className="w-full flex flex-col gap-[24px] justify-start items-start">
        <RecentJobs />
        <div className="w-full flex gap-[24px] justify-start items-start">
          <ApplyCandidates />
          <CandidatesInterview />
        </div>
        <OpenRecruitment />
      </div>

      {/* Right Section */}
      <div className="w-full max-w-[335px] flex h-full  flex-col gap-[24px] justify-start items-start ">
        <Calendar  />
        <UpcomingInterviews />
      </div>
    </div>
  );
}
