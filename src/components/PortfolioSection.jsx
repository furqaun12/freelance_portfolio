import { motion } from "framer-motion"
import { Layers, Sparkles } from "lucide-react"

const placeholderItems = [
  { gradient: "from-primary via-primary/80 to-primary/40", icon: "🎨" },
  { gradient: "from-secondary via-secondary/80 to-secondary/40", icon: "📄" },
  { gradient: "from-accent via-accent/80 to-accent/40", icon: "📱" },
  { gradient: "from-primary via-secondary/80 to-secondary", icon: "💳" },
  { gradient: "from-accent via-primary/60 to-primary", icon: "💌" },
  { gradient: "from-secondary via-primary/60 to-primary", icon: "📋" }
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
          {placeholderItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative rounded-3xl overflow-hidden aspect-[4/3] shadow-card"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-80`}
              />

              {/* Animated pattern overlay */}
              <motion.div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
                  backgroundSize: "28px 28px"
                }}
                animate={{ backgroundPosition: ["0px 0px", "28px 28px"] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />

              {/* Large emoji icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl opacity-15">
                {item.icon}
              </div>

              {/* Coming Soon overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 + 0.2 }}
                  className="glass-strong rounded-2xl px-6 py-4 text-center border border-white/20"
                >
                  <Sparkles className="w-5 h-5 text-primary-foreground mx-auto mb-2" />
                  <span className="text-primary-foreground font-bold text-sm tracking-wide uppercase">
                    Coming Soon
                  </span>
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
