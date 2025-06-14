"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, ExternalLink } from "lucide-react"

const peerStories = [
  {
    id: "vietnam-literacy",
    country: "Vietnam",
    flag: "🇻🇳",
    title: "Improving Early Grade Literacy",
    challenge: "Low reading proficiency in rural areas with limited teacher training and resources",
    intervention: "Trained school leaders and implemented structured pedagogy with community support",
    result: "Reading scores improved by 20+ points over 5 years, rural-urban gap reduced by 40%",
    sdgTargets: ["4.1", "4.c"],
    category: "Literacy",
  },
  {
    id: "ghana-attendance",
    country: "Ghana",
    flag: "🇬🇭",
    title: "Tackling Teacher Absenteeism",
    challenge: "High teacher absentee rates in public schools affecting learning continuity",
    intervention: "Community-based monitoring system combined with performance incentive program",
    result: "Teacher attendance improved by 21%; student test scores rose significantly",
    sdgTargets: ["4.c"],
    category: "Teacher Management",
  },
  {
    id: "rwanda-digital",
    country: "Rwanda",
    flag: "🇷🇼",
    title: "Digital Learning Transformation",
    challenge: "Limited access to technology and digital skills in rural schools",
    intervention: "One Laptop Per Child program with teacher training and local content development",
    result: "95% of primary schools connected, digital literacy scores increased 3x",
    sdgTargets: ["4.4", "4.1"],
    category: "Technology",
  },
  {
    id: "brazil-equity",
    country: "Brazil",
    flag: "🇧🇷",
    title: "Reducing Learning Inequalities",
    challenge: "Large achievement gaps between socioeconomic groups and regions",
    intervention: "Targeted funding formula with performance accountability and support systems",
    result: "Achievement gap reduced by 30%, low-performing schools improved dramatically",
    sdgTargets: ["4.1", "4.5"],
    category: "Equity",
  },
  {
    id: "estonia-innovation",
    country: "Estonia",
    flag: "🇪🇪",
    title: "Building 21st Century Skills",
    challenge: "Need to prepare students for digital economy and future workforce demands",
    intervention: "Comprehensive curriculum reform with coding, critical thinking, and project-based learning",
    result: "Top PISA performer in digital problem-solving, high youth employment rates",
    sdgTargets: ["4.4", "4.7"],
    category: "Innovation",
  },
  {
    id: "colombia-peace",
    country: "Colombia",
    flag: "🇨🇴",
    title: "Education in Post-Conflict Areas",
    challenge: "Rebuilding education systems in areas affected by decades of conflict",
    intervention: "Mobile schools, psychosocial support, and community reconciliation programs",
    result: "School enrollment increased 85% in conflict-affected areas, peace indicators improved",
    sdgTargets: ["4.1", "4.7"],
    category: "Post-Conflict",
  },
]

const categories = ["All", "Literacy", "Teacher Management", "Technology", "Equity", "Innovation", "Post-Conflict"]

export default function PeerPlaybookPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-blue-900 mb-4">Peer Country Playbook</h1>
            <p className="text-lg text-blue-700 max-w-3xl mx-auto">
              Learn from successful education interventions around the world. These real-world examples show how
              countries have tackled similar challenges to yours.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                size="sm"
                className="border-blue-200 text-blue-700 hover:bg-blue-50"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Stories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {peerStories.map((story) => (
              <Card key={story.id} className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{story.flag}</span>
                    <Badge variant="outline" className="text-xs">
                      {story.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-blue-900 text-lg">
                    {story.country} – {story.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-red-800 text-sm mb-1">Challenge:</h4>
                    <p className="text-sm text-gray-700">{story.challenge}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-blue-800 text-sm mb-1">Intervention:</h4>
                    <p className="text-sm text-gray-700">{story.intervention}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-green-800 text-sm mb-1">Result:</h4>
                    <p className="text-sm text-gray-700">{story.result}</p>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {story.sdgTargets.map((target) => (
                      <Badge key={target} variant="outline" className="text-xs bg-blue-50 text-blue-700">
                        🔗 SDG {target}
                      </Badge>
                    ))}
                  </div>

                  <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Read Full Story
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <Card className="mt-12 border-blue-200 bg-blue-50">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Want to Share Your Country's Success Story?</h3>
              <p className="text-blue-700 mb-6 max-w-2xl mx-auto">
                Help other education leaders learn from your experiences. Submit your country's education innovation for
                inclusion in the Peer Playbook.
              </p>
              <div className="flex gap-4 justify-center">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">Submit Your Story</Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View All Case Studies
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
