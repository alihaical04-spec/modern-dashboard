import { TrendingUp, TrendingDown } from "lucide-react";
import { motion } from "framer-motion";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  description: string;
  index?: number;
}

export default function StatCard({
  title,
  value,
  change,
  trend,
  description,
  index = 0,
}: StatCardProps) {
  const isUp = trend === "up";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      className="rounded-2xl border border-white/5 bg-[#111827] p-5 transition hover:border-white/10"
    >
      <p className="text-sm font-medium text-gray-400">{title}</p>
      <p className="mt-2 text-2xl font-bold tracking-tight text-white">{value}</p>
      <div className="mt-3 flex items-center gap-2">
        <span
          className={`inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-xs font-medium ${
            isUp
              ? "bg-emerald-500/10 text-emerald-400"
              : "bg-red-500/10 text-red-400"
          }`}
        >
          {isUp ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
          {change}
        </span>
        <span className="text-xs text-gray-500">{description}</span>
      </div>
    </motion.div>
  );
}
