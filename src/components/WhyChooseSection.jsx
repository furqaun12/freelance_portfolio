import { motion } from "framer-motion"
import { Zap, Palette, BadgeDollarSign, Heart } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Fast Delivery",
    desc:
      "Quick turnaround times without compromising on quality. Your project, delivered on time.",
    color: "text-primary",
    bg: "bg-primary/10",
    shadow: "hover:shadow-[0_8px_30px_-4px_rgba(108,99,255,0.35)]",
    borderHover: "hover:border-primary/30"
  },
  {
    icon: Palette,
    title: "Creative Designs",
    desc:
      "Unique, eye-catching designs that tell your brand's story and captivate your audience.",
    color: "text-secondary",
    bg: "bg-secondary/10",
    shadow: "hover:shadow-[0_8px_30px_-4px_rgba(255,118,117,0.35)]",
    borderHover: "hover:border-secondary/30"
  },
  {
    icon: BadgeDollarSign,
    title: "Affordable Pricing",
    desc:
      "Premium quality designs at competitive prices. Great value for every budget.",
    color: "text-accent",
    bg: "bg-accent/10",
    shadow: "hover:shadow-[0_8px_30px_-4px_rgba(0,184,148,0.35)]",
    borderHover: "hover:border-accent/30"
  },
  {
    icon: Heart,
    title: "Customer Satisfaction",
    desc:
      "Your happiness is my priority. Unlimited revisions until you're 100% satisfied.",
    color: "text-primary",
    bg: "bg-primary/10",
    shadow: "hover:shadow-[0_8px_30px_-4px_rgba(108,99,255,0.35)]",
    borderHover: "hover:border-primary/30"
  }
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const WhyChooseSection = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-mesh pointer-events-none" />
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary/5 blur-[100px]"
      />
      <motion.div
        animate={{ x: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-secondary/5 blur-[80px]"
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Why Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5">
            Why <span className="text-gradient-accent">Choose</span> Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            I'm dedicated to delivering exceptional results that exceed your
            expectations.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map(f => (
            <motion.div
              key={f.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className={`group text-center p-8 rounded-3xl glass border border-border/30 ${f.borderHover} ${f.shadow} transition-all duration-500 relative overflow-hidden`}
            >
              {/* Animated border glow */}
              <div
                className={`absolute inset-0 ${f.bg} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`}
              />

              <div className="relative z-10">
                <motion.div
                  className={`w-18 h-18 w-[72px] h-[72px] rounded-2xl ${f.bg} flex items-center justify-center mx-auto mb-6 transition-all duration-300`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <f.icon className={`w-8 h-8 ${f.color}`} />
                </motion.div>
                <h3 className="font-bold text-lg mb-3">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseSection
