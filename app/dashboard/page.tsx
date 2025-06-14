import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const countries = [
  {
    id: "kenya",
    name: "Kenya",
    flag: "🇰🇪",
    score: 44,
    status: "Needs Attention",
    population: "54.0M",
    lastUpdate: "Dec 2024",
  },
  {
    id: "indonesia",
    name: "Indonesia",
    flag: "🇮🇩",
    score: 62,
    status: "Improving",
    population: "273.5M",
    lastUpdate: "Dec 2024",
  },
  {
    id: "peru",
    name: "Peru",
    flag: "🇵🇪",
    score: 58,
    status: "Moderate",
    population: "33.0M",
    lastUpdate: "Nov 2024",
  },
  {
    id: "finland",
    name: "Finland",
    flag: "🇫🇮",
    score: 89,
    status: "Excellent",
    population: "5.5M",
    lastUpdate: "Dec 2024",
  },
]

export default function DashboardPage() {
  const getScoreColor = (score: number) => {
    if (score >= 70) return "text-green-600"
    if (score >= 50) return "text-yellow-600"
    return "text-red-600"
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Excellent":
        return "bg-green-100 text-green-800"
      case "Improving":
        return "bg-blue-100 text-blue-800"
      case "Moderate":
        return "bg-yellow-100 text-yellow-800"
      case "Needs Attention":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-blue-900 mb-4">Country Dashboards</h1>
            <p className="text-lg text-blue-700">Select a country to view detailed education system analysis</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {countries.map((country) => (
              <Card key={country.id} className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2">{country.flag}</div>
                  <CardTitle className="text-blue-900">{country.name}</CardTitle>
                  <CardDescription>
                    {country.population} • {country.lastUpdate}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div>
                    <div className={`text-3xl font-bold ${getScoreColor(country.score)}`}>{country.score}/100</div>
                    <p className="text-sm text-blue-600">Education Index</p>
                  </div>

                  <div
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(country.status)}`}
                  >
                    {country.status}
                  </div>

                  <Link href={`/dashboard/${country.id}`}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      View Dashboard
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
