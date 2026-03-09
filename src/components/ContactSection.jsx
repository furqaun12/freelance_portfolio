import { motion } from "framer-motion"
import { Phone, Mail, MessageCircle, Send, MapPin } from "lucide-react"
import { useState } from "react"

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [focused, setFocused] = useState(null)

  const handleSubmit = e => {
    e.preventDefault()
    const mailtoLink = `mailto:nizamuddinengineer@gmail.com?subject=Inquiry from ${formData.name}&body=${formData.message}`
    window.open(mailtoLink)
  }

  return (
    <section id="contact" className="py-28 relative bg-mesh">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            <MapPin className="w-3.5 h-3.5" /> Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5">
            Let's <span className="text-gradient-highlight">Work Together</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's create something amazing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>

            {[
              {
                icon: Phone,
                label: "Phone",
                value: "+91 9003988846",
                href: "tel:+919003988846",
                color: "text-primary",
                bg: "bg-primary/10",
                glow: "hover:shadow-glow-primary",
                border: "hover:border-primary/30"
              },
              {
                icon: Mail,
                label: "Email",
                value: "nizamuddinengineer@gmail.com",
                href: "mailto:nizamuddinengineer@gmail.com",
                color: "text-secondary",
                bg: "bg-secondary/10",
                glow: "hover:shadow-glow-secondary",
                border: "hover:border-secondary/30"
              },
              {
                icon: MessageCircle,
                label: "WhatsApp",
                value: "Chat on WhatsApp",
                href: "https://w.app/amsonscreatives",
                color: "text-accent",
                bg: "bg-accent/10",
                glow: "hover:shadow-glow-accent",
                border: "hover:border-accent/30"
              }
            ].map(contact => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 6 }}
                className={`flex items-center gap-4 p-5 rounded-2xl glass border border-border/30 ${contact.border} ${contact.glow} transition-all duration-500 group`}
              >
                <motion.div
                  className={`w-14 h-14 rounded-2xl ${contact.bg} flex items-center justify-center transition-all duration-300`}
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <contact.icon className={`w-6 h-6 ${contact.color}`} />
                </motion.div>
                <div>
                  <div className="text-sm text-muted-foreground">
                    {contact.label}
                  </div>
                  <div className="font-semibold">{contact.value}</div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-5 glass-strong p-8 rounded-3xl shadow-card border border-border/30"
          >
            {[
              {
                name: "name",
                label: "Your Name",
                type: "text",
                placeholder: "John Doe"
              },
              {
                name: "email",
                label: "Email Address",
                type: "email",
                placeholder: "john@example.com"
              }
            ].map(field => (
              <div key={field.name} className="relative">
                <label
                  className={`text-sm font-semibold mb-2 block transition-colors duration-300 ${
                    focused === field.name ? "text-primary" : ""
                  }`}
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  required
                  value={formData[field.name]}
                  onChange={e =>
                    setFormData({ ...formData, [field.name]: e.target.value })
                  }
                  onFocus={() => setFocused(field.name)}
                  onBlur={() => setFocused(null)}
                  className="w-full px-5 py-3.5 rounded-xl border border-input bg-background/50 focus:ring-2 focus:ring-primary/20 focus:border-primary/50 outline-none transition-all duration-300"
                  placeholder={field.placeholder}
                />
              </div>
            ))}
            <div>
              <label
                className={`text-sm font-semibold mb-2 block transition-colors duration-300 ${
                  focused === "message" ? "text-primary" : ""
                }`}
              >
                Message
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={e =>
                  setFormData({ ...formData, message: e.target.value })
                }
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                className="w-full px-5 py-3.5 rounded-xl border border-input bg-background/50 focus:ring-2 focus:ring-primary/20 focus:border-primary/50 outline-none transition-all duration-300 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-300"
            >
              <span className="text-white">Send Message</span> 
              <Send className="w-4 h-4 text-white" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
