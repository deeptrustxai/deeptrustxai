import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ShieldCheck, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function TestingPage() {
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
            <ShieldCheck className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Static and Dynamic Testing</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Leverage open-source SAST tools enhanced with AI capabilities to identify security vulnerabilities in your
            codebase. Our platform reduces false positives, prioritizes real risks, and provides actionable remediation
            guidance integrated directly into your CI/CD pipeline.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">
                Uses trusted open-source static analysis tools enhanced with AI to scan application source code for
                security vulnerabilities
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">
                Applies AI to correlate static scan results with runtime behavior, significantly reducing false
                positives and alert noise
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">
                Uses AI-driven dynamic testing to determine whether identified vulnerabilities are actually reachable
                during execution
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">
                Calculates risk using AI based on exploitability, reachability, and application context
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">
                Assigns clear, AI-driven priority levels to help developers focus on high-impact issues
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">
                Delivers actionable, prioritized findings instead of overwhelming raw scan results
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">
                Integrates seamlessly into CI/CD pipelines and existing developer workflows
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
