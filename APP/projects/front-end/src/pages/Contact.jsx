import { useEffect , useState } from "react";
import { Mail, MessageCircle, Twitter, Github, MapPin, Send, CheckCircle, MailIcon, User2Icon, Notebook, NotebookIcon } from "lucide-react";
import emailjs from "emailjs-com";
import Hero from "../components/Hero";
import SuccessMessage from "../components/SuccessAnimation";
import "./page-styles/Contact.css";
import "./page-styles/Contact-media.css";

function ContactFooters() {
  return(
    <div >
     <div className="location-container">
      <h3 className="location-title">Office Location</h3>
      <div className="div-flex">
        <div>
          <MapPin className="map-icon"/>
        </div>
        <div className="location-area">
          Dream Atlas HQ 
          <br /> 
          Trade fair Street 
          <br /> 
          Lagos, Lagos Nigeria 
          <div className="l-a">
            (Remote-first team - mailing address)
          </div>
        </div>
      </div>
     </div>
     <div className="response-container">
      <h3>Response Time</h3>
      <div>
        <div className="response-sub">General Inquiries</div>
        <div className="response-time">24-48 hours</div>
        <div className="response-sub">Technical Support</div>
        <div className="response-time">12-24 hours</div>
        <div className="response-sub">Privacy Concerns</div>
        <div className="response-time">Within 24 hours</div>
      </div>
     </div>
    </div>
  )
}

function ContactQuest() {
  const quests = [
    {
      title: "How do I report a bug or technical issue?",
      description: 'Please use the contact form and select "Technical Support" as the reason. Include as much detail as possible about the issue.'
    }, {
      title: "Can I partner with Dream Atlas for research?",
      description: 'Yes! We actively collaborate with researchers. Select "Research Partnership" in the form and tell us about your project.'
    }, {
      title: "How do I delete my account and data?",
      description: "You can delete your account from your profile settings, or contact us at privacy@dreamatlas.com for assistance."
    }, {
      title: "Are you hiring?",
      description: "We're always looking for passionate people! Check our careers page or mention your interest in the contact form."
    }
  ]

  return(
    <div>
     <h2 className="quest-title">Common Questions</h2>
      <div className="quest-container">
        {quests.map((quest , index) => {
          return(
          <div
           key={index}
           className="quests"
          >
           <h3>{quest.title}</h3>
           <div>{quest.description}</div>
          </div>
          )
        })}
      </div>
    </div>
  );
}

function ContactMessage() {
   const [formData, setFormData] = useState(
    {
      name: '',
      email: '',
      subject: '',
      message: '',
      reason: 'general'
    }
   );

   const contactReasons = [
    {
      value: 'general',
      label: 'General Inquiry'
    }, {
      value: 'research',
      label: 'Research Partnership'
    }, {
      value: 'press',
      label: 'Press/Media'
    }, {
      value: 'technical',
      label: 'Technical Support'
    }, {
      value: 'privacy',
      label: 'Privacy Concern'
    }, {
      value: 'collaboration',
      label: 'Collaboration Opportunity'
    }
   ]

   const [submitted, setSubmitted] = useState(false);

   const [showSuccess, setShowSuccess] = useState(false);

   const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
   };

   const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.send(
     "service_had3u48",
     "template_03fk0lj",
     {
       name: formData.name,
       email: formData.email,
       subject: formData.subject,
       message: formData.message,
       reason: formData.reason
     },
     "YEL6A3jsccBdpx96I"
    )
    .then(() => {
      setSubmitted(true);
    })
    .catch((err) => {
      console.error("Email failed:", err);
    });
    
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        reason: "general"
      });
    }, 3000);

    setShowSuccess(true);
   };

   useEffect(() => {
      if(!showSuccess) return;

      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 3000);

      return () => clearTimeout(timer);
    }, [showSuccess]);

  return(
    <>
    {showSuccess && <SuccessMessage />}
    <div>
     <h2 className="contact-title2">Send us a Message</h2>
     <form 
      action="#"
      onSubmit={handleSubmit}
     >
      <div className="input-box">
        <span className="icon"><User2Icon size={20} /></span>
        <input 
          type="text"
          required 
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
          <label>Your Name</label>
        </div>
        <div className="input-box">
          <span className="icon"><MailIcon size={20} /></span>
          <input
            type="email"
            required
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label>Emailm Address</label>
        </div>
        <div className="reason-container">
          <label className="reason">
            Reason for Contact
          </label>
          <select 
           name="reason"
           className="option"
           value={formData.reason}
           onChange={handleChange}
           required
           >
            {contactReasons.map((reason,index) => {
             return(
              <option 
               key={index}
               value={reason.value}
              >
                {reason.label}
              </option>
             )
            })}
           </select>
        </div>
        <div className="input-box">
          <span className="icon"><NotebookIcon size={20} /></span>
          <input
            type="text"
            required
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            />
          <label>Brief subject line</label>
        </div>
        <div className="input-box-message">
          <textarea
            type="text"
            required
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            onInput={(e) => {
             e.target.style.height = "auto";
             e.target.style.weight = e.target.style.height;
            }}
            />
          <label>Message</label>
        </div>
        <button 
         type="submit"
         className="btn-contact"
        >
         <Send 
          className="send-icon"
         /> 
         Send Message
        </button>
     </form>
    </div>
    </>
  );
}

function ContactTop() {
  const contacts = [
    {
      icon: <Mail className="contact-icon" />,
      type: "Email",
      link: <a 
       href="mailto:nondhim@gmail.com"
       target="_blank"
       className="contact-link"
       >hello@dreamatlas.com</a>,
      description: "We respond within 24-48 hours"
    }, {
      icon: <Twitter className="contact-icon" />,
      type: "Twitter",
      link: <a 
       href="https://x.com/DreamAtlasio"
       target="_blank"
       className="contact-link"
       >@DreamAtlas</a>,
      description: "Follow for updates"
    }, {
      icon: <Github className="contact-icon" />,
      type: "GitHub",
      link: <a 
       href="https://github.com/EdwinDev-I/Dream-Atlas"
       target="_blank"
       className="contact-link"
       >github.com/dreamatlas</a>,
      description: "Open source contribution"
    }, {
      icon: <MessageCircle className="contact-icon" />,
      type: "Discord",
      link: <a 
       href="https://wa.me/2348063863841?text=Hello%20DreamAtlas."
       target="_blank"
       className="contact-link"
       >Join our community</a>,
      description: "Chat with dreamers worldwide"
    }
  ];

  return(
    <div>
      <h1 className="contact-title">Get in Touch</h1>
      <div className="contact-subtitle">
        We'd love to hear from you. Whether you have a question, feedback, or just want to say hello.
      </div>
      <div className="contact-info-container">
        {contacts.map((contact, index) => {
          return(
            <div
             key={index}
             className="contact-info"
            >
             <div>{contact.icon}</div>
             <div className="contact-type">
              {contact.type}
              </div>
             <div>
              {contact.link}
              </div>
             <div className="contact-des">
              {contact.description}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function Contact() {
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
    <div className="contact-container">
      <ContactTop />
      <ContactMessage />
      <ContactQuest />
      <ContactFooters />
    </div>
     <a className="arrow" onClick={scrollToTop} aria-label="Scroll to top">↑</a>
    </>
  )
}

export default  Contact;