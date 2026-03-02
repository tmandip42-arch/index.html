"use client"

import { Leaf, MapPin, Bell, Menu, X } from "lucide-react"
import { useState } from "react"

export function DashboardHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <Leaf className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-card-foreground tracking-tight">
                Kudahar Krishi Farm
              </h1>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3" />
                <span>Kailash Tole, Pokhara</span>
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            <a href="#" className="text-sm font-medium text-primary transition-colors hover:text-primary/80">
              Dashboard
            </a>
            <a href="#detections" className="text-sm text-muted-foreground transition-colors hover:text-card-foreground">
              Detections
            </a>
            <a href="#alerts" className="text-sm text-muted-foreground transition-colors hover:text-card-foreground">
              Alerts
            </a>
            <a href="#fields" className="text-sm text-muted-foreground transition-colors hover:text-card-foreground">
              Fields
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="relative rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-card-foreground">
              <Bell className="h-4 w-4" />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-bold text-destructive-foreground">
                5
              </span>
              <span className="sr-only">Notifications</span>
            </button>
            <p className="hidden text-xs text-muted-foreground md:block">March 2026</p>
            <button
              className="rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:bg-secondary md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="mt-4 flex flex-col gap-2 border-t border-border pt-4 md:hidden">
            <a href="#" className="rounded-lg px-3 py-2 text-sm font-medium text-primary">
              Dashboard
            </a>
            <a href="#detections" className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-secondary">
              Detections
            </a>
            <a href="#alerts" className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-secondary">
              Alerts
            </a>
            <a href="#fields" className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-secondary">
              Fields
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
