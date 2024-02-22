import SideSheetBody, {
  SideSheet,
  SideSheetHeader,
} from "@/components/elements/inputs/sideSheets";
import Typography from "@material-tailwind/react/components/Typography";
import Image from "next/image";
import type { ReactNode } from "react";
import { useState } from "react";
import RejectMessage from "../confirmationalModal/rejectMessage";
import SuccessfulMessage from "../confirmationalModal/successfulMessage";
import { PrimaryButton } from "../elements/inputs/buttons";
import InterviewScheduleModal from "../interviewScheduleModal";
import Tab0 from "./Tab0";
import Tab1 from "./Tab1";
import Tab3 from "./Tab3";
import Tab4 from "./Tab4";
import Tab2 from "./Tab2";
import RecruitmentModal from "../confirmationalModal/recruitmentModal";
import RejectModal from "../confirmationalModal/rejectModal";

// colored tabs

const tabs = [
  {
    heading: "Applied",
  },
  {
    heading: "Interviewing",
  },
  {
    heading: "Offer",
  },
  {
    heading: "Recruited",
  },
  {
    heading: "Rejected",
  },
];

type CandidateModalProps = {
  handleClose: Function;
  open: boolean;
  children?: ReactNode;
};

function CandidateModal(props: CandidateModalProps) {
  const { open, handleClose } = props;
  const [checkTabs, setCheckTabs] = useState(0);
  const [interview, setInterview] = useState<boolean>(false);
  const [sideSheet, setSideSheet] = useState<boolean>(true);
  const [showReject, setShowReject] = useState<boolean>(false);
  const [showSuccessful, setShowSuccessful] = useState<boolean>(false);
  const [rejectModal, setRejectModal] = useState<boolean>(false);
  const [isTab0Clicked, setIsTab0Clicked] = useState<boolean>(false);
  const [showRecruitmentModal, setShowRecruitmentModal] =
    useState<boolean>(false);
  console.log(open);
  function interviewToggle() {
    setInterview(!interview);
  }
  function interviewBtnToggle() {
    setIsTab0Clicked(checkTabs === 0 ? true : false);
  }

  function handleSuccessful() {
    setShowSuccessful(true);
    setInterview(!interview);

    setTimeout(() => {
      setShowSuccessful(false);
      setSideSheet(true);
    }, 3000);
  }
  function handleReject() {
    setShowReject(true);
    setInterview(!interview);

    setTimeout(() => {
      setShowReject(false);
      setSideSheet(true);
    }, 3000);
  }

  function switchTab(val: number) {
    setCheckTabs(val);
  }

  function handleRecruitment() {
    setShowRecruitmentModal(!showRecruitmentModal);
    setSideSheet(!sideSheet);
  }

  function handleRejectModal() {
    setRejectModal(!rejectModal);
    setSideSheet(!sideSheet);
  }
  function handleSideSheet() {
    setSideSheet(!sideSheet);
  }
  return (
    <>
      {sideSheet ? (
        <SideSheet
          open={open}
          handleClose={() => handleClose(false)}
          switchTab={switchTab}
        >
          <SideSheetHeader handleClose={() => handleClose(false)}>
            <div className="flex gap-[15px] justify-start items-center">
              <Image
                width={0}
                height={0}
                alt="profilepicture"
                src={"/icons/profile.svg"}
                className="w-auto rounded-full h-auto dark:bg-gray-900"
              />
              <div>
                <Typography
                  className="text-subheading text-xl font-inter font-semibold"
                  variant="h1"
                >
                  Zaire Vaccaro
                </Typography>
                <Typography
                  className="text-dim text-sm font-inter font-medium tracking-tight"
                  variant="paragraph"
                >
                  Profile Match: 90%
                </Typography>
              </div>
            </div>
            <div className="flex gap-[12px]  ">
              {checkTabs === 1 ? (
                <>
                  <PrimaryButton
                    onClick={() => handleClose()}
                    className="!bg-error font-medium text-sm hover:!bg-error !border-none"
                    label="Reject"
                  />
                  <PrimaryButton
                    onClick={() => {
                      setCheckTabs(2);
                    }}
                    label="Create Offer Letter"
                    className="text-sm !bg-[#738C79] font-inter font-medium !hover:bg-grass-200 border-none"
                  />
                </>
              ) : checkTabs === 2 ? (
                <>
                  <PrimaryButton
                    className="!bg-error font-medium text-sm hover:!bg-error !border-none"
                    label="Reject"
                    onClick={() => {
                      handleRejectModal();
                      setCheckTabs(4);
                    }}
                  />
                  <PrimaryButton
                    onClick={() => {
                      handleRecruitment();
                    }}
                    label="Recruited"
                    className="text-sm !bg-[#738C79] font-inter font-medium !hover:bg-grass-200 border-none"
                  />
                </>
              ) : checkTabs === 3 ? (
                <PrimaryButton
                  label="Recruited"
                  className="text-sm !bg-[#B9C5BC] font-inter font-medium !hover:bg-grass-200 border-none"
                />
              ) : checkTabs === 4 ? (
                <PrimaryButton
                  className="!bg-[#FECDCA] font-medium text-sm  !border-none"
                  label="Reject"
                />
              ) : (
                <>
                  <PrimaryButton
                    onClick={() => handleClose()}
                    className="!bg-error font-medium text-sm hover:!bg-error !border-none"
                    label="Reject"
                  />
                  <PrimaryButton
                    onClick={() => {
                      setInterview(true);
                      setSideSheet(false);
                    }}
                    label="Schedule an interview"
                    className="text-sm !bg-[#738C79] font-inter font-medium !hover:bg-grass-200 border-none"
                  />
                </>
              )}
            </div>
          </SideSheetHeader>
          <SideSheetBody>
            <div className=" w-[700px] max-h-[900px]">
              <div className="w-full px-[30px] pt-[13px]">
                <div className="w-full flex justify-start items-center">
                  <Typography
                    className="text-sm text-subheading font-inter"
                    variant="paragraph"
                  >
                    Stage of:&nbsp;
                  </Typography>
                  <Typography
                    className="text-sm text-subheading font-inter font-semibold"
                    variant="paragraph"
                  >
                    Technical Engineering Staff
                  </Typography>
                </div>
                <div className="w-full flex justify-start items-center pt-[5px]">
                  <Typography
                    className="text-sm text-subheading font-inter"
                    variant="paragraph"
                  >
                    Applied date:&nbsp;
                  </Typography>
                  <Typography
                    className="text-sm text-subheading font-inter font-semibold"
                    variant="paragraph"
                  >
                    May 26, 2023
                  </Typography>
                </div>
                <div className="w-full max-w-[670px] flex gap-6 items-center pt-[10px]">
                  {/* green tabs  */}
                  {tabs.map((v, i) => (
                    <div
                      key={i}
                      className={` text-black max-w-[132px] w-full flex justify-center items-center  h-[34px] relative after:content-[''] after:absolute after:w-0 after:h-0 
                      ${
                        checkTabs === 4 && i === 3
                          ? " before:border-l-[#F1F3F2]"
                          : "before:border-l-[#738C79]"
                      }
              
              after:border-l-[25px] dark:after:border-l-[#000]  after:border-l-[#FFF] after:border-y-[17px] after:border-y-transparent after:border-solid after:left-0 after:bottom-0 before:content-[''] before:absolute before:right-[-17px] before:w-0 before:h-0 before:border-l-[17px]  before:border-y-[17px] before:border-y-transparent before:border-solid before:bottom-0 ${
                checkTabs >= i
                  ? "bg-[#738C79]  before:border-l-[rgb(115, 140, 121) ] "
                  : "bg-[#F1F3F2]  before:border-l-[#F1F3F2] "
              }${
                        checkTabs === 4 && i === 3
                          ? "bg-[#F1F3F2] before:border-l-[#F1F3F2 ] "
                          : "bg-[#738C79] before:border-l-[#F1F3F2 ] "
                      } `}
                    >
                      <Typography
                        className={`text-black text-sm  font-inter ml-[30px]  ${
                          checkTabs >= i ? " text-white font-semibold" : ""
                        }${
                          checkTabs === 4 && i === 3
                            ? " text-black "
                            : "text-black"
                        }`}
                        variant="paragraph"
                      >
                        {v.heading}
                      </Typography>
                    </div>
                  ))}
                </div>
                <div className="w-full h-[700px] pt-[22px] flex flex-col gap-[22px]">
                  {/* todo: tabs and data should be moved saprate components to reduce the size of file */}

                  {checkTabs === 0 ? <Tab0 /> : ""}
                  {checkTabs === 1 ? (
                    <Tab1
                      interviewToggle={interviewToggle}
                      handleSideSheet={handleSideSheet}
                    />
                  ) : (
                    ""
                  )}
                  {checkTabs === 2 ? <Tab2 /> : ""}
                  {checkTabs === 3 ? <Tab3 /> : ""}
                  {checkTabs === 4 ? <Tab4 /> : ""}
                </div>
              </div>
            </div>
          </SideSheetBody>
        </SideSheet>
      ) : (
        ""
      )}
      <div className=" absolute right-0 left-0 top-0 min-w-full">
        {interview ? (
          <InterviewScheduleModal
            interviewToggle={interview}
            handleSuccessful={handleSuccessful}
            handleReject={handleReject}
            switchTab={switchTab}
            checkTabs={checkTabs}
          />
        ) : (
          ""
        )}
        {showSuccessful ? <SuccessfulMessage /> : ""}
        {showReject ? <RejectMessage /> : ""}
        {showRecruitmentModal ? (
          <RecruitmentModal
            handleRecruitment={handleRecruitment}
            switchTab={switchTab}
          />
        ) : (
          ""
        )}

        {rejectModal ? (
          <RejectModal
            handleRejectModal={handleRejectModal}
            switchTab={switchTab}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default CandidateModal;
