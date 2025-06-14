"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Home, Search, BarChart3, Target, MessageCircle, Globe, BookOpen, Users } from "lucide-react"

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Dashboards", href: "/dashboard", icon: Globe },
  { name: "Diagnostics", href: "/diagnostics", icon: Target },
  { name: "Recommendations", href: "/recommendations", icon: Search },
  { name: "Scenario Planner", href: "/scenario-planner", icon: BarChart3 },
  { name: "Peer Playbook", href: "/peer-playbook", icon: BookOpen },
  { name: "Learning Hub", href: "/learning-hub", icon: Users },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="bg-white border-b border-blue-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">EP</span>
            </div>
            <span className="text-xl font-bold text-blue-900">EduPilot</span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))

              return (
                <Link key={item.name} href={item.href}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className={cn(
                      "flex items-center space-x-2",
                      isActive ? "bg-blue-600 text-white hover:bg-blue-700" : "text-blue-700 hover:bg-blue-50",
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Button>
                </Link>
              )
            })}
          </div>

          <Button size="sm" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            <MessageCircle className="h-4 w-4 mr-2" />
            Ask Consultant
          </Button>
        </div>
      </div>
    </nav>
  )
}
