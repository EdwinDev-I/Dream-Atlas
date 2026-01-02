import { useEffect } from "react";
import { Shield, Lock, Eye, Database, UserX, FileText, AlertCircle, Check } from "lucide-react";
import Hero from "../components/Hero";
import "./page-styles/Privacy.css"
import "./page-styles/Privacy-media.css"

function PrivacySections() {
  const points = [
    "We encrypt your dreams and never sell your data",
    "You can use Dream Atlas completely anonymously",
    "You control who sees your dreams",
    "Delete your data anytime-no questions asked",
    "We only share anonymized, aggregated data with researchers",
    "No advertising, no tracking, no creepy stuff"
  ] 

  const sections =[
    {
      title: "Information We Collect",
      icon: <FileText className="section-icon" />,
      content: [
        {
          subtitle: "Dream Content",
          text: "When you submit a dream, we collect the text of your dream, tags you add, location (city/region only - never exact coordinates), and optional emotion data. This is stored with end-to-end encryption."
        }, {
          subtitle: "Account Information (Optional)",
          text: "If you create an account: email address, username, and password (hashed). You can use Dream Atlas completely anonymously without an account."
        }, {
          subtitle: "Usage Data",
          text: "We collect anonymous analytics: pages visited, time spent, browser type, and device type. We use this to improve the platform. We DO NOT track individual browsing behavior or create user profiles for advertising."
        }, {
          subtitle: "Cookies",
          text: "We use essential cookies for authentication and user preferences. No third-party tracking cookies or advertising cookies."
        }
      ]
    }, {
      title: "How We Use Your Information",
      icon: <Shield className="section-icon" />,
      content: [
        {
          subtitle: "Platform Functionality",
          text: "To display your dreams (according to your privacy settings), enable dream search and filtering connect you with similar dreamers (with your consent), and generate anonymous statistics and trends."
        }, {
          subtitle: "Research",
          text: "Anonymized, aggregated dream data is made available to researchers. Individual dreams are NEVER shared without explicit conset. All research data is stripped of identifying information."
        }, {
          subtitle: "Communication",
          text: "If you provide an email, we may send: account security alerts, responses to your inquiries, and optional newsletters (you can unsubscribe anytime)."
        }, {
          subtitle: "What We DON'T Do",
          text: "We never sell your data to third parties, use your dreams for advertising, train AI models on your private dreams (without explicit opt-in), or share identifying informations with anyone."
        }
      ]
    } , {
      title: "Your Privacy Controls",
      icon: <Lock className="section-icon" />,
      content: [
        {
          subtitle: "Dream Visibility Options",
          text: "Private: Only you can see. Anonymous: Visible to others, but not linked to your account. Public: Visible and linked to your profile (if you have one)."
        }, {
          subtitle: "Location Data",
          text: "We only collect city/region - never precise GPS coordinates. You can disable location sharing entirely in your mobile settings."
        }, {
          subtitle: "Account Deletion",
          text: "You can delete your account anytime from settings. This will: permanently delete all your personal information, anonymize all your dreams (they remain in the archive for research but can't be linked to you), or completely remove dreams if you choose that option."
        }, {
          subtitle: "Data Export",
          text: "Download all your dreams and data in JSON format anytime."
        }
      ]
    }, {
      title: "Data Security",
      icon: <Shield className="section-icon" />,
      content: [
        {
          subtitle: "Encryption",
          text: "All dream content is encrypteb at rest (AES-256). Data is encrypted in transit (TLS 1.3). Password are hashed using bcrypt."
        }, {
          subtitle: "Access Control",
          text: "Only essential staff have database access. All access is logged and monitored. Regular security audits by third parties."
        }, {
          subtitle: "Data Storage",
          text: "Hosted on secure servers (AWS/Google Cloud). Regular backups with encryption. Data centers comply with SOC 2 standards."
        }
      ]
    }, {
      title: "Research & Sharing",
      icon: <Database className="section-icon"/>,
      content: [
        {
          subtitle: "Academic Research",
          text: "Researchers can access anonymized, aggregated data. Individual dreams shared ONLY with explicit consent. All research must be ethically approved."
        }, {
          subtitle: "Public Statistics",
          text: 'We publish aggregate trends: "X% of dreams contain flying," "Most common dream symbols by country," etc. These NEVER contain identifying information.'
        }, {
          subtitle: "Opt-Out",
          text: "You can opt out of research data inclusion entirely. Your dreams will remain private and not used inany studies."
        }
      ]
    }, {
      title: "Third-Party Services",
      icon: <AlertCircle className="section-icon"/>,
      content: [
        {
          subtitle: "Services We Use",
          text: "Cloud hosting (AWS/Google Cloud), Analytics (self-hosted Plausible - privacy-focused), Email service (for account notifications only). We do advertising networks, or data brokers."
        }
      ]
    }, {
      title: "Children's Privacy",
      icon: <Shield className="section-icon"/>,
      content: [
        {
          subtitle: "Age Reqiurement",
          text: "Dream Atlas is intended for users 13 and older. We do not knowingly collect data from children under 13. If we discover we have data from a child under 13, we will delete it immediately."
        }
      ]
    }, {
      title: "International Users",
      icon: <Shield className="section-icon"/>,
      content: [
        {
          subtitle: "GDPR Compliance (EU)",
          text: "Right to access, right to deletion, right to data portability, right to opt-out of processing."
        }, {
          subtitle: "CCPA Compliance (California)",
          text: "Right to know what data we collect, right to delete, right to opt-out of sale (we never sell data)."
        }, {
          subtitle: "Data Transfer",
          text: "Data may be transferred internationally but always with adequate protections (Standard Contractual Clauses)."
        }
      ]
    }, {
      title: "Change to This Policy",
      icon: <FileText className="section-icon"/>,
      content: [
        {
          subtitle: "Updates",
          text: "We may update this policy to reflect new features or legal requirements. You'll be notified of significant changes via email (if you have an account) or a banner on the site . Continued use after changes indicates acceptance."
        }
      ]
    }
  ];

  return(
    <>
     <div>
      <div className="points-title">TL;DR</div>
      <div className="points-container">
       {points.map((point , index) => {
        return(
        <div 
         key={index}
         className="points"
        >
        <Check className="check-icon" />
        <div className="point">{point}</div>
        </div>
        )
       })}
      </div>
     </div>

     <div className="sections-container">
      {sections.map((section , index) => {
        return(
          <div
           key={index}
           className="sections"
          >
           <div className="first-section">
            <div>{section.icon}</div>
            <h2>{section.title}</h2>
            </div>
            {section.content.map((item , itemIndex) => {
              return(
                <div 
                 key={itemIndex}
                >
                  <div className="section-sub">{item.subtitle}</div>
                  <div className="section-txt">{item.text}</div>
                </div>
              )
            })}
          </div>
        )
      })}
     </div>
     <div className="questions-section">
      <h2 className="q-title">Questions About Privacy?</h2>
      <div className="section2">
        <div className="query-us">We're here to help. Contact us anytime with privacy concerns.</div>
        <div>
          <div className="officer">Privacy Officer:</div>
          <a 
          href="mailto:mgboluifeanyi99@gmail.com" 
          target="_blank"
          className="email-links"
          >privacy@dreamatlas.com</a>
        </div>
        <div>
          <div className="general">General Contact:</div>
          <a 
          href="mailto:nondhim@gmail.com" 
          target="_blank"
          className="email-links"
          >hello@dreamatlas.com</a>
        </div>
        <div className="last-txt">We respond to all privacy inquiries within 24 hours.</div>
      </div>
     </div>
     <div className="footer-txt1">
      <div>
        Dream Atlas, Inc. 
      </div>
        <span className="dots">.</span> 
      <div>
        Lagos Nigeria
      </div>
     </div>
      <div className="footer-txt2">
        This privacy policy is effective as of December 26, 2025 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.
      </div>
    </>
  )
}

