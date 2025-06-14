"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Globe, MapPin, AlertTriangle } from "lucide-react"

const sampleQuestions = [
  "What's the best way to improve foundational literacy in rural schools?",
  "How can we reduce teacher turnover in high-need areas?",
  "What are effective strategies for digital learning integration?",
  "How should we approach curriculum reform for 21st-century skills?",
]

const mockResponses = {
  literacy: {
    question: "What's the best way to improve foundational literacy in rural schools?",
    globalBestPractice:
      "According to simulated OECD research, the most effective approach combines structured phonics instruction with mother-tongue literacy development. Finland's success with early intervention programs shows 85% improvement rates when implemented consistently.",
    localRelevance:
      "For rural contexts, mobile literacy labs and community reading programs have shown particular promise. Consider leveraging local storytelling traditions and training community volunteers as reading mentors.",
    riskTradeoffs:
      "⚠️ Risk: Initial costs may be high. ⚠️ Trade-off: Focus on literacy may temporarily reduce time for other subjects. ✅ Mitigation: Integrate literacy across all subjects.",
    sdgTarget: "SDG 4.1 – Ensure quality primary education",
  },
  teacher: {
    question: "How can we reduce teacher turnover in high-need areas?",
    globalBestPractice:
      "UNESCO data suggests comprehensive support packages work best: housing subsidies, professional development opportunities, and career advancement pathways. Singapore's teacher residency model shows 90% retention rates.",
    localRelevance:
      "Consider local incentives like transportation allowances, technology stipends, and partnerships with local universities for continuing education. Community recognition programs can also boost morale.",
    riskTradeoffs:
      "⚠️ Risk: High upfront investment required. ⚠️ Trade-off: May create inequity between urban and rural teacher compensation. ✅ Mitigation: Gradual rollout with clear success metrics.",
    sdgTarget: "SDG 4.c – Increase qualified teachers",
  },
  digital: {
    question: "What are effective strategies for digital learning integration?",
    globalBestPractice:
      "According to simulated World Bank analysis, successful digital integration requires three pillars: infrastructure, teacher training, and digital content. Estonia's e-learning framework achieved 95% student engagement through systematic implementation.",
    localRelevance:
      "Start with offline-capable devices and content. Partner with telecommunications companies for connectivity. Focus on teacher confidence-building before student deployment.",
    riskTradeoffs:
      "⚠️ Risk: Digital divide may worsen inequalities. ⚠️ Trade-off: Screen time concerns vs. digital skills needs. ✅ Mitigation: Blended learning approach with strong digital citizenship curriculum.",
    sdgTarget: "SDG 4.4 - Increase the number of youth and adults who have relevant skills",
  },
  curriculum: {
    question: "How should we approach curriculum reform for 21st-century skills?",
    globalBestPractice:
      "OECD Future of Education framework emphasizes competency-based learning with focus on critical thinking, creativity, and collaboration. Canada's inquiry-based learning model shows strong outcomes in student engagement and problem-solving.",
    localRelevance:
      "Integrate local cultural knowledge and real-world problem-solving. Use project-based learning that addresses community challenges. Ensure alignment with existing assessment systems during transition.",
    riskTradeoffs:
      "⚠️ Risk: Teacher resistance to pedagogical change. ⚠️ Trade-off: Short-term test score dips during transition. ✅ Mitigation: Extensive teacher professional development and gradual implementation.",
    sdgTarget: "SDG 4.7 - Education for sustainable development and global citizenship",
  },
}

export default function RecommendationsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [currentResponse, setCurrentResponse] = useState<any>(null)

  const handleSearch = () => {
    const query = searchQuery.toLowerCase()
    if (query.includes("literacy") || query.includes("reading")) {
      setCurrentResponse(mockResponses.literacy)
    } else if (query.includes("teacher") || query.includes("turnover")) {
      setCurrentResponse(mockResponses.teacher)
    } else if (query.includes("digital") || query.includes("technology")) {
      setCurrentResponse(mockResponses.digital)
    } else if (query.includes("curriculum") || query.includes("reform")) {
      setCurrentResponse(mockResponses.curriculum)
    } else {
      setCurrentResponse(mockResponses.literacy) // Default response
    }
  }

  const handleSampleQuestion = (question: string) => {
    setSearchQuery(question)
    const query = question.toLowerCase()
    if (query.includes("literacy")) {
      setCurrentResponse(mockResponses.literacy)
    } else if (query.includes("teacher")) {
      setCurrentResponse(mockResponses.teacher)
    } else if (query.includes("digital")) {
      setCurrentResponse(mockResponses.digital)
    } else if (query.includes("curriculum")) {
      setCurrentResponse(mockResponses.curriculum)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-blue-900 mb-4">Policy Recommendation Explorer</h1>
            <p className="text-lg text-blue-700">Ask the world's smartest education consultant anything</p>
          </div>

          {/* Search Interface */}
          <Card className="mb-8 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <Search className="h-5 w-5" />
                Ask Your Question
              </CardTitle>
              <CardDescription>Get evidence-based recommendations tailored to your context</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="e.g., How can we improve student outcomes in mathematics?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                  className="flex-1"
                />
                <Button onClick={handleSearch} className="bg-blue-600 hover:bg-blue-700">
                  <Search className="h-4 w-4" />
                </Button>
              </div>

              {/* Sample Questions */}
              <div className="space-y-2">
                <p className="text-sm font-medium text-blue-900">Try these sample questions:</p>
                <div className="flex flex-wrap gap-2">
                  {sampleQuestions.map((question, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleSampleQuestion(question)}
                      className="text-xs border-blue-200 text-blue-700 hover:bg-blue-50"
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Response */}
          {currentResponse && (
            <div className="space-y-6">
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-900">{currentResponse.question}</CardTitle>
                  <div className="mt-2">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700">
                      🔗 {currentResponse.sdgTarget}
                    </Badge>
                  </div>
                </CardHeader>
              </Card>

              {/* Global Best Practice */}
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-800">
                    <Globe className="h-5 w-5" />
                    Global Best Practice
                  </CardTitle>
                  <CardDescription>Evidence from international research and successful implementations</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{currentResponse.globalBestPractice}</p>
                </CardContent>
              </Card>

              {/* Local Relevance */}
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-800">
                    <MapPin className="h-5 w-5" />
                    Local Relevance Adjustment
                  </CardTitle>
                  <CardDescription>Contextual adaptations for your specific environment</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{currentResponse.localRelevance}</p>
                </CardContent>
              </Card>

              {/* Risk Trade-offs */}
              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-orange-800">
                    <AlertTriangle className="h-5 w-5" />
                    Risk Trade-offs
                  </CardTitle>
                  <CardDescription>Potential challenges and mitigation strategies</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {currentResponse.riskTradeoffs
                      .split(".")
                      .filter((item: string) => item.trim())
                      .map((item: string, index: number) => (
                        <div key={index} className="flex items-start gap-2">
                          {item.includes("⚠️ Risk") && (
                            <Badge variant="destructive" className="text-xs">
                              Risk
                            </Badge>
                          )}
                          {item.includes("⚠️ Trade-off") && (
                            <Badge variant="secondary" className="text-xs bg-orange-100 text-orange-800">
                              Trade-off
                            </Badge>
                          )}
                          {item.includes("✅ Mitigation") && (
                            <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">
                              Mitigation
                            </Badge>
                          )}
                          <span className="text-sm text-gray-700">
                            {item
                              .replace(/⚠️|✅/g, "")
                              .replace(/Risk:|Trade-off:|Mitigation:/, "")
                              .trim()}
                          </span>
                        </div>
                      ))}
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
