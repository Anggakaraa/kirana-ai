import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, TrendingUp, Users, DollarSign, Brain } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6">
            <h1 className="text-5xl font-bold text-blue-900 mb-4">The World's Smartest Education Consultant</h1>
            <p className="text-xl text-blue-700 mb-8">Real-time insights. Local context. Better decisions.</p>
          </div>

          <div className="mb-12">
            <Link href="/diagnostics">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                <Brain className="mr-2 h-5 w-5" />
                Start Diagnosis
              </Button>
            </Link>
          </div>

          {/* Quick Links Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-blue-200">
              <CardHeader className="text-center">
                <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-blue-900">Learning Loss</CardTitle>
                <CardDescription>Assess and address pandemic-related learning gaps</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-blue-200">
              <CardHeader className="text-center">
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-blue-900">Equity Gaps</CardTitle>
                <CardDescription>Identify and close educational disparities</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-blue-200">
              <CardHeader className="text-center">
                <DollarSign className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-blue-900">Funding Strategy</CardTitle>
                <CardDescription>Optimize resource allocation and investment</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-blue-200">
              <CardHeader className="text-center">
                <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-blue-900">AI in Education</CardTitle>
                <CardDescription>Leverage technology for better outcomes</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>

      {/* What You Can Do with EduPilot Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">What You Can Do with EduPilot</h2>
            <p className="text-lg text-blue-700 text-center mb-12">
              EduPilot helps education leaders and advisors make better, faster decisions. With this platform, you can:
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-2xl">📊</div>
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">Diagnose key education system challenges</h3>
                  <p className="text-blue-700">
                    Using globally benchmarked indicators to identify priority areas for improvement
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-2xl">🔍</div>
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">Explore policy recommendations</h3>
                  <p className="text-blue-700">Aligned with international best practices and your national context</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-2xl">📈</div>
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">Simulate scenarios</h3>
                  <p className="text-blue-700">See how interventions could impact learning outcomes over time</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-2xl">🌍</div>
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">Learn from peer countries</h3>
                  <p className="text-blue-700">Through success stories and case studies from around the world</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-2xl">🤝</div>
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">Join a community of education changemakers</h3>
                  <p className="text-blue-700">
                    Through the EduPilot Learning Hub for continuous learning and collaboration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Evidence-Based Policy Guidance</h2>
            <p className="text-lg text-blue-700 max-w-2xl mx-auto">
              Combining global best practices with local context to deliver actionable insights for education leaders
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">AI-Powered Analysis</h3>
              <p className="text-blue-700">
                Advanced algorithms analyze your education system and provide targeted recommendations
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Real-Time Insights</h3>
              <p className="text-blue-700">Monitor key metrics and track progress with dynamic dashboards and alerts</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Global Best Practices</h3>
              <p className="text-blue-700">
                Access proven strategies from education systems worldwide, adapted to your context
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
