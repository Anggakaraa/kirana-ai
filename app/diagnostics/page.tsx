"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ArrowRight, Globe } from "lucide-react"
import Link from "next/link"

const countries = [
  { id: "indonesia", name: "Indonesia", flag: "🇮🇩" },
  { id: "kenya", name: "Kenya", flag: "🇰🇪" },
  { id: "peru", name: "Peru", flag: "🇵🇪" },
  { id: "finland", name: "Finland", flag: "🇫🇮" },
]

export default function DiagnosticsPage() {
  const [selectedCountry, setSelectedCountry] = useState("")
  const [learningRecovery, setLearningRecovery] = useState([5])
  const [digitalAccess, setDigitalAccess] = useState([5])
  const [teacherQuality, setTeacherQuality] = useState([5])
  const [fundingLevel, setFundingLevel] = useState([5])
  const [contextualNotes, setContextualNotes] = useState("")

  const canRunDiagnosis = selectedCountry && contextualNotes.trim()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-blue-900 mb-4">Country Profile & Diagnostics</h1>
            <p className="text-lg text-blue-700">
              Configure your education system parameters for personalized analysis
            </p>
          </div>

          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <Globe className="h-5 w-5" />
                System Configuration
              </CardTitle>
              <CardDescription>Provide details about your education system for accurate diagnosis</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Country Selection */}
              <div className="space-y-2">
                <Label htmlFor="country" className="text-blue-900 font-medium">
                  Select Country
                </Label>
                <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choose your country..." />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country.id} value={country.id}>
                        <span className="flex items-center gap-2">
                          <span>{country.flag}</span>
                          <span>{country.name}</span>
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Sliders */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label className="text-blue-900 font-medium">
                    Learning Recovery Status: {learningRecovery[0]}/10
                  </Label>
                  <Slider
                    value={learningRecovery}
                    onValueChange={setLearningRecovery}
                    max={10}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <p className="text-sm text-blue-600">How well has your system recovered from learning disruptions?</p>
                </div>

                <div className="space-y-3">
                  <Label className="text-blue-900 font-medium">Digital Access: {digitalAccess[0]}/10</Label>
                  <Slider
                    value={digitalAccess}
                    onValueChange={setDigitalAccess}
                    max={10}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <p className="text-sm text-blue-600">Level of technology infrastructure and student device access</p>
                </div>

                <div className="space-y-3">
                  <Label className="text-blue-900 font-medium">Teacher Workforce Quality: {teacherQuality[0]}/10</Label>
                  <Slider
                    value={teacherQuality}
                    onValueChange={setTeacherQuality}
                    max={10}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <p className="text-sm text-blue-600">Training, retention, and overall teacher effectiveness</p>
                </div>

                <div className="space-y-3">
                  <Label className="text-blue-900 font-medium">Funding Level: {fundingLevel[0]}/10</Label>
                  <Slider
                    value={fundingLevel}
                    onValueChange={setFundingLevel}
                    max={10}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <p className="text-sm text-blue-600">Adequacy of education budget and resource allocation</p>
                </div>
              </div>

              {/* Contextual Notes */}
              <div className="space-y-2">
                <Label htmlFor="notes" className="text-blue-900 font-medium">
                  Contextual Notes
                </Label>
                <Textarea
                  id="notes"
                  placeholder="e.g., Upcoming election, Teacher union protests, New curriculum rollout, Economic recession..."
                  value={contextualNotes}
                  onChange={(e) => setContextualNotes(e.target.value)}
                  className="min-h-[100px]"
                />
                <p className="text-sm text-blue-600">
                  Describe current political, economic, or social factors affecting education
                </p>
              </div>

              {/* Run Diagnosis Button */}
              <div className="pt-4">
                <Link
                  href={
                    canRunDiagnosis
                      ? `/diagnosis?country=${selectedCountry}&lr=${learningRecovery[0]}&da=${digitalAccess[0]}&tq=${teacherQuality[0]}&fl=${fundingLevel[0]}&notes=${encodeURIComponent(contextualNotes)}`
                      : "#"
                  }
                >
                  <Button
                    size="lg"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    disabled={!canRunDiagnosis}
                  >
                    Run Diagnosis
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
