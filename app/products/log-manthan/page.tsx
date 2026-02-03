import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Eye, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function SIEMXDRPage() {
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
            <Eye className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Log-Mathan: Customised SIEM Solution</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Fully Customised Next-generation SIEM and XDR powered by large language models. Correlate events across endpoint, network,
            and cloud environments while reducing SOC workload through intelligent alert prioritization and natural
            language investigation capabilities.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">
                Fully customised SIEM tailored to your environment, security use cases, and compliance needs
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">
                Flexible deployment options: on-premises, cloud, and managed SIEM services
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">
                GenAI-powered threat hunting with intelligent correlation, faster investigations
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">
                Advanced AI-driven log enrichment with ability to ingest diverse log sources
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">
                Network threat detection sensors for real-time visibility and internal threat discovery
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">
                Threat intelligence database built from multiple global intel sources with continuously updated detection logic to stay ahead of evolving threats
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
