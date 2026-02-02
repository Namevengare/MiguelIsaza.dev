'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-cream text-charcoal">
      {/* Navigation */}
      <nav className={`sticky top-0 z-50 w-full py-6 flex justify-between items-center border-b border-muted/20 transition-all duration-300 ${
        isScrolled ? 'bg-cream/95 backdrop-blur-sm' : 'bg-cream/0'
      }`}>
        <div className="container-max w-full flex justify-between items-center">
          <h1 className="font-mono text-xl font-bold">MI</h1>
          <ul className="flex gap-8 text-muted text-sm">
            <li><a href="#about" className="hover:text-terracotta transition">About</a></li>
            <li><a href="#experience" className="hover:text-terracotta transition">Experience</a></li>
            <li><a href="#education" className="hover:text-terracotta transition">Education</a></li>
            <li><a href="#skills" className="hover:text-terracotta transition">Skills</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container-max py-24">
        <div className="mb-16">
          <h1 className="font-serif text-6xl font-bold mb-6">Miguel Isaza</h1>
          <p className="text-xl text-muted max-w-3xl leading-relaxed">
            Software Engineer with experience in full-stack development, cloud infrastructure, and system optimization. 
            Focused on building scalable, high-performance applications and reliable deployment pipelines using AWS, Azure, Docker, and CI/CD.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container-max py-20 border-t border-muted/20">
        <h2 className="font-serif text-4xl font-bold mb-8">About</h2>
        <p className="text-lg text-muted max-w-3xl leading-relaxed">
          I'm a software engineer with a focus on building scalable systems and optimizing performance. 
          Currently at Bausch Health, architecting full-stack solutions on Azure and AWS platforms. 
          I specialize in translating complex operational requirements into clean, maintainable code with strong problem-solving skills and effective collaboration in cross-functional teams.
        </p>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container-max py-20 border-t border-muted/20">
        <h2 className="font-serif text-4xl font-bold mb-12">Experience</h2>
        
        <div className="mb-16">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-serif text-2xl font-bold">Software Engineer</h3>
              <p className="text-terracotta font-mono">Bausch Health</p>
            </div>
            <p className="text-muted text-sm">April 2025 - Present</p>
          </div>
          <p className="text-muted text-sm mb-4">La Estrella, Antioquia</p>
          <ul className="space-y-3 text-muted max-w-3xl">
            <li className="flex gap-3">
              <span className="text-terracotta mt-1">•</span>
              <span>Architected, developed, and deployed a full-stack Contract Management system (React, Spring Boot, Azure) to on-premises VMs, engineering a custom solution that centralized workflows and ensured data consistency to meet specific operational requirements</span>
            </li>
            <li className="flex gap-3">
              <span className="text-terracotta mt-1">•</span>
              <span>Automated testing and deployment cycles by implementing CI/CD pipelines with Docker and GitHub Actions, significantly reducing manual deployment overhead</span>
            </li>
            <li className="flex gap-3">
              <span className="text-terracotta mt-1">•</span>
              <span>Collaborated with stakeholders to translate complex operational requirements into technical specifications, ensuring 100% alignment with local regulatory and business needs</span>
            </li>
            <li className="flex gap-3">
              <span className="text-terracotta mt-1">•</span>
              <span>Executed a database migration from a storage-constrained environment to a high-capacity instance, ensuring continuous operation and scalability for growing data volumes</span>
            </li>
            <li className="flex gap-3">
              <span className="text-terracotta mt-1">•</span>
              <span>Configured and activated new network ports on an on-premises server to establish reliable Ethernet connectivity for users and company machines</span>
            </li>
            <li className="flex gap-3">
              <span className="text-terracotta mt-1">•</span>
              <span>Migrated an internal food ordering system from Google Forms to a robust Spring Boot service, designing RESTful APIs to handle order processing and automate data persistence</span>
            </li>
          </ul>
        </div>

        <div>
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-serif text-2xl font-bold">Software Developer</h3>
              <p className="text-terracotta font-mono">Universidad Católica Luis Amigó</p>
            </div>
            <p className="text-muted text-sm">August 2024 - November 2024</p>
          </div>
          <p className="text-muted text-sm mb-4">Medellín, Colombia</p>
          <ul className="space-y-3 text-muted max-w-3xl">
            <li className="flex gap-3">
              <span className="text-terracotta mt-1">•</span>
              <span>Collaborated with a team to redesign an institutional website interface, enhancing accessibility and responsiveness</span>
            </li>
            <li className="flex gap-3">
              <span className="text-terracotta mt-1">•</span>
              <span>Proposed and presented optimization solutions to stakeholders, successfully increasing mobile compatibility</span>
            </li>
            <li className="flex gap-3">
              <span className="text-terracotta mt-1">•</span>
              <span>Co-implemented performance improvements for a high-traffic institutional site</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="container-max py-20 border-t border-muted/20">
        <h2 className="font-serif text-4xl font-bold mb-8">Education</h2>
        
        <div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-serif text-2xl font-bold">Software Development</h3>
              <p className="text-terracotta font-mono">Universidad Católica Luis Amigó</p>
            </div>
            <p className="text-muted text-sm">January 2023 - May 2026</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container-max py-20 border-t border-muted/20">
        <h2 className="font-serif text-4xl font-bold mb-12">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl">
          <div>
            <h3 className="font-serif text-xl font-bold mb-4 text-terracotta">Cloud & DevOps</h3>
            <ul className="space-y-2 text-muted">
              <li><strong>Infrastructure & Containerization:</strong> Docker, Kubernetes, Terraform, Linux</li>
              <li><strong>Cloud Platforms:</strong> AWS (EC2, S3, Lambda, IAM, VPC, Subnets, Route 53, RDS), Azure (Virtual Machines, Blob Storage, Azure Functions, Azure AD)</li>
              <li><strong>Databases:</strong> PostgreSQL, MySQL, SQL, MongoDB</li>
              <li><strong>CI/CD:</strong> Jenkins, GitHub Actions</li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl font-bold mb-4 text-terracotta">Languages & Frameworks</h3>
            <ul className="space-y-2 text-muted">
              <li><strong>Languages:</strong> Java, C#, Go, Python, JavaScript, TypeScript</li>
              <li><strong>Frameworks:</strong> Spring Boot, .NET, Express.js, React</li>
              <li><strong>Version Control:</strong> Git, GitHub</li>
              <li><strong>Methodologies:</strong> Scrum, Kanban, Agile</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container-max py-20 border-t border-muted/20">
        <h2 className="font-serif text-4xl font-bold mb-8">Get In Touch</h2>
        <p className="text-lg text-muted max-w-3xl leading-relaxed mb-12">
          I'm always open to new opportunities and interesting projects. Feel free to reach out—whether it's a question, a collaboration, or just a friendly chat.
        </p>
        <div className="flex gap-6">
          <a 
            href="https://www.linkedin.com/in/miguel-isaza-923a15253/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 bg-terracotta text-cream rounded hover:opacity-90 transition font-mono font-semibold flex items-center gap-2"
          >
            <span>LinkedIn</span>
          </a>
          <a 
            href="mailto:miguepille95@gmail.com"
            className="px-8 py-4 border border-terracotta text-terracotta rounded hover:bg-terracotta hover:text-cream transition font-mono font-semibold flex items-center gap-2"
          >
            <span>Gmail</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="container-max py-12 border-t border-muted/20 text-center text-muted">
        <p className="mb-2">© 2026 Miguel Isaza. All rights reserved.</p>
        <p className="text-sm">Built with Next.js, React, TypeScript & Tailwind CSS</p>
      </footer>
    </main>
  )
}
