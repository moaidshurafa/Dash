import AdminPanel from "../components/AdminPanel";
import WorldMap from "../charts/WorldMap";
import DonutChart from "../charts/DonutChart";
const Home = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 capitalize">
          Dashboard
        </h2>
        <div className="text-sm text-gray-500">
          Home / <span className="text-gray-700 capitalize">Dashboard</span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
        <StatBox title="New Visits" value="57,820" percent="70%" />
        <StatBox title="Purchases" value="$89,745" percent="71%" />
        <StatBox title="Active Users" value="178,391" percent="77%" />
        <StatBox title="Returned" value="32,592" percent="86%" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DonutChart />
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Users by Country</h3>
          <WorldMap />
        </div>
      </div>
    </>
  );
};

const StatBox = ({ title, value, percent }) => {
  return (
    <div className="bg-white p-4 rounded shadow flex items-center justify-between">
      <div>
        <div className="text-sm text-gray-500">{title}</div>
        <div className="text-xl font-bold text-gray-700">{value}</div>
      </div>
      <div className="text-right">
        <div className="text-sm text-gray-500">{percent}</div>
        <div className="text-3xl text-gray-400">○</div>
      </div>
    </div>
  );
};

export default Home;
