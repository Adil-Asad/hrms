import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Sun",

    val: 30,
  },
  {
    name: "Mon",

    val: 50,
  },
  {
    name: "Tue",

    val: 10,
  },
  {
    name: "Wed",

    val: 80,
  },
  {
    name: "Thu",

    val: 0,
  },
  {
    name: "Fri",

    val: 120,
  },
  {
    name: "Sat",

    val: 60,
  },
];
interface CustomTooltipProps {
  active?: boolean;
  payload?: any;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const dataItem = payload[0].payload;
    return (
      <div className="custom-tooltip w-[86px] h-[51px] bg-[#0F172A] font-inter text-white p-[8px] rounded-lg flex flex-col gap-1 justify-center items-start">
        <p className="text-xs font-bold">{`${dataItem.val} Applied`}</p>
        <p className="text-[10px] font-normal">{` Candidate`}</p>
      </div>
    );
  }
  return null;
};

function ApplyCandidatesGraph() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <ResponsiveContainer  width="99%" height={260}>
      <LineChart 
        width={200}
        height={200}
        data={data}
        margin={{
          top: 36,
          right: 0,
          left: -25,
          bottom: 5,
        }}
      >
        <CartesianGrid  strokeDasharray="0" vertical={false} />
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          padding={{ right: 30, left: 30 }}
        />
        <YAxis axisLine={false} tickLine={false} />

        <Tooltip
          content={<CustomTooltip />}
          position={{ y: 10 }}
          isAnimationActive={false}
        />
        <ReferenceLine x="Tue" stroke="#738C79" strokeWidth={3.5} />

        <Line
          type="monotone"
          dataKey="val"
          stroke="#738C79"
          strokeWidth={3.5}
          onMouseEnter={(e: any) => handleMouseEnter(e.activeTooltipIndex)}
          onMouseLeave={handleMouseLeave}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default ApplyCandidatesGraph;
