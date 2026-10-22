import StatCard from "../components/StatCard";
import RevenueChart from "../components/RevenueChart";
import TrafficChart from "../components/TrafficChart";
import OrdersTable from "../components/OrdersTable";
import { stats, orders } from "../data/mockData";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, i) => (
          <StatCard key={stat.id} {...stat} index={i} />
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <RevenueChart />
        </div>
        <div className="lg:col-span-2">
          <TrafficChart />
        </div>
      </div>

      <OrdersTable orders={orders} limit={5} />
    </div>
  );
}
