"use client"

import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Target, TrendingUp, Settings, Search, BarChart3 } from "lucide-react"
import Link from "next/link"

const countryData = {
  indonesia: { name: "Indonesia", flag: "🇮🇩" },
  kenya: { name: "Kenya", flag: "🇰🇪" },
  peru: { name: "Peru", flag: "🇵🇪" },
  finland: { name: "Finland", flag: "🇫🇮" },
}

// Sample realistic diagnosis data
const sampleDiagnosis = {
  country: "kenya",
  params: {
    learningRecovery: 4,
    digitalAccess: 3,
    teacherQuality: 6,
    fundingLevel: 4,
    notes:
      "Post-election period with new education minister, ongoing teacher strikes in urban areas, drought affecting rural school attendance",
  },
  insights: {
    challenges: [
      "Severe digital infrastructure gaps limiting remote learning capabilities",
      "Learning loss recovery lagging behind regional benchmarks by 18 months",
      "Teacher workforce instability due to compensation disputes and working conditions",
    ],
    causes: [
      "Limited rural connectivity infrastructure and device access (only 23% of rural schools have reliable internet)",
      "Insufficient targeted remedial programming - current catch-up initiatives reach only 35% of affected students",
      "Teacher compensation packages 40% below regional average, leading to 28% annual turnover in high-need areas",
    ],
    metrics: [
      "Grade 3 reading fluency rates (currently 31% vs. target 60%)",
      "Student-to-device ratios in rural schools (currently 15:1 vs. target 3:1)",
      "Teacher retention rates in underserved areas (currently 72% vs. target 90%)",
      "Learning poverty index (percentage of 10-year-olds unable to read simple text)",
    ],
    interventions: [
      "Mobile learning labs with offline-capable tablets for rural schools (pilot in 50 schools, scale to 500)",
      "Intensive remedial tutoring using community volunteers and retired teachers (target 100,000 students)",
      "Teacher incentive package including housing allowances, professional development stipends, and career pathways",
      "Mother-tongue literacy program leveraging local languages in early grades",
    ],
  },
}

