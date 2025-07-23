"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Calendar, ExternalLink, TrendingUp, AlertTriangle, ShieldAlert, Lock, User, Sparkles } from "lucide-react"
import { globalData, filterNewsByCategory } from "../data/globalData"

const News = () => {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const allNews = globalData.news

  // Categorize news into "This Week" and "Older"
  const categorizeNewsByDate = (newsItems) => {
    const oneWeekAgo = new Date()
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)
    
    return newsItems.reduce((acc, item) => {
      const itemDate = new Date(item.date)
      if (itemDate >= oneWeekAgo) {
        acc.thisWeek.push(item)
      } else {
        acc.older.push(item)
      }
      return acc
    }, { thisWeek: [], older: [] })
  }

  const categories = [
    { name: "All", icon: <ShieldAlert className="h-4 w-4" /> },
    { name: "Vulnerabilities", icon: <AlertTriangle className="h-4 w-4" /> },
    { name: "Cybercrime", icon: <User className="h-4 w-4" /> },
    { name: "Data Breach", icon: <Lock className="h-4 w-4" /> },
    { name: "Government Security", icon: <Lock className="h-4 w-4" /> }
  ]

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true)
      try {
        await new Promise(resolve => setTimeout(resolve, 300))
        // Sort news by date (newest first)
        const sortedNews = [...allNews].sort((a, b) => new Date(b.date) - new Date(a.date))
        setNews(sortedNews)
      } catch (error) {
        console.error("Error fetching news:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchNews()
  }, [])

  const filteredNews = selectedCategory === "All" 
    ? news 
    : filterNewsByCategory(selectedCategory)

  const { thisWeek, older } = categorizeNewsByDate(filteredNews)

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('en-US', options)
  }

  const getSeverityColor = (severity) => {
    const colors = {
      Critical: "bg-red-500/20 text-red-400 border-red-500/30",
      High: "bg-orange-500/20 text-orange-400 border-orange-500/30",
      Medium: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      Low: "bg-blue-500/20 text-blue-400 border-blue-500/30"
    }
    return colors[severity] || "bg-gray-500/20 text-gray-400 border-gray-500/30"
  }

  const getSeverityIcon = (severity) => {
    if (severity === "Critical") {
      return <AlertTriangle className="h-4 w-4" />
    }
    return <TrendingUp className="h-4 w-4" />
  }

  const NewsItem = ({ item }) => (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="card group hover:border-primary-500/30 transition-colors"
    >
      <div className="p-5">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h2 className="text-lg md:text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
            {item.headline}
          </h2>
          <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs border ${getSeverityColor(item.severity)}`}>
            {getSeverityIcon(item.severity)}
            <span>{item.severity}</span>
          </div>
        </div>

        <p className="text-gray-400 mb-4">{item.summary}</p>

        <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
          <div className="flex items-center gap-3 text-gray-500">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(item.date)}</span>
            </div>
            <span>•</span>
            <span>{item.source}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-2 py-1 rounded-full text-xs bg-dark-700 text-primary-400">
              {item.category}
            </span>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-primary-400 hover:text-primary-300 transition-colors"
            >
              Read
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  )

  const LoadingSkeleton = () => (
    <div className="space-y-6">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="card animate-pulse">
          <div className="p-5">
            <div className="h-6 bg-dark-700 rounded mb-3 w-3/4"></div>
            <div className="h-4 bg-dark-700 rounded mb-2 w-full"></div>
            <div className="h-4 bg-dark-700 rounded mb-4 w-5/6"></div>
            <div className="flex justify-between">
              <div className="h-3 bg-dark-700 rounded w-20"></div>
              <div className="h-3 bg-dark-700 rounded w-16"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Cybersecurity <span className="gradient-text">News</span>
          </h1>
          <p className="text-lg text-gray-400">
            Latest threats, vulnerabilities, and security incidents
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm transition-all ${
                  selectedCategory === category.name
                    ? "bg-primary-600 text-white"
                    : "glass-effect text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* News List */}
        {loading ? (
          <LoadingSkeleton />
        ) : (
          <div className="space-y-10">
            {/* New This Week Section */}
            {thisWeek.length > 0 && (
              <div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-2 mb-6"
                >
                  <Sparkles className="h-5 w-5 text-primary-400" />
                  <h2 className="text-xl font-bold text-white">New This Week</h2>
                  <span className="ml-2 px-2 py-1 rounded-full text-xs bg-primary-500/20 text-primary-400">
                    {thisWeek.length} new
                  </span>
                </motion.div>
                
                <div className="space-y-6">
                  {thisWeek.map((item, index) => (
                    <NewsItem key={item.id} item={item} />
                  ))}
                </div>
              </div>
            )}

            {/* Past News Section */}
            {older.length > 0 && (
              <div>
                <motion.h2 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-xl font-bold text-white mb-6"
                >
                  Past News
                </motion.h2>
                
                <div className="space-y-6">
                  {older.map((item, index) => (
                    <NewsItem key={item.id} item={item} />
                  ))}
                </div>
              </div>
            )}

            {filteredNews.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="text-center py-16"
              >
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-white mb-2">No news found</h3>
                <p className="text-gray-400">Try selecting a different category</p>
              </motion.div>
            )}
          </div>
        )}

   
      </div>
    </div>
  )
}

export default News