import { MapPinned } from "lucide-react"

interface FieldBlock {
  name: string
  acres: number
  status: "healthy" | "watch" | "needs-spray"
  statusLabel: string
}

const fields: FieldBlock[] = [
  { name: "NE Block", acres: 5, status: "healthy", statusLabel: "Healthy" },
  { name: "SW Block", acres: 3, status: "watch", statusLabel: "Watch" },
  { name: "Central Block", acres: 4, status: "needs-spray", statusLabel: "Needs Spray" },
]

function FieldStatusIndicator({ status }: { status: FieldBlock["status"] }) {
  const colors = {
    healthy: "bg-primary shadow-primary/30",
    watch: "bg-warning shadow-warning/30",
    "needs-spray": "bg-destructive shadow-destructive/30",
  }
  return (
    <span className={`inline-block h-3 w-3 rounded-full shadow-md ${colors[status]}`} />
  )
}

function FieldStatusBadge({ status, label }: { status: FieldBlock["status"]; label: string }) {
  const styles = {
    healthy: "bg-primary/15 text-primary border-primary/20",
    watch: "bg-warning/15 text-warning-foreground border-warning/20",
    "needs-spray": "bg-destructive/15 text-destructive border-destructive/20",
  }
  return (
    <span className={`inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium ${styles[status]}`}>
      {label}
    </span>
  )
}

export function FieldMapStatus() {
  return (
    <section id="fields" aria-label="Field map status">
      <div className="rounded-xl border border-border bg-card">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <div className="flex items-center gap-2">
            <MapPinned className="h-5 w-5 text-primary" />
            <h2 className="text-base font-semibold text-card-foreground">Field Map Status</h2>
          </div>
        </div>

        {/* Visual field map */}
        <div className="p-5">
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col items-center justify-center rounded-lg border-2 border-primary/30 bg-primary/5 p-6">
              <FieldStatusIndicator status="healthy" />
              <p className="mt-2 text-sm font-medium text-card-foreground">NE Block</p>
              <p className="text-xs text-muted-foreground">5 acres</p>
            </div>
            <div className="row-span-2 flex flex-col items-center justify-center rounded-lg border-2 border-destructive/30 bg-destructive/5 p-6">
              <FieldStatusIndicator status="needs-spray" />
              <p className="mt-2 text-sm font-medium text-card-foreground">Central Block</p>
              <p className="text-xs text-muted-foreground">4 acres</p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-lg border-2 border-warning/30 bg-warning/5 p-6">
              <FieldStatusIndicator status="watch" />
              <p className="mt-2 text-sm font-medium text-card-foreground">SW Block</p>
              <p className="text-xs text-muted-foreground">3 acres</p>
            </div>
          </div>
        </div>

        {/* Field list */}
        <div className="border-t border-border/50">
          {fields.map((field, i) => (
            <div key={i} className="flex items-center justify-between border-b border-border/50 px-5 py-3 last:border-0">
              <div className="flex items-center gap-3">
                <FieldStatusIndicator status={field.status} />
                <div>
                  <p className="text-sm font-medium text-card-foreground">{field.name}</p>
                  <p className="text-xs text-muted-foreground">{field.acres} acres</p>
                </div>
              </div>
              <FieldStatusBadge status={field.status} label={field.statusLabel} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
