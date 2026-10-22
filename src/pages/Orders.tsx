import OrdersTable from "../components/OrdersTable";
import { orders } from "../data/mockData";

export default function Orders() {
  return (
    <div>
      <OrdersTable orders={orders} />
    </div>
  );
}
