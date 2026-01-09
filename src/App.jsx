import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, Phone, Send, Code, Server, Database, Briefcase, GraduationCap, Award } from 'lucide-react';

// Splash Screen Component
const SplashScreen = ({ onEnter }) => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'www.andikafahrezzi.dev';
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setShowButton(true);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center z-50">
      <div className="text-center px-4">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 animate-pulse">
            Selamat Datang
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 mb-8">
            Di Website Portfolio Saya
          </p>
        </div>
        
        <div className="bg-gray-900 bg-opacity-50 backdrop-blur-sm rounded-lg px-6 py-4 inline-block mb-8">
          <code className="text-green-400 text-xl md:text-2xl font-mono">
            {typedText}
            <span className="animate-pulse">|</span>
          </code>
        </div>

        {showButton && (
          <div className="animate-fade-in">
            <button
              onClick={onEnter}
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Masuk ke Portfolio →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Navbar Component
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Portfolio</h1>
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

// Hero Component
const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 pt-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Full Stack Developer
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Mengubah Ide Menjadi Solusi Digital yang Berdampak
          </p>
          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Hubungi Saya
            </button>
            <button 
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white hover:bg-white hover:text-purple-900 font-bold py-3 px-8 rounded-full transition-all duration-300"
            >
              Lihat Proyek
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// About Component
const About = () => {
  const timeline = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "SMK - Jurusan Jaringan",
      description: "Membangun fondasi di bidang networking dan infrastruktur IT"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Kuliah - Teknik Informatika",
      description: "Mendalami pemrograman dan pengembangan software"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full Stack Developer",
      description: "Mengembangkan solusi web yang menyelesaikan masalah nyata di masyarakat"
    }
  ];

  return (
    <section id="about" className="min-h-screen bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">Tentang Saya</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-2xl p-8 mb-12 shadow-2xl">
            <p className="text-gray-300 text-lg leading-relaxed">
              Saya adalah seorang programmer dengan passion dalam menciptakan solusi digital yang memberikan dampak nyata bagi masyarakat. 
              Perjalanan saya dimulai dari SMK dengan jurusan Jaringan, dilanjutkan dengan kuliah Teknik Informatika dimana saya mengasah 
              kemampuan pemrograman dan problem solving.
            </p>
          </div>

          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start space-x-4 bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
                <div className="bg-purple-600 rounded-full p-3 flex-shrink-0 text-white">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Projects Component
const Projects = () => {
  const projects = [
    {
      title: "Website PPDB TK Fajar Nusantara",
      description: "Sistem Penerimaan Peserta Didik Baru yang memudahkan proses pendaftaran dengan interface yang user-friendly",
      tech: "React, Tailwind CSS",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=600&fit=crop",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "E-Learning PKBM Cipta Tunas Karya",
      description: "Platform pembelajaran lengkap dengan modul, video, forum, quiz, ujian, dan manajemen data akademik untuk guru, murid, dan admin",
      tech: "PHP, CodeIgniter 3",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "ERP System Multi-Division",
      description: "Sistem Enterprise Resource Planning yang mengintegrasikan berbagai divisi/role perusahaan dalam satu platform terpadu",
      tech: "Laravel, Tailwind CSS",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-gray-800 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">Proyek Saya</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.split(', ').map((tech, i) => (
                    <span key={i} className="bg-gray-800 text-purple-400 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Skills Component
const Skills = () => {
  const skills = [
    { name: "React.js", level: 90, icon: <Code className="w-5 h-5" /> },
    { name: "PHP & Laravel", level: 85, icon: <Server className="w-5 h-5" /> },
    { name: "Tailwind CSS", level: 95, icon: <Code className="w-5 h-5" /> },
    { name: "CodeIgniter", level: 80, icon: <Server className="w-5 h-5" /> },
    { name: "Database (MySQL)", level: 85, icon: <Database className="w-5 h-5" /> },
    { name: "Networking", level: 75, icon: <Server className="w-5 h-5" /> }
  ];

  return (
    <section id="skills" className="min-h-screen bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">Keahlian</h2>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="text-purple-500">{skill.icon}</div>
                  <span className="text-white font-semibold">{skill.name}</span>
                </div>
                <span className="text-purple-400 font-bold">{skill.level}%</span>
              </div>
              <div className="bg-gray-700 rounded-full h-3 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-blue-500 h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Component
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert('Mohon isi semua field!');
      return;
    }
    
    // WhatsApp
    const waMessage = `Halo, nama saya ${formData.name}%0AEmail: ${formData.email}%0APesan: ${formData.message}`;
    const waUrl = `https://wa.me/6281234567890?text=${waMessage}`;
    
    // Email
    const emailSubject = `Portfolio Contact from ${formData.name}`;
    const emailBody = `Name: ${formData.name}%0AEmail: ${formData.email}%0A%0AMessage:%0A${formData.message}`;
    const emailUrl = `mailto:your.email@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    
    // Open both (you can choose one)
    window.open(waUrl, '_blank');
    // window.open(emailUrl, '_blank');
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="min-h-screen bg-gray-800 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">Hubungi Saya</h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl">
            <div className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2 font-semibold">Nama</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all"
                  placeholder="Nama Anda"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2 font-semibold">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all"
                  placeholder="email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2 font-semibold">Pesan</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows="5"
                  className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all resize-none"
                  placeholder="Tulis pesan Anda..."
                />
              </div>
              
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Kirim Pesan</span>
              </button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-800">
              <div className="flex justify-center space-x-6">
                <a href="mailto:your.email@gmail.com" className="text-gray-400 hover:text-purple-500 transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition-colors">
                  <Phone className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4 text-center text-gray-400">
        <p>&copy; 2026 Portfolio. Dibuat dengan ❤️ menggunakan React & Tailwind CSS</p>
      </div>
    </footer>
  );
};

// Main App Component
export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="relative">
      {showSplash && <SplashScreen onEnter={() => setShowSplash(false)} />}
      
      {!showSplash && (
        <div className="opacity-0 animate-fade-in">
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </div>
      )}
      
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}