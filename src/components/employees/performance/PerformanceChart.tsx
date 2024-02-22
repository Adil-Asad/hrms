import { Typography } from "@material-tailwind/react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

function PerformanceChart() {
  return (
    <div className="w-full h-[224px] bg-white dark:bg-black  border border-dim rounded-md pt-[12px] ">
      <div className="w-full ">
        <Typography
          className="text-subheading text-sm font-inter font-bold border-b border-dim pb-[9px] pl-[10px]"
          variant="h1"
        >
          All Tasks Overview
        </Typography>
      </div>
      <div className="w-full flex justify-center items-center  ">
        <div className="  flex">
          <div>
            <ResponsiveContainer width={200} height={170}>
              <PieChart width={150} height={150}>
                <Pie
                  data={data}
                  cx={80}
                  cy={85}
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="w-full flex flex-col gap-[15px] justify-center items-center pr-[14px]">
            <div className="w-full flex justify-center items-center gap-[47px]">
              <div className="flex gap-[7px] justify-center items-center">
                <div className="w-[7px] h-[7px] bg-[red] rounded-full"></div>
                <Typography
                  className="text-text text-sm font-inter font-medium w-[70px]"
                  variant="paragraph"
                >
                  To do
                </Typography>
              </div>
              <Typography
                className=" text-sm font-inter font-medium  text-red-600"
                variant="paragraph"
              >
                01
              </Typography>
            </div>
            <div className="w-full flex justify-center items-center gap-[47px]">
              <div className="flex gap-[7px] justify-center items-center">
                <div className="w-[7px] h-[7px] bg-primary rounded-full"></div>
                <Typography
                  className="text-text text-sm font-inter font-medium w-[70px]"
                  variant="paragraph"
                >
                  To do
                </Typography>
              </div>
              <Typography
                className=" text-sm font-inter font-medium  text-primary"
                variant="paragraph"
              >
                01
              </Typography>
            </div>
            <div className="w-full flex justify-center items-center gap-[47px]">
              <div className="flex gap-[7px] justify-center items-center">
                <div className="w-[7px] h-[7px] bg-[#32D583] rounded-full"></div>
                <Typography
                  className="text-text text-sm font-inter font-medium w-[70px]"
                  variant="paragraph"
                >
                  To do
                </Typography>
              </div>
              <Typography
                className=" text-sm font-inter font-medium  text-[#32D583]"
                variant="paragraph"
              >
                01
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PerformanceChart;
