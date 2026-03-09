import { motion } from "framer-motion"
import {
  Instagram,
  Twitter,
  Linkedin,
  Github,
  Sparkles,
  ArrowUpRight
} from "lucide-react"

const socialLinks = [
  {
    icon: Instagram,
    label: "Instagram",
    color: "hover:bg-accent/20 hover:text-accent"
  },
  {
    icon: Twitter,
    label: "Twitter",
    color: "hover:bg-primary/20 hover:text-primary"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    color: "hover:bg-secondary/20 hover:text-secondary"
  },
  {
    icon: Github,
    label: "GitHub",
    color: "hover:bg-primary/20 hover:text-primary"
  }
]

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-foreground text-primary-foreground">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-secondary/5 blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <a
              href="#hero"
              className="inline-flex items-center gap-2 text-xl font-bold font-heading mb-5"
            >
              <span className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </span>
              <span className="text-gradient-primary">Amsons</span>
              <span className="text-white">Studio</span>
            </a>
            <p className="text-primary-foreground/50 text-sm leading-relaxed max-w-xs">
              Professional freelance design and documentation services by Amsons Creatives. Turning
              your ideas into stunning visuals.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-5 text-primary-foreground/80">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/50">
              {[
                "Flyer Design",
                "Poster Design",
                "Business Cards",
                "Social Media Posts",
                "Resume Design",
                "Documentation"
              ].map(s => (
                <li key={s}>
                  <a
                    href="#services"
                    className="group inline-flex items-center gap-1 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {s}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-5 text-primary-foreground/80">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-11 h-11 rounded-xl bg-primary-foreground/8 flex items-center justify-center transition-colors duration-300 ${social.color}`}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-primary-foreground/30">
            © {new Date().getFullYear()} Amsons Creatives Studio. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-primary-foreground/30">
            <a
              href="#"
              className="hover:text-primary-foreground/60 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-primary-foreground/60 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
