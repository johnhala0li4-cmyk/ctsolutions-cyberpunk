import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, MessageCircle, Download, ArrowRight, Zap, Database, BarChart3, Package } from 'lucide-react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: React.MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousemove', handleMouseMove as any);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove as any);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Animated background grid */}
      <div className="fixed inset-0 cyber-grid opacity-20 pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--neon-cyan)]/20 bg-background/80 backdrop-blur-sm">
        <div className="container flex items-center justify-between h-16">
          <div className="text-2xl font-bold neon-glow">CT SOLUTIONS</div>
          <div className="flex gap-8 items-center">
            <a href="#services" className="text-sm hover:neon-glow transition">Services</a>
            <a href="#expertise" className="text-sm hover:neon-glow transition">Expertise</a>
            <a href="#contact" className="text-sm hover:neon-glow transition">Contact</a>
            <a href="#portal" className="text-sm hover:neon-glow transition">Portal</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute w-96 h-96 rounded-full bg-[var(--neon-cyan)]/10 blur-3xl"
            style={{ 
              left: '10%', 
              top: '20%',
              transform: `translateY(${scrollY * 0.5}px)`
            }}
          />
          <div 
            className="absolute w-96 h-96 rounded-full bg-[var(--neon-magenta)]/10 blur-3xl"
            style={{ 
              right: '10%', 
              bottom: '10%',
              transform: `translateY(${-scrollY * 0.3}px)`
            }}
          />
        </div>

        <div className="container relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="neon-glow">ADVANCED</span>
            <br />
            <span className="neon-glow-magenta">DATA INTELLIGENCE</span>
            <br />
            <span className="text-white">FOR BUSINESS PARTNERS</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Transform your financial and operational data into actionable insights. 
            We partner with organizations to unlock the full potential of their assets through cutting-edge technology solutions.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              className="bg-[var(--neon-cyan)] text-black hover:bg-[var(--neon-cyan)]/80 font-bold px-8 py-6 text-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Partnership <ArrowRight className="ml-2" />
            </Button>
            <Button 
              variant="outline"
              className="border-[var(--neon-magenta)] text-[var(--neon-magenta)] hover:bg-[var(--neon-magenta)]/10 px-8 py-6 text-lg"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Services
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="text-[var(--neon-cyan)] text-sm">↓ Scroll to explore</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-20 border-t border-[var(--neon-cyan)]/20">
        <div className="container">
          <h2 className="text-5xl font-bold mb-4 neon-glow text-center">OUR EXPERTISE</h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Specialized solutions built on 30+ years of asset management and financial expertise
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Data Structuring */}
            <Card className="bg-card border-[var(--neon-cyan)]/30 hover:border-[var(--neon-cyan)]/60 transition p-8 group cursor-pointer">
              <div className="flex items-start gap-4 mb-4">
                <Zap className="w-8 h-8 text-[var(--neon-lime)] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2 neon-glow-lime">Data Structuring</h3>
                  <p className="text-gray-300">
                    Transform raw, unstructured data into organized, queryable datasets. 
                    We establish data governance frameworks that ensure consistency, accuracy, and compliance.
                  </p>
                </div>
              </div>
            </Card>

            {/* Data Warehousing */}
            <Card className="bg-card border-[var(--neon-magenta)]/30 hover:border-[var(--neon-magenta)]/60 transition p-8 group cursor-pointer">
              <div className="flex items-start gap-4 mb-4">
                <Database className="w-8 h-8 text-[var(--neon-magenta)] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2 neon-glow-magenta">Data Warehousing</h3>
                  <p className="text-gray-300">
                    Enterprise-grade data warehouse solutions that consolidate data from multiple sources. 
                    Scalable, secure, and optimized for complex analytical queries.
                  </p>
                </div>
              </div>
            </Card>

            {/* BI & Reporting */}
            <Card className="bg-card border-[var(--neon-cyan)]/30 hover:border-[var(--neon-cyan)]/60 transition p-8 group cursor-pointer">
              <div className="flex items-start gap-4 mb-4">
                <BarChart3 className="w-8 h-8 text-[var(--neon-cyan)] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2 neon-glow">Tableau & BI Reporting</h3>
                  <p className="text-gray-300">
                    Interactive dashboards and advanced analytics using Tableau and modern BI tools. 
                    Visualize complex data patterns and drive strategic decision-making.
                  </p>
                </div>
              </div>
            </Card>

            {/* Asset Management */}
            <Card className="bg-card border-[var(--neon-lime)]/30 hover:border-[var(--neon-lime)]/60 transition p-8 group cursor-pointer">
              <div className="flex items-start gap-4 mb-4">
                <Package className="w-8 h-8 text-[var(--neon-lime)] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2 neon-glow-lime">Asset Management</h3>
                  <p className="text-gray-300">
                    Comprehensive asset tracking from chairs to aircraft components. 
                    Whitelisted dashboarding platforms provide complete visibility and control.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="relative py-20 border-t border-[var(--neon-magenta)]/20">
        <div className="container">
          <h2 className="text-5xl font-bold mb-4 neon-glow-magenta text-center">PROVEN EXPERTISE</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-5xl font-bold neon-glow mb-2">30+</div>
              <p className="text-gray-300">Years in Asset Management</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold neon-glow-magenta mb-2">100+</div>
              <p className="text-gray-300">Enterprise Clients Served</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold neon-glow-lime mb-2">∞</div>
              <p className="text-gray-300">Financial & Auditing Background</p>
            </div>
          </div>

          <div className="mt-16 bg-card border border-[var(--neon-cyan)]/30 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 neon-glow">Why Partner With Us?</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-[var(--neon-cyan)] font-bold">→</span>
                <span><strong>Deep Financial Expertise:</strong> Our team brings extensive backgrounds in financial analysis and auditing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--neon-magenta)] font-bold">→</span>
                <span><strong>Proven Track Record:</strong> Three decades of successful asset management implementations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--neon-lime)] font-bold">→</span>
                <span><strong>Modern Technology:</strong> Cutting-edge data infrastructure combined with proven methodologies</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--neon-cyan)] font-bold">→</span>
                <span><strong>Partnership Approach:</strong> We're not vendors—we're strategic partners invested in your success</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 border-t border-[var(--neon-lime)]/20">
        <div className="container max-w-4xl">
          <h2 className="text-5xl font-bold mb-4 neon-glow-lime text-center">LET'S PARTNER</h2>
          <p className="text-center text-gray-300 mb-16">
            Ready to transform your data into strategic advantage? Reach out to discuss partnership opportunities.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* South Africa Contact */}
            <Card className="bg-card border border-[var(--neon-cyan)]/30 p-8">
              <h3 className="text-xl font-bold neon-glow mb-4">South Africa</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-400">Contact</p>
                  <p className="text-lg font-semibold">John Olivier</p>
                </div>
                <a 
                  href="tel:+27615229536"
                  className="flex items-center gap-2 text-[var(--neon-cyan)] hover:text-[var(--neon-cyan)]/80 transition"
                >
                  <span>+27 61 522 9536</span>
                </a>
                <a 
                  href="mailto:john@ctsolutionstech.co.za"
                  className="flex items-center gap-2 text-[var(--neon-cyan)] hover:text-[var(--neon-cyan)]/80 transition"
                >
                  <Mail className="w-4 h-4" />
                  <span>john@ctsolutionstech.co.za</span>
                </a>
                <a 
                  href="https://wa.me/27615229536"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[var(--neon-lime)] hover:text-[var(--neon-lime)]/80 transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </Card>

            {/* Saudi Arabia Contact */}
            <Card className="bg-card border border-[var(--neon-magenta)]/30 p-8">
              <h3 className="text-xl font-bold neon-glow-magenta mb-4">Kingdom of Saudi Arabia</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-400">Contact</p>
                  <p className="text-lg font-semibold">Albert Olivier</p>
                </div>
                <a 
                  href="tel:+966568888327"
                  className="flex items-center gap-2 text-[var(--neon-magenta)] hover:text-[var(--neon-magenta)]/80 transition"
                >
                  <span>+966 56 888 8327</span>
                </a>
                <a 
                  href="mailto:albert@ctsolutionstech.co.za"
                  className="flex items-center gap-2 text-[var(--neon-magenta)] hover:text-[var(--neon-magenta)]/80 transition"
                >
                  <Mail className="w-4 h-4" />
                  <span>albert@ctsolutionstech.co.za</span>
                </a>
                <a 
                  href="https://wa.me/966568888327"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[var(--neon-lime)] hover:text-[var(--neon-lime)]/80 transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </Card>
          </div>

          {/* Digital Contact Cards */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 neon-glow text-center">Download Contact Cards</h3>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button 
                className="bg-[var(--neon-cyan)] text-black hover:bg-[var(--neon-cyan)]/80"
              >
                <Download className="w-4 h-4 mr-2" />
                John Olivier vCard
              </Button>
              <Button 
                className="bg-[var(--neon-magenta)] text-black hover:bg-[var(--neon-magenta)]/80"
              >
                <Download className="w-4 h-4 mr-2" />
                Albert Olivier vCard
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border border-[var(--neon-purple)]/30 p-8">
            <h3 className="text-2xl font-bold mb-6 neon-glow-magenta">Send us a Message</h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="text"
                  placeholder="Your Name"
                  className="bg-input border border-[var(--neon-cyan)]/30 rounded px-4 py-2 text-foreground placeholder-gray-500 focus:outline-none focus:border-[var(--neon-cyan)]/60"
                />
                <input 
                  type="email"
                  placeholder="Your Email"
                  className="bg-input border border-[var(--neon-cyan)]/30 rounded px-4 py-2 text-foreground placeholder-gray-500 focus:outline-none focus:border-[var(--neon-cyan)]/60"
                />
              </div>
              <input 
                type="text"
                placeholder="Subject"
                className="w-full bg-input border border-[var(--neon-cyan)]/30 rounded px-4 py-2 text-foreground placeholder-gray-500 focus:outline-none focus:border-[var(--neon-cyan)]/60"
              />
              <textarea 
                placeholder="Message"
                rows={5}
                className="w-full bg-input border border-[var(--neon-cyan)]/30 rounded px-4 py-2 text-foreground placeholder-gray-500 focus:outline-none focus:border-[var(--neon-cyan)]/60"
              />
              <Button className="w-full bg-[var(--neon-cyan)] text-black hover:bg-[var(--neon-cyan)]/80 font-bold py-2">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Client Portal Section */}
      <section id="portal" className="relative py-20 border-t border-[var(--neon-purple)]/20">
        <div className="container max-w-4xl">
          <Card className="bg-gradient-to-br from-[var(--neon-purple)]/20 to-[var(--neon-cyan)]/20 border border-[var(--neon-purple)]/30 p-12 text-center">
            <h2 className="text-4xl font-bold mb-4">
              <span className="neon-glow-magenta">CLIENT ANALYTICS PORTAL</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Secure access to your embedded analytics, custom dashboards, and real-time reporting
            </p>
            <div className="inline-block px-8 py-4 border-2 border-[var(--neon-cyan)] rounded">
              <p className="text-[var(--neon-cyan)] font-bold text-lg">COMING SOON</p>
            </div>
            <p className="text-gray-400 mt-6 text-sm">
              We're building a powerful analytics platform for our partners. 
              Early access will be available to select clients.
            </p>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--neon-cyan)]/20 py-12 mt-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold neon-glow mb-4">CT SOLUTIONS</h4>
              <p className="text-gray-400 text-sm">
                Advanced data intelligence and asset management solutions for strategic business partners.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#services" className="hover:neon-glow transition">Data Structuring</a></li>
                <li><a href="#services" className="hover:neon-glow transition">Data Warehousing</a></li>
                <li><a href="#services" className="hover:neon-glow transition">BI Reporting</a></li>
                <li><a href="#services" className="hover:neon-glow transition">Asset Management</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="mailto:john@ctsolutionstech.co.za" className="hover:neon-glow transition">South Africa</a></li>
                <li><a href="mailto:albert@ctsolutionstech.co.za" className="hover:neon-glow transition">Saudi Arabia</a></li>
                <li><a href="#contact" className="hover:neon-glow transition">Send Message</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[var(--neon-cyan)]/20 pt-8 text-center text-gray-400 text-sm">
            <p>© 2025 Custom Technology Solutions. All Rights Reserved.</p>
            <p className="mt-2">Designed for strategic partnerships in data intelligence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

