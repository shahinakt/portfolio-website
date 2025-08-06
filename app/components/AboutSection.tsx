export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I&apos;m a passionate developer with experience in modern web technologies. 
            I love creating beautiful, functional, and user-friendly applications that solve real-world problems.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Frontend Development</h3>
              <p className="text-muted-foreground">
                Creating responsive and interactive user interfaces with modern frameworks.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Performance</h3>
              <p className="text-muted-foreground">
                Optimizing applications for speed, efficiency, and exceptional user experience.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Design</h3>
              <p className="text-muted-foreground">
                Bringing designs to life with attention to detail and modern aesthetics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
