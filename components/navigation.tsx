"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/darkmode.png"
                alt="DeepTrustxAI Logo"
                width={40}
                height={40}
                className="h-10 w-10"
                priority
              />
              <span className="font-bold text-xl">
                <span className="text-white">DeepT</span>
                <span className="text-cyan-400">rustxAI</span>
              </span>

            </Link>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center gap-6">
              <Link href="/#products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Products
              </Link>
              <Link href="/#academy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Academy
              </Link>
              <Link href="/#why-us" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Why DeepTrustxAI
              </Link>
              <Link href="/#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
              <Button asChild>
                <Link href="/#contact">Get Started</Link>
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/#products"
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/#academy"
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Academy
            </Link>
            <Link
              href="/#why-us"
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Why DeepTrustxAI
            </Link>
            <Link
              href="/#contact"
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button asChild className="w-full">
              <Link href="/#contact" onClick={() => setMobileMenuOpen(false)}>
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
