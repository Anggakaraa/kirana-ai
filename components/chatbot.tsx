"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageCircle, Send, X, Bot, User } from "lucide-react"

interface Message {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

const sampleResponses = [
  "Based on global best practices, I'd recommend starting with a comprehensive needs assessment. According to simulated UNESCO data, successful curriculum reforms typically begin with stakeholder consultation and pilot programs.",
  "That's an excellent question about teacher retention. Research from Finland and Singapore suggests that comprehensive support packages work best - combining professional development, competitive compensation, and career advancement opportunities.",
  "For digital learning integration, I'd suggest following Estonia's model: start with teacher training, ensure reliable infrastructure, and implement gradually. The key is building teacher confidence before student deployment.",
  "School closure impacts vary by grade level. Early elementary students typically need the most intensive intervention. Consider implementing targeted remedial programs and extending learning time through summer programs or after-school tutoring.",
]

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hello! I'm your AI education consultant. I can help you with policy questions, best practices, and strategic planning. What would you like to discuss?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: sampleResponses[Math.floor(Math.random() * sampleResponses.length)],
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
    }, 1000)
  }

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 h-16 w-16 rounded-full bg-primary hover:bg-primary/90 shadow-xl hover:shadow-2xl z-50 transition-all duration-300"
        size="icon"
      >
        <MessageCircle className="h-7 w-7 text-primary-foreground" />
      </Button>
    )
  }

  return (
    <Card className="fixed bottom-8 right-8 w-96 h-[500px] shadow-2xl z-50 border-border/50">
      <CardHeader className="bg-primary text-primary-foreground rounded-t-xl p-6">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-3">
            <Bot className="h-5 w-5" />
            Ask the Consultant
          </CardTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0 flex flex-col h-[420px]">
        <ScrollArea className="flex-1 p-6">
          <div className="space-y-6">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-accent text-foreground border border-border/50"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {message.sender === "bot" && <Bot className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />}
                    {message.sender === "user" && <User className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                    <span>{message.content}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="p-6 border-t border-border/50">
          <div className="flex gap-3">
            <Input
              placeholder="Ask about education policy..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              className="flex-1 h-12"
            />
            <Button onClick={handleSendMessage} size="icon" className="h-12 w-12 shadow-sm">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
