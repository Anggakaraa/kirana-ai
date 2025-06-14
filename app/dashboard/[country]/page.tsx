"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  BookOpen,
  DollarSign,
  Target,
  Lightbulb,
  ArrowRight,
  Globe,
} from "lucide-react"
import Link from "next/link"
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts"

const countryData = {
  kenya: {
    name: "Kenya",
    flag: "🇰🇪",
    totalStudents: "17,500,000",
    totalTeachers: "485,000",
    totalSchools: "89,500",
    educationBudget: "17.5%",
    lastUpdated: "December 2024",
    overview: {
      learningRecovery: 42,
      digitalAccess: 28,
      teacherQuality: 65,
      fundingAdequacy: 38,
      equityIndex: 45,
      overallScore: 44,
    },
    keyMetrics: {
      primaryEnrollment: 98.2,
      secondaryEnrollment: 70.3,
      literacyRate: 81.5,
      pupilTeacherRatio: 28,
      schoolsWithInternet: 23,
      genderParityIndex: 1.02,
    },
    trends: [
      { year: "2020", literacy: 78, enrollment: 95, digital: 15 },
      { year: "2021", literacy: 79, enrollment: 92, digital: 18 },
      { year: "2022", literacy: 80, enrollment: 96, digital: 21 },
      { year: "2023", literacy: 81, enrollment: 98, digital: 23 },
      { year: "2024", literacy: 82, enrollment: 98, digital: 28 },
    ],
    challenges: [
      {
        title: "Digital Infrastructure Gap",
        severity: "high",
        impact: "Limits access to modern learning tools and remote education capabilities",
        affectedStudents: "2.8M students",
        recommendation: "Implement mobile learning labs and satellite connectivity program",
      },
      {
        title: "Learning Loss Recovery",
        severity: "high",
        impact: "Students performing 18 months below grade level post-pandemic",
        affectedStudents: "3.2M students",
        recommendation: "Deploy intensive remedial tutoring with community volunteers",
      },
      {
        title: "Teacher Retention Crisis",
        severity: "medium",
        impact: "28% annual turnover in rural schools affecting instruction quality",
        affectedStudents: "1.5M students",
        recommendation: "Comprehensive teacher incentive package with housing support",
      },
    ],
    quickWins: [
      {
        title: "Mother-Tongue Literacy Program",
        timeframe: "3-6 months",
        cost: "Low",
        impact: "High",
        description: "Leverage local languages for early grade reading instruction",
      },
      {
        title: "Community Reading Mentors",
        timeframe: "2-4 months",
        cost: "Low",
        impact: "Medium",
        description: "Train volunteers to support struggling readers after school",
      },
      {
        title: "Mobile Library Initiative",
        timeframe: "4-8 months",
        cost: "Medium",
        impact: "Medium",
        description: "Bring books and learning materials to remote communities",
      },
    ],
    budgetAllocation: [
      { category: "Teacher Salaries", amount: 45, color: "#3B82F6" },
      { category: "Infrastructure", amount: 25, color: "#10B981" },
      { category: "Learning Materials", amount: 15, color: "#F59E0B" },
      { category: "Technology", amount: 8, color: "#EF4444" },
      { category: "Other", amount: 7, color: "#8B5CF6" },
    ],
  },
}

interface CountryDashboardProps {
  params: {
    country: string
  }
}

