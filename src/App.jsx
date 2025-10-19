// App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const personalInfo = {
    name: "Hnin Cherry",
    position: "AVP-6 at Myanma Apex Bank",
    phone: "+959679788171",
    email: "hnincherry@gmail.com",
    address: "Yangon, Myanmar",
    profileImage: "/profile.jpg" // public folder ထဲက image
  };

  const experience = {
    company: "Myanma Apex Bank",
    position: "AVP-6",
    duration: "July 1, 2010 - Present",
    departments: [
      {
        title: "Branch Manager",
        duration: "3+ years",
        description: "Managed overall branch operations and team leadership",
        icon: "👨‍💼"
      },
      {
        title: "Deputy Branch Manager",
        duration: "6 years",
        description: "Supported branch management and operational oversight",
        icon: "👨‍💼"
      },
      {
        title: "Reception & Customer Service",
        duration: "",
        description: "Handled customer inquiries and front desk operations",
        icon: "🏢"
      },
      {
        title: "Current Accounts",
        duration: "",
        description: "Managed current account operations and services",
        icon: "💳"
      },
      {
        title: "Remittance",
        duration: "",
        description: "Processed domestic and international money transfers",
        icon: "💸"
      },
      {
        title: "Cash Incharge",
        duration: "",
        description: "Oversaw cash management and treasury operations",
        icon: "💰"
      },
      {
        title: "Administration",
        duration: "",
        description: "Handled administrative functions and branch coordination",
        icon: "📋"
      },
      {
        title: "Loan Department",
        duration: "",
        description: "Processed loan applications and credit assessments",
        icon: "📊"
      }
    ]
  };

  const languages = [
    { name: "Myanmar", level: "Native", percentage: 100 },
    { name: "English", level: "Intermediate", percentage: 65 },
    { name: "Thai", level: "Entry Level", percentage: 30 }
  ];

  const certificates = [
    {
      id: 1,
      title: "Banking Management Certification",
      issuer: "Myanmar Banking Institute",
      year: "2018",
      image: "/certificates/cert1.jpg" // public/certificates folder ထဲက image
    },
    {
      id: 2,
      title: "Advanced Financial Analysis",
      issuer: "Myanma Apex Bank Training",
      year: "2016",
      image: "/certificates/cert2.jpg"
    },
    {
      id: 3,
      title: "Customer Service Excellence",
      issuer: "Banking Professionals Association",
      year: "2015",
      image: "/certificates/cert3.jpg"
    },
    {
      id: 4,
      title: "Risk Management in Banking",
      issuer: "Myanmar Financial Academy",
      year: "2014",
      image: "/certificates/cert4.jpg"
    },
    {
      id: 5,
      title: "Leadership in Banking",
      issuer: "Myanma Apex Bank",
      year: "2013",
      image: "/certificates/cert5.jpg"
    }
  ];

  return (
    <div className="portfolio-container">
      {/* Mobile Menu Button */}
      {isMobile && (
        <button 
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      )}

      {/* Header Section */}
      <header className="header">
        <div className="profile-section">
          <div className="profile-image-container">
            <img 
              src={personalInfo.profileImage} 
              alt="Hnin Cherry"
              className="profile-image"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="profile-image-placeholder">
              <span>HC</span>
            </div>
            {/* Floating achievement badges for desktop */}
            {!isMobile && (
              <>
                <div className="floating-badge experience-badge">
                  <span>14+ Years</span>
                </div>
                <div className="floating-badge department-badge">
                  <span>8 Departments</span>
                </div>
              </>
            )}
          </div>
          <div className="profile-info">
            <h1 className="name">{personalInfo.name}</h1>
            <h2 className="position">{personalInfo.position}</h2>
            <p className="experience-duration">{experience.duration}</p>
            
            {/* Mobile achievement badges */}
            {isMobile && (
              <div className="mobile-badges">
                <div className="mobile-badge">
                  <span>14+ Years Experience</span>
                </div>
                <div className="mobile-badge">
                  <span>8 Departments</span>
                </div>
              </div>
            )}

            <div className="contact-info">
              <div className="contact-item">
                <span className="icon">📱</span>
                <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
              </div>
              <div className="contact-item">
                <span className="icon">✉️</span>
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </div>
              <div className="contact-item">
                <span className="icon">📍</span>
                <span>{personalInfo.address}</span>
              </div>
            </div>

            <div className="social-links">
              <a href="#" className="social-btn facebook">
                <span className="social-icon">📘</span>
                {!isMobile && "Facebook"}
              </a>
              <a href="#" className="social-btn telegram">
                <span className="social-icon">✈️</span>
                {!isMobile && "Telegram"}
              </a>
              <a href="#" className="social-btn viber">
                <span className="social-icon">💜</span>
                {!isMobile && "Viber"}
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className={`navigation-tabs ${menuOpen ? 'mobile-open' : ''}`}>
        <button 
          className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
          onClick={() => {
            setActiveTab('experience');
            setMenuOpen(false);
          }}
        >
          <span className="tab-icon">💼</span>
          <span className="tab-text">Work Experience</span>
        </button>
        <button 
          className={`tab-btn ${activeTab === 'languages' ? 'active' : ''}`}
          onClick={() => {
            setActiveTab('languages');
            setMenuOpen(false);
          }}
        >
          <span className="tab-icon">🌐</span>
          <span className="tab-text">Languages</span>
        </button>
        <button 
          className={`tab-btn ${activeTab === 'certificates' ? 'active' : ''}`}
          onClick={() => {
            setActiveTab('certificates');
            setMenuOpen(false);
          }}
        >
          <span className="tab-icon">🏆</span>
          <span className="tab-text">Certificates</span>
        </button>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {/* Experience Section */}
        {activeTab === 'experience' && (
          <section className="experience-section">
            <div className="section-header">
              <h2>Professional Experience</h2>
              <div className="company-highlight">
                <span className="company-name">{experience.company}</span>
                <span className="position-tag">{experience.position}</span>
              </div>
            </div>
            
            <div className="departments-grid">
              {experience.departments.map((dept, index) => (
                <div key={index} className="department-card">
                  <div className="department-header">
                    <div className="department-icon">{dept.icon}</div>
                    <div>
                      <h3 className="department-title">{dept.title}</h3>
                      {dept.duration && (
                        <span className="department-duration">{dept.duration}</span>
                      )}
                    </div>
                  </div>
                  <p className="department-description">{dept.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Languages Section */}
        {activeTab === 'languages' && (
          <section className="languages-section">
            <div className="section-header">
              <h2>Language Proficiency</h2>
              <p className="section-subtitle">Communication skills in multiple languages</p>
            </div>
            <div className="languages-container">
              {languages.map((language, index) => (
                <div key={index} className="language-card">
                  <div className="language-header">
                    <h3>{language.name}</h3>
                    <span className="language-level">{language.level}</span>
                  </div>
                  <div className="progress-container">
                    <div className="progress-bar">
                      <div 
                        className="progress-fill"
                        style={{ width: `${language.percentage}%` }}
                      ></div>
                    </div>
                    <div className="percentage">{language.percentage}%</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certificates Section */}
        {activeTab === 'certificates' && (
          <section className="certificates-section">
            <div className="section-header">
              <h2>Professional Certificates</h2>
              <p className="section-subtitle">Achievements and professional development</p>
            </div>
            <div className="certificates-grid">
              {certificates.map(cert => (
                <div key={cert.id} className="certificate-card">
                  <div className="certificate-image-container">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="certificate-image"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="certificate-placeholder">
                      <span className="placeholder-icon">🏆</span>
                      <span className="placeholder-text">{cert.title}</span>
                    </div>
                  </div>
                  <div className="certificate-content">
                    <h3 className="certificate-title">{cert.title}</h3>
                    <p className="certificate-issuer">{cert.issuer}</p>
                    <div className="certificate-footer">
                      <span className="certificate-year">{cert.year}</span>
                      <span className="certificate-badge">Verified</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 Hnin Cherry. All rights reserved.</p>
          <div className="footer-contact">
            <span>📱 {personalInfo.phone}</span>
            <span>✉️ {personalInfo.email}</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;