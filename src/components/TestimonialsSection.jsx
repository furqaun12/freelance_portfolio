import { motion } from "framer-motion"
import { Star, Quote, MessageSquareQuote } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Small Business Owner",
    text:
      "Absolutely incredible work! The business cards and flyers designed for my startup were stunning. Quick delivery and very professional communication throughout.",
    rating: 5,
    color: "bg-blue-500/20 text-blue-400",
    accent: "border-blue-500/20"
  },
  {
    name: "Rahul Mehta",
    role: "Event Organizer",
    text:
      "The invitation cards and posters for our annual event were a huge hit. Creative designs that perfectly captured the theme. Highly recommended!",
    rating: 5,
    color: "bg-rose-500/20 text-rose-400",
    accent: "border-rose-500/20"
  },
  {
    name: "Ananya Patel",
    role: "Marketing Manager",
    text:
      "Our social media engagement doubled after using these post designs. The attention to detail and understanding of brand aesthetics is remarkable.",
    rating: 5,
    color: "bg-emerald-500/20 text-emerald-400",
    accent: "border-emerald-500/20"
  }
]

const TestimonialsSection = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
            <MessageSquareQuote className="w-3.5 h-3.5" /> Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            What Clients <span className="text-gradient-primary">Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-7">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className={`glass rounded-3xl p-8 hover:shadow-card-hover transition-all duration-500 relative overflow-hidden border ${t.accent}`}
            >
              {/* Decorative gradient blob */}
              <div
                className={`absolute -top-10 -right-10 w-24 h-24 rounded-full ${
                  t.color.split(" ")[0]
                } blur-2xl opacity-40`}
              />

              <Quote className="w-10 h-10 text-blue-500/20 absolute top-6 right-6" />

              <div className="relative z-10">
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + j * 0.08 }}
                    >
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-8 text-[15px]">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-2xl ${t.color} flex items-center justify-center font-bold text-lg`}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
