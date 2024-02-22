import Typography from "@material-tailwind/react/components/Typography";

// field data tab 0
const appliedData = [
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
    heading: "Academic level",
    label1: "School",
    label2: "Degree",
    label3: "Date",
    label4: "Field of study",
    label5: "Date of birth",
    text1: "New Your University",
    text2: "BS Computer Science",
    text3: "Aug 28, 2015   -   May 30, 2020",
    text4: "Engineer",
    text5: "Mar 25, 1997",
  },
  {
    heading: "Work Experience",
    label1: "Company",
    label2: "Date",

    label4: "Position",

    text1: "Nayatel",
    text2: "Jun 18, 2021   -   Jul 16, 2023",

    text4: "Principal Creative Executive",
  },
];

function Tab0() {
  return (
    <>
      {appliedData.map((value, key) => (
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
    </>
  );
}

export default Tab0;
