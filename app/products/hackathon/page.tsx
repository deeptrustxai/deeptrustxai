import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Trophy, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function HackathonPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="mb-8">
          <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
            <Trophy className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Hackathon Hosting Platform</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Host security-focused innovation events at scale with comprehensive management for challenges, teams, and
            submissions. Support large participant counts with real-time monitoring dashboards, automated scoring
            systems, and complete workflow management.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">
                Enables creation and customization of hackathon challenges based on themes, skills, and difficulty
                levels
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">
                Supports hosting hackathons at scale for large numbers of participants and teams
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">
                Provides a centralized dashboard to manage participants, teams, challenges, and timelines
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">
                Allows organizers to publish problem statements, rules, and resources from a single interface
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">
                Supports submission tracking, scoring, and evaluation workflows
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">
                Enables real-time monitoring of participation and progress during the event
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">
                Designed for technical, cybersecurity, and innovation-focused hackathons
              </span>
            </li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Button asChild>
            <Link href="/#contact">Contact Sales</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">Back to Products</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
