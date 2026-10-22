import { orders } from "../data/mockData";

const customers = orders.map((o) => ({
  name: o.customer,
  email: o.email,
  orders: 1,
  spent: o.amount,
}));

export default function Customers() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/5 bg-[#111827]">
      <div className="border-b border-white/5 px-5 py-4">
        <h3 className="text-base font-semibold text-white">Customers</h3>
        <p className="mt-0.5 text-sm text-gray-500">People who purchased recently</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-white/5 text-xs uppercase tracking-wider text-gray-500">
              <th className="px-5 py-3 font-medium">Name</th>
              <th className="px-5 py-3 font-medium">Email</th>
              <th className="px-5 py-3 font-medium">Orders</th>
              <th className="px-5 py-3 font-medium">Last Spent</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr
                key={c.email}
                className="border-b border-white/5 transition hover:bg-white/[0.02] last:border-0"
              >
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/15 text-xs font-semibold text-sky-400">
                      {c.name.charAt(0)}
                    </div>
                    <span className="font-medium text-white">{c.name}</span>
                  </div>
                </td>
                <td className="px-5 py-3.5 text-gray-400">{c.email}</td>
                <td className="px-5 py-3.5 text-gray-400">{c.orders}</td>
                <td className="px-5 py-3.5 font-medium text-white">{c.spent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
