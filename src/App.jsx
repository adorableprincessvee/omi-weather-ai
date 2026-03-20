import { useEffect, useCallback, useState } from 'react';
import { FiWifi, FiBell, FiUsers, FiStar } from 'react-icons/fi';
import Hero from './components/hero/Hero';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'features', 'how-it-works', 'about'];
      const scrollY = window.scrollY + 100;
      let newActive = 'hero';

      sections.forEach(section => {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollY && scrollY < el.offsetTop + el.offsetHeight) {
          newActive = section;
        }
      });

      setActiveSection(newActive);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>

<section id="hero"><Hero scrollToSection={scrollToSection} /></section>

      {/* FEATURES SECTION */}
      <section id="features" className="section features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Powerful Features</h2>
            <p className="section-subtitle">Everything you need for smarter weather decisions</p>
          </div>
          
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">
                <FiWifi color="currentColor" />
              </div>
              <h3>Hyper-local Forecasts</h3>
              <p>Precise predictions for your exact location using 50+ data sources and satellite imagery</p>
            </div>
            
            <div className="feature">
              <div className="feature-icon">
                <FiBell color="currentColor" />
              </div>
              <h3>Smart Alerts</h3>
              <p>Real-time notifications for rain, storms, or temperature changes affecting your plans</p>
            </div>
            
            <div className="feature">
              <div className="feature-icon">
                <FiUsers color="currentColor" />
              </div>
              <h3>AI Insights</h3>
              <p>Conversational AI understands context and gives personalized weather advice</p>
            </div>
            
            <div className="feature">
              <div className="feature-icon">
                <FiStar color="currentColor" />
              </div>
              <h3>Personal Weather</h3>
              <p>Learns your preferences and activities for tailored forecasts and recommendations</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}

      <section id="how-it-works" className="section how-works">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">Simple 4-step process powered by AI</p>
          </div>
          
          <div className="steps-container">
            <div className="step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3>Ask Anything</h3>
                <p>Type or speak your weather question naturally. OMI understands context and location automatically.</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h3>AI Analysis</h3>
                <p>Advanced models analyze satellite data, radar, sensors + your personal weather history.</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3>Smart Prediction</h3>
                <p>Generates hyper-local forecasts combining 50+ data sources with ML accuracy.</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">04</div>
              <div className="step-content">
                <h3>Personal Response</h3>
                <p>Get friendly, actionable advice tailored to your plans and location.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">About OMI AI</h2>
              <p className="about-subtitle">
                Revolutionizing weather intelligence with AI. We combine cutting-edge 
                machine learning, massive global datasets, and friendly interface 
                to make weather useful again.
              </p>
              <div className="stats">
                <div className="stat">
                  <div className="stat-number">95%</div>
                  <div>Forecast Accuracy</div>
                </div>
                <div className="stat">
                  <div className="stat-number">50+</div>
                  <div>Data Sources</div>
                </div>
                <div className="stat">
                  <div className="stat-number">1M+</div>
                  <div>Happy Users</div>
                </div>
              </div>
            </div>
            <div className="cta-section">
              <button className="big-cta" onClick={() => scrollToSection('features')}>
                Start Using OMI
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

