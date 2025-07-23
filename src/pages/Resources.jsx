"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Search, Filter } from "lucide-react"
import ResourceCard from "../components/ResourceCard"
import { globalData, filterResourcesByType, searchResources } from "../data/globalData"

const Resources = () => {
  const [resources, setResources] = useState([])
  const [filteredResources, setFilteredResources] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const allResources = globalData.resources

  const types = ["All", "Blog", "YouTube", "Paper", "Course"]

  useEffect(() => {
    try {
      // Simulate potential error (remove this in production)
      // if (Math.random() > 0.9) throw new Error("Failed to load resources")
      
      if (!allResources || allResources.length === 0) {
        throw new Error("No resources available")
      }
      
      setResources(allResources)
      setFilteredResources(allResources)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    try {
      let filtered = resources

      if (searchTerm) {
        filtered = searchResources(searchTerm)
      }

      if (selectedType && selectedType !== "All") {
        filtered = filterResourcesByType(selectedType).filter((resource) =>
          searchTerm
            ? resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
              resource.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
            : true
        )
      }

      setFilteredResources(filtered)
    } catch (err) {
      setError("Error filtering resources")
      console.error(err)
    }
  }, [searchTerm, selectedType, resources])

  const LoadingSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="card animate-pulse">
          <div className="flex items-start space-x-3 mb-4">
            <div className="w-10 h-10 bg-dark-700 rounded-lg"></div>
            <div className="flex-1">
              <div className="h-4 bg-dark-700 rounded mb-2"></div>
              <div className="h-3 bg-dark-700 rounded w-3/4"></div>
            </div>
          </div>
          <div className="h-4 bg-dark-700 rounded mb-2"></div>
          <div className="h-4 bg-dark-700 rounded w-2/3 mb-4"></div>
          <div className="flex space-x-2">
            <div className="h-3 bg-dark-700 rounded w-16"></div>
            <div className="h-3 bg-dark-700 rounded w-20"></div>
          </div>
        </div>
      ))}
    </div>
  )

  if (error) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6 glass-effect rounded-lg">
          <div className="text-6xl mb-4">🚧</div>
          <h2 className="text-2xl font-bold text-white mb-2">Resources Coming Soon</h2>
          <p className="text-gray-400 mb-4">We're currently working on adding amazing resources for you.</p>
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
            Learning <span className="gradient-text">Resources</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Curated collection of the best cybersecurity resources including courses, papers, articles, and videos.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 glass-effect rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="pl-10 pr-8 py-3 glass-effect rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500 appearance-none min-w-[150px]"
              >
                {types.map((type) => (
                  <option key={type} value={type} className="bg-dark-800">
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Type Pills */}
          <div className="flex flex-wrap gap-2">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  selectedType === type || (type === "All" && !selectedType)
                    ? "bg-primary-600 text-white"
                    : "glass-effect text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Resources Grid */}
        {loading ? (
          <LoadingSkeleton />
        ) : (
          <>
            {filteredResources.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredResources.map((resource, index) => (
                  <ResourceCard key={resource._id} resource={resource} index={index} />
                ))}
              </div>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
                <div className="text-6xl mb-4">📚</div>
                <h3 className="text-2xl font-bold text-white mb-2">No resources found</h3>
                <p className="text-gray-400 mb-4">Try adjusting your search terms or filters.</p>
                <p className="text-gray-500 text-sm">More resources coming soon!</p>
              </motion.div>
            )}
          </>
        )}

        {/* Resource Categories */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="mt-20">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Beginner Guides", count: 25, icon: "🎯" },
              { name: "Advanced Topics", count: 18, icon: "🚀" },
              { name: "Certification Prep", count: 12, icon: "🏆" },
              { name: "Research Papers", count: 8, icon: "📄" },
            ].map((category) => (
              <div key={category.name} className="card text-center">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{category.name}</h3>
                <p className="text-gray-400 text-sm">{category.count} resources</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Resources