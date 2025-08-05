import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Organic", value: 600000 },
  { name: "Referral", value: 300000 },
  { name: "Social", value: 500000 },
  { name: "Direct", value: 500128 },
];

const COLORS = ["#00C49F", "#0088FE", "#FFBB28", "#FF8042"];

const DonutChart = () => {
  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">
        Acquisition Channels
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={100}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
      <div className="text-center mt-4">
        <p className="text-2xl font-bold text-cyan-600">1,900,128</p>
        <p className="text-sm text-gray-500">Views Total</p>
      </div>
    </div>
  );
};

export default DonutChart;
