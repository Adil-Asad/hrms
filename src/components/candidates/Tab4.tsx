import Typography from "@material-tailwind/react/components/Typography";

// field data tab 4
const appliedData4 = [
  {
    heading: "Basic Information",
    label1: "Email",
    label2: "Gender",
    label3: "Address",
    label4: "Phone number",
    label5: "Date of birth",
    text1: "Hakimgulbangash@gmail.com",
    text2: "Male",
    text3: "218 Thorninge Cir, Syracuse, Connecticut 22563",
    text4: "+92 302 3629797",
    text5: "Mar 25, 1997",
  },
  {
    heading: "Interview",
    label1: "Interviewer",
    label2: "Interview Date",
    label3: "Interview Time",
    label4: "Department",
    label5: "Status",
    text1: "Waqar, Muqaddam",
    text2: "Aug 28, 2015",
    text3: "12:00Pm - 01:00Pm",
    text4: "Engineer",
    text5: "Rejected",
  },
];

function Tab4() {
  return (
    <div className="flex flex-col gap-4">
      {appliedData4.map((value, key) => (
        <div key={key} className="w-full rounded-md border border-dim ">
          <Typography
            className="text-subheading text-sm font-inter font-bold px-[20px] py-[10px] border-b border-dim"
            variant="h1"
          >
            {value.heading}
          </Typography>
          <div className="w-full flex justify-center items-start">
            <div className="w-full py-[13px] px-[20px] flex flex-col gap-[12px] justify-center items-center">
              <div className="w-full">
                <Typography
                  className="text-sm text-dim font-inter font-medium"
                  variant="paragraph"
                >
                  {value.label1}
                </Typography>
                <Typography
                  className="text-sm text-text  font-inter font-bold"
                  variant="paragraph"
                >
                  {value.text1}
                </Typography>
              </div>
              <div className="w-full">
                <Typography
                  className="text-sm text-dim font-inter font-medium"
                  variant="paragraph"
                >
                  {value.label2}
                </Typography>
                <Typography
                  className="text-sm text-text  font-inter font-bold"
                  variant="paragraph"
                >
                  {value.text2}
                </Typography>
              </div>
              <div className="w-full">
                <Typography
                  className="text-sm text-dim font-inter font-medium"
                  variant="paragraph"
                >
                  {value.label3}
                </Typography>
                <Typography
                  className="text-sm text-text  font-inter font-bold"
                  variant="paragraph"
                >
                  {value.text3}
                </Typography>
              </div>
            </div>
            <div className="w-full flex flex-col gap-[12px] justify-center items-center  pt-[13px] ">
              <div className="w-full">
                <Typography
                  className="text-sm text-dim font-inter font-medium"
                  variant="paragraph"
                >
                  {value.label4}
                </Typography>
                <Typography
                  className="text-sm text-text  font-inter font-bold"
                  variant="paragraph"
                >
                  {value.text4}
                </Typography>
              </div>
              <div className="w-full">
                <Typography
                  className="text-sm text-dim font-inter font-medium"
                  variant="paragraph"
                >
                  {value.label5}
                </Typography>
                <Typography
                  className="text-sm text-text  font-inter font-bold"
                  variant="paragraph"
                >
                  {value.text5}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tab4;
