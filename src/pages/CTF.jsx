"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Calendar, Users, Trophy, ExternalLink, Clock, Target, Sparkles } from "lucide-react"
import CountdownTimer from "../components/CountdownTimer"
import { globalData } from "../data/globalData"

const CTF = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([])
  const [loading, setLoading] = useState(true)

  // Replace mock data with:
  const mockUpcomingEvents = globalData.ctfEvents.upcoming

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setUpcomingEvents(mockUpcomingEvents)
      setLoading(false)
    }, 1000)
  }, [])

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const getDifficultyColor = (difficulty) => {
    const colors = {
      Beginner: "bg-green-500/20 text-green-400",
      Intermediate: "bg-yellow-500/20 text-yellow-400",
      Advanced: "bg-red-500/20 text-red-400",
      "All Levels": "bg-blue-500/20 text-blue-400",
    }
    return colors[difficulty] || "bg-gray-500/20 text-gray-400"
  }

  const LoadingSkeleton = () => (
    <div className="space-y-8">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="card animate-pulse">
          <div className="flex justify-between items-start mb-4">
            <div className="h-6 bg-dark-700 rounded w-1/3"></div>
            <div className="h-4 bg-dark-700 rounded w-20"></div>
          </div>
          <div className="space-y-3 mb-6">
            <div className="h-4 bg-dark-700 rounded"></div>
            <div className="h-4 bg-dark-700 rounded w-3/4"></div>
          </div>
          <div className="h-10 bg-dark-700 rounded"></div>
        </div>
      ))}
    </div>
  )

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            CTF <span className="gradient-text">Events</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Participate in upcoming Capture The Flag competitions and test your cybersecurity skills
          </p>
        </motion.div>

       

        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            Upcoming <span className="gradient-text">Competitions</span>
          </h2>

          {loading ? (
            <LoadingSkeleton />
          ) : upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card group hover:border-primary-500/30 transition-colors"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold text-white group-hover:text-primary-400 transition-colors">
                      {event.name}
                    </h3>
                    {event.difficulty && (
                      <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(event.difficulty)}`}>
                        {event.difficulty}
                      </span>
                    )}
                  </div>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{event.description}</p>

                  <div className="space-y-2 mb-6 text-sm">
                    <div className="flex items-center justify-between text-gray-400">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>Start:</span>
                      </div>
                      <span className="text-white">{formatDate(event.startDate)}</span>
                    </div>
                    <div className="flex items-center justify-between text-gray-400">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>End:</span>
                      </div>
                      <span className="text-white">{formatDate(event.endDate)}</span>
                    </div>
                    <div className="flex items-center justify-between text-gray-400">
                      <div className="flex items-center">
                        <Trophy className="h-4 w-4 mr-2" />
                        <span>Prize:</span>
                      </div>
                      <span className="text-green-400">{event.prize || 'Not specified'}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{event.platform}</span>
                    <a
                      href={event.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex items-center gap-2 text-sm"
                    >
                      <span>Register</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="card text-center py-12">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-white mb-2">No upcoming events found</h3>
              <p className="text-gray-400">Check back later for new CTF competitions</p>
            </div>
          )}
        </motion.div>

        {/* CTF Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="card bg-dark-800/50 border-primary-500/20"
        >
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            CTF <span className="gradient-text">Preparation Tips</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "📚",
                title: "Learn the Basics",
                description: "Master core concepts like cryptography, web security, and binary exploitation before competing."
              },
              {
                icon: "👥",
                title: "Build a Team",
                description: "Collaborate with others who have complementary skills in different challenge categories."
              },
              {
                icon: "⚡",
                title: "Practice Regularly",
                description: "Use platforms like HackTheBox and TryHackMe to sharpen your skills between competitions."
              },
              {
                icon: "🔧",
                title: "Tool Proficiency",
                description: "Become fluent with essential tools like Burp Suite, Ghidra, and pwntools."
              },
              {
                icon: "⏱️",
                title: "Time Management",
                description: "Prioritize challenges based on points and your team's strengths during competitions."
              },
              {
                icon: "📝",
                title: "Study Writeups",
                description: "Analyze solutions from past CTFs to learn new techniques and approaches."
              }
            ].map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-dark-800/30 rounded-lg p-6 text-center hover:bg-dark-700/50 transition-colors"
              >
                <div className="text-4xl mb-3">{tip.icon}</div>
                <h3 className="text-lg font-bold text-white mb-3">{tip.title}</h3>
                <p className="text-gray-400 text-sm">{tip.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default CTF