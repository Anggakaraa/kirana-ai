"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  TrendingUp,
  TrendingDown,
  BookOpen,
  Users,
  School,
  ChevronDown,
  ChevronUp,
  Brain,
  HelpCircle,
  Target,
} from "lucide-react"
import { useState } from "react"
import {
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  Cell,
} from "recharts"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

const pisaData = {
  indonesia: {
    name: "Indonesia",
    flag: "🇮🇩",
    year: "2022",
    learningOutcomes: {
      mathLevel2Plus: 28.5,
      readingLevel2Plus: 30.1,
      scienceLevel2Plus: 32.8,
      meanMathScore: 366,
      meanReadingScore: 359,
      meanScienceScore: 383,
      mathTrend: -8.2,
      readingTrend: +12.1,
      scienceTrend: +5.3,
      genderGapMath: -8,
      genderGapReading: +25,
      genderGapScience: -2,
      lowPerformersMath: 71.5,
      topPerformersMath: 0.8,
    },
    equity: {
      escsR2: 0.089,
      resilientStudents: 12.3,
      escsGap: 78,
      immigrantGap: -15,
      betweenSchoolVariance: 45.2,
      withinSchoolVariance: 54.8,
      foodInsecurity: 23.4,
      equityTrend: +2.1,
    },
    environment: {
      teacherSupport: 67.8,
      belongingIndex: 72.1,
      ictUse: 45.2,
      digitalDistraction: 38.7,
      parentalEngagement: 52.3,
      teacherShortage: 28.9,
      disciplinaryClimate: 68.4,
      motivation: 74.2,
    },
  },
  singapore: {
    name: "Singapore",
    flag: "🇸🇬",
    year: "2022",
    learningOutcomes: {
      mathLevel2Plus: 91.3,
      readingLevel2Plus: 89.7,
      scienceLevel2Plus: 92.1,
      meanMathScore: 575,
      meanReadingScore: 543,
      meanScienceScore: 561,
      mathTrend: -3.1,
      readingTrend: +1.8,
      scienceTrend: -2.4,
      genderGapMath: -12,
      genderGapReading: +31,
      genderGapScience: -8,
      lowPerformersMath: 8.7,
      topPerformersMath: 41.5,
    },
    equity: {
      escsR2: 0.125,
      resilientStudents: 25.8,
      escsGap: 89,
      immigrantGap: +8,
      betweenSchoolVariance: 22.1,
      withinSchoolVariance: 77.9,
      foodInsecurity: 4.2,
      equityTrend: -1.2,
    },
    environment: {
      teacherSupport: 78.9,
      belongingIndex: 81.3,
      ictUse: 72.8,
      digitalDistraction: 42.1,
      parentalEngagement: 68.7,
      teacherShortage: 12.4,
      disciplinaryClimate: 82.6,
      motivation: 79.8,
    },
  },
}

const oecdAverage = {
  mathLevel2Plus: 69.0,
  readingLevel2Plus: 73.0,
  scienceLevel2Plus: 76.0,
  meanMathScore: 472,
  meanReadingScore: 476,
  meanScienceScore: 485,
  escsR2: 0.15,
  resilientStudents: 11.2,
  escsGap: 93,
  teacherSupport: 71.2,
  belongingIndex: 75.1,
  ictUse: 65.0,
  teacherShortage: 27.0,
}

interface CountryDashboardProps {
  params: {
    country: string
  }
}

// Tooltip definitions
const tooltips = {
  escs: "Economic, Social and Cultural Status - a composite measure of family background including parental education, occupation, and home possessions.",
  resilientStudents:
    "Students from the bottom quarter of socio-economic status who perform in the top quarter academically.",
  escsGradient:
    "The score-point difference associated with a one-unit increase in the ESCS index - higher values indicate greater inequality.",
  belongingIndex:
    "Students' sense of belonging at school, measured through agreement with statements about fitting in and making friends.",
  level2Plus:
    "Students achieving at least Level 2 proficiency - the baseline level needed for full participation in modern society.",
  betweenSchoolVariance:
    "The percentage of performance variation that occurs between schools rather than within schools.",
}

// Add these functions before the main return statement