function PrivacyQuickFacts() {
   const quickFacts = [
    {
      icon: <Lock className="facts-icon" />,
      title: "End-to-End Ecryption",
      description: "Your dream content is encrypted before it reaches our servers"
    }, {
      icon: <UserX className="facts-icon" />,
      title: "Anonymous by Default",
      description: "You can submit dreams without creating an account"
    }, {
      icon: <Eye className="facts-icon" />,
      title: "You Control Visibility",
      description: "Choose to keep dreams private, share anonymously, or make public"
    }, {
      icon: <Database className="facts-icon" />,
      title: "Your Data, Your Rights",
      description: "Download or delete your data anytime, no questions asked"
    }
  ];

  return(
    <>
    <div>
   <h1 className="pravicy-title">
    <Shield 
    className="shield-icon"
    style={{width:'40px', height:"40px"}}
    /> Privacy-Policy
   </h1>
   <div className="privacy-subtitle">
    Your dreams are deeply personal. We take your privacy seriously.
   </div>
   <div className="privacy-subtitle2">Last update: December 26, 2025</div>
   </div>
   <div className="facts-container">
    {quickFacts.map((quickFact) => {
     return(
      <div 
       key={quickFact.description}
       className="facts"
      >
       <div>
        {quickFact.icon}
       </div>
       <div className="facts-title">
        {quickFact.title}
       </div>
       <div className="facts-des">
        {quickFact.description}
       </div>
      </div>
     );
    })}
   </div>
   </>
  )
}

function Privacy() {
  //arrow scroll
  useEffect(() => {
         if (typeof window === 'undefined') return;
         const arrow = document.querySelector('.arrow');
         if (!arrow) return;
         const onScroll = () => {
           if (window.scrollY > 30) arrow.classList.add('visible');
           else arrow.classList.remove('visible');
         };
         // init
         onScroll();
         window.addEventListener('scroll', onScroll, { passive: true });
         return () => window.removeEventListener('scroll', onScroll);
       }, []);
     
       const scrollToTop = (e) => {
         e.preventDefault();
         window.scrollTo({ top: 0, behavior: 'smooth' });
       };

  return (
    <>
    <div className="top-container">
    <Hero />
    </div>
    <div className="privacy-container">
     <PrivacyQuickFacts />
     <PrivacySections />
    </div>
      <a className="arrow" onClick={scrollToTop} aria-label="Scroll to top">↑</a>
    </>
  )
}

export default Privacy;