import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import Link from "next/link"

interface ProductCardProps {
  name: string
  tagline: string
  description: string
  icon: LucideIcon
  href: string
}

export function ProductCard({ name, tagline, description, icon: Icon, href }: ProductCardProps) {
  return (
    <Card className="h-full transition-all duration-300 cursor-pointer group border-2 border-slate-700 bg-slate-950 shadow-card hover:shadow-card-hover hover:border-cyan-400/40 hover:-translate-y-1">
      <CardHeader className="space-y-4">
        <div className="h-16 w-16 rounded-2xl bg-slate-800 flex items-center justify-center group-hover:scale-105 transition-all duration-300 border-2 border-slate-600 group-hover:border-cyan-400/60">
          <Icon
            className="h-8 w-8 text-slate-300 group-hover:text-cyan-400 transition-colors duration-300"
            strokeWidth={1.5}
          />
        </div>
        <div className="space-y-2">
          <CardTitle className="text-xl font-semibold leading-tight text-slate-50">{name}</CardTitle>
          <CardDescription className="text-cyan-400 font-medium text-sm">{tagline}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-sm text-slate-300 leading-relaxed">{description}</p>
        <Link href={href} className="inline-block">
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
  )
}