const getCountryStrengths = (countryId: string) => {
  if (countryId === "indonesia") {
    return [
      {
        icon: Users,
        title: "High Student Resilience",
        description:
          "12.3% of disadvantaged students perform in the top quarter academically, showing strong individual determination despite challenges.",
        metric: "12.3% resilient students",
        context: "Above many middle-income countries",
      },
      {
        icon: TrendingUp,
        title: "Improving Reading Performance",
        description:
          "Reading scores have improved by 12 points since 2018, indicating effective literacy interventions are taking hold.",
        metric: "+12.1 point trend",
        context: "Positive trajectory",
      },
      {
        icon: School,
        title: "Relatively Equitable System",
        description:
          "Only 8.9% of performance variation is explained by socio-economic background, suggesting fair access to quality education.",
        metric: "8.9% ESCS impact",
        context: "Lower than OECD average",
      },
      {
        icon: BookOpen,
        title: "Strong Student Motivation",
        description:
          "74% of students report high motivation to learn, providing a solid foundation for educational improvements.",
        metric: "74.2% motivated students",
        context: "Strong learning mindset",
      },
    ]
  } else if (countryId === "singapore") {
    return [
      {
        icon: TrendingUp,
        title: "Exceptional Learning Outcomes",
        description:
          "Over 90% of students achieve foundational proficiency across all subjects, among the world's highest rates.",
        metric: "91%+ Level 2+ proficiency",
        context: "Global top performer",
      },
      {
        icon: Users,
        title: "High Proportion of Resilient Students",
        description:
          "25.8% of disadvantaged students overcome their background to achieve high performance, showing system support works.",
        metric: "25.8% resilient students",
        context: "More than double OECD average",
      },
      {
        icon: School,
        title: "Excellent Learning Environment",
        description: "Strong teacher support (79%) and student belonging (81%) create optimal conditions for learning.",
        metric: "80%+ environment indicators",
        context: "World-class learning conditions",
      },
      {
        icon: BookOpen,
        title: "High Digital Integration",
        description: "73% of students effectively use ICT for learning, preparing them for the digital economy.",
        metric: "72.8% ICT use",
        context: "Leading digital education",
      },
    ]
  }
  return []
}

const getCountryImprovementAreas = (countryId: string) => {
  if (countryId === "indonesia") {
    return [
      {
        icon: BookOpen,
        title: "Foundational Learning Gaps",
        description:
          "Only 30% of students reach basic proficiency levels, requiring intensive focus on core literacy and numeracy skills.",
        metric: "30% Level 2+ average",
        context: "Priority intervention needed",
      },
      {
        icon: School,
        title: "Teacher Support Systems",
        description:
          "68% teacher support access suggests need for stronger professional development and classroom assistance programs.",
        metric: "67.8% teacher support",
        context: "Below optimal levels",
      },
      {
        icon: Users,
        title: "Digital Learning Integration",
        description:
          "45% ICT use indicates significant opportunity to leverage technology for improved learning outcomes.",
        metric: "45.2% ICT use",
        context: "Digital divide challenge",
      },
    ]
  } else if (countryId === "singapore") {
    return [
      {
        icon: Users,
        title: "Socio-Economic Equity",
        description:
          "12.5% of performance variation linked to family background suggests need for targeted support for disadvantaged students.",
        metric: "12.5% ESCS impact",
        context: "Equity opportunity",
      },
      {
        icon: TrendingDown,
        title: "Performance Trend Monitoring",
        description: "Slight declines in recent PISA cycles warrant attention to maintain world-leading standards.",
        metric: "-3.1 math trend",
        context: "Maintain excellence",
      },
      {
        icon: School,
        title: "Between-School Variation",
        description:
          "22% between-school variance suggests opportunities to ensure more consistent quality across all schools.",
        metric: "22.1% school variation",
        context: "System consistency",
      },
    ]
  }
  return []
}

const getSystemNarrative = (countryId: string) => {
  if (countryId === "indonesia") {
    return "Indonesia's education system demonstrates remarkable resilience and equity, with students showing strong motivation and the system providing relatively fair opportunities regardless of family background. While foundational learning outcomes require intensive focus, the positive trends in reading and the high proportion of resilient students indicate that targeted interventions can be highly effective. The system's strength lies in its equity and student determination—building on these assets while addressing learning gaps could yield transformational results."
  } else if (countryId === "singapore") {
    return "Singapore has built one of the world's most effective education systems, achieving exceptional learning outcomes while maintaining strong learning environments. The system excels at developing resilient students and integrating technology effectively. The key opportunity lies in ensuring that excellence is paired with equity—leveraging the system's proven ability to support high achievement to close remaining gaps for disadvantaged students and maintain consistent quality across all schools."
  }
  return ""
}

