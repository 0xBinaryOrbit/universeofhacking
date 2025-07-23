"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { BookOpen, Play, CheckCircle, Clock, Users, Star } from "lucide-react"
import { globalData } from "../data/globalData"

const Learn = () => {
  const [selectedPath, setSelectedPath] = useState("beginner")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Get data with error handling
  const learningPaths = globalData?.learningPaths || null
  const certifications = globalData?.certifications || null

  useEffect(() => {
    try {
      // Simulate potential error (remove this in production)
      // if (Math.random() > 0.9) throw new Error("Failed to load learning paths")
      
      if (!learningPaths || Object.keys(learningPaths).length === 0) {
        throw new Error("No learning paths available")
      }
      
      if (!certifications || certifications.length === 0) {
        console.warn("No certifications available")
      }
      
      setLoading(false)
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }, [])

  const LoadingSkeleton = () => (
    <div className="space-y-8">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="card animate-pulse">
          <div className="flex items-center justify-between mb-4">
            <div className="h-6 bg-dark-700 rounded w-1/3"></div>
            <div className="h-4 bg-dark-700 rounded w-20"></div>
          </div>
          <div className="h-4 bg-dark-700 rounded mb-2"></div>
          <div className="h-4 bg-dark-700 rounded w-2/3"></div>
        </div>
      ))}
    </div>
  )

  if (error) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6 glass-effect rounded-lg">
          <div className="text-6xl mb-4">🚧</div>
          <h2 className="text-2xl font-bold text-white mb-2">Learning Paths Coming Soon</h2>
          <p className="text-gray-400 mb-4">We're currently preparing amazing learning materials for you.</p>
          <p className="text-sm text-gray-500">Error: {error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Learn <span className="gradient-text">Cybersecurity</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Master cybersecurity with our structured learning paths, from beginner fundamentals to advanced techniques.
          </p>
        </motion.div>

        {/* Learning Path Selector */}
        {learningPaths && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              {Object.entries(learningPaths).map(([key, path]) => (
                <button
                  key={key}
                  onClick={() => setSelectedPath(key)}
                  className={`px-6 py-4 rounded-lg text-left transition-all duration-300 ${
                    selectedPath === key
                      ? "bg-primary-600 text-white"
                      : "glass-effect text-gray-400 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <h3 className="font-semibold mb-1">{path.title}</h3>
                  <p className="text-sm opacity-80">{path.description}</p>
                  <div className="flex items-center mt-2 text-xs">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{path.duration}</span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Selected Learning Path */}
        {learningPaths && (
          <motion.div key={selectedPath} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="mb-16">
            <div className="card bg-gradient-to-r from-primary-600/20 to-accent-600/20 border-primary-500/30 mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">{learningPaths[selectedPath].title}</h2>
              <p className="text-gray-300 mb-4">{learningPaths[selectedPath].description}</p>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>Duration: {learningPaths[selectedPath].duration}</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  <span>{learningPaths[selectedPath].modules.length} Modules</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  <span>10K+ Students</span>
                </div>
              </div>
            </div>

            {/* Modules */}
            {loading ? (
              <LoadingSkeleton />
            ) : (
              <div className="space-y-6">
                {learningPaths[selectedPath].modules.length > 0 ? (
                  learningPaths[selectedPath].modules.map((module, index) => (
                    <motion.div
                      key={module.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="card group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4 flex-1">
                          <div className={`p-2 rounded-lg ${module.completed ? "bg-green-500/20" : "bg-primary-500/20"}`}>
                            {module.completed ? (
                              <CheckCircle className="h-6 w-6 text-green-400" />
                            ) : (
                              <Play className="h-6 w-6 text-primary-400" />
                            )}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors duration-200">
                              {module.title}
                            </h3>
                            <p className="text-gray-400 mb-3">{module.description}</p>
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                <span>{module.duration}</span>
                              </div>
                              <div className="flex items-center">
                                <BookOpen className="h-4 w-4 mr-1" />
                                <span>{module.lessons} lessons</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button className={`btn-${module.completed ? "secondary" : "primary"} ml-4`}>
                          {module.completed ? "Review" : "Start"}
                        </button>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
                    <div className="text-6xl mb-4">📚</div>
                    <h3 className="text-2xl font-bold text-white mb-2">No modules available yet</h3>
                    <p className="text-gray-400">We're working on adding content to this learning path.</p>
                    <p className="text-gray-500 text-sm mt-2">Check back soon!</p>
                  </motion.div>
                )}
              </div>
            )}
          </motion.div>
        )}

        {/* Certifications Section */}
        {certifications && certifications.length > 0 ? (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Popular Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card"
                >
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-lg">{cert.name.charAt(0)}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-1">{cert.name}</h3>
                    <p className="text-gray-400 text-sm">{cert.provider}</p>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Difficulty:</span>
                      <span
                        className={`${
                          cert.difficulty === "Beginner"
                            ? "text-green-400"
                            : cert.difficulty === "Intermediate"
                              ? "text-yellow-400"
                              : "text-red-400"
                        }`}
                      >
                        {cert.difficulty}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Duration:</span>
                      <span className="text-white">{cert.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Students:</span>
                      <span className="text-white">{cert.students}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Rating:</span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-white">{cert.rating}</span>
                      </div>
                    </div>
                  </div>

                  <button className="btn-primary w-full mt-4">Learn More</button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          !loading && (
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="mb-16 text-center">
              <div className="text-6xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold text-white mb-2">Certifications Coming Soon</h3>
              <p className="text-gray-400">We're curating the best cybersecurity certifications for you.</p>
            </motion.div>
          )
        )}

  
      </div>
    </div>
  )
}

export default Learn