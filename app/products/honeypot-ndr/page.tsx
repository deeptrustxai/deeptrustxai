import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Network, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function HoneypotNDRPage() {
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
            <Network className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Honeypot & NDR Sensors</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Gain early visibility into attacker activity through deception-based detection and network traffic analysis.
            Deploy honeypots to detect lateral movement and unauthorized access while AI-powered NDR sensors analyze
            network behavior to identify threats with minimal false positives.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">
                Deploys honeypot-based network sensors to detect attacker activity early
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">
                Captures real-world attacker techniques, lateral movement, and reconnaissance behavior
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">
                Uses open-source NDR tools to monitor network traffic for suspicious patterns
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">
                Applies AI-assisted analysis to reduce noise and highlight meaningful threats
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">
                Detects command-and-control activity, insider threats, and lateral movement
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">
                Enhances visibility into network-level threats often missed by endpoint tools
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">
                Provides actionable network threat intelligence to improve detection and response
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
