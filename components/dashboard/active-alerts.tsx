import { CloudRain, Users, Clock, AlertTriangle } from "lucide-react"

interface Alert {
  icon: React.ReactNode
  iconBg: string
  title: string
  lines: string[]
  urgency: "high" | "medium" | "low"
}

const alerts: Alert[] = [
  {
    icon: <CloudRain className="h-4 w-4 text-chart-4" />,
    iconBg: "bg-chart-4/15",
    title: "Weather Warning",
    lines: ["Heavy rain Mar 18", "Fungus risk high"],
    urgency: "high",
  },
  {
    icon: <Users className="h-4 w-4 text-warning-foreground" />,
    iconBg: "bg-warning/20",
    title: "Community Alert",
    lines: ["Aphids reported 1km away", "Check fields 2 & 4"],
    urgency: "medium",
  },
  {
    icon: <Clock className="h-4 w-4 text-primary" />,
    iconBg: "bg-primary/15",
    title: "Treatment Reminder",
    lines: ["Apply fungicide today"],
    urgency: "low",
  },
]

function UrgencyDot({ urgency }: { urgency: Alert["urgency"] }) {
  const colors = {
    high: "bg-destructive",
    medium: "bg-warning",
    low: "bg-primary",
  }
  return (
    <span className={`inline-block h-2 w-2 rounded-full ${colors[urgency]}`} />
  )
}

export function ActiveAlerts() {
  return (
    <section id="alerts" aria-label="Active alerts">
      <div className="rounded-xl border border-border bg-card">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-warning" />
            <h2 className="text-base font-semibold text-card-foreground">Active Alerts</h2>
          </div>
          <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-destructive px-1.5 text-[10px] font-bold text-destructive-foreground">
            3
          </span>
        </div>
        <div className="divide-y divide-border/50">
          {alerts.map((alert, i) => (
            <div key={i} className="flex gap-3 px-5 py-4 transition-colors hover:bg-secondary/50">
              <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${alert.iconBg}`}>
                {alert.icon}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-card-foreground">{alert.title}</p>
                  <UrgencyDot urgency={alert.urgency} />
                </div>
                {alert.lines.map((line, j) => (
                  <p key={j} className="text-xs text-muted-foreground leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
