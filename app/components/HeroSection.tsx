export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
            Hi, I&apos;m <span className="text-primary">Shahina KT</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            A passionate developer creating amazing digital experiences with modern technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button 
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              View My Work
            </button>
            <button 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 border border-border text-foreground rounded-lg hover:bg-secondary transition-colors font-medium"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
