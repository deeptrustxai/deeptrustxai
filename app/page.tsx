import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Mail } from "lucide-react"
import { ArrowRight } from "lucide-react"
import {
  Search,
  ShieldCheck,
  Cloud,
  Radar,
  Database,
  Eye,
  Network,
  Flame,
  Trophy,
  GraduationCap,
  Brain,
  Zap,
  Lock,
} from "lucide-react"
import Link from "next/link"

export default function Home() {
  const products = [
    {
      name: "AI Search & Retrieval",
      tagline: "Find Answers. Not Files.",
      description: "AI-powered semantic search for secure access to your proprietary enterprise data.",
      icon: Search,
      href: "/products/ai-search",
    },
    {
      name: "Static and Dynamic Testing",
      tagline: "Test Smarter. Ship Secure.",
      description: "AI-driven static and dynamic testing for secure, high-performance web applications.",
      icon: ShieldCheck,
      href: "/products/testing",
    },
    {
      name: "Cloud Penetration Testing",
      tagline: "Attack Before Attackers Do.",
      description: "AI-powered penetration testing and risk management for cloud environments.",
      icon: Cloud,
      href: "/products/cloud-pentesting",
    },
    {
      name: "External Attack Surface Management",
      tagline: "See What Attackers See.",
      description: "Discover and monitor all internet-facing assets to eliminate hidden risks.",
      icon: Radar,
      href: "/products/easm",
    },
    {
      name: "Breach & Attack Surface Suite",
      tagline: "Detect Early. Respond Faster.",
      description: "Unified visibility and control across your entire digital attack surface.",
      icon: Database,
      href: "/products/basm",
    },
    {
      name: "Log-Manthan",
      tagline: "Customised SEIM Solution",
      description: "AI-powered SIEM with real-time monitoring, threat detection, and compliance reporting.",
      icon: Eye,
      href: "/products/log-manthan",
    },
    {
      name: "Honeypot & NDR Sensors",
      tagline: "Trap Threats in Real Time.",
      description: "Deception-based honeypots and NDR for early attacker detection.",
      icon: Network,
      href: "/products/honeypot-ndr",
    },
    {
      name: "Open Source Firewalls",
      tagline: "Security Without Lock-In.",
      description: "Deploy and manage enterprise-grade open-source firewall solutions.",
      icon: Flame,
      href: "/products/firewall",
    },
    {
      name: "AI Quiz Generator",
      tagline: "Smart Assessments. Zero Effort.",
      description: "Automatically generate adaptive quizzes aligned with curriculum and learning goals.",
      icon: Brain,
      href: "/products/quiz-generator",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background gradient overlay with neon infinity pattern */}
        <div
          className="absolute inset-0 opacity-100"
          style={{
            backgroundImage: "url('/images/hero-background.jpg')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        />

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/70" />

        {/* Content - centered and prominent */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-lg">
              Powering the Next Generation
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 drop-shadow-md max-w-2xl mx-auto leading-relaxed">
              Explore the cutting-edge advancements, impacts, and future of artificial intelligence in cybersecurity
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" asChild className="px-8 py-6 text-base font-medium">
                <Link href="/#products">Start Exploring</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="px-8 py-6 text-base font-medium bg-transparent">
                <Link href="/#contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section id="products" className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Products & Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Comprehensive security tools built on open-source foundations and enhanced with AI
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Academy Section */}
      <section id="academy" className="py-20 sm:py-32 bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">DeepTrustxAI Academy</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Build real-world security skills through hands-on training environments and competitive challenges
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Cyber Range Card */}
            <Card className="h-full transition-all duration-300 cursor-pointer group border-2 border-slate-700 bg-slate-950 shadow-card hover:shadow-card-hover hover:border-cyan-400/40 hover:-translate-y-1">
              <CardHeader className="space-y-4">
                <div className="h-16 w-16 rounded-2xl bg-slate-800 flex items-center justify-center group-hover:scale-105 transition-all duration-300 border-2 border-slate-600 group-hover:border-cyan-400/60">
                  <GraduationCap
                    className="h-8 w-8 text-slate-300 group-hover:text-cyan-400 transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold leading-tight text-slate-50">Enterprise Cyber Range</h3>
                  <p className="text-cyan-400 font-medium text-sm">Train for Real Attacks. Build. Break. Defend.</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-sm text-slate-300 leading-relaxed">
                  Train your teams in realistic scenarios covering network, cloud, and application security. Conduct
                  red, blue, and purple team exercises with gamified learning paths. Assess readiness through real-world
                  incident simulations and track skill development across your organization.
                </p>
                <Link href="/products/cyber-range" className="inline-block">
                  <Button
                    variant="ghost"
                    className="group/btn p-0 h-auto font-medium text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Hackathon Platform Card */}
            <Card className="h-full transition-all duration-300 cursor-pointer group border-2 border-slate-700 bg-slate-950 shadow-card hover:shadow-card-hover hover:border-cyan-400/40 hover:-translate-y-1">
              <CardHeader className="space-y-4">
                <div className="h-16 w-16 rounded-2xl bg-slate-800 flex items-center justify-center group-hover:scale-105 transition-all duration-300 border-2 border-slate-600 group-hover:border-cyan-400/60">
                  <Trophy
                    className="h-8 w-8 text-slate-300 group-hover:text-cyan-400 transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold leading-tight text-slate-50">Hackathon Hosting Platform</h3>
                  <p className="text-cyan-400 font-medium text-sm">Host. Manage. Inspire. Secure.</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-sm text-slate-300 leading-relaxed">
                  Host security-focused innovation events at scale. Manage challenges, teams, and submissions with
                  comprehensive workflows. Monitor events in real-time with detailed dashboards and automated scoring
                  systems designed to support hundreds of participants simultaneously.
                </p>
                <Link href="/products/hackathon" className="inline-block">
                  <Button
                    variant="ghost"
                    className="group/btn p-0 h-auto font-medium text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why DeepTrustxAI */}
      <section id="why-us" className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Why DeepTrustxAI</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Enterprise security built on trust, transparency, and technical excellence
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-lg bg-cyan-400/10 flex items-center justify-center border border-cyan-400/20">
                  <Zap className="h-5 w-5 text-cyan-400" strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-slate-50">AI-Driven Security Intelligence</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Advanced AI capabilities reduce false positives, prioritize risks, and provide natural language
                  queries for faster threat analysis.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-lg bg-cyan-400/10 flex items-center justify-center border border-cyan-400/20">
                  <Lock className="h-5 w-5 text-cyan-400" strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-slate-50">Open-Source Foundation</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Built on proven open-source security tools, avoiding vendor lock-in while providing enterprise-grade
                  features.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-lg bg-cyan-400/10 flex items-center justify-center border border-cyan-400/20">
                  <ShieldCheck className="h-5 w-5 text-cyan-400" strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-slate-50">On-Prem & Private Deployments</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Deploy in your own environment with complete control over your data and infrastructure.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-lg bg-cyan-400/10 flex items-center justify-center border border-cyan-400/20">
                  <Eye className="h-5 w-5 text-cyan-400" strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-slate-50">Privacy-First Design</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Your data never leaves your environment. Security-by-design architecture ensures complete data
                  sovereignty.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-lg bg-cyan-400/10 flex items-center justify-center border border-cyan-400/20">
                  <Database className="h-5 w-5 text-cyan-400" strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-slate-50">Enterprise & Government Ready</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Designed for regulated industries and critical infrastructure with compliance-focused deployment
                  options.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-lg bg-cyan-400/10 flex items-center justify-center border border-cyan-400/20">
                  <Radar className="h-5 w-5 text-cyan-400" strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-slate-50">Actionable Security Outcomes</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Move beyond alerts to actionable insights with risk-based prioritization and clear remediation
                  guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Privacy */}
      <section className="py-20 sm:py-32 bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Compliance, Privacy & Trust</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              DeepTrustxAI is built with a security-by-design architecture that ensures your data never leaves your
              environment. Our platform is specifically designed for regulated industries, government agencies, and
              critical infrastructure operators.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              With on-premise and private cloud deployment options, you maintain complete control over your security
              data and meet stringent compliance requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 sm:py-32 bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Get Started with DeepTrustxAI</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Ready to enhance your security posture? Contact us to schedule a demo or discuss your security needs.
            </p>
            <a
              href="mailto:contact.deeptrustxai@gmail.com"
              className="inline-flex items-center gap-3
                        px-6 py-3 rounded-full
                        bg-slate-800/80 backdrop-blur-md
                        border border-cyan-400/30
                        text-cyan-400 font-medium
                        shadow-lg shadow-cyan-500/10
                        hover:bg-slate-800
                        hover:shadow-cyan-500/30
                        transition-all duration-300
                        hover:-translate-y-0.5"
              >
                <Mail className="h-5 w-5" />
                <span>contact.deeptrustxai@gmail.com</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
