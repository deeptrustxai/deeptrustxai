import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Search, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AISearchPage() {
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
            <Search className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">AI Search & Retrieval</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Enterprise-grade semantic search across your data sources with complete privacy and control. Our AI-powered
            search engine understands context and intent, delivering precise results from documents, PDFs, databases,
            and emails without ever transmitting data outside your environment.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">
                Delivers semantic and contextual search that understands user intent beyond keyword matching
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">
                Securely ingests and indexes data from documents, databases, emails, PDFs, and internal repositories
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">
                Supports open-source LLMs deployed on-premises or in private cloud environments based on user
                requirements
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">
                Ensures all data processing and inference remain within the customer environment with no data egress
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">
                Follows a privacy-first architecture to help organizations meet internal security and regulatory
                compliance standards
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">
                Provides APIs for seamless integration with enterprise portals, internal tools, and custom applications
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