export default function DiagnosisPage() {
  const searchParams = useSearchParams()
  const country = searchParams.get("country") || ""
  const learningRecovery = Number.parseInt(searchParams.get("lr") || "5")
  const digitalAccess = Number.parseInt(searchParams.get("da") || "5")
  const teacherQuality = Number.parseInt(searchParams.get("tq") || "5")
  const fundingLevel = Number.parseInt(searchParams.get("fl") || "5")
  const notes = searchParams.get("notes") || ""

  const countryInfo = countryData[country as keyof typeof countryData]

  // Generate insights based on inputs
  const generateInsights = () => {
    const challenges = []
    const causes = []
    const metrics = []
    const interventions = []

    if (learningRecovery < 6) {
      if (learningRecovery <= 3) {
        challenges.push({
          text: "Critical learning loss crisis - students performing 2+ grade levels below expectations",
          sdg: "SDG 4.1 – Ensure quality primary education",
        })
        causes.push({
          text: "Prolonged school closures combined with inadequate remote learning infrastructure",
          sdg: "SDG 4.1 – Ensure quality primary education",
        })
        interventions.push({
          text: "Emergency learning acceleration program with extended school days and intensive tutoring",
          sdg: "SDG 4.1 – Ensure quality primary education",
        })
      } else {
        challenges.push({
          text: "Significant learning loss recovery gaps affecting foundational skills",
          sdg: "SDG 4.1 – Ensure quality primary education",
        })
        causes.push({
          text: "Insufficient targeted remedial programming and assessment systems",
          sdg: "SDG 4.1 – Ensure quality primary education",
        })
        interventions.push({
          text: "Structured remedial tutoring programs using diagnostic assessments",
          sdg: "SDG 4.1 – Ensure quality primary education",
        })
      }
    }

    if (digitalAccess < 6) {
      if (digitalAccess <= 3) {
        challenges.push("Severe digital divide limiting equitable access to modern learning tools")
        causes.push("Inadequate rural connectivity infrastructure and prohibitive device costs")
        interventions.push("Mobile learning labs with offline-capable devices and satellite connectivity")
      } else {
        challenges.push({
          text: "Limited technology infrastructure hindering digital learning integration",
          sdg: "SDG 4.4 – Increase digital skills",
        })
        causes.push({
          text: "Insufficient investment in school-level digital infrastructure",
          sdg: "SDG 4.4 – Increase digital skills",
        })
        interventions.push({
          text: "Phased technology infrastructure upgrade with teacher training component",
          sdg: "SDG 4.4 – Increase digital skills",
        })
      }
      metrics.push("Student-to-device ratios across urban/rural divide")
      metrics.push("Schools with reliable high-speed internet connectivity")
    }

    if (teacherQuality < 6) {
      if (teacherQuality <= 3) {
        challenges.push("Teacher workforce crisis with high turnover and qualification gaps")
        causes.push("Inadequate compensation, limited career advancement, and poor working conditions")
        interventions.push(
          "Comprehensive teacher support package including housing, professional development, and retention bonuses",
        )
      } else {
        challenges.push({
          text: "Teacher workforce capacity constraints affecting instruction quality",
          sdg: "SDG 4.c – Increase qualified teachers",
        })
        causes.push({
          text: "Limited professional development opportunities and support systems",
          sdg: "SDG 4.c – Increase qualified teachers",
        })
        interventions.push({
          text: "Enhanced teacher training programs with mentorship and coaching support",
          sdg: "SDG 4.c – Increase qualified teachers",
        })
      }
      metrics.push("Teacher retention rates in high-need schools")
      metrics.push("Percentage of teachers meeting subject-matter competency standards")
    }

    if (fundingLevel < 6) {
      if (fundingLevel <= 3) {
        challenges.push("Severe resource constraints limiting basic educational service delivery")
        causes.push("Insufficient education budget allocation and inefficient resource distribution")
        interventions.push("Emergency funding mobilization with international donor coordination")
      } else {
        challenges.push("Resource allocation inefficiencies limiting program effectiveness")
        causes.push("Suboptimal budget execution and limited evidence-based resource targeting")
        interventions.push("Budget optimization with performance-based allocation mechanisms")
      }
      metrics.push("Per-pupil spending compared to regional benchmarks")
      metrics.push("Budget execution rates and resource utilization efficiency")
    }

    // Cross-cutting issues based on combinations
    if (learningRecovery < 5 && digitalAccess < 5) {
      challenges.push("Compounding effects of learning loss and digital exclusion creating long-term disadvantage")
      causes.push("Pandemic response gaps exposed and amplified existing inequalities")
    }

    if (teacherQuality < 5 && fundingLevel < 5) {
      challenges.push("Systemic capacity constraints limiting sustainable improvement potential")
      causes.push("Underinvestment in human capital development and retention")
    }

    // Add contextual metrics based on notes
    if (notes.toLowerCase().includes("rural")) {
      metrics.push("Urban-rural learning outcome gaps")
    }
    if (notes.toLowerCase().includes("election") || notes.toLowerCase().includes("political")) {
      metrics.push("Policy continuity and implementation consistency indicators")
    }

    // Ensure minimum content
    if (challenges.length === 0) {
      challenges.push("Maintaining educational excellence while scaling innovative practices")
      challenges.push("Ensuring equitable access to high-quality learning opportunities")
      challenges.push("Preparing students for rapidly evolving economic demands")
    }

    if (causes.length === 0) {
      causes.push("Need for continuous innovation in high-performing systems")
      causes.push("Balancing standardization with personalized learning approaches")
    }

    if (metrics.length === 0) {
      metrics.push("International assessment performance trends (PISA, TIMSS)")
      metrics.push("21st-century skills development indicators")
      metrics.push("Post-secondary readiness and success rates")
    }

    if (interventions.length === 0) {
      interventions.push("Innovation labs for piloting next-generation learning approaches")
      interventions.push("Advanced teacher professional learning communities")
      interventions.push("Personalized learning technology integration")
    }

    return {
      challenges: challenges.slice(0, 3),
      causes: causes.slice(0, 3),
      metrics: metrics.slice(0, 4),
      interventions: interventions.slice(0, 4),
    }
  }

  const insights = generateInsights()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-blue-900 mb-4">Diagnosis Summary</h1>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-2xl">{countryInfo?.flag}</span>
              <span className="text-xl text-blue-700">{countryInfo?.name}</span>
            </div>
            <p className="text-lg text-blue-700">AI-powered analysis based on your system configuration</p>
          </div>

          {/* Insights Grid */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            {/* Priority Challenges */}
            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-800">
                  <AlertTriangle className="h-5 w-5" />🔍 Top Priority Challenges
                </CardTitle>
                <CardDescription>Critical areas requiring immediate attention</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {insights.challenges.map((challenge, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-start gap-2">
                        <Badge variant="destructive" className="mt-1">
                          {index + 1}
                        </Badge>
                        <span className="text-sm">{challenge.text}</span>
                      </div>
                      <div className="ml-8">
                        <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700">
                          🔗 {challenge.sdg}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Root Causes */}
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-800">
                  <Target className="h-5 w-5" />🧠 Root Causes
                </CardTitle>
                <CardDescription>Underlying factors driving current challenges</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {insights.causes.map((cause, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm">{cause}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Suggested Metrics */}
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-800">
                  <TrendingUp className="h-5 w-5" />📈 Suggested Metrics to Track
                </CardTitle>
                <CardDescription>Key performance indicators for monitoring progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {insights.metrics.map((metric, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm">{metric}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Sample Interventions */}
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-800">
                  <Settings className="h-5 w-5" />
                  ⚙️ Sample Interventions
                </CardTitle>
                <CardDescription>Evidence-based strategies for improvement</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {insights.interventions.map((intervention, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Badge variant="secondary" className="mt-1 bg-green-100 text-green-800">
                        {index + 1}
                      </Badge>
                      <span className="text-sm">{intervention}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Context Analysis */}
          {notes && (
            <Card className="mb-8 border-yellow-200 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-yellow-800">Contextual Analysis & Risk Assessment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-yellow-700">{notes}</p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-2">Political Economy Factors</h4>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      {notes.toLowerCase().includes("election") && (
                        <li>• Post-election transition may affect policy continuity</li>
                      )}
                      {notes.toLowerCase().includes("strike") && (
                        <li>• Labor disputes require immediate stakeholder engagement</li>
                      )}
                      {notes.toLowerCase().includes("drought") && (
                        <li>• Climate impacts affecting school attendance and nutrition</li>
                      )}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-2">Implementation Considerations</h4>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      <li>• Stakeholder buy-in critical for sustainable reform</li>
                      <li>• Phased implementation recommended given context</li>
                      <li>• Monitor political stability indicators</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white p-3 rounded border-l-4 border-yellow-400">
                  <p className="text-sm text-yellow-800">
                    <strong>Simulated World Bank Assessment:</strong> Current context suggests moderate implementation
                    risk. Recommend 6-month stakeholder engagement phase before major policy rollout. Success
                    probability: 72% with proper change management, 45% without.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/recommendations">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Search className="mr-2 h-5 w-5" />
                Explore Policy Recommendations
              </Button>
            </Link>
            <Link href="/scenario-planner">
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <BarChart3 className="mr-2 h-5 w-5" />
                Open Scenario Planner
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