export default function CountryDashboard({ params }: CountryDashboardProps) {
  const country = countryData[params.country as keyof typeof countryData]

  if (!country) {
    return <div>Country not found</div>
  }

  const getScoreColor = (score: number) => {
    if (score >= 70) return "text-green-600"
    if (score >= 50) return "text-yellow-600"
    return "text-red-600"
  }

  const getScoreBadge = (score: number) => {
    if (score >= 70) return "bg-green-100 text-green-800"
    if (score >= 50) return "bg-yellow-100 text-yellow-800"
    return "bg-red-100 text-red-800"
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <span className="text-4xl">{country.flag}</span>
              <div>
                <h1 className="text-4xl font-bold text-blue-900">{country.name} Education Dashboard</h1>
                <div className="grid grid-cols-3 gap-4 text-sm text-blue-700 mt-2">
                  <div>👩‍🎓 Total Students: {country.totalStudents}</div>
                  <div>🧑‍🏫 Total Teachers: {country.totalTeachers}</div>
                  <div>🏫 Total Schools: {country.totalSchools}</div>
                </div>
                <p className="text-sm text-blue-600 mt-1">
                  Education Budget: {country.educationBudget} of GDP • Last updated: {country.lastUpdated}
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className={`text-3xl font-bold ${getScoreColor(country.overview.overallScore)}`}>
                {country.overview.overallScore}/100
              </div>
              <p className="text-sm text-blue-600">Overall Education Index</p>
            </div>
          </div>

          {/* Key Performance Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            <Card className="border-blue-200">
              <CardContent className="p-4 text-center">
                <div className={`text-2xl font-bold ${getScoreColor(country.overview.learningRecovery)}`}>
                  {country.overview.learningRecovery}%
                </div>
                <p className="text-xs text-blue-600">Learning Recovery</p>
                <Progress value={country.overview.learningRecovery} className="mt-2 h-2" />
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardContent className="p-4 text-center">
                <div className={`text-2xl font-bold ${getScoreColor(country.overview.digitalAccess)}`}>
                  {country.overview.digitalAccess}%
                </div>
                <p className="text-xs text-blue-600">Digital Access</p>
                <Progress value={country.overview.digitalAccess} className="mt-2 h-2" />
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardContent className="p-4 text-center">
                <div className={`text-2xl font-bold ${getScoreColor(country.overview.teacherQuality)}`}>
                  {country.overview.teacherQuality}%
                </div>
                <p className="text-xs text-blue-600">Teacher Quality</p>
                <Progress value={country.overview.teacherQuality} className="mt-2 h-2" />
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardContent className="p-4 text-center">
                <div className={`text-2xl font-bold ${getScoreColor(country.overview.fundingAdequacy)}`}>
                  {country.overview.fundingAdequacy}%
                </div>
                <p className="text-xs text-blue-600">Funding Adequacy</p>
                <Progress value={country.overview.fundingAdequacy} className="mt-2 h-2" />
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardContent className="p-4 text-center">
                <div className={`text-2xl font-bold ${getScoreColor(country.overview.equityIndex)}`}>
                  {country.overview.equityIndex}%
                </div>
                <p className="text-xs text-blue-600">Equity Index</p>
                <Progress value={country.overview.equityIndex} className="mt-2 h-2" />
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">{country.keyMetrics.genderParityIndex}</div>
                <p className="text-xs text-blue-600">Gender Parity</p>
                <div className="mt-2 flex justify-center">
                  {country.keyMetrics.genderParityIndex >= 0.97 && country.keyMetrics.genderParityIndex <= 1.03 ? (
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  ) : (
                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8 border-blue-200 bg-blue-50">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Want to Add More Local Data?</h3>
              <p className="text-blue-700 mb-4">You can:</p>
              <ul className="text-blue-700 space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span>📤</span>
                  <span>Upload additional data (e.g., CSV of national assessments, teacher deployment, budgets)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>📬</span>
                  <span>Or contact the EduPilot team for tailored onboarding</span>
                </li>
              </ul>
              <div className="flex gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">📤 Upload Data</Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  📬 Contact Us
                </Button>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="challenges">Challenges</TabsTrigger>
              <TabsTrigger value="recommendations">Quick Wins</TabsTrigger>
              <TabsTrigger value="trends">Trends</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Key Metrics */}
                <Card className="border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-900">
                      <BookOpen className="h-5 w-5" />
                      Education Metrics
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-blue-600">Primary Enrollment</p>
                        <p className="text-2xl font-bold text-blue-900">{country.keyMetrics.primaryEnrollment}%</p>
                      </div>
                      <div>
                        <p className="text-sm text-blue-600">Secondary Enrollment</p>
                        <p className="text-2xl font-bold text-blue-900">{country.keyMetrics.secondaryEnrollment}%</p>
                      </div>
                      <div>
                        <p className="text-sm text-blue-600">Literacy Rate</p>
                        <p className="text-2xl font-bold text-blue-900">{country.keyMetrics.literacyRate}%</p>
                      </div>
                      <div>
                        <p className="text-sm text-blue-600">Pupil-Teacher Ratio</p>
                        <p className="text-2xl font-bold text-blue-900">{country.keyMetrics.pupilTeacherRatio}:1</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Budget Allocation */}
                <Card className="border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-900">
                      <DollarSign className="h-5 w-5" />
                      Budget Allocation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={200}>
                      <PieChart>
                        <Pie
                          data={country.budgetAllocation}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          dataKey="amount"
                          label={({ category, amount }) => `${category}: ${amount}%`}
                        >
                          {country.budgetAllocation.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="challenges" className="space-y-6">
              <div className="space-y-4">
                {country.challenges.map((challenge, index) => (
                  <Card key={index} className="border-red-200">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5 text-red-600" />
                          <CardTitle className="text-red-900">{challenge.title}</CardTitle>
                          <Badge className={getSeverityColor(challenge.severity)}>
                            {challenge.severity.toUpperCase()}
                          </Badge>
                        </div>
                        <Badge variant="outline" className="text-blue-600">
                          {challenge.affectedStudents}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">{challenge.impact}</p>
                      <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-400">
                        <p className="text-sm font-medium text-blue-900">Recommended Action:</p>
                        <p className="text-sm text-blue-700">{challenge.recommendation}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <Link href="/recommendations">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Target className="mr-2 h-5 w-5" />
                    Get Detailed Policy Recommendations
                  </Button>
                </Link>
              </div>
            </TabsContent>

            <TabsContent value="recommendations" className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                {country.quickWins.map((win, index) => (
                  <Card key={index} className="border-green-200">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-green-900">
                        <Lightbulb className="h-5 w-5" />
                        {win.title}
                      </CardTitle>
                      <div className="flex gap-2">
                        <Badge variant="outline" className="text-xs">
                          {win.timeframe}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {win.cost} Cost
                        </Badge>
                        <Badge
                          className={`text-xs ${win.impact === "High" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}
                        >
                          {win.impact} Impact
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-700 mb-4">{win.description}</p>
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full border-green-600 text-green-600 hover:bg-green-50"
                      >
                        View Implementation Plan
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="border-blue-200 bg-blue-50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-blue-900 mb-2">Need More Comprehensive Analysis?</h3>
                      <p className="text-blue-700">
                        Get personalized policy recommendations based on your specific context and priorities.
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Link href="/recommendations">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                          <Globe className="mr-2 h-4 w-4" />
                          Explore Global Best Practices
                        </Button>
                      </Link>
                      <Link href="/scenario-planner">
                        <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                          Model Scenarios
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="trends" className="space-y-6">
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-900">
                    <TrendingUp className="h-5 w-5" />
                    5-Year Education Trends
                  </CardTitle>
                  <CardDescription>Key performance indicators over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={country.trends}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="literacy"
                        stroke="#3B82F6"
                        strokeWidth={2}
                        name="Literacy Rate %"
                      />
                      <Line type="monotone" dataKey="enrollment" stroke="#10B981" strokeWidth={2} name="Enrollment %" />
                      <Line
                        type="monotone"
                        dataKey="digital"
                        stroke="#F59E0B"
                        strokeWidth={2}
                        name="Digital Access %"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-3 gap-4">
                <Card className="border-green-200">
                  <CardContent className="p-4 text-center">
                    <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-600">+4%</div>
                    <p className="text-sm text-green-700">Literacy improvement since 2020</p>
                  </CardContent>
                </Card>

                <Card className="border-blue-200">
                  <CardContent className="p-4 text-center">
                    <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-600">+13%</div>
                    <p className="text-sm text-blue-700">Digital access growth since 2020</p>
                  </CardContent>
                </Card>

                <Card className="border-yellow-200">
                  <CardContent className="p-4 text-center">
                    <TrendingDown className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-yellow-600">-2%</div>
                    <p className="text-sm text-yellow-700">Enrollment dip during pandemic</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
