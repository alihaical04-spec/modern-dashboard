export const stats = [
  {
    id: 1,
    title: "Total Revenue",
    value: "$48,352",
    change: "+12.5%",
    trend: "up" as const,
    description: "vs last month",
  },
  {
    id: 2,
    title: "Active Users",
    value: "2,847",
    change: "+8.2%",
    trend: "up" as const,
    description: "vs last month",
  },
  {
    id: 3,
    title: "Orders",
    value: "1,245",
    change: "-3.1%",
    trend: "down" as const,
    description: "vs last month",
  },
  {
    id: 4,
    title: "Conversion",
    value: "3.24%",
    change: "+0.8%",
    trend: "up" as const,
    description: "vs last month",
  },
];

export const revenueData = [
  { name: "Jan", revenue: 3200, orders: 240 },
  { name: "Feb", revenue: 4100, orders: 310 },
  { name: "Mar", revenue: 3800, orders: 280 },
  { name: "Apr", revenue: 5200, orders: 390 },
  { name: "May", revenue: 4800, orders: 360 },
  { name: "Jun", revenue: 6100, orders: 450 },
  { name: "Jul", revenue: 5800, orders: 420 },
  { name: "Aug", revenue: 7200, orders: 510 },
  { name: "Sep", revenue: 6900, orders: 490 },
  { name: "Oct", revenue: 8100, orders: 580 },
  { name: "Nov", revenue: 7600, orders: 540 },
  { name: "Dec", revenue: 9200, orders: 650 },
];

export const trafficData = [
  { name: "Direct", value: 35, color: "#38bdf8" },
  { name: "Organic", value: 28, color: "#a78bfa" },
  { name: "Social", value: 20, color: "#34d399" },
  { name: "Referral", value: 12, color: "#fbbf24" },
  { name: "Email", value: 5, color: "#f87171" },
];

export type OrderStatus = "Completed" | "Pending" | "Cancelled" | "Processing";

export interface Order {
  id: string;
  customer: string;
  email: string;
  product: string;
  amount: string;
  status: OrderStatus;
  date: string;
}

export const orders: Order[] = [
  { id: "#ORD-7841", customer: "Sarah Chen", email: "sarah@email.com", product: "Pro Plan", amount: "$49.00", status: "Completed", date: "2026-10-20" },
  { id: "#ORD-7840", customer: "James Wilson", email: "james@email.com", product: "Starter Kit", amount: "$29.00", status: "Processing", date: "2026-10-20" },
  { id: "#ORD-7839", customer: "Amina Khan", email: "amina@email.com", product: "Enterprise", amount: "$199.00", status: "Completed", date: "2026-10-19" },
  { id: "#ORD-7838", customer: "Lucas Meyer", email: "lucas@email.com", product: "Pro Plan", amount: "$49.00", status: "Pending", date: "2026-10-19" },
  { id: "#ORD-7837", customer: "Priya Sharma", email: "priya@email.com", product: "Add-on Pack", amount: "$15.00", status: "Cancelled", date: "2026-10-18" },
  { id: "#ORD-7836", customer: "Marcus Lee", email: "marcus@email.com", product: "Pro Plan", amount: "$49.00", status: "Completed", date: "2026-10-18" },
  { id: "#ORD-7835", customer: "Elena Rossi", email: "elena@email.com", product: "Starter Kit", amount: "$29.00", status: "Processing", date: "2026-10-17" },
  { id: "#ORD-7834", customer: "David Park", email: "david@email.com", product: "Enterprise", amount: "$199.00", status: "Completed", date: "2026-10-17" },
];

export const navItems = [
  { path: "/", label: "Dashboard", icon: "LayoutDashboard" },
  { path: "/analytics", label: "Analytics", icon: "BarChart3" },
  { path: "/orders", label: "Orders", icon: "ShoppingCart" },
  { path: "/customers", label: "Customers", icon: "Users" },
  { path: "/settings", label: "Settings", icon: "Settings" },
];
