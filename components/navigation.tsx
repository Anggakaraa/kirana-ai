"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Home, Target, MessageCircle, Globe, BookOpen, Users } from "lucide-react"

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Dashboards", href: "/dashboard", icon: Globe },
  { name: "Diagnostics", href: "/diagnostics", icon: Target },
  { name: "Peer Playbook", href: "/peer-playbook", icon: BookOpen },
  { name: "Learning Hub", href: "/learning-hub", icon: Users },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
              <span className="text-primary-foreground font-bold text-lg">K</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground">Kirana</span>
              <span className="text-xs text-muted-foreground -mt-1">Education Intelligence</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-2">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))

              return (
                <Link key={item.name} href={item.href}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    size="sm"
                    className={cn(
                      "flex items-center space-x-2 h-10 px-4 font-medium transition-all",
                      isActive
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent",
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Button>
                </Link>
              )
            })}
          </div>

          <Button size="sm" variant="outline" className="border-primary/20 text-primary hover:bg-primary/5 font-medium">
            <MessageCircle className="h-4 w-4 mr-2" />
            Ask Consultant
          </Button>
        </div>
      </div>
    </nav>
  )
}
