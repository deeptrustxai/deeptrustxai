import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Database, ArrowLeft, ShieldAlert } from "lucide-react"
import Link from "next/link"

export default function BASMPage() {
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
            <Database className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Breach & Attack Surface Management Suite</h1>
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-6 flex gap-3">
            <ShieldAlert className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
            <p className="text-sm text-destructive">
              Restricted Availability: This suite is available exclusively to verified organizations and government
              agencies for defensive security and assessment purposes.
            </p>
          </div>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Unified visibility across your entire attack surface with advanced breach detection and assessment
            capabilities. This comprehensive suite provides defensive and assessment-only tooling designed for
            organizations with high security requirements and regulatory obligations.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">
                Restricted availability to verified organizations and government entities only
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">
                Verified organizations include regulated industries and critical infrastructure operators
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">
                Defensive and assessment-only tooling designed for protection, not exploitation
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">
                Unified visibility combining external attack surface, breach detection, and threat intelligence
              </span>
            </li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Button asChild>
            <Link href="/#contact">Request Access</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">Back to Products</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
