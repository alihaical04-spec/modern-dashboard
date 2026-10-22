import type { Order, OrderStatus } from "../data/mockData";

const statusStyles: Record<OrderStatus, string> = {
  Completed: "bg-emerald-500/10 text-emerald-400",
  Pending: "bg-amber-500/10 text-amber-400",
  Processing: "bg-sky-500/10 text-sky-400",
  Cancelled: "bg-red-500/10 text-red-400",
};

interface OrdersTableProps {
  orders: Order[];
  limit?: number;
}

export default function OrdersTable({ orders, limit }: OrdersTableProps) {
  const rows = limit ? orders.slice(0, limit) : orders;

  return (
    <div className="overflow-hidden rounded-2xl border border-white/5 bg-[#111827]">
      <div className="border-b border-white/5 px-5 py-4">
        <h3 className="text-base font-semibold text-white">Recent Orders</h3>
        <p className="mt-0.5 text-sm text-gray-500">Latest customer transactions</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-white/5 text-xs uppercase tracking-wider text-gray-500">
              <th className="px-5 py-3 font-medium">Order</th>
              <th className="px-5 py-3 font-medium">Customer</th>
              <th className="hidden px-5 py-3 font-medium sm:table-cell">Product</th>
              <th className="px-5 py-3 font-medium">Amount</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="hidden px-5 py-3 font-medium md:table-cell">Date</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((order) => (
              <tr
                key={order.id}
                className="border-b border-white/5 transition hover:bg-white/[0.02] last:border-0"
              >
                <td className="px-5 py-3.5 font-medium text-white">{order.id}</td>
                <td className="px-5 py-3.5">
                  <div>
                    <p className="text-white">{order.customer}</p>
                    <p className="text-xs text-gray-500">{order.email}</p>
                  </div>
                </td>
                <td className="hidden px-5 py-3.5 text-gray-400 sm:table-cell">
                  {order.product}
                </td>
                <td className="px-5 py-3.5 font-medium text-white">{order.amount}</td>
                <td className="px-5 py-3.5">
                  <span
                    className={`inline-block rounded-md px-2 py-0.5 text-xs font-medium ${
                      statusStyles[order.status]
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="hidden px-5 py-3.5 text-gray-400 md:table-cell">
                  {order.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
