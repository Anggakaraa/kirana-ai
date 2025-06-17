import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const countries = [
  {
    id: "indonesia",
    name: "Indonesia",
    flag: "🇮🇩",
    score: 366,
    status: "Below OECD Average",
    population: "273.5M",
    lastUpdate: "PISA 2022",
  },
  {
    id: "singapore",
    name: "Singapore",
    flag: "🇸🇬",
    score: 575,
    status: "Top Performer",
    population: "5.9M",
    lastUpdate: "PISA 2022",
  },
  {
    id: "chile",
    name: "Chile",
    flag: "🇨🇱",
    score: 412,
    status: "Near OECD Average",
    population: "19.1M",
    lastUpdate: "PISA 2022",
  },
  {
    id: "finland",
    name: "Finland",
    flag: "🇫🇮",
    score: 484,
    status: "Above OECD Average",
    population: "5.5M",
    lastUpdate: "PISA 2022",
  },
]

export default function DashboardPage() {
  const getScoreColor = (score: number) => {
    if (score >= 500) return "text-emerald-600"
    if (score >= 450) return "text-amber-600"
    return "text-red-600"
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Below OECD Average":
        return "bg-red-50 text-red-700 border-red-200"
      case "Near OECD Average":
        return "bg-amber-50 text-amber-700 border-amber-200"
      case "Above OECD Average":
        return "bg-blue-50 text-blue-700 border-blue-200"
      case "Top Performer":
        return "bg-emerald-50 text-emerald-700 border-emerald-200"
      default:
        return "bg-gray-50 text-gray-700 border-gray-200"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">PISA Country Scorecards</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Select a country to view detailed PISA performance analysis and insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {countries.map((country) => (
              <Card
                key={country.id}
                className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/20"
              >
                <CardHeader className="text-center pb-4">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{country.flag}</div>
                  <CardTitle className="text-foreground text-xl mb-2">{country.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {country.population} • {country.lastUpdate}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-6 pt-4">
                  <div className="space-y-2">
                    <div className={`text-4xl font-bold ${getScoreColor(country.score)}`}>{country.score}</div>
                    <p className="text-sm text-muted-foreground font-medium">Math Score (PISA 2022)</p>
                  </div>

                  <div
                    className={`inline-block px-4 py-2 rounded-full text-sm font-medium border ${getStatusColor(country.status)}`}
                  >
                    {country.status}
                  </div>

                  <Link href={`/dashboard/${country.id}`} className="block">
                    <Button className="w-full h-12 font-semibold group-hover:shadow-lg transition-all">
                      View Dashboard
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
