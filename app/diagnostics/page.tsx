"use client"

import React from "react"

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
  ArrowRight,
  TrendingUp,
  Zap,
  Shield,
  Layers,
} from "lucide-react"

const countries = [
  { id: "indonesia", name: "Indonesia", flag: "🇮🇩" },
  { id: "singapore", name: "Singapore", flag: "🇸🇬" },
  { id: "kenya", name: "Kenya", flag: "🇰🇪" },
  { id: "finland", name: "Finland", flag: "🇫🇮" },
]

const strategies = [
  {
    id: "amplify-strengths",
    name: "Amplify Existing Strengths",
    icon: TrendingUp,
    description: "Build on what's already working well to create system-wide improvements",
    color: "emerald",
  },
  {
    id: "urgent-priorities",
    name: "Address Most Urgent Priorities",
    icon: Zap,
    description: "Focus resources on the most critical challenges requiring immediate attention",
    color: "red",
  },
  {
    id: "foundation-first",
    name: "Strengthen Foundations",
    icon: Shield,
    description: "Build strong basic systems before advancing to more complex interventions",
    color: "blue",
  },
  {
    id: "balanced-approach",
    name: "Balanced Multi-Front Approach",
    icon: Layers,
    description: "Work simultaneously on strengths and improvements across multiple areas",
    color: "purple",
  },
]

