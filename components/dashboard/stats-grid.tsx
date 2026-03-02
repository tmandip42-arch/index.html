import { ScanLine, Bug, Stethoscope, MessageCircle, Megaphone, QrCode } from "lucide-react"
import type { ReactNode } from "react"

interface StatCardProps {
  icon: ReactNode
  label: string
  sublabel: string
  value: string | number
  iconBgClass: string
}

function StatCard({ icon, label, sublabel, value, iconBgClass }: StatCardProps) {
  return (
    <div className="group rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
      <div className="flex items-center justify-between">
        <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${iconBgClass}`}>
          {icon}
        </div>
        <span className="text-2xl font-bold text-card-foreground">{value}</span>
      </div>
      <div className="mt-3">
        <p className="text-sm font-medium text-card-foreground">{label}</p>
        <p className="text-xs text-muted-foreground">{sublabel}</p>
      </div>
    </div>
  )
}

export function StatsGrid() {
  const stats: StatCardProps[] = [
    {
      icon: <ScanLine className="h-5 w-5 text-primary" />,
      label: "AI Scans",
      sublabel: "Today",
      value: 12,
      iconBgClass: "bg-primary/15",
    },
    {
      icon: <Bug className="h-5 w-5 text-destructive" />,
      label: "Issues Detected",
      sublabel: "Active",
      value: 4,
      iconBgClass: "bg-destructive/15",
    },
    {
      icon: <Stethoscope className="h-5 w-5 text-accent-foreground" />,
      label: "Treatments Suggested",
      sublabel: "Pending",
      value: 3,
      iconBgClass: "bg-accent/30",
    },
    {
      icon: <MessageCircle className="h-5 w-5 text-chart-4" />,
      label: "Expert Chats",
      sublabel: "Active",
      value: 2,
      iconBgClass: "bg-chart-4/15",
    },
    {
      icon: <Megaphone className="h-5 w-5 text-warning" />,
      label: "Community Alerts",
      sublabel: "Nearby",
      value: 5,
      iconBgClass: "bg-warning/15",
    },
    {
      icon: <QrCode className="h-5 w-5 text-muted-foreground" />,
      label: "QR Codes Scanned",
      sublabel: "This week",
      value: 28,
      iconBgClass: "bg-muted",
    },
  ]

  return (
    <section aria-label="Key statistics">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  )
}
