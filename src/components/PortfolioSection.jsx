import { motion } from "framer-motion"
import { Layers, ExternalLink } from "lucide-react"

const portfolioItems = [
  { 
    title: "Event Flyer Design",
    category: "Flyer",
    image: "/images/portfolio-flyer.jpg"
  },
  { 
    title: "Business Card Design",
    category: "Business Card",
    image: "/images/portfolio-business-card.jpg"
  },
  { 
    title: "Social Media Posts",
    category: "Social Media",
    image: "/images/portfolio-social-media.jpg"
  },
  { 
    title: "Wedding Invitation",
    category: "Invitation",
    image: "/images/portfolio-invitation.jpg"
  },
  { 
    title: "Concert Poster",
    category: "Poster",
    image: "/images/portfolio-poster.jpg"
  },
  { 
    title: "Professional Resume",
    category: "Resume",
    image: "/images/portfolio-resume.jpg"
  }
]

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-28 bg-mesh relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Layers className="w-3.5 h-3.5" /> My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5">
            Recent <span className="text-gradient-highlight">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A showcase of my recent design work across various categories.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {portfolioItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative rounded-3xl overflow-hidden aspect-[4/3] shadow-card cursor-pointer"
            >
              {/* Portfolio Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 + 0.2 }}
                >
                  <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2 block">
                    {item.category}
                  </span>
                  <h3 className="text-white font-bold text-lg mb-3">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="w-4 h-4" />
                    <span>View Project</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection
