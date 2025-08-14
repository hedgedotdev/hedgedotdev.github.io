<script>
  import { Code, Users, Zap, Mail, ArrowRight, Monitor, Briefcase } from 'lucide-svelte';
</script>

<header>
  <nav class="navbar">
    <div class="container">
      <div class="nav-content">
        <div class="nav-links">
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  </nav>
</header>

<main>
  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <div class="hero-logo">
        <img src="/hedge-dev-logo.png" alt="hedge.dev" class="main-logo" />
      </div>
      <div class="hero-content">
        <div class="hero-text">
          <h1>Professional Consulting & Custom Development</h1>
          <p class="lead">Transform your ideas into powerful solutions with expert consulting and custom development services tailored to your business needs.</p>
          <div class="cta-buttons">
            <a href="#contact" class="btn-primary">
              Get Started
              <ArrowRight size={20} />
            </a>
            <a href="#services" class="btn-secondary">Learn More</a>
          </div>
        </div>
        <div class="hero-graphic">
          <div class="graphic-container">
            <div class="floating-element elem-1">
              <Code size={40} />
            </div>
            <div class="floating-element elem-2">
              <Monitor size={35} />
            </div>
            <div class="floating-element elem-3">
              <Briefcase size={30} />
            </div>
            <div class="central-graphic">
              <div class="pulse-ring"></div>
              <div class="center-icon">
                <Zap size={50} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section id="services" class="services">
    <div class="container">
      <h2>Our Services</h2>
      <div class="services-grid">
        <div class="service-card">
          <div class="service-icon">
            <Users size={32} />
          </div>
          <h3>Consulting Services</h3>
          <p>Strategic guidance and expert advice to help you make informed decisions, optimize processes, and accelerate your business growth.</p>
          <ul>
            <li>Technical Architecture</li>
            <li>Process Optimization</li>
            <li>Technology Strategy</li>
            <li>Digital Transformation</li>
          </ul>
        </div>
        
        <div class="service-card">
          <div class="service-icon">
            <Code size={32} />
          </div>
          <h3>Custom Development</h3>
          <p>Tailored software solutions built to your exact specifications, from web applications to complex enterprise systems.</p>
          <ul>
            <li>Web Applications</li>
            <li>API Development</li>
            <li>Database Design</li>
            <li>System Integration</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="contact">
    <div class="container">
      <h2>Ready to Get Started?</h2>
      <p>Let's discuss how we can help bring your project to life.</p>
      <div class="contact-info">
        <div class="contact-item">
          <Mail size={24} />
          <a href="mailto:info@hedge.dev">info@hedge.dev</a>
        </div>
      </div>
    </div>
  </section>
</main>

