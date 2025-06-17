"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Brain,
  Download,
  RotateCcw,
  FileText,
  Lightbulb,
  Target,
  Globe,
  ExternalLink,
  BookOpen,
  Users,
  ArrowRight,
} from "lucide-react"

const countries = [
  { id: "indonesia", name: "Indonesia", flag: "🇮🇩" },
  { id: "singapore", name: "Singapore", flag: "🇸🇬" },
  { id: "kenya", name: "Kenya", flag: "🇰🇪" },
  { id: "finland", name: "Finland", flag: "🇫🇮" },
]

export default function DiagnosticsPage() {
  const [selectedCountry, setSelectedCountry] = useState("")
  const [priority, setPriority] = useState("")
  const [policyReforms, setPolicyReforms] = useState<string[]>([])
  const [additionalContext, setAdditionalContext] = useState("")
  const [showResults, setShowResults] = useState(false)

  const togglePolicyReform = (reform: string) => {
    setPolicyReforms((prev) => (prev.includes(reform) ? prev.filter((r) => r !== reform) : [...prev, reform]))
  }

  const generateDiagnostic = () => {
    if (selectedCountry === "indonesia") {
      return `Indonesia demonstrates significant challenges in foundational learning outcomes, with only 30.1% of students achieving Level 2+ proficiency across core subjects—well below OECD averages. However, the country shows relatively strong equity indicators with low socio-economic impact (8.9%) and improving learning environment conditions. The high proportion of low performers (71.5% in mathematics) indicates urgent need for foundational skills interventions.`
    } else if (selectedCountry === "singapore") {
      return `Singapore maintains exceptional learning outcomes with 91.0% of students achieving Level 2+ proficiency, significantly outperforming OECD averages. The challenge lies in equity, with socio-economic background explaining 12.5% of performance variance. Strong learning environment indicators (80.1% average) provide a solid foundation for targeted equity interventions.`
    } else if (selectedCountry === "kenya") {
      return `Kenya faces substantial challenges across all education indicators, with limited access to quality education and significant resource constraints. Rural-urban disparities are pronounced, and teacher shortages affect instructional quality. However, recent policy reforms show promise for systemic improvement.`
    } else {
      return `Finland continues to demonstrate strong, equitable education outcomes with high performance across all domains. The focus should be on maintaining excellence while adapting to 21st-century skill demands and addressing emerging challenges in digital learning integration.`
    }
  }

  const generateRecommendations = () => {
    const recommendations = []

    if (selectedCountry === "indonesia") {
      recommendations.push({
        title: "Implement Teaching at the Right Level (TaRL) Methodology",
        description:
          "Adopt structured pedagogy that groups students by learning level rather than age/grade to address foundational gaps in literacy and numeracy.",
        context: "Similar low-middle income countries with high proportions of low performers",
        bestPractices: [
          {
            title: "Pratham's Read India Program",
            location: "India",
            outcome: "Improved reading levels by 40% in participating schools",
            source: "J-PAL Policy Insight: Teaching at the Right Level",
            link: "https://www.povertyactionlab.org/policy-insight/teaching-right-level",
            type: "case-study",
          },
          {
            title: "Ghana's National Literacy Acceleration Program",
            location: "Ghana",
            outcome: "65% of students achieved grade-level reading within 2 years",
            source: "World Bank Implementation Report 2022",
            link: "#",
            type: "case-study",
          },
        ],
        academicResearch: [
          {
            title: "The Impact of Teaching at the Right Level on Student Learning",
            authors: "Banerjee, A., Banerji, R., Berry, J., et al.",
            journal: "American Economic Journal: Applied Economics",
            year: "2017",
            finding: "TaRL interventions led to 0.28 standard deviation improvement in test scores",
            link: "https://www.aeaweb.org/articles?id=10.1257/app.20150146",
            methodology: "Randomized Controlled Trial across 60 schools",
          },
          {
            title: "Structured Pedagogy and Student Learning in Developing Countries",
            authors: "Conn, K. M.",
            journal: "Review of Educational Research",
            year: "2017",
            finding: "Structured pedagogy programs show average effect size of 0.26 standard deviations",
            link: "#",
            methodology: "Meta-analysis of 56 studies",
          },
        ],
        priority: priority === "performance" ? "high" : "medium",
      })

      recommendations.push({
        title: "Establish Community-Based Teacher Support Networks",
        description:
          "Create local teacher learning communities with peer mentoring and regular classroom observation to improve instruction quality and retention.",
        context: "Countries with teacher shortage and limited professional development infrastructure",
        bestPractices: [
          {
            title: "Rwanda's Teacher Cooperatives Program",
            location: "Rwanda",
            outcome: "Teacher retention increased by 35%, student performance improved by 22%",
            source: "USAID Rwanda Education Report 2021",
            link: "#",
            type: "case-study",
          },
          {
            title: "Philippines' School-Based Management Plus",
            location: "Philippines",
            outcome: "Reduced teacher absenteeism by 28% and improved teaching practices",
            source: "World Bank Education Sector Review",
            link: "#",
            type: "case-study",
          },
        ],
        academicResearch: [
          {
            title: "Teacher Professional Learning Communities in Developing Countries",
            authors: "Vescio, V., Ross, D., & Adams, A.",
            journal: "Review of Educational Research",
            year: "2008",
            finding: "Teacher PLCs associated with 21% improvement in student achievement",
            link: "#",
            methodology: "Systematic review of 11 studies",
          },
        ],
        priority: "high",
      })

      if (priority === "equity") {
        recommendations.push({
          title: "Implement Targeted School Feeding Programs",
          description:
            "Provide nutritious meals in schools with high food insecurity rates to improve attendance and learning readiness.",
          context: "Countries with significant food insecurity affecting school attendance",
          bestPractices: [
            {
              title: "Brazil's National School Feeding Program",
              location: "Brazil",
              outcome: "Increased enrollment by 37% and reduced dropout rates by 25%",
              source: "World Food Programme Impact Assessment 2020",
              link: "#",
              type: "case-study",
            },
          ],
          academicResearch: [
            {
              title: "School Feeding Programs and Educational Outcomes",
              authors: "Kristjansson, B., et al.",
              journal: "Cochrane Reviews",
              year: "2016",
              finding: "School feeding increased attendance by 9% and improved cognitive performance",
              link: "#",
              methodology: "Systematic review of 32 RCTs",
            },
          ],
          priority: "high",
        })
      }
    } else if (selectedCountry === "singapore") {
      recommendations.push({
        title: "Implement Socio-Economic School Integration Policies",
        description:
          "Reform school zoning and admission policies to reduce socio-economic segregation and promote diverse learning environments.",
        context: "High-performing systems seeking to improve equity outcomes",
        bestPractices: [
          {
            title: "Finland's Comprehensive School Reform",
            location: "Finland",
            outcome: "Reduced between-school variance by 60% while maintaining high performance",
            source: "OECD Education Policy Review: Finland",
            link: "#",
            type: "policy-reform",
          },
          {
            title: "Ontario's Equity and Inclusive Education Strategy",
            location: "Canada (Ontario)",
            outcome: "Narrowed achievement gaps by 40% over 10 years",
            source: "Ontario Ministry of Education Report 2017",
            link: "#",
            type: "policy-reform",
          },
        ],
        academicResearch: [
          {
            title: "School Socioeconomic Composition and Student Achievement",
            authors: "Van Ewijk, R., & Sleegers, P.",
            journal: "Journal of School Effectiveness and School Improvement",
            year: "2010",
            finding: "10% increase in school SES composition associated with 0.3 SD improvement for low-SES students",
            link: "#",
            methodology: "Multi-level analysis across 15 countries",
          },
        ],
        priority: priority === "equity" ? "high" : "medium",
      })

      recommendations.push({
        title: "Develop Comprehensive Student Support Systems",
        description:
          "Create wraparound services including counseling, academic support, and family engagement programs for disadvantaged students.",
        context: "High-performing systems addressing persistent equity gaps",
        bestPractices: [
          {
            title: "New Zealand's Student Achievement Initiative",
            location: "New Zealand",
            outcome: "Reduced achievement gaps for Māori and Pacific students by 30%",
            source: "New Zealand Ministry of Education Evaluation 2019",
            link: "#",
            type: "program",
          },
        ],
        academicResearch: [
          {
            title: "Wraparound Services and Academic Achievement",
            authors: "Durlak, J. A., et al.",
            journal: "Child Development",
            year: "2011",
            finding: "Comprehensive support programs improved academic performance by 0.27 SD",
            link: "#",
            methodology: "Meta-analysis of 213 studies",
          },
        ],
        priority: "medium",
      })
    }

    if (policyReforms.includes("curriculum")) {
      recommendations.push({
        title: "Implement Competency-Based Curriculum Framework",
        description:
          "Shift from content-based to competency-based curriculum emphasizing critical thinking, problem-solving, and 21st-century skills.",
        context: "Countries undergoing curriculum modernization",
        bestPractices: [
          {
            title: "British Columbia's Curriculum Redesign",
            location: "Canada (BC)",
            outcome: "Improved student engagement by 45% and critical thinking scores by 32%",
            source: "BC Ministry of Education Assessment Report 2020",
            link: "#",
            type: "curriculum-reform",
          },
        ],
        academicResearch: [
          {
            title: "Competency-Based Education: A Meta-Analysis",
            authors: "Guskey, T. R., & Jung, L. A.",
            journal: "Educational Assessment",
            year: "2013",
            finding: "CBE approaches showed 0.31 SD improvement in student outcomes",
            link: "#",
            methodology: "Meta-analysis of 47 studies",
          },
        ],
        priority: "high",
      })
    }

    return recommendations.sort((a, b) => (a.priority === "high" ? -1 : 1))
  }

  const runDiagnostics = () => {
    if (selectedCountry) {
      setShowResults(true)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Education System Diagnostics</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get AI-powered insights and evidence-based recommendations for your education system
            </p>
          </div>

          {/* Input Section */}
          <Card className="mb-12 border-border/50 shadow-sm">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center gap-3 text-foreground text-2xl">
                <Globe className="h-6 w-6 text-primary" />
                System Configuration
              </CardTitle>
              <CardDescription className="text-muted-foreground text-lg">
                Configure your education system parameters for personalized analysis
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8 pt-2">
              {/* Country Selection */}
              <div className="space-y-3">
                <Label htmlFor="country" className="text-foreground font-semibold text-base">
                  Select Country
                </Label>
                <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                  <SelectTrigger className="w-full h-12 text-base">
                    <SelectValue placeholder="Choose your country..." />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country.id} value={country.id}>
                        <span className="flex items-center gap-3">
                          <span className="text-lg">{country.flag}</span>
                          <span>{country.name}</span>
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Priority Focus */}
              <div className="space-y-3">
                <Label htmlFor="priority" className="text-foreground font-semibold text-base">
                  Priority Focus (Optional)
                </Label>
                <Select value={priority} onValueChange={setPriority}>
                  <SelectTrigger className="h-12 text-base">
                    <SelectValue placeholder="Select priority area" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="performance">Learning Performance</SelectItem>
                    <SelectItem value="equity">Equity & Inclusion</SelectItem>
                    <SelectItem value="environment">Learning Environment</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Policy Reforms */}
              <div className="space-y-3">
                <Label className="text-foreground font-semibold text-base">Planned Policy Reforms (Optional)</Label>
                <div className="flex flex-wrap gap-3">
                  {["curriculum", "teacher", "funding", "technology"].map((reform) => (
                    <Button
                      key={reform}
                      variant={policyReforms.includes(reform) ? "default" : "outline"}
                      size="sm"
                      onClick={() => togglePolicyReform(reform)}
                      className="h-10 px-4 font-medium"
                    >
                      {reform.charAt(0).toUpperCase() + reform.slice(1)} Reform
                    </Button>
                  ))}
                </div>
              </div>

              {/* Additional Context */}
              <div className="space-y-3">
                <Label htmlFor="context" className="text-foreground font-semibold text-base">
                  Additional Context (Optional)
                </Label>
                <Textarea
                  id="context"
                  placeholder="Any specific challenges or goals you'd like to address..."
                  value={additionalContext}
                  onChange={(e) => setAdditionalContext(e.target.value)}
                  className="min-h-[100px] text-base"
                />
              </div>

              {/* Run Diagnostics Button */}
              <Button
                size="lg"
                onClick={runDiagnostics}
                disabled={!selectedCountry}
                className="w-full h-14 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <Brain className="mr-3 h-6 w-6" />
                Run Diagnostics & Generate Recommendations
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>

          {/* Results Section */}
          {showResults && (
            <div className="space-y-12">
              {/* Summary Diagnostic */}
              <Card className="border-primary/20 bg-primary/5 shadow-sm">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center gap-3 text-primary text-2xl">
                    <Target className="h-6 w-6" />
                    Summary Diagnostic
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground leading-8 text-lg">{generateDiagnostic()}</p>
                </CardContent>
              </Card>

              {/* Evidence-Based Recommendations */}
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                  <Lightbulb className="h-8 w-8 text-primary" />
                  Evidence-Based Recommendations
                </h3>
                <div className="space-y-12">
                  {generateRecommendations().map((rec, index) => (
                    <Card key={index} className="border-border/50 hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-8">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex-1">
                            <h4 className="text-2xl font-bold text-foreground mb-4">{rec.title}</h4>
                            <p className="text-muted-foreground mb-4 text-lg leading-relaxed">{rec.description}</p>
                            <div className="flex items-center gap-3 mb-6">
                              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 px-3 py-1">
                                Context: {rec.context}
                              </Badge>
                              {rec.priority === "high" && (
                                <Badge className="bg-red-50 text-red-700 border-red-200 px-3 py-1">High Priority</Badge>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Best Practices Section */}
                        <div className="mb-8">
                          <h5 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                            <Users className="h-5 w-5 text-primary" />
                            Best Practices from Similar Contexts
                          </h5>
                          <div className="grid md:grid-cols-2 gap-6">
                            {rec.bestPractices.map((practice, idx) => (
                              <Card key={idx} className="border-blue-200 bg-blue-50/50">
                                <CardContent className="p-6">
                                  <div className="flex items-start justify-between mb-3">
                                    <h6 className="font-semibold text-blue-900 text-base leading-tight">
                                      {practice.title}
                                    </h6>
                                    <Badge
                                      variant="outline"
                                      className="text-xs bg-white border-blue-200 text-blue-700 ml-2 flex-shrink-0"
                                    >
                                      {practice.type}
                                    </Badge>
                                  </div>
                                  <p className="text-sm text-blue-700 mb-3 font-medium">📍 {practice.location}</p>
                                  <p className="text-sm text-foreground mb-4 leading-relaxed">
                                    <strong>Outcome:</strong> {practice.outcome}
                                  </p>
                                  <div className="flex items-center justify-between">
                                    <span className="text-xs text-muted-foreground">{practice.source}</span>
                                    <Button size="sm" variant="ghost" className="h-8 text-xs hover:bg-blue-100">
                                      <ExternalLink className="h-3 w-3 mr-1" />
                                      View
                                    </Button>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </div>

                        {/* Academic Research Section */}
                        <div>
                          <h5 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                            <BookOpen className="h-5 w-5 text-primary" />
                            Supporting Academic Research
                          </h5>
                          <div className="space-y-4">
                            {rec.academicResearch.map((research, idx) => (
                              <Card key={idx} className="border-emerald-200 bg-emerald-50/50">
                                <CardContent className="p-6">
                                  <div className="flex items-start justify-between mb-3">
                                    <h6 className="font-semibold text-emerald-900 text-base leading-tight">
                                      {research.title}
                                    </h6>
                                    <span className="text-sm text-emerald-700 bg-white px-3 py-1 rounded-full border border-emerald-200 ml-2 flex-shrink-0">
                                      {research.year}
                                    </span>
                                  </div>
                                  <p className="text-sm text-emerald-700 mb-3 font-medium">
                                    {research.authors} • {research.journal}
                                  </p>
                                  <p className="text-sm text-foreground mb-3 leading-relaxed">
                                    <strong>Key Finding:</strong> {research.finding}
                                  </p>
                                  <p className="text-xs text-muted-foreground mb-4">
                                    <strong>Methodology:</strong> {research.methodology}
                                  </p>
                                  <Button size="sm" variant="ghost" className="h-8 text-xs hover:bg-emerald-100">
                                    <ExternalLink className="h-3 w-3 mr-1" />
                                    Read Paper
                                  </Button>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Footer Actions */}
              <Card className="border-border/50 bg-accent/30 shadow-sm">
                <CardContent className="p-8">
                  <div className="flex flex-wrap gap-4 justify-between">
                    <div className="flex gap-4">
                      <Button variant="outline" className="h-12 px-6 font-medium">
                        <Download className="h-4 w-4 mr-2" />
                        Download Full Report
                      </Button>
                      <Button variant="outline" onClick={runDiagnostics} className="h-12 px-6 font-medium">
                        <RotateCcw className="h-4 w-4 mr-2" />
                        Rerun Analysis
                      </Button>
                    </div>
                    <Button className="h-12 px-6 font-medium shadow-lg">
                      <FileText className="h-4 w-4 mr-2" />
                      Create Implementation Plan
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
