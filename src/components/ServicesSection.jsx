import { motion } from "framer-motion"
import {
  FileText,
  Megaphone,
  Image,
  CreditCard,
  Mail,
  Share2,
  Flag,
  FileUser
} from "lucide-react"

const services = [
  {
    icon: FileText,
    title: "Documentation Work",
    desc:
      "Professional documentation, reports, and technical writing tailored to your needs.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    shadow: "hover:shadow-[0_8px_30px_-4px_rgba(59,130,246,0.35)]",
    borderHover: "hover:border-blue-500/30"
  },
  {
    icon: Megaphone,
    title: "Flyer Design",
    desc:
      "Eye-catching flyers that communicate your message effectively and attract attention.",
    color: "text-rose-500",
    bg: "bg-rose-500/10",
    shadow: "hover:shadow-[0_8px_30px_-4px_rgba(244,63,94,0.35)]",
    borderHover: "hover:border-rose-500/30"
  },
  {
    icon: Image,
    title: "Poster Design",
    desc:
      "Bold, creative poster designs for events, promotions, and brand awareness campaigns.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    shadow: "hover:shadow-[0_8px_30px_-4px_rgba(16,185,129,0.35)]",
    borderHover: "hover:border-emerald-500/30"
  },
  {
    icon: CreditCard,
    title: "Business Card Design",
    desc:
      "Professional visiting cards that leave a lasting first impression on your clients.",
    color: "text-violet-500",
    bg: "bg-violet-500/10",
    shadow: "hover:shadow-[0_8px_30px_-4px_rgba(139,92,246,0.35)]",
    borderHover: "hover:border-violet-500/30"
  },
  {
    icon: Mail,
    title: "Invitation Card Design",
    desc:
      "Beautiful invitation cards for weddings, parties, and corporate events.",
    color: "text-pink-500",
    bg: "bg-pink-500/10",
    shadow: "hover:shadow-[0_8px_30px_-4px_rgba(236,72,153,0.35)]",
    borderHover: "hover:border-pink-500/30"
  },
  {
    icon: Share2,
    title: "Social Media Post Design",
    desc:
      "Scroll-stopping social media graphics that boost engagement and brand presence.",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
    shadow: "hover:shadow-[0_8px_30px_-4px_rgba(6,182,212,0.35)]",
    borderHover: "hover:border-cyan-500/30"
  },
  {
    icon: Flag,
    title: "Banner Design",
    desc:
      "High-impact banners for digital and print that grab attention instantly.",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    shadow: "hover:shadow-[0_8px_30px_-4px_rgba(245,158,11,0.35)]",
    borderHover: "hover:border-amber-500/30"
  },
  {
    icon: FileUser,
    title: "Resume Design",
    desc:
      "Modern, ATS-friendly resume designs that help you land your dream job.",
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
    shadow: "hover:shadow-[0_8px_30px_-4px_rgba(99,102,241,0.35)]",
    borderHover: "hover:border-indigo-500/30"
  }
]

const ServicesSection = () => {
  return (
    <section id="services" className="py-28 relative bg-mesh">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4"
          >
            What I Offer
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5">
            My <span className="text-gradient-primary">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A comprehensive range of design and documentation services to help
            your business grow and stand out.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -8 }}
              className={`group glass rounded-3xl p-7 ${service.shadow} transition-all duration-500 border border-border/30 ${service.borderHover} relative overflow-hidden`}
            >
              {/* Subtle gradient overlay on hover */}
              <div
                className={`absolute inset-0 ${service.bg} opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-3xl`}
              />

              <div className="relative z-10">
                <motion.div
                  className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center mb-5 transition-all duration-300 group-hover:rounded-xl`}
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <service.icon
                    className={`w-7 h-7 ${service.color} transition-transform duration-300`}
                  />
                </motion.div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-gradient-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