<style>
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(body) {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background-color: #0a0a0a;
    color: #e5e5e5;
    line-height: 1.6;
  }

  :global(html) {
    scroll-behavior: smooth;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  /* Navigation */
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(10, 10, 10, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(55, 65, 81, 0.3);
    z-index: 1000;
    transition: all 0.3s ease;
  }

  .nav-content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
  }

  .nav-links {
    display: flex;
    gap: 2rem;
  }

  .nav-links a {
    color: #e5e5e5;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    position: relative;
  }

  .nav-links a:hover {
    color: #4f46e5;
  }

  .nav-links a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
    transition: width 0.3s ease;
  }

  .nav-links a:hover::after {
    width: 100%;
  }

  /* Hero Section */
  .hero {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
    position: relative;
    overflow: hidden;
    padding-top: 80px;
  }

  .hero-logo {
    margin-bottom: 3rem;
    text-align: center;
  }

  .main-logo {
    max-width: 400px;
    width: 100%;
    height: auto;
    border-radius: 16px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
  }

  .main-logo:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 25px 50px rgba(79, 70, 229, 0.2);
  }

  .hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(ellipse at center, rgba(79, 70, 229, 0.1) 0%, transparent 70%);
    pointer-events: none;
  }

  .hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    position: relative;
    z-index: 1;
  }

  .hero-text h1 {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, #ffffff 0%, #a1a1aa 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1.2;
  }

  .lead {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    color: #a1a1aa;
  }

  .cta-buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .btn-primary, .btn-secondary {
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
    border: 2px solid transparent;
  }

  .btn-primary {
    background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
    color: white;
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(79, 70, 229, 0.3);
  }

  .btn-secondary {
    color: #e5e5e5;
    border-color: #374151;
    background: rgba(55, 65, 81, 0.3);
  }

  .btn-secondary:hover {
    border-color: #4f46e5;
    background: rgba(79, 70, 229, 0.1);
  }

  /* Hero Graphic */
  .hero-graphic {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .graphic-container {
    position: relative;
    width: 400px;
    height: 400px;
  }

  .central-graphic {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pulse-ring {
    position: absolute;
    width: 120px;
    height: 120px;
    border: 2px solid #4f46e5;
    border-radius: 50%;
    animation: pulse 2s infinite;
  }

  .center-icon {
    background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    z-index: 1;
  }

  .floating-element {
    position: absolute;
    background: rgba(79, 70, 229, 0.1);
    border: 1px solid rgba(79, 70, 229, 0.3);
    border-radius: 50%;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #4f46e5;
  }

  .elem-1 {
    top: 20%;
    left: 20%;
    animation: float 3s ease-in-out infinite;
  }

  .elem-2 {
    top: 20%;
    right: 20%;
    animation: float 3s ease-in-out infinite 1s;
  }

  .elem-3 {
    bottom: 20%;
    left: 30%;
    animation: float 3s ease-in-out infinite 2s;
  }

  @keyframes pulse {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.1); opacity: 0.7; }
    100% { transform: scale(1); opacity: 1; }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }

  /* Services Section */
  .services {
    padding: 6rem 0;
    background: #111111;
  }

  .services h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: #ffffff;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 3rem;
  }

  .service-card {
    background: rgba(31, 41, 55, 0.5);
    border: 1px solid #374151;
    border-radius: 1rem;
    padding: 2.5rem;
    transition: all 0.3s ease;
  }

  .service-card:hover {
    transform: translateY(-5px);
    border-color: #4f46e5;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  .service-icon {
    background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
    width: 60px;
    height: 60px;
    border-radius: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    color: white;
  }

  .service-card h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #ffffff;
  }

  .service-card p {
    margin-bottom: 1.5rem;
    color: #a1a1aa;
  }

  .service-card ul {
    list-style: none;
  }

  .service-card li {
    padding: 0.5rem 0;
    color: #d1d5db;
    position: relative;
    padding-left: 1.5rem;
  }

  .service-card li::before {
    content: '→';
    position: absolute;
    left: 0;
    color: #4f46e5;
    font-weight: bold;
  }

  /* Contact Section */
  .contact {
    padding: 6rem 0;
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
    text-align: center;
  }

  .contact h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #ffffff;
  }

  .contact p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    color: #a1a1aa;
  }

  .contact-info {
    display: flex;
    justify-content: center;
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background: rgba(79, 70, 229, 0.1);
    border: 1px solid rgba(79, 70, 229, 0.3);
    padding: 1rem 2rem;
    border-radius: 0.75rem;
    transition: all 0.3s ease;
  }

  .contact-item:hover {
    background: rgba(79, 70, 229, 0.2);
    transform: translateY(-2px);
  }

  .contact-item a {
    color: #ffffff;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.1rem;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .nav-links {
      gap: 1rem;
    }

    .nav-links a {
      font-size: 0.9rem;
    }

    .hero {
      padding-top: 70px;
    }

    .main-logo {
      max-width: 300px;
    }

    .hero-logo {
      margin-bottom: 2rem;
    }

    .hero-content {
      grid-template-columns: 1fr;
      gap: 3rem;
      text-align: center;
    }

    .hero-text h1 {
      font-size: 2.5rem;
    }

    .graphic-container {
      width: 300px;
      height: 300px;
    }

    .services-grid {
      grid-template-columns: 1fr;
    }

    .cta-buttons {
      justify-content: center;
    }

    .container {
      padding: 0 1rem;
    }
  }
</style>