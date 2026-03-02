import { Target, CheckCircle, UserCheck, Link2 } from "lucide-react"

interface QuickStat {
  icon: React.ReactNode
  label: string
  value: string
  sublabel: string
}

const quickStats: QuickStat[] = [
  {
    icon: <Target className="h-5 w-5 text-primary" />,
    label: "AI Accuracy",
    value: "94%",
    sublabel: "Detection confidence",
  },
  {
    icon: <CheckCircle className="h-5 w-5 text-primary" />,
    label: "Issues Resolved",
    value: "32",
    sublabel: "This month",
  },
  {
    icon: <UserCheck className="h-5 w-5 text-chart-4" />,
    label: "Experts Online",
    value: "3",
    sublabel: "Available now",
  },
  {
    icon: <Link2 className="h-5 w-5 text-warning" />,
    label: "Local Farms Connected",
    value: "8",
    sublabel: "In your network",
  },
]

export function QuickStats() {
  return (
    <section aria-label="Quick statistics">
      <div className="rounded-xl border border-border bg-card">
        <div className="border-b border-border px-5 py-4">
          <h2 className="text-base font-semibold text-card-foreground">Quick Stats</h2>
        </div>
        <div className="grid grid-cols-2 divide-x divide-border/50 sm:grid-cols-4">
          {quickStats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-1 px-4 py-5 text-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                {stat.icon}
              </div>
              <p className="mt-1 text-2xl font-bold text-card-foreground">{stat.value}</p>
              <p className="text-sm font-medium text-card-foreground">{stat.label}</p>
              <p className="text-xs text-muted-foreground">{stat.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
