import React, { useState } from 'react';
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from 'framer-motion';
/* eslint-enable no-unused-vars */
import { 
  Briefcase, Award, Layers, Code, Server, Database, 
  X, Download, ExternalLink, Sparkles, ChevronRight 
} from 'lucide-react';
import elearningImage from '../../assets/e-learning.png';
import ppdbImage from '../../assets/tlfajar.png';
import bnsp from '../../assets/bnsp.jpg';
import ibm from '../../assets/code-generation-and-optimization-using-ibm-granite.png';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [selectedCert, setSelectedCert] = useState(null);
  const [hoveredTech, setHoveredTech] = useState(null);

  const projects = [
    {
      title: "Website PPDB TK Fajar Nusantara",
      description: "Sistem Penerimaan Peserta Didik Baru yang memudahkan proses pendaftaran dengan interface yang user-friendly",
      tech: ["React", "Tailwind CSS"],
      image: ppdbImage,
      color: "from-blue-500 to-cyan-500",
      liveLink: "#",
      githubLink: "https://github.com/andikafahrezzi/landing-page"
    },
    {
      title: "E-Learning PKBM Cipta Tunas Karya",
      description: "Platform pembelajaran lengkap dengan modul, video, forum, quiz, ujian, dan manajemen data akademik",
      tech: ["PHP", "CodeIgniter 3", "MySQL"],
      image: elearningImage,
      color: "from-cyan-500 to-pink-500",
      liveLink: "#",
      githubLink: "https://github.com/andikafahrezzi/addustedu"
    },
    {
      title: "Company Profile",
      description: "Website profil perusahaan yang menampilkan informasi tentang layanan, portofolio, dan kontak bisnis yang bisa diubah melalui dashboard admin",
      tech: ["Laravel", "Tailwind CSS", "MySQL"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      color: "from-pink-500 to-red-500",
      liveLink: "#",
      githubLink: "https://github.com/andikafahrezzi/company-profile"
    },
    {
      title: "Enterprise Resource Planning",
      description: "Aplikasi ERP untuk mengelola berbagai aspek operasional bisnis dalam satu platform terpadu",
      tech: ["Laravel", "Tailwind CSS", "MySQL"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      color: "from-red-500 to-yellow-500",
      liveLink: "#",
      githubLink: "https://github.com/andikafahrezzi/addustflow"
    },
    {
      title: "Job Tracking Application",
      description: "Platform untuk memantau status lamaran pekerjaan yang bisa digunakan oleh pencari kerja",
      tech: ["Laravel", "Tailwind CSS", "SQLite"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      color: "from-yellow-500 to-blue-500",
      liveLink: "#",
      githubLink: "https://github.com/andikafahrezzi/job-tracker"
    }
  ];

  const certifications = [
    { 
      name: "Network Administration Certification", 
      issuer: "Badan Nasional Sertifikasi Profesi (BNSP)", 
      year: "2025",
      image: bnsp,
      credentialId: "J.1426.03120 2025"
    },
    { 
      name: "Code Generation and Optimization Using IBM Granite", 
      issuer: "IBM SkillsBuild", 
      year: "2025",
      image: ibm,
      credentialId: "PWID-B0979900"
    }
  ];

  const techStack = {
    frontend: [
      { name: "React", icon: "⚛️", level: "Intermediate", color: "text-cyan-400" },
      { name: "Tailwind", icon: "🎨", level: "Intermediate", color: "text-teal-400" },
      { name: "JavaScript", icon: "📜", level: "Intermediate", color: "text-yellow-400" },
    ],
    backend: [
      { name: "PHP", icon: "🐘", level: "Intermediate", color: "text-purple-400" },
      { name: "Laravel", icon: "🔴", level: "Intermediate", color: "text-red-400" },
      { name: "CodeIgniter", icon: "🔥", level: "Intermediate", color: "text-orange-400" },
      { name: "Node.js", icon: "🟢", level: "Intermediate", color: "text-green-400" },
      { name: "Express", icon: "⚡", level: "Intermediate", color: "text-blue-400" }
    ],
    database: [
      { name: "MySQL", icon: "🐬", level: "Intermediate", color: "text-blue-300" },
      { name: "Sqllite", icon: "🗃️", level: "Intermediate", color: "text-gray-300" },
      { name: "MongoDB", icon: "🍃", level: "Beginner", color: "text-green-300" }
    ],
    tools: [
      { name: "Git", icon: "📦", level: "Intermediate", color: "text-orange-300" },
      { name: "VS Code", icon: "💻", level: "ExpIntermediateert", color: "text-blue-300" },
      { name: "Postman", icon: "📮", level: "Intermediate", color: "text-orange-400" },
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const tabVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="portfolio" className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Title dengan Animasi */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <Sparkles className="w-12 h-12 text-purple-500 mx-auto" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="absolute inset-0 border-2 border-purple-500/30 rounded-full"
              />
            </div>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Portfolio & Skills
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my projects, certifications, and technical expertise
          </p>
        </motion.div>

        {/* Tabs dengan Animasi */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-2 border border-gray-700">
            <div className="flex space-x-2">
              {[
                { id: 'projects', label: 'Projects', icon: <Briefcase className="w-5 h-5" /> },
                { id: 'certifications', label: 'Certifications', icon: <Award className="w-5 h-5" /> },
                { id: 'techstack', label: 'Tech Stack', icon: <Layers className="w-5 h-5" /> }
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative flex items-center space-x-3 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tab Content dengan AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="max-w-7xl mx-auto"
          >
            
            {/* Projects Tab */}
            {activeTab === 'projects' && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -10 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-3xl overflow-hidden shadow-2xl">
                      
                      {/* Image Container */}
                      <div className="relative h-56 overflow-hidden">
                        <motion.img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        />
                        <motion.div 
                          className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-30`}
                          initial={{ opacity: 0.3 }}
                          whileHover={{ opacity: 0.1 }}
                          transition={{ duration: 0.3 }}
                        />
                        
                        {/* Tech Badges */}
                        <div className="absolute top-4 left-4 flex gap-2">
                          {project.tech.map((tech, i) => (
                            <motion.span
                              key={i}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: i * 0.1 }}
                              className="bg-black/50 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-semibold"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                          {project.description}
                        </p>
                        
                        {/* Action Buttons */}
                        <div className="flex gap-3">
                          <motion.a
                            href={project.liveLink}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-lg text-center flex items-center justify-center gap-2"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </motion.a>
                          <motion.a
                            href={project.githubLink}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex-1 bg-gray-800 text-white font-semibold py-3 rounded-lg text-center border border-gray-700"
                          >
                            Source Code
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Certifications Tab */}
            {activeTab === 'certifications' && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -10 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <motion.div 
                      onClick={() => setSelectedCert(cert)}
                      whileHover={{ scale: 1.02 }}
                      className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <motion.img 
                          src={cert.image} 
                          alt={cert.name}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        
                        {/* Overlay Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <motion.div 
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1.5 rounded-full mb-3"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            <Award className="w-4 h-4" />
                            <span className="text-sm font-semibold">{cert.year}</span>
                          </motion.div>
                          <h3 className="text-lg font-bold text-white mb-1">{cert.name}</h3>
                          <p className="text-gray-300 text-sm">{cert.issuer}</p>
                        </div>
                      </div>
                      
                      <div className="p-4 bg-gray-900/50 flex justify-between items-center">
                        <span className="text-gray-400 text-sm">ID: {cert.credentialId}</span>
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                        >
                          <ChevronRight className="w-5 h-5 text-purple-400" />
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Tech Stack Tab */}
            {activeTab === 'techstack' && (
              <div className="space-y-12">
                {Object.entries(techStack).map(([category, technologies]) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-3xl p-8"
                  >
                    <div className="flex items-center gap-3 mb-8">
                      <div className="p-3 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl">
                        {category === 'frontend' && <Code className="w-6 h-6 text-white" />}
                        {category === 'backend' && <Server className="w-6 h-6 text-white" />}
                        {category === 'database' && <Database className="w-6 h-6 text-white" />}
                        {category === 'tools' && <Layers className="w-6 h-6 text-white" />}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white capitalize">
                          {category}
                        </h3>
                        <p className="text-gray-400">Technologies & Tools</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                      {technologies.map((tech, index) => (
                        <motion.div
                          key={index}
                          initial={{ scale: 0, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1, type: "spring" }}
                          onMouseEnter={() => setHoveredTech(tech.name)}
                          onMouseLeave={() => setHoveredTech(null)}
                          whileHover={{ 
                            y: -8,
                            scale: 1.05,
                            transition: { type: "spring", stiffness: 300 }
                          }}
                          className="relative"
                        >
                          <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center group cursor-pointer">
                            
                            {/* Tech Icon */}
                            <motion.div 
                              className="text-4xl mb-3"
                              animate={{ 
                                rotate: hoveredTech === tech.name ? [0, 10, -10, 0] : 0,
                                scale: hoveredTech === tech.name ? 1.2 : 1
                              }}
                              transition={{ duration: 0.3 }}
                            >
                              {tech.icon}
                            </motion.div>
                            
                            {/* Tech Name */}
                            <p className={`font-semibold text-lg ${tech.color}`}>
                              {tech.name}
                            </p>
                            
                            {/* Level Badge */}
                            <motion.div 
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: index * 0.1 + 0.2 }}
                              className="absolute -top-2 -right-2"
                            >
                              <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs px-3 py-1 rounded-full">
                                {tech.level}
                              </span>
                            </motion.div>

                            {/* Hover Effect */}
                            <motion.div 
                              className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl opacity-0 group-hover:opacity-100"
                              transition={{ duration: 0.3 }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Certificate Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                transition={{ type: "spring", damping: 25 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-3xl overflow-hidden shadow-2xl"
              >
                {/* Close Button */}
                <motion.button
                  onClick={() => setSelectedCert(null)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-6 right-6 bg-red-600 hover:bg-red-700 text-white rounded-full p-3 z-10 shadow-lg"
                >
                  <X className="w-6 h-6" />
                </motion.button>

                {/* Certificate Image */}
                <div className="relative h-96 overflow-hidden">
                  <motion.img 
                    src={selectedCert.image} 
                    alt={selectedCert.name}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Certificate Details */}
                <div className="p-8">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-start gap-6 mb-8"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-4 flex-shrink-0"
                    >
                      <Award className="w-12 h-12 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {selectedCert.name}
                      </h3>
                      <p className="text-xl text-gray-300 mb-3">
                        {selectedCert.issuer}
                      </p>
                      <div className="flex items-center gap-4">
                        <motion.span 
                          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-5 py-2 rounded-full font-semibold"
                          whileHover={{ scale: 1.05 }}
                        >
                          {selectedCert.year}
                        </motion.span>
                        <span className="text-gray-400">
                          ID: {selectedCert.credentialId}
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  <div className="flex gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3"
                    >
                      <Download className="w-5 h-5" />
                      Download Certificate
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-gray-800 text-white font-bold py-4 rounded-xl border border-gray-700"
                    >
                      Verify Credential
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;