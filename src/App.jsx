import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"
import Blogs from "./pages/Blogs"
import BlogDetails from "./pages/BlogDetails"
import Tools from "./pages/Tools"
import Resources from "./pages/Resources"
import Learn from "./pages/Learn"
import CTF from "./pages/CTF"
import News from "./pages/News"
import Jobs from "./pages/Jobs"
import Events from "./pages/Events"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:slug" element={<BlogDetails />} />
          <Route path="tools" element={<Tools />} />
          <Route path="resources" element={<Resources />} />
          <Route path="learn" element={<Learn />} />
          <Route path="ctf" element={<CTF />} />
          <Route path="news" element={<News />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="events" element={<Events />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
