import { motion } from "framer-motion"
import {
  BadgeCheck,
  FileText,
  Image,
  Megaphone,
  MessageSquare,
  ScrollText
} from "lucide-react"

const portfolioItems = [
  {
    title: "Tech Expo Event Flyer",
    category: "Flyer Design",
    description: "Promotional flyer designed for a startup expo with strong CTA hierarchy.",
    image: "/portfolio/flyer-tech-expo.svg",
    icon: Megaphone,
    badge: "Print + Digital"
  },
  {
    title: "Summer Fest Poster",
    category: "Poster Design",
    description: "Color-forward event poster optimized for social feeds and print boards.",
    image: "/portfolio/poster-summer-fest.svg",
    icon: Image,
    badge: "A3 Ready"
  },
  {
    title: "Corporate Business Card",
    category: "Business Card",
    description: "Minimal premium business card style with high readability and clean spacing.",
    image: "/portfolio/business-card-corporate.svg",
    icon: BadgeCheck,
    badge: "Press Ready"
  },
  {
    title: "Wedding Invite Suite",
    category: "Invitation Card",
    description: "Elegant bilingual wedding invitation card with matching RSVP insert.",
    image: "/portfolio/invitation-wedding-suite.svg",
    icon: ScrollText,
    badge: "Custom Theme"
  },
  {
    title: "Cafe Launch Social Pack",
    category: "Social Media",
    description: "Instagram-ready launch creatives including feed, story, and ad variants.",
    image: "/portfolio/social-cafe-launch.svg",
    icon: MessageSquare,
    badge: "Multi Format"
  },
  {
    title: "Executive Resume Layout",
    category: "Resume Design",
    description: "ATS-friendly resume with visual hierarchy tuned for hiring managers.",
    image: "/portfolio/resume-executive-layout.svg",
    icon: FileText,
    badge: "ATS Friendly"
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
            <BadgeCheck className="w-3.5 h-3.5" /> Selected Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5">
            Recent <span className="text-gradient-highlight">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A showcase of completed branding, marketing, and documentation projects.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {portfolioItems.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group glass rounded-3xl overflow-hidden border border-border/30 shadow-card hover:shadow-card-hover transition-all duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={`${item.title} preview`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />
                <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/85 text-foreground text-xs font-semibold border border-border/40">
                  <item.icon className="w-3.5 h-3.5 text-primary" />
                  {item.category}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold mb-2 leading-snug">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                  {item.badge}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection
