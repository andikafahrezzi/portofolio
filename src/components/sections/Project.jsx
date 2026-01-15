import React, { useState} from 'react';
import { Mail, Github, Linkedin, Phone, Send, Code, Server, Database, Download, Briefcase, Award, FileText, Layers, MapPin, Clock } from 'lucide-react';
import elearningImage from '../../assets/e-learning.png';
import ppdbImage from '../../assets/tlfajar.png';


const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('projects');

  const projects = [
    {
      title: "Website PPDB TK Fajar Nusantara",
      description: "Sistem Penerimaan Peserta Didik Baru yang memudahkan proses pendaftaran dengan interface yang user-friendly",
      tech: ["React", "Tailwind CSS"],
      image: ppdbImage,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "E-Learning PKBM Cipta Tunas Karya",
      description: "Platform pembelajaran lengkap dengan modul, video, forum, quiz, ujian, dan manajemen data akademik",
      tech: ["PHP", "CodeIgniter 3", "MySQL"],
      image: elearningImage,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "ERP System Multi-Division",
      description: "Sistem Enterprise Resource Planning yang mengintegrasikan berbagai divisi/role perusahaan",
      tech: ["Laravel", "Tailwind CSS", "MySQL"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Job Tracking Application",
      description: "Platform untuk memantau status lamaran pekerjaan yang bisa digunakan oleh pencari kerja",
      tech: ["Laravel", "Tailwind CSS", "Sqlite"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      color: "from-green-500 to-teal-500"
    }
  ];

  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    { 
      name: "AWS Certified Developer", 
      issuer: "Amazon Web Services", 
      year: "2024",
      image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=600&h=400&fit=crop"
    },
    { 
      name: "React Advanced Certification", 
      issuer: "Meta", 
      year: "2023",
      image: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=600&h=400&fit=crop"
    },
    { 
      name: "Full Stack Web Development", 
      issuer: "Udemy", 
      year: "2023",
      image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=600&h=400&fit=crop"
    },
    { 
      name: "Network+ Certification", 
      issuer: "CompTIA", 
      year: "2022",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop"
    }
  ];

  const techStack = {
    frontend: [
      { name: "React", icon: "⚛️" },
      { name: "Tailwind", icon: "🎨" },
      { name: "JavaScript", icon: "📜" },
    ],
    backend: [
      { name: "PHP", icon: "🐘" },
      { name: "Laravel", icon: "🔴" },
      { name: "CodeIgniter", icon: "🔥" },
      { name: "Node.js", icon: "🟢" },
      { name: "Express", icon: "⚡" }
    ],
    database: [
      { name: "MySQL", icon: "🐬" },
      { name: "Sqllite", icon: "🐘" },
      { name: "MongoDB", icon: "🍃" }
    ],
    tools: [
      { name: "Git", icon: "📦" },
      { name: "VS Code", icon: "💻" },
      { name: "Postman", icon: "📮" },
    ]
  };

  return (
    <section id="portfolio" className="min-h-screen bg-gray-800 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">Portfolio & Skills</h2>
        
        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-900 rounded-full p-2 inline-flex space-x-2">
            {[
              { id: 'projects', label: 'Projects', icon: <Briefcase className="w-5 h-5" /> },
              { id: 'certifications', label: 'Certifications', icon: <Award className="w-5 h-5" /> },
              { id: 'techstack', label: 'Tech Stack', icon: <Layers className="w-5 h-5" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white transform scale-105'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto">
          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
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
                    <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                    <p className="text-gray-400 mb-4 text-base leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="bg-gray-800 text-purple-400 px-4 py-2 rounded-full text-base font-semibold">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Certifications Tab */}
          {activeTab === 'certifications' && (
            <div>
              <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
                {certifications.map((cert, index) => (
                  <div 
                    key={index} 
                    onClick={() => setSelectedCert(cert)}
                    className="group cursor-pointer bg-gray-900 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={cert.image} 
                        alt={cert.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
                      
                      {/* Overlay Info */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-full p-2">
                            <Award className="w-6 h-6 text-white" />
                          </div>
                          <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            {cert.year}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
                        <p className="text-gray-300 text-base">{cert.issuer}</p>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-center">
                          <div className="bg-white rounded-full p-4 mb-4 inline-block">
                            <FileText className="w-8 h-8 text-purple-600" />
                          </div>
                          <p className="text-white text-lg font-bold">Klik untuk melihat detail</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Certificate Popup Modal */}
              {selectedCert && (
                <div 
                  className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 animate-fade-in"
                  onClick={() => setSelectedCert(null)}
                >
                  <div 
                    className="relative max-w-4xl w-full bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => setSelectedCert(null)}
                      className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white rounded-full p-3 z-10 transition-all duration-300 transform hover:scale-110"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    
                    <img 
                      src={selectedCert.image} 
                      alt={selectedCert.name}
                      className="w-full h-auto"
                    />
                    
                    <div className="p-8 bg-gradient-to-br from-purple-900 to-blue-900">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-full p-3">
                          <Award className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-white">{selectedCert.name}</h3>
                          <p className="text-xl text-gray-300">{selectedCert.issuer}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-lg font-semibold">
                          Tahun: {selectedCert.year}
                        </span>
                        <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
                          Download Certificate
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Tech Stack Tab */}
          {activeTab === 'techstack' && (
            <div className="space-y-10 animate-fade-in">
              {Object.entries(techStack).map(([category, technologies]) => (
                <div key={category} className="bg-gray-900 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-8 capitalize flex items-center space-x-3">
                    <Code className="w-7 h-7 text-purple-400" />
                    <span>{category}</span>
                  </h3>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
                    {technologies.map((tech, index) => (
                      <div 
                        key={index} 
                        className="group bg-gray-800 rounded-xl p-6 text-center hover:bg-gradient-to-br hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-110 cursor-pointer"
                        title={tech.name}
                      >
                        <div className="text-5xl mb-3 group-hover:scale-125 transition-transform duration-300">
                          {tech.icon}
                        </div>
                        <p className="text-white font-semibold text-base">{tech.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;