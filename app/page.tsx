import { DashboardHeader } from "@/components/dashboard/header"
import { StatsGrid } from "@/components/dashboard/stats-grid"
import { RecentDetections } from "@/components/dashboard/recent-detections"
import { ActiveAlerts } from "@/components/dashboard/active-alerts"
import { FieldMapStatus } from "@/components/dashboard/field-map-status"
import { QuickStats } from "@/components/dashboard/quick-stats"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-foreground sm:text-2xl text-balance">
            Pest & Disease Management System
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            AI-powered monitoring and early detection for your farm
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {/* Top-level stat cards */}
          <StatsGrid />

          {/* Detections table */}
          <RecentDetections />

          {/* Alerts + Field Map side by side on large screens */}
          <div className="grid gap-6 lg:grid-cols-2">
            <ActiveAlerts />
            <FieldMapStatus />
          </div>

          {/* Quick Stats bar */}
          <QuickStats />
        </div>
      </main>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-muted-foreground">
              Kudahar Krishi Farm &middot; Kailash Tole, Pokhara
            </p>
            <p className="text-xs text-muted-foreground">
              Powered by AI Crop Intelligence &middot; March 2026
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
