import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Eye, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function Page() {
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
          <h1 className="text-4xl font-bold mb-4">NirnayakX: Advanced AI-Powered Command & Control Platform</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            NirnayakX is a next-generation Command & Control (C2) platform designed for real-world cyber operations, adversarial simulations, and advanced security research.  
            The platform provides AI-assisted workflows, modular architecture, stealth execution, and real-time operator control for complex environments.
            NirnayakX is built for modern cyber operations where flexibility, stealth, and automation are critical.  
            It provides an AI-driven interface for operators, supports modular extensions, and enables secure execution across distributed environments.
            The platform is designed for controlled environments, security testing labs, cyber ranges, and government-approved research programs.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">
                NirnayakX is a next-generation AI-powered Command & Control platform built for advanced cybersecurity operations and controlled research environments. 
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">
                The platform provides modular architecture, stealth execution, and real-time operator control for complex adversarial scenarios.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">
                It supports in-memory execution, custom loaders, and secure communication channels for high-fidelity cyber simulations.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">
                AI-assisted workflows enable faster tasking, intelligence extraction, and efficient operator decision-making.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">
                Designed for cyber ranges, government labs, and enterprise security teams requiring full control and flexibility.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">
                NirnayakX delivers scalable, secure, and extensible infrastructure for next-generation offensive and defensive security testing.
              </span>
            </li>
          </ul>
        </div>

        <div className="flex gap-4">
        <a
            href="/flyers/Nirnayakflyer.pdf"
            download
            className="inline-flex items-center px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition"
        > 
        Download Flyer
        </a> 
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