export default function DiagnosticsPage() {
  const [selectedCountry, setSelectedCountry] = useState("")
  const [priority, setPriority] = useState("")
  const [preferredStrategy, setPreferredStrategy] = useState("")
  const [policyReforms, setPolicyReforms] = useState<string[]>([])
  const [additionalContext, setAdditionalContext] = useState("")
  const [showResults, setShowResults] = useState(false)

  const togglePolicyReform = (reform: string) => {
    setPolicyReforms((prev) => (prev.includes(reform) ? prev.filter((r) => r !== reform) : [...prev, reform]))
  }

  const generateStrategicDiagnostic = () => {
    const country = selectedCountry
    const strategy = preferredStrategy

    if (country === "indonesia") {
      if (strategy === "amplify-strengths") {
        return `Indonesia's strategic advantage lies in its remarkable equity and student resilience. With only 8.9% of performance variation explained by socio-economic background and 12.3% of disadvantaged students achieving high performance, the system demonstrates that effective learning can happen regardless of family circumstances. The positive reading trend (+12.1 points) shows that targeted interventions work. By amplifying these strengths—scaling successful equity practices and building on student motivation (74.2%)—Indonesia can create a foundation for sustainable, system-wide improvement.`
      } else if (strategy === "urgent-priorities") {
        return `Indonesia faces a foundational learning crisis requiring immediate intervention. With 71.5% of students performing below basic mathematics proficiency, urgent action is needed to prevent a generation from being left behind. The priority must be intensive remedial programs, teacher capacity building, and ensuring every student achieves basic literacy and numeracy. While this approach requires significant resources, the cost of inaction—in terms of human capital and economic development—far exceeds the investment needed.`
      } else if (strategy === "foundation-first") {
        return `Indonesia should focus on building robust foundational systems before advancing to complex reforms. This means strengthening teacher support systems (currently 67.8%), improving basic infrastructure, and ensuring consistent quality across schools. The relatively low between-school variance (45.2%) suggests the system has potential for standardization. Once strong foundations are in place, the existing equity strengths can be leveraged for broader improvements.`
      } else {
        return `Indonesia can pursue a balanced approach that simultaneously builds on equity strengths while addressing learning gaps. The system's fairness provides a platform for targeted interventions—using the strong student motivation and improving reading trends as momentum for broader reforms. This approach leverages existing assets while systematically addressing foundational learning challenges through evidence-based interventions.`
      }
    } else if (country === "singapore") {
      if (strategy === "amplify-strengths") {
        return `Singapore should leverage its exceptional learning outcomes (91%+ proficiency) and strong learning environment to become a global innovation hub for education. With 25.8% resilient students and excellent digital integration (72.8% ICT use), the system can pioneer next-generation learning approaches, develop advanced pedagogies, and create models for other high-performing systems. The strength in developing resilient students can be scaled to support other countries' equity efforts.`
      } else if (strategy === "urgent-priorities") {
        return `Singapore's most pressing challenge is ensuring that excellence doesn't come at the cost of equity. With 12.5% of performance variation linked to socio-economic background, urgent action is needed to prevent the system from becoming increasingly stratified. Priority interventions should focus on reducing between-school variance (22.1%) and ensuring that all students, regardless of background, have access to the same high-quality opportunities.`
      } else if (strategy === "foundation-first") {
        return `Singapore should strengthen its foundational equity systems while maintaining excellence. This means ensuring consistent quality across all schools, reducing socio-economic segregation, and building robust support systems for disadvantaged students. The strong learning environment provides a foundation for more inclusive practices that don't compromise academic standards.`
      } else {
        return `Singapore can maintain its excellence while systematically improving equity through targeted interventions. The system's strengths in learning outcomes and environment provide a stable platform for equity innovations. By leveraging high-performing schools to support others and using technology to personalize learning, Singapore can achieve both excellence and equity simultaneously.`
      }
    }

    return `Based on your selected approach, we'll provide tailored recommendations that align with your strategic priorities and country context.`
  }

  const generateStrategicRecommendations = () => {
    const recommendations = []
    const country = selectedCountry
    const strategy = preferredStrategy

    if (country === "indonesia") {
      if (strategy === "amplify-strengths") {
        recommendations.push({
          title: "Scale Equity Success Models Nationwide",
          description:
            "Identify and replicate the practices that make Indonesia's education system relatively equitable, creating a national network of equity champions.",
          rationale: "Build on the existing 8.9% ESCS impact - among the lowest globally",
          implementation: "Document successful schools, create peer learning networks, develop equity toolkits",
          timeline: "12-18 months for documentation, 2-3 years for scaling",
          priority: "high",
          type: "strength-amplification",
        })

        recommendations.push({
          title: "Resilient Student Mentorship Program",
          description:
            "Create a national program where the 12.3% of resilient students mentor and support other disadvantaged peers.",
          rationale: "Leverage existing student resilience as a system asset",
          implementation: "Peer mentoring networks, leadership development, community engagement",
          timeline: "6 months pilot, 18 months national rollout",
          priority: "high",
          type: "strength-amplification",
        })

        recommendations.push({
          title: "Reading Success Acceleration Initiative",
          description:
            "Double down on the interventions driving the +12.1 point reading improvement to accelerate progress across all subjects.",
          rationale: "Build momentum from proven reading success",
          implementation: "Expand successful reading programs, cross-curricular literacy, teacher training",
          timeline: "Immediate expansion, 2-year acceleration phase",
          priority: "high",
          type: "strength-amplification",
        })
      } else if (strategy === "urgent-priorities") {
        recommendations.push({
          title: "National Learning Recovery Emergency Program",
          description:
            "Intensive intervention for the 71.5% of students below basic math proficiency through extended learning time and targeted instruction.",
          rationale: "Address the foundational learning crisis immediately",
          implementation: "Extended school days, intensive tutoring, diagnostic assessments",
          timeline: "Emergency rollout within 6 months",
          priority: "critical",
          type: "urgent-intervention",
        })

        recommendations.push({
          title: "Teacher Capacity Crisis Response",
          description:
            "Rapid deployment of teacher support systems to improve the 67.8% teacher support rate through emergency professional development.",
          rationale: "Teachers are the key lever for addressing learning gaps",
          implementation: "Intensive training programs, coaching networks, resource provision",
          timeline: "3-month emergency training, ongoing support",
          priority: "critical",
          type: "urgent-intervention",
        })
      } else if (strategy === "foundation-first") {
        recommendations.push({
          title: "Systematic Teacher Support Infrastructure",
          description:
            "Build comprehensive teacher development systems before implementing complex pedagogical reforms.",
          rationale: "Strong foundations enable sustainable improvements",
          implementation: "Teacher training institutes, mentorship programs, resource systems",
          timeline: "2-3 years for infrastructure, then program rollout",
          priority: "high",
          type: "foundation-building",
        })

        recommendations.push({
          title: "School Quality Standardization Initiative",
          description:
            "Establish minimum quality standards and support systems to reduce the 45.2% between-school variance.",
          rationale: "Consistent foundations across all schools",
          implementation: "Quality standards, school improvement grants, monitoring systems",
          timeline: "18 months development, 3 years implementation",
          priority: "high",
          type: "foundation-building",
        })
      } else {
        // Balanced approach
        recommendations.push({
          title: "Equity-Driven Learning Improvement Strategy",
          description:
            "Simultaneously leverage equity strengths while addressing learning gaps through integrated interventions.",
          rationale: "Use existing strengths as platform for comprehensive improvement",
          implementation: "Integrated programs combining equity practices with learning interventions",
          timeline: "Phased approach over 3-4 years",
          priority: "high",
          type: "balanced-approach",
        })
      }
    } else if (country === "singapore") {
      if (strategy === "amplify-strengths") {
        recommendations.push({
          title: "Global Education Innovation Hub",
          description:
            "Leverage 91%+ proficiency rates and strong learning environment to pioneer next-generation education models.",
          rationale: "Use excellence as platform for global leadership",
          implementation: "Innovation labs, international partnerships, research initiatives",
          timeline: "2-3 years for establishment",
          priority: "high",
          type: "strength-amplification",
        })

        recommendations.push({
          title: "Resilient Student Success Model Export",
          description:
            "Scale the practices that create 25.8% resilient students to support other education systems globally.",
          rationale: "Share successful equity practices internationally",
          implementation: "Documentation, training programs, international partnerships",
          timeline: "18 months development, ongoing implementation",
          priority: "medium",
          type: "strength-amplification",
        })
      } else if (strategy === "urgent-priorities") {
        recommendations.push({
          title: "Socio-Economic Integration Initiative",
          description:
            "Urgent reforms to reduce the 12.5% socio-economic impact on performance through school integration policies.",
          rationale: "Prevent increasing stratification in high-performing system",
          implementation: "Zoning reforms, admission policy changes, integration incentives",
          timeline: "Policy changes within 12 months, implementation over 2-3 years",
          priority: "critical",
          type: "urgent-intervention",
        })

        recommendations.push({
          title: "Between-School Equity Program",
          description: "Address 22.1% between-school variance through resource redistribution and support systems.",
          rationale: "Ensure consistent excellence across all schools",
          implementation: "Resource reallocation, school partnerships, quality assurance",
          timeline: "Immediate policy changes, 2-year implementation",
          priority: "high",
          type: "urgent-intervention",
        })
      }
    }

    // Add cross-cutting recommendations based on policy reforms
    if (policyReforms.includes("curriculum")) {
      recommendations.push({
        title: "Competency-Based Curriculum Aligned with Strategic Approach",
        description: `Implement curriculum reform that ${
          strategy === "amplify-strengths"
            ? "builds on existing system strengths"
            : strategy === "urgent-priorities"
              ? "addresses most critical learning gaps"
              : "provides strong foundational skills"
        }.`,
        rationale: "Curriculum reform aligned with strategic priorities",
        implementation: "Phased curriculum development and teacher training",
        timeline: "2-3 years for full implementation",
        priority: strategy === "urgent-priorities" ? "high" : "medium",
        type: "policy-reform",
      })
    }

    return recommendations.sort((a, b) => {
      const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 }
      return (
        priorityOrder[a.priority as keyof typeof priorityOrder] -
        priorityOrder[b.priority as keyof typeof priorityOrder]
      )
    })
  }

  const runDiagnostics = () => {
    if (selectedCountry) {
      setShowResults(true)
    }
  }

  const getStrategyColor = (strategyId: string) => {
    const strategy = strategies.find((s) => s.id === strategyId)
    return strategy?.color || "blue"
  }

  const getStrategyIcon = (strategyId: string) => {
    const strategy = strategies.find((s) => s.id === strategyId)
    return strategy?.icon || Target
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Strategic Education Diagnostics</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get AI-powered insights and strategic recommendations tailored to your preferred approach
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
                Configure your education system parameters and strategic preferences for personalized analysis
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

              {/* Preferred Strategy - NEW SECTION */}
              <div className="space-y-4">
                <Label className="text-foreground font-semibold text-base">
                  Preferred Strategic Approach (Optional)
                </Label>
                <p className="text-sm text-muted-foreground">
                  Choose how you'd like to approach system improvement based on your context and priorities
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {strategies.map((strategy) => {
                    const IconComponent = strategy.icon
                    const isSelected = preferredStrategy === strategy.id
                    return (
                      <Card
                        key={strategy.id}
                        className={`cursor-pointer transition-all duration-200 ${
                          isSelected
                            ? `border-${strategy.color}-500 bg-${strategy.color}-50 shadow-md`
                            : "border-border hover:border-primary/50 hover:shadow-sm"
                        }`}
                        onClick={() => setPreferredStrategy(isSelected ? "" : strategy.id)}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div
                              className={`rounded-full p-3 ${isSelected ? `bg-${strategy.color}-100` : "bg-gray-100"}`}
                            >
                              <IconComponent
                                className={`h-6 w-6 ${isSelected ? `text-${strategy.color}-600` : "text-gray-600"}`}
                              />
                            </div>
                            <div className="flex-1">
                              <h4
                                className={`font-semibold mb-2 ${
                                  isSelected ? `text-${strategy.color}-900` : "text-foreground"
                                }`}
                              >
                                {strategy.name}
                              </h4>
                              <p
                                className={`text-sm leading-relaxed ${
                                  isSelected ? `text-${strategy.color}-700` : "text-muted-foreground"
                                }`}
                              >
                                {strategy.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
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
                  placeholder="Any specific challenges, goals, or constraints you'd like to address..."
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
                Generate Strategic Recommendations
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>

          {/* Results Section */}
          {showResults && (
            <div className="space-y-12">
              {/* Strategic Diagnostic */}
              <Card
                className={`border-primary/20 bg-primary/5 shadow-sm ${preferredStrategy ? `border-${getStrategyColor(preferredStrategy)}-200 bg-${getStrategyColor(preferredStrategy)}-50/50` : ""}`}
              >
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center gap-3 text-primary text-2xl">
                    {preferredStrategy &&
                      React.createElement(getStrategyIcon(preferredStrategy), { className: "h-6 w-6" })}
                    <Target className="h-6 w-6" />
                    Strategic Diagnostic
                    {preferredStrategy && (
                      <Badge
                        className={`bg-${getStrategyColor(preferredStrategy)}-100 text-${getStrategyColor(preferredStrategy)}-800 border-${getStrategyColor(preferredStrategy)}-300`}
                      >
                        {strategies.find((s) => s.id === preferredStrategy)?.name}
                      </Badge>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground leading-8 text-lg">{generateStrategicDiagnostic()}</p>
                </CardContent>
              </Card>

              {/* Strategic Recommendations */}
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                  <Lightbulb className="h-8 w-8 text-primary" />
                  Strategic Recommendations
                  {preferredStrategy && (
                    <Badge
                      className={`bg-${getStrategyColor(preferredStrategy)}-100 text-${getStrategyColor(preferredStrategy)}-800 border-${getStrategyColor(preferredStrategy)}-300 text-base px-4 py-2`}
                    >
                      {strategies.find((s) => s.id === preferredStrategy)?.name} Approach
                    </Badge>
                  )}
                </h3>
                <div className="space-y-12">
                  {generateStrategicRecommendations().map((rec, index) => (
                    <Card key={index} className="border-border/50 hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-8">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-4">
                              <h4 className="text-2xl font-bold text-foreground">{rec.title}</h4>
                              <Badge
                                variant="outline"
                                className={`${
                                  rec.priority === "critical"
                                    ? "bg-red-50 text-red-700 border-red-200"
                                    : rec.priority === "high"
                                      ? "bg-orange-50 text-orange-700 border-orange-200"
                                      : "bg-blue-50 text-blue-700 border-blue-200"
                                } px-3 py-1`}
                              >
                                {rec.priority === "critical"
                                  ? "🚨 Critical"
                                  : rec.priority === "high"
                                    ? "⚡ High Priority"
                                    : "📋 Medium Priority"}
                              </Badge>
                              <Badge
                                variant="outline"
                                className={`${
                                  rec.type === "strength-amplification"
                                    ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                                    : rec.type === "urgent-intervention"
                                      ? "bg-red-50 text-red-700 border-red-200"
                                      : rec.type === "foundation-building"
                                        ? "bg-blue-50 text-blue-700 border-blue-200"
                                        : "bg-purple-50 text-purple-700 border-purple-200"
                                } px-3 py-1`}
                              >
                                {rec.type === "strength-amplification" && "🌟 Strength-Based"}
                                {rec.type === "urgent-intervention" && "🚀 Urgent Action"}
                                {rec.type === "foundation-building" && "🏗️ Foundation"}
                                {rec.type === "balanced-approach" && "⚖️ Balanced"}
                                {rec.type === "policy-reform" && "📜 Policy Reform"}
                              </Badge>
                            </div>
                            <p className="text-muted-foreground mb-4 text-lg leading-relaxed">{rec.description}</p>

                            {/* Strategic Details */}
                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                              <div className="space-y-3">
                                <h5 className="font-semibold text-foreground">Strategic Rationale</h5>
                                <p className="text-sm text-muted-foreground leading-relaxed">{rec.rationale}</p>
                              </div>
                              <div className="space-y-3">
                                <h5 className="font-semibold text-foreground">Implementation Approach</h5>
                                <p className="text-sm text-muted-foreground leading-relaxed">{rec.implementation}</p>
                              </div>
                            </div>

                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>
                                <strong>Timeline:</strong> {rec.timeline}
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Enhanced Context Analysis */}
              {additionalContext && (
                <Card className="mb-8 border-yellow-200 bg-yellow-50">
                  <CardHeader>
                    <CardTitle className="text-yellow-800">Contextual Analysis & Strategic Considerations</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-yellow-700">{additionalContext}</p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-yellow-800 mb-2">Strategic Implications</h4>
                        <ul className="text-sm text-yellow-700 space-y-1">
                          <li>• Context may affect implementation timeline and approach</li>
                          <li>• Stakeholder engagement critical for success</li>
                          <li>• Consider phased rollout based on local conditions</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-yellow-800 mb-2">Risk Mitigation</h4>
                        <ul className="text-sm text-yellow-700 space-y-1">
                          <li>• Monitor political and economic stability</li>
                          <li>• Build broad coalition of support</li>
                          <li>• Develop contingency plans for implementation</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-white p-3 rounded border-l-4 border-yellow-400">
                      <p className="text-sm text-yellow-800">
                        <strong>Strategic Recommendation:</strong> Given the context provided, consider a{" "}
                        {preferredStrategy === "urgent-priorities" ? "rapid but sustainable" : "gradual and inclusive"}{" "}
                        implementation approach with strong stakeholder engagement and regular progress monitoring.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Footer Actions */}
              <Card className="border-border/50 bg-accent/30 shadow-sm">
                <CardContent className="p-8">
                  <div className="flex flex-wrap gap-4 justify-between">
                    <div className="flex gap-4">
                      <Button variant="outline" className="h-12 px-6 font-medium">
                        <Download className="h-4 w-4 mr-2" />
                        Download Strategic Plan
                      </Button>
                      <Button variant="outline" onClick={runDiagnostics} className="h-12 px-6 font-medium">
                        <RotateCcw className="h-4 w-4 mr-2" />
                        Rerun Analysis
                      </Button>
                    </div>
                    <Button className="h-12 px-6 font-medium shadow-lg">
                      <FileText className="h-4 w-4 mr-2" />
                      Create Implementation Roadmap
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
