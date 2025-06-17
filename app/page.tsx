import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, TrendingUp, Users, DollarSign, Brain, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center max-w-5xl mx-auto">
          <div className="mb-12">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
              Kirana: Your Education
              <span className="text-primary"> Intelligence Partner</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-6 max-w-4xl mx-auto leading-relaxed">
              In a world overflowing with data, Kirana emerges as your guiding light.
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
              Transform complex educational insights into actionable strategies, and empower system leaders to take
              action that results in meaningful student learning outcomes.
            </p>
          </div>

          <div className="mb-16">
            <Link href="/diagnostics">
              <Button size="lg" className="h-14 px-8 text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
                <Brain className="mr-3 h-6 w-6" />
                Start Diagnosis
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Quick Links Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
            {[
              {
                icon: BookOpen,
                title: "Learning Loss",
                description: "Assess and address pandemic-related learning gaps",
              },
              {
                icon: Users,
                title: "Equity Gaps",
                description: "Identify and close educational disparities",
              },
              {
                icon: DollarSign,
                title: "Funding Strategy",
                description: "Optimize resource allocation and investment",
              },
              {
                icon: TrendingUp,
                title: "AI in Education",
                description: "Leverage technology for better outcomes",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20 cursor-pointer"
              >
                <CardHeader className="text-center p-8">
                  <item.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-foreground text-lg mb-3">{item.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* What You Can Do Section */}
      <div className="bg-white py-20 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">What You Can Do with Kirana</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Kirana helps education leaders and advisors make better, faster decisions. With this platform, you can:
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  emoji: "📊",
                  title: "Diagnose key education system challenges",
                  description: "Using globally benchmarked indicators to identify priority areas for improvement",
                },
                {
                  emoji: "🔍",
                  title: "Explore policy recommendations",
                  description: "Aligned with international best practices and your national context",
                },
                {
                  emoji: "🌍",
                  title: "Learn from peer countries",
                  description: "Through success stories and case studies from around the world",
                },
                {
                  emoji: "🤝",
                  title: "Join a community of education changemakers",
                  description: "Through the Kirana Learning Hub for continuous learning and collaboration",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-6 p-6 rounded-2xl hover:bg-accent/50 transition-colors"
                >
                  <div className="text-4xl flex-shrink-0">{item.emoji}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gradient-to-br from-accent/30 to-primary/5 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Evidence-Based Policy Guidance</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Combining global best practices with local context to deliver actionable insights for education leaders
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Brain,
                title: "AI-Powered Analysis",
                description: "Advanced algorithms analyze your education system and provide targeted recommendations",
              },
              {
                icon: TrendingUp,
                title: "Real-Time Insights",
                description: "Monitor key metrics and track progress with dynamic dashboards and alerts",
              },
              {
                icon: Users,
                title: "Global Best Practices",
                description: "Access proven strategies from education systems worldwide, adapted to your context",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-primary/10 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