export default function CountryDashboard({ params }: CountryDashboardProps) {
  const [selectedCountry, setSelectedCountry] = useState(params.country || "indonesia")
  const [showOECDComparison, setShowOECDComparison] = useState(true)
  const [expandedSections, setExpandedSections] = useState<string[]>([])

  const country = pisaData[selectedCountry as keyof typeof pisaData]

  if (!country) {
    return <div>Country not found</div>
  }

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => (prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]))
  }

  const getPerformanceColor = (value: number, threshold: number, reverse = false) => {
    if (reverse) {
      return value <= threshold ? "text-emerald-600" : "text-red-600"
    }
    return value >= threshold ? "text-emerald-600" : value >= threshold * 0.7 ? "text-amber-600" : "text-red-600"
  }

  const getComparisonIcon = (value: number, oecdValue: number) => {
    if (value > oecdValue) return <TrendingUp className="h-4 w-4 text-emerald-600" />
    if (value < oecdValue) return <TrendingDown className="h-4 w-4 text-red-600" />
    return <div className="h-4 w-4" />
  }

  // Trend data for line charts
  const trendData = [
    {
      year: "2012",
      math: selectedCountry === "indonesia" ? 375 : 573,
      reading: selectedCountry === "indonesia" ? 396 : 542,
      science: selectedCountry === "indonesia" ? 382 : 551,
    },
    {
      year: "2015",
      math: selectedCountry === "indonesia" ? 386 : 564,
      reading: selectedCountry === "indonesia" ? 397 : 535,
      science: selectedCountry === "indonesia" ? 403 : 556,
    },
    {
      year: "2018",
      math: selectedCountry === "indonesia" ? 379 : 569,
      reading: selectedCountry === "indonesia" ? 371 : 549,
      science: selectedCountry === "indonesia" ? 396 : 551,
    },
    {
      year: "2022",
      math: selectedCountry === "indonesia" ? 366 : 575,
      reading: selectedCountry === "indonesia" ? 359 : 543,
      science: selectedCountry === "indonesia" ? 383 : 561,
    },
  ]

  // Comparison chart component
  const ComparisonChart = ({
    countryValue,
    oecdValue,
    label,
    format = "%",
  }: { countryValue: number; oecdValue: number; label: string; format?: string }) => {
    const data = [
      { name: country.name, value: countryValue, color: "#3B82F6" },
      { name: "OECD Avg", value: oecdValue, color: "#94A3B8" },
    ]

    return (
      <div className="mt-4">
        <ResponsiveContainer width="100%" height={80}>
          <BarChart data={data} layout="horizontal" margin={{ top: 5, right: 30, left: 5, bottom: 5 }}>
            <XAxis type="number" domain={[0, Math.max(countryValue, oecdValue) * 1.2]} hide />
            <YAxis type="category" dataKey="name" width={60} tick={{ fontSize: 12 }} />
            <Bar dataKey="value" radius={[0, 4, 4, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
            <RechartsTooltip formatter={(value) => [`${value}${format}`, label]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    )
  }

  // Mini trend chart component
  const TrendChart = ({ data, dataKey, color }: { data: any[]; dataKey: string; color: string }) => (
    <ResponsiveContainer width="100%" height={60}>
      <LineChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
        <Line type="monotone" dataKey={dataKey} stroke={color} strokeWidth={2} dot={{ r: 3 }} />
        <RechartsTooltip formatter={(value) => [`${value}`, dataKey]} />
      </LineChart>
    </ResponsiveContainer>
  )

  // Narrative summary component
  const NarrativeSummary = ({ children }: { children: React.ReactNode }) => (
    <div className="mt-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
      <p className="text-sm text-blue-800 leading-relaxed">{children}</p>
    </div>
  )

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-6">
                  <span className="text-6xl">{country.flag}</span>
                  <div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-2">PISA Country Scorecard</h1>
                    <p className="text-xl text-muted-foreground">
                      {country.name} • Programme for International Student Assessment • {country.year}
                    </p>
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="flex flex-wrap gap-4 mb-8">
                <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                  <SelectTrigger className="w-64 h-12">
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="indonesia">🇮🇩 Indonesia</SelectItem>
                    <SelectItem value="singapore">🇸🇬 Singapore</SelectItem>
                  </SelectContent>
                </Select>

                <Button
                  variant={showOECDComparison ? "default" : "outline"}
                  onClick={() => setShowOECDComparison(!showOECDComparison)}
                  className="h-12 px-6 font-medium"
                >
                  {showOECDComparison ? "Hide" : "Show"} OECD Comparison
                </Button>
              </div>
            </div>

            {/* Country Profile - Strengths & Areas for Improvement */}
            <div className="mb-12">
              <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-blue-50/50 shadow-lg">
                <CardHeader className="pb-6">
                  <CardTitle className="text-3xl font-bold text-foreground mb-2">
                    {country.name} Education System Profile
                  </CardTitle>
                  <CardDescription className="text-lg text-muted-foreground">
                    Key strengths to build upon and priority areas for targeted improvement
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-10">
                    {/* Strengths Section */}
                    <div>
                      <h3 className="text-2xl font-bold text-emerald-800 mb-6 flex items-center gap-3">
                        <TrendingUp className="h-6 w-6" />🌟 Key Strengths
                      </h3>
                      <div className="space-y-4">
                        {getCountryStrengths(selectedCountry).map((strength, index) => (
                          <Card key={index} className="border-emerald-200 bg-emerald-50/50">
                            <CardContent className="p-5">
                              <div className="flex items-start gap-4">
                                <div className="bg-emerald-100 rounded-full p-2 flex-shrink-0">
                                  <strength.icon className="h-5 w-5 text-emerald-700" />
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-semibold text-emerald-900 mb-2">{strength.title}</h4>
                                  <p className="text-sm text-emerald-800 leading-relaxed mb-3">
                                    {strength.description}
                                  </p>
                                  <div className="flex items-center gap-2">
                                    <Badge className="bg-emerald-100 text-emerald-800 border-emerald-300">
                                      {strength.metric}
                                    </Badge>
                                    <span className="text-xs text-emerald-700">{strength.context}</span>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>

                    {/* Areas for Improvement Section */}
                    <div>
                      <h3 className="text-2xl font-bold text-amber-800 mb-6 flex items-center gap-3">
                        <Target className="h-6 w-6" />🎯 Priority Areas for Improvement
                      </h3>
                      <div className="space-y-4">
                        {getCountryImprovementAreas(selectedCountry).map((area, index) => (
                          <Card key={index} className="border-amber-200 bg-amber-50/50">
                            <CardContent className="p-5">
                              <div className="flex items-start gap-4">
                                <div className="bg-amber-100 rounded-full p-2 flex-shrink-0">
                                  <area.icon className="h-5 w-5 text-amber-700" />
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-semibold text-amber-900 mb-2">{area.title}</h4>
                                  <p className="text-sm text-amber-800 leading-relaxed mb-3">{area.description}</p>
                                  <div className="flex items-center gap-2">
                                    <Badge className="bg-amber-100 text-amber-800 border-amber-300">
                                      {area.metric}
                                    </Badge>
                                    <span className="text-xs text-amber-700">{area.context}</span>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* System Narrative */}
                  <div className="mt-10 p-6 bg-white rounded-xl border border-blue-200">
                    <h4 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      System Story
                    </h4>
                    <p className="text-blue-800 leading-relaxed text-lg">{getSystemNarrative(selectedCountry)}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Section 1: Learning Outcomes */}
            <Card className="mb-12 border-blue-200 shadow-sm">
              <CardHeader className="bg-blue-50/50 pb-6">
                <CardTitle className="flex items-center gap-3 text-blue-900 text-2xl">
                  <BookOpen className="h-6 w-6" />
                  Learning Outcomes
                </CardTitle>
                <CardDescription className="text-lg">Foundational learning results across core domains</CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                {/* Headline Indicators */}
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <Card className="border-blue-200">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <h4 className="font-semibold text-foreground">Math Level 2+</h4>
                        <Tooltip>
                          <TooltipTrigger>
                            <HelpCircle className="h-4 w-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">{tooltips.level2Plus}</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                      <div
                        className={`text-4xl font-bold mb-2 ${getPerformanceColor(country.learningOutcomes.mathLevel2Plus, 70)}`}
                      >
                        {country.learningOutcomes.mathLevel2Plus}%
                      </div>

                      {/* Trend Chart */}
                      <div className="mb-4">
                        <p className="text-xs text-muted-foreground mb-2">Trend (2012-2022)</p>
                        <TrendChart data={trendData} dataKey="math" color="#3B82F6" />
                      </div>

                      {/* Comparison Chart */}
                      {showOECDComparison && (
                        <ComparisonChart
                          countryValue={country.learningOutcomes.mathLevel2Plus}
                          oecdValue={oecdAverage.mathLevel2Plus}
                          label="Math Level 2+"
                        />
                      )}
                    </CardContent>
                  </Card>

                  <Card className="border-blue-200">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <h4 className="font-semibold text-foreground">Reading Level 2+</h4>
                        <Tooltip>
                          <TooltipTrigger>
                            <HelpCircle className="h-4 w-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">{tooltips.level2Plus}</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                      <div
                        className={`text-4xl font-bold mb-2 ${getPerformanceColor(country.learningOutcomes.readingLevel2Plus, 70)}`}
                      >
                        {country.learningOutcomes.readingLevel2Plus}%
                      </div>

                      {/* Trend Chart */}
                      <div className="mb-4">
                        <p className="text-xs text-muted-foreground mb-2">Trend (2012-2022)</p>
                        <TrendChart data={trendData} dataKey="reading" color="#10B981" />
                      </div>

                      {/* Comparison Chart */}
                      {showOECDComparison && (
                        <ComparisonChart
                          countryValue={country.learningOutcomes.readingLevel2Plus}
                          oecdValue={oecdAverage.readingLevel2Plus}
                          label="Reading Level 2+"
                        />
                      )}
                    </CardContent>
                  </Card>

                  <Card className="border-blue-200">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <h4 className="font-semibold text-foreground">Science Level 2+</h4>
                        <Tooltip>
                          <TooltipTrigger>
                            <HelpCircle className="h-4 w-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">{tooltips.level2Plus}</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                      <div
                        className={`text-4xl font-bold mb-2 ${getPerformanceColor(country.learningOutcomes.scienceLevel2Plus, 70)}`}
                      >
                        {country.learningOutcomes.scienceLevel2Plus}%
                      </div>

                      {/* Trend Chart */}
                      <div className="mb-4">
                        <p className="text-xs text-muted-foreground mb-2">Trend (2012-2022)</p>
                        <TrendChart data={trendData} dataKey="science" color="#F59E0B" />
                      </div>

                      {/* Comparison Chart */}
                      {showOECDComparison && (
                        <ComparisonChart
                          countryValue={country.learningOutcomes.scienceLevel2Plus}
                          oecdValue={oecdAverage.scienceLevel2Plus}
                          label="Science Level 2+"
                        />
                      )}
                    </CardContent>
                  </Card>
                </div>

                {/* Narrative Summary */}
                <NarrativeSummary>
                  {selectedCountry === "indonesia"
                    ? "Indonesia shows significant learning challenges with less than one-third of students reaching foundational proficiency levels. However, positive trends in reading suggest targeted interventions may be working."
                    : "Singapore demonstrates exceptional learning outcomes with over 90% of students achieving foundational proficiency across all domains, though slight declines in recent cycles warrant attention."}
                </NarrativeSummary>

                {/* Detailed Indicators Toggle */}
                <div className="mt-8">
                  <Button
                    variant="outline"
                    onClick={() => toggleSection("learning")}
                    className="w-full flex items-center justify-center gap-2 h-12 text-blue-700 border-blue-200 hover:bg-blue-50"
                  >
                    {expandedSections.includes("learning") ? (
                      <>
                        <ChevronUp className="h-4 w-4" />
                        Hide Detailed Indicators
                      </>
                    ) : (
                      <>
                        <ChevronDown className="h-4 w-4" />
                        Show Detailed Indicators
                      </>
                    )}
                  </Button>

                  {/* Detailed Indicators Content */}
                  {expandedSections.includes("learning") && (
                    <div className="mt-8 space-y-8 border-t border-border pt-8">
                      <div className="grid md:grid-cols-4 gap-6">
                        <Card className="border-gray-200">
                          <CardContent className="p-6 text-center">
                            <div
                              className={`text-3xl font-bold mb-2 ${getPerformanceColor(country.learningOutcomes.meanMathScore, 500)}`}
                            >
                              {country.learningOutcomes.meanMathScore}
                            </div>
                            <p className="text-sm text-muted-foreground mb-4">Mean Math Score</p>
                            {showOECDComparison && (
                              <ComparisonChart
                                countryValue={country.learningOutcomes.meanMathScore}
                                oecdValue={oecdAverage.meanMathScore}
                                label="Mean Math Score"
                                format=""
                              />
                            )}
                          </CardContent>
                        </Card>

                        <Card className="border-gray-200">
                          <CardContent className="p-6 text-center">
                            <div className="text-3xl font-bold text-red-600 mb-2">
                              {country.learningOutcomes.lowPerformersMath}%
                            </div>
                            <p className="text-sm text-muted-foreground">Low Performers (Math)</p>
                          </CardContent>
                        </Card>

                        <Card className="border-gray-200">
                          <CardContent className="p-6 text-center">
                            <div className="text-3xl font-bold text-emerald-600 mb-2">
                              {country.learningOutcomes.topPerformersMath}%
                            </div>
                            <p className="text-sm text-muted-foreground">Top Performers (Math)</p>
                          </CardContent>
                        </Card>

                        <Card className="border-gray-200">
                          <CardContent className="p-6 text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">
                              {Math.abs(country.learningOutcomes.genderGapMath)}
                            </div>
                            <p className="text-sm text-muted-foreground">Gender Gap (Math)</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Section 2: Equity & Inclusion */}
            <Card className="mb-12 border-red-200 shadow-sm">
              <CardHeader className="bg-red-50/50 pb-6">
                <CardTitle className="flex items-center gap-3 text-red-900 text-2xl">
                  <Users className="h-6 w-6" />
                  Equity & Inclusion
                </CardTitle>
                <CardDescription className="text-lg">
                  How fairly learning outcomes are distributed across social groups
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                {/* Headline Indicators */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <Card className="border-red-200">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <h4 className="font-semibold text-foreground">ESCS Impact on Performance</h4>
                        <Tooltip>
                          <TooltipTrigger>
                            <HelpCircle className="h-4 w-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">{tooltips.escs}</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                      <div
                        className={`text-4xl font-bold mb-2 ${getPerformanceColor(country.equity.escsR2, 0.2, true)}`}
                      >
                        {(country.equity.escsR2 * 100).toFixed(1)}%
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">Lower is better</p>

                      {/* Comparison Chart */}
                      {showOECDComparison && (
                        <ComparisonChart
                          countryValue={country.equity.escsR2 * 100}
                          oecdValue={oecdAverage.escsR2 * 100}
                          label="ESCS Impact"
                        />
                      )}
                    </CardContent>
                  </Card>

                  <Card className="border-red-200">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <h4 className="font-semibold text-foreground">Resilient Students</h4>
                        <Tooltip>
                          <TooltipTrigger>
                            <HelpCircle className="h-4 w-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">{tooltips.resilientStudents}</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                      <div
                        className={`text-4xl font-bold mb-2 ${getPerformanceColor(country.equity.resilientStudents, 15)}`}
                      >
                        {country.equity.resilientStudents}%
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">Low-SES, high-performing</p>

                      {/* Comparison Chart */}
                      {showOECDComparison && (
                        <ComparisonChart
                          countryValue={country.equity.resilientStudents}
                          oecdValue={oecdAverage.resilientStudents}
                          label="Resilient Students"
                        />
                      )}
                    </CardContent>
                  </Card>
                </div>

                {/* Narrative Summary */}
                <NarrativeSummary>
                  {selectedCountry === "indonesia"
                    ? "Indonesia shows relatively low socio-economic impact on performance, suggesting the education system provides fairly equal opportunities regardless of family background."
                    : "Singapore faces equity challenges with higher socio-economic impact on performance, though it has a strong proportion of resilient students who overcome disadvantage."}
                </NarrativeSummary>

                {/* Detailed Indicators Toggle */}
                <div className="mt-8">
                  <Button
                    variant="outline"
                    onClick={() => toggleSection("equity")}
                    className="w-full flex items-center justify-center gap-2 h-12 text-red-700 border-red-200 hover:bg-red-50"
                  >
                    {expandedSections.includes("equity") ? (
                      <>
                        <ChevronUp className="h-4 w-4" />
                        Hide Detailed Indicators
                      </>
                    ) : (
                      <>
                        <ChevronDown className="h-4 w-4" />
                        Show Detailed Indicators
                      </>
                    )}
                  </Button>

                  {/* Detailed Indicators Content */}
                  {expandedSections.includes("equity") && (
                    <div className="mt-8 space-y-6 border-t border-border pt-8">
                      <div className="grid md:grid-cols-4 gap-6">
                        <Card className="border-gray-200">
                          <CardContent className="p-6 text-center">
                            <div className="text-3xl font-bold text-red-600 mb-2">{country.equity.escsGap}</div>
                            <p className="text-sm text-muted-foreground">ESCS Quartile Gap</p>
                          </CardContent>
                        </Card>

                        <Card className="border-gray-200">
                          <CardContent className="p-6 text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">
                              {Math.abs(country.equity.immigrantGap)}
                            </div>
                            <p className="text-sm text-muted-foreground">Immigrant Gap</p>
                          </CardContent>
                        </Card>

                        <Card className="border-gray-200">
                          <CardContent className="p-6 text-center">
                            <div className="flex items-center gap-2 mb-4 justify-center">
                              <span className="text-3xl font-bold text-orange-600">
                                {country.equity.betweenSchoolVariance}%
                              </span>
                              <Tooltip>
                                <TooltipTrigger>
                                  <HelpCircle className="h-4 w-4 text-muted-foreground" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="max-w-xs">{tooltips.betweenSchoolVariance}</p>
                                </TooltipContent>
                              </Tooltip>
                            </div>
                            <p className="text-sm text-muted-foreground">Between-School Variance</p>
                          </CardContent>
                        </Card>

                        <Card className="border-gray-200">
                          <CardContent className="p-6 text-center">
                            <div className="text-3xl font-bold text-red-600 mb-2">{country.equity.foodInsecurity}%</div>
                            <p className="text-sm text-muted-foreground">Food Insecurity</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Section 3: Learning Environment */}
            <Card className="mb-12 border-emerald-200 shadow-sm">
              <CardHeader className="bg-emerald-50/50 pb-6">
                <CardTitle className="flex items-center gap-3 text-emerald-900 text-2xl">
                  <School className="h-6 w-6" />
                  Learning Environment
                </CardTitle>
                <CardDescription className="text-lg">
                  Supportive conditions and learning climate in schools
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                {/* Headline Indicators */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <Card className="border-emerald-200">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <h4 className="font-semibold text-foreground">Teacher Support Access</h4>
                        <Tooltip>
                          <TooltipTrigger>
                            <HelpCircle className="h-4 w-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">
                              Percentage of students who report their teachers provide help and support when needed.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                      <div
                        className={`text-4xl font-bold mb-4 ${getPerformanceColor(country.environment.teacherSupport, 70)}`}
                      >
                        {country.environment.teacherSupport}%
                      </div>

                      {/* Comparison Chart */}
                      {showOECDComparison && (
                        <ComparisonChart
                          countryValue={country.environment.teacherSupport}
                          oecdValue={oecdAverage.teacherSupport}
                          label="Teacher Support"
                        />
                      )}
                    </CardContent>
                  </Card>

                  <Card className="border-emerald-200">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <h4 className="font-semibold text-foreground">Sense of Belonging</h4>
                        <Tooltip>
                          <TooltipTrigger>
                            <HelpCircle className="h-4 w-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">{tooltips.belongingIndex}</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                      <div
                        className={`text-4xl font-bold mb-4 ${getPerformanceColor(country.environment.belongingIndex, 70)}`}
                      >
                        {country.environment.belongingIndex}%
                      </div>

                      {/* Comparison Chart */}
                      {showOECDComparison && (
                        <ComparisonChart
                          countryValue={country.environment.belongingIndex}
                          oecdValue={oecdAverage.belongingIndex}
                          label="Sense of Belonging"
                        />
                      )}
                    </CardContent>
                  </Card>
                </div>

                {/* Narrative Summary */}
                <NarrativeSummary>
                  {selectedCountry === "indonesia"
                    ? "Indonesia shows moderate learning environment conditions with room for improvement in teacher support and student belonging, though digital integration remains limited."
                    : "Singapore provides a strong learning environment with high teacher support and student belonging, creating optimal conditions for learning across the system."}
                </NarrativeSummary>

                {/* Detailed Indicators Toggle */}
                <div className="mt-8">
                  <Button
                    variant="outline"
                    onClick={() => toggleSection("environment")}
                    className="w-full flex items-center justify-center gap-2 h-12 text-emerald-700 border-emerald-200 hover:bg-emerald-50"
                  >
                    {expandedSections.includes("environment") ? (
                      <>
                        <ChevronUp className="h-4 w-4" />
                        Hide Detailed Indicators
                      </>
                    ) : (
                      <>
                        <ChevronDown className="h-4 w-4" />
                        Show Detailed Indicators
                      </>
                    )}
                  </Button>

                  {/* Detailed Indicators Content */}
                  {expandedSections.includes("environment") && (
                    <div className="mt-8 space-y-6 border-t border-border pt-8">
                      <div className="grid md:grid-cols-3 gap-6">
                        <Card className="border-gray-200">
                          <CardContent className="p-6 text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">{country.environment.ictUse}%</div>
                            <p className="text-sm text-muted-foreground">ICT Use in Learning</p>
                            {showOECDComparison && (
                              <div className="mt-4">
                                <ComparisonChart
                                  countryValue={country.environment.ictUse}
                                  oecdValue={oecdAverage.ictUse}
                                  label="ICT Use"
                                />
                              </div>
                            )}
                          </CardContent>
                        </Card>

                        <Card className="border-gray-200">
                          <CardContent className="p-6 text-center">
                            <div className="text-3xl font-bold text-red-600 mb-2">
                              {country.environment.digitalDistraction}%
                            </div>
                            <p className="text-sm text-muted-foreground">Digital Distraction</p>
                          </CardContent>
                        </Card>

                        <Card className="border-gray-200">
                          <CardContent className="p-6 text-center">
                            <div className="text-3xl font-bold text-emerald-600 mb-2">
                              {country.environment.parentalEngagement}%
                            </div>
                            <p className="text-sm text-muted-foreground">Parental Engagement</p>
                          </CardContent>
                        </Card>
                      </div>

                      <div className="grid md:grid-cols-3 gap-6">
                        <Card className="border-gray-200">
                          <CardContent className="p-6 text-center">
                            <div className="text-3xl font-bold text-red-600 mb-2">
                              {country.environment.teacherShortage}%
                            </div>
                            <p className="text-sm text-muted-foreground">Teacher Shortage</p>
                            {showOECDComparison && (
                              <div className="mt-4">
                                <ComparisonChart
                                  countryValue={country.environment.teacherShortage}
                                  oecdValue={oecdAverage.teacherShortage}
                                  label="Teacher Shortage"
                                />
                              </div>
                            )}
                          </CardContent>
                        </Card>

                        <Card className="border-gray-200">
                          <CardContent className="p-6 text-center">
                            <div className="text-3xl font-bold text-emerald-600 mb-2">
                              {country.environment.disciplinaryClimate}%
                            </div>
                            <p className="text-sm text-muted-foreground">Disciplinary Climate</p>
                          </CardContent>
                        </Card>

                        <Card className="border-gray-200">
                          <CardContent className="p-6 text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">
                              {country.environment.motivation}%
                            </div>
                            <p className="text-sm text-muted-foreground">Student Motivation</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Diagnostics CTA Button */}
            <div className="text-center">
              <Link href="/diagnostics">
                <Button
                  size="lg"
                  className="h-16 px-12 text-xl font-semibold shadow-xl hover:shadow-2xl transition-all"
                >
                  <Brain className="mr-4 h-8 w-8" />
                  Run Diagnostics & Recommendations
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  )
}
