import { ShieldCheck, ShieldAlert, Eye, HeartPulse } from "lucide-react"

interface Detection {
  location: string
  crop: string
  issue: string
  date: string
  confidence: string
  treatment: string
  status: "critical" | "warning" | "watch" | "healthy"
}

const detections: Detection[] = [
  {
    location: "Field 2",
    crop: "Tomatoes",
    issue: "Early Blight",
    date: "2026-03-15",
    confidence: "94% match",
    treatment: "Neem spray",
    status: "critical",
  },
  {
    location: "Field 4",
    crop: "Cucumbers",
    issue: "Aphids",
    date: "2026-03-14",
    confidence: "87% match",
    treatment: "Organic soap mix",
    status: "warning",
  },
  {
    location: "Livestock",
    crop: "Buffalo #7",
    issue: "Fever",
    date: "2026-03-13",
    confidence: "Watch",
    treatment: "Vet consult scheduled",
    status: "watch",
  },
  {
    location: "Field 1",
    crop: "Potatoes",
    issue: "Healthy",
    date: "2026-03-12",
    confidence: "99%",
    treatment: "No action needed",
    status: "healthy",
  },
]

function StatusIcon({ status }: { status: Detection["status"] }) {
  switch (status) {
    case "critical":
      return (
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-destructive/15">
          <ShieldAlert className="h-4 w-4 text-destructive" />
        </div>
      )
    case "warning":
      return (
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-warning/20">
          <ShieldAlert className="h-4 w-4 text-warning" />
        </div>
      )
    case "watch":
      return (
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-chart-4/15">
          <Eye className="h-4 w-4 text-chart-4" />
        </div>
      )
    case "healthy":
      return (
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15">
          <ShieldCheck className="h-4 w-4 text-primary" />
        </div>
      )
  }
}

function StatusBadge({ status }: { status: Detection["status"] }) {
  const styles = {
    critical: "bg-destructive/15 text-destructive",
    warning: "bg-warning/20 text-warning-foreground",
    watch: "bg-chart-4/15 text-chart-4",
    healthy: "bg-primary/15 text-primary",
  }

  const labels = {
    critical: "Critical",
    warning: "Warning",
    watch: "Watch",
    healthy: "Healthy",
  }

  return (
    <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${styles[status]}`}>
      {labels[status]}
    </span>
  )
}

export function RecentDetections() {
  return (
    <section id="detections" aria-label="Recent detections">
      <div className="rounded-xl border border-border bg-card">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <div className="flex items-center gap-2">
            <HeartPulse className="h-5 w-5 text-primary" />
            <h2 className="text-base font-semibold text-card-foreground">Recent Detections</h2>
          </div>
          <span className="text-xs text-muted-foreground">Last 7 days</span>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="px-5 py-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">Location</th>
                <th className="px-5 py-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">Issue</th>
                <th className="px-5 py-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">Date</th>
                <th className="px-5 py-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">Confidence</th>
                <th className="px-5 py-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">Treatment</th>
                <th className="px-5 py-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {detections.map((d, i) => (
                <tr key={i} className="border-b border-border/50 transition-colors last:border-0 hover:bg-secondary/50">
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <StatusIcon status={d.status} />
                      <div>
                        <p className="text-sm font-medium text-card-foreground">{d.location}</p>
                        <p className="text-xs text-muted-foreground">{d.crop}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-sm text-card-foreground">{d.issue}</td>
                  <td className="px-5 py-3.5 text-sm text-muted-foreground font-mono">{d.date}</td>
                  <td className="px-5 py-3.5 text-sm text-muted-foreground">{d.confidence}</td>
                  <td className="px-5 py-3.5 text-sm text-card-foreground">{d.treatment}</td>
                  <td className="px-5 py-3.5">
                    <StatusBadge status={d.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="divide-y divide-border/50 md:hidden">
          {detections.map((d, i) => (
            <div key={i} className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <StatusIcon status={d.status} />
                  <div>
                    <p className="text-sm font-medium text-card-foreground">{d.location} - {d.crop}</p>
                    <p className="text-xs text-muted-foreground">{d.issue}</p>
                  </div>
                </div>
                <StatusBadge status={d.status} />
              </div>
              <div className="mt-3 flex items-center gap-4 pl-11">
                <span className="text-xs text-muted-foreground font-mono">{d.date}</span>
                <span className="text-xs text-muted-foreground">{d.confidence}</span>
              </div>
              <p className="mt-1 pl-11 text-xs text-primary">Treatment: {d.treatment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
