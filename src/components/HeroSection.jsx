import { motion } from "framer-motion"
import { ArrowRight, Eye, Sparkles, Star } from "lucide-react"
import heroImg from "@/assets/hero-illustration.png"

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-mesh"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[80px]"
        />

        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-secondary/8 blur-[80px]"
        />

        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[60px]"
        />

        {/* Floating shapes */}
        <motion.div
          animate={{ y: [-10, 10, -10], rotate: [0, 45, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 left-[15%] w-6 h-6 rounded-md border-2 border-primary/20"
        />

        <motion.div
          animate={{ y: [10, -10, 10], rotate: [45, 0, 45] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-48 right-[20%] w-4 h-4 rounded-full bg-secondary/20"
        />

        <motion.div
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 left-[25%] w-3 h-3 rounded-sm bg-accent/20 rotate-45"
        />
      </div>

      <div className="container mx-auto px-6 py-20 pt-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 text-primary text-sm font-semibold mb-8"
            >
              <Sparkles className="w-4 h-4 animate-bounce-gentle" />
              Freelance Designer & Documentation Expert
            </motion.span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight">
              Creative{" "}
              <span className="text-gradient-primary relative">
                Design
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-primary/20 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />
              </span>
              {" & "}
              <span className="text-green-500">Documentation</span>{" "}
              Services
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed">
              Transform your ideas into stunning visuals. From business cards to
              social media posts, I deliver pixel-perfect designs that make your
              brand stand out.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4">
              <motion.a
  href="#contact"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.98 }}
  className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-blue-500 hover:bg-blue-600 !text-white font-semibold shadow-lg hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-300"
>
  <span className="text-white">Contact Now</span>
  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
</motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl glass border border-foreground/10 font-semibold hover:border-primary/30 transition-all"
              >
                <Eye className="w-4 h-4 group-hover:scale-110 transition-transform" />
                View Services
              </motion.a>
            </div>

            {/* STATS */}
            <div className="flex items-center gap-10 mt-14 pt-8 border-t border-border/50">
              {[
                { value: "50+", label: "Projects Done" },
                { value: "30+", label: "Happy Clients" },
                { value: "4.9", label: "Avg. Rating", icon: Star }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.15 }}
                >
                  <div className="flex items-center gap-1">
                    <div className="text-3xl font-bold text-gradient-primary">
                      {stat.value}
                    </div>
                    {stat.icon && (
                      <stat.icon className="w-4 h-4 fill-primary text-primary" />
                    )}
                  </div>

                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">

              {/* rotating rings */}
              <div className="absolute inset-[-20px] rounded-full border border-dashed border-primary/15 animate-spin-slow" />

              <div
                className="absolute inset-[-40px] rounded-full border border-dashed border-secondary/10 animate-spin-slow"
                style={{
                  animationDirection: "reverse",
                  animationDuration: "20s"
                }}
              />

              {/* glow */}
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-primary/10 rounded-full blur-[60px] scale-75"
              />

            {/* PREMIUM BADGE */}
<motion.div
  animate={{ y: [-10, 10, -10] }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  }}
  className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-md rounded-xl px-6 py-3 border border-gray-300 shadow-card z-20"
>
  <span className="text-base font-bold text-blue-500">
    ✨ Premium
  </span>
</motion.div>


{/* CREATIVE BADGE */}
<motion.div
  animate={{ y: [10, -10, 10] }}
  transition={{
    duration: 4.5,
    repeat: Infinity,
    ease: "easeInOut"
  }}
  className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-md rounded-xl px-6 py-3 border border-gray-300 shadow-card z-20"
>
  <span className="text-base font-bold text-blue-500">
    🎨 Creative
  </span>
</motion.div>
              {/* HERO IMAGE FLOAT */}
              <motion.img
                src={heroImg}
                animate={{ y: [-15, 15, -15] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-[500px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default HeroSection