"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { TrendingUp, DollarSign, Users } from "lucide-react"

export default function ScenarioPlannerPage() {
  const [fundingLevel, setFundingLevel] = useState([5])
  const [policyIntensity, setPolicyIntensity] = useState([5])

  // Calculate projected outcomes based on inputs
  const calculateOutcomes = () => {
    const funding = fundingLevel[0]
    const intensity = policyIntensity[0]

    const baseImprovement = Math.round((funding + intensity) * 1.2)
    const literacyImprovement = Math.round(baseImprovement * 1.1)
    const equityImprovement = Math.round(baseImprovement * 0.9)
    const teacherSatisfaction = Math.round(baseImprovement * 1.3)

    return {
      overall: Math.min(baseImprovement, 20),
      literacy: Math.min(literacyImprovement, 25),
      equity: Math.min(equityImprovement, 18),
      teacher: Math.min(teacherSatisfaction, 30),
    }
  }

  const outcomes = calculateOutcomes()

  const barData = [
    { name: "Literacy Rates", current: 65, projected: 65 + outcomes.literacy },
    { name: "Math Proficiency", current: 58, projected: 58 + outcomes.overall },
    { name: "Graduation Rates", current: 78, projected: 78 + outcomes.overall * 0.8 },
    { name: "Teacher Retention", current: 72, projected: 72 + outcomes.teacher },
  ]

  const pieData = [
    { name: "Infrastructure", value: 35, color: "#3B82F6" },
    { name: "Teacher Training", value: 25, color: "#10B981" },
    { name: "Curriculum", value: 20, color: "#F59E0B" },
    { name: "Assessment", value: 20, color: "#EF4444" },
  ]

  const getIntensityLabel = (value: number) => {
    if (value <= 3) return "Low"
    if (value <= 7) return "Medium"
    return "High"
  }

  const getFundingLabel = (value: number) => {
    if (value <= 3) return "Limited"
    if (value <= 7) return "Adequate"
    return "Substantial"
  }

  const getOutcomeColor = (value: number) => {
    if (value >= 15) return "text-green-600"
    if (value >= 10) return "text-yellow-600"
    return "text-red-600"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-blue-900 mb-4">Scenario Planner</h1>
            <p className="text-lg text-blue-700">Model different policy scenarios and their projected outcomes</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Controls */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-900">Scenario Controls</CardTitle>
                  <CardDescription>Adjust parameters to see projected outcomes</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <Label className="text-blue-900 font-medium">
                      Funding Level: {getFundingLabel(fundingLevel[0])} ({fundingLevel[0]}/10)
                    </Label>
                    <Slider
                      value={fundingLevel}
                      onValueChange={setFundingLevel}
                      max={10}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                    <p className="text-sm text-blue-600">Budget allocation for education initiatives</p>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-blue-900 font-medium">
                      Policy Intensity: {getIntensityLabel(policyIntensity[0])} ({policyIntensity[0]}/10)
                    </Label>
                    <Slider
                      value={policyIntensity}
                      onValueChange={setPolicyIntensity}
                      max={10}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                    <p className="text-sm text-blue-600">Scope and speed of policy implementation</p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Outcomes */}
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-800">
                    <TrendingUp className="h-5 w-5" />
                    Projected Impact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className={`text-3xl font-bold ${getOutcomeColor(outcomes.overall)}`}>
                      +{outcomes.overall}%
                    </div>
                    <p className="text-sm text-gray-600">Expected Improvement in Student Outcomes by 2027</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Literacy Gains</span>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                        +{outcomes.literacy}%
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Equity Improvement</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        +{outcomes.equity}%
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Teacher Satisfaction</span>
                      <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                        +{outcomes.teacher}%
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Visualizations */}
            <div className="lg:col-span-2 space-y-6">
              {/* Performance Metrics Chart */}
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-900">
                    <BarChart className="h-5 w-5" />
                    Performance Projections
                  </CardTitle>
                  <CardDescription>Current vs. projected performance metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={barData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="current" fill="#94A3B8" name="Current" />
                      <Bar dataKey="projected" fill="#3B82F6" name="Projected" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Investment Allocation */}
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-900">
                    <DollarSign className="h-5 w-5" />
                    Recommended Investment Allocation
                  </CardTitle>
                  <CardDescription>Optimal budget distribution for maximum impact</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <ResponsiveContainer width="100%" height={200}>
                      <PieChart>
                        <Pie data={pieData} cx="50%" cy="50%" outerRadius={80} dataKey="value">
                          {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>

                    <div className="space-y-3">
                      {pieData.map((item, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                            <span className="text-sm">{item.name}</span>
                          </div>
                          <span className="text-sm font-medium">{item.value}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Implementation Timeline */}
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-900">
                    <Users className="h-5 w-5" />
                    Implementation Timeline
                  </CardTitle>
                  <CardDescription>Projected rollout phases and milestones</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">Phase 1: Foundation (Months 1-6)</span>
                        <span className="text-sm text-gray-500">25%</span>
                      </div>
                      <Progress value={25} className="h-2" />
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">Phase 2: Implementation (Months 7-18)</span>
                        <span className="text-sm text-gray-500">60%</span>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">Phase 3: Scale & Optimize (Months 19-36)</span>
                        <span className="text-sm text-gray-500">90%</span>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
