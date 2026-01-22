import React from 'react';
/* eslint-disable no-unused-vars */
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
/* eslint-enable no-unused-vars */
import { 
  Mail, Github, Linkedin, Phone, Send, Code, Server, Database, 
  Download, Briefcase, Award, FileText, Layers, MapPin, Clock, 
  Sparkles, Cpu, Globe, Zap, Target, Rocket, Brain, Cpu as CpuIcon
} from 'lucide-react';
import profile from '../../assets/tanpawm.jpeg';

const About = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  const rotateX = useTransform(springY, [-100, 100], [15, -15]);
  const rotateY = useTransform(springX, [-100, 100], [-15, 15]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };
  const handleDownloadCV = () => {
  // Buat anchor element
  const link = document.createElement('a');
  link.href = '/cv.pdf';
  link.download = 'CV_AndikaFahrezi.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  // Optional: Track download dengan analytics
  console.log('CV downloaded');
};

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section id="about" className="relative min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-950 py-20 overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Creative Title dengan Particle Effects */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ 
              type: "spring", 
              stiffness: 200,
              damping: 25 
            }}
            className="inline-block mb-8"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="absolute inset-0 border-4 border-transparent rounded-full"
                style={{
                  background: "linear-gradient(45deg, #8b5cf6, #3b82f6, #06b6d4) border-box",
                  WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                  mask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude"
                }}
              />
              <div className="w-20 h-20 bg-gradient-to-br from-purple-900 to-blue-900 rounded-full flex items-center justify-center">
                <Brain className="w-10 h-10 text-purple-400" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            className="flex flex-col items-center"
          >
            <motion.h2 
              variants={{
                hidden: { opacity: 0, y: -30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    type: "spring",
                    stiffness: 300,
                    damping: 25
                  }
                }
              }}
              className="text-5xl md:text-7xl lg:text-6xl font-bold mb-4"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                About
              </span>
              <span className="text-white mx-4">Me</span>
            </motion.h2>
            
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "300px" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-6"
            />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-gray-400 text-xl max-w-2xl"
            >
              From Network Engineer to Full Stack Developer
            </motion.p>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Text dengan Glassmorphism Effect */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div 
                className="relative group"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ perspective: 1000 }}
              >
                <motion.div
                  style={{
                    rotateX: rotateX,
                    rotateY: rotateY,
                    transformStyle: "preserve-3d"
                  }}
                  className="bg-gray-900/30 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 shadow-2xl"
                >
                  {/* Animated Border */}
                  <motion.div
                    animate={{ 
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute inset-0 rounded-3xl opacity-50 pointer-events-none"
                    style={{
                      background: "linear-gradient(90deg, #8b5cf6, #3b82f6, #06b6d4, #3b82f6, #8b5cf6)",
                      backgroundSize: "300% 100%",
                      WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                      padding: "2px"
                    }}
                  />
                  
                  <div className="relative space-y-6">
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="flex items-center gap-4 mb-6"
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl p-3"
                      >
                        <Target className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">Passionate Developer</h3>
                        <p className="text-gray-400">Creating Impactful Digital Solutions</p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="space-y-4"
                    >
                      <p className="text-gray-300 text-lg leading-relaxed">
                        Saya adalah seorang <span className="text-purple-400 font-bold">Full Stack Developer</span> dengan passion dalam menciptakan solusi digital yang memberikan dampak nyata bagi masyarakat.
                      </p>
                      
                      <div className="flex items-start gap-3">
                        <motion.span
                          whileHover={{ scale: 1.1 }}
                          className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center"
                        >
                          <Rocket className="w-4 h-4 text-white" />
                        </motion.span>
                        <p className="text-gray-300 text-lg leading-relaxed">
                          Perjalanan saya dimulai dari <span className="text-blue-400 font-semibold">SMK jurusan Jaringan</span>, dilanjutkan dengan kuliah <span className="text-blue-400 font-semibold">Teknik Informatika</span>.
                        </p>
                      </div>

                      <div className="flex items-start gap-3">
                        <motion.span
                          whileHover={{ scale: 1.1 }}
                          className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center"
                        >
                          <CpuIcon className="w-4 h-4 text-white" />
                        </motion.span>
                        <p className="text-gray-300 text-lg leading-relaxed">
                          Telah mengembangkan berbagai aplikasi web mulai dari sistem PPDB, E-Learning, hingga ERP yang meningkatkan efisiensi organisasi.
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDownloadCV}
                  className="relative group overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-3 cursor-pointer"
                >
                  <motion.span
                    animate={{ y: [0, -2, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <Download className="w-5 h-5" />
                  </motion.span>
                  <span>Download CV</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
                
                <motion.button 
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative overflow-hidden border-2 border-purple-400 font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-3"
                >
                  <Briefcase className="w-5 h-5" color='#3e9392'/>
                  <span className="relative z-10 text-white transition-colors duration-300">
                    Explore Portfolio
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-purple-400"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Side - Profile dengan Advanced 3D Effect */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <motion.div
                className="relative"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ perspective: 1000 }}
              >
                <motion.div
                  style={{
                    rotateX: rotateX,
                    rotateY: rotateY,
                    transformStyle: "preserve-3d"
                  }}
                  className="relative"
                >
                  {/* Outer Glow Ring */}
                  <motion.div
                    animate={{ 
                      rotate: 360,
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      rotate: { repeat: Infinity, duration: 20, ease: "linear" },
                      scale: { repeat: Infinity, duration: 3, ease: "easeInOut" }
                    }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 blur-xl opacity-50"
                  />
                  
                  {/* Middle Ring */}
                  <motion.div
                    animate={{ 
                      rotate: -360,
                      scale: [1.05, 1, 1.05]
                    }}
                    transition={{ 
                      rotate: { repeat: Infinity, duration: 25, ease: "linear" },
                      scale: { repeat: Infinity, duration: 4, ease: "easeInOut" }
                    }}
                    className="absolute inset-4 rounded-full bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 blur-lg opacity-30"
                  />

                  {/* Profile Container */}
                  <div className="relative w-80 h-80 rounded-full border-8 border-transparent bg-gradient-to-br from-purple-600 to-blue-600 p-2">
                    <div className="w-full h-full rounded-full bg-gray-900 overflow-hidden border-4 border-gray-900">
                      <motion.img 
                        src={profile}
                        alt="Profile"
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>

                  {/* Floating Tech Orbs */}
                  {[
                    { icon: <Code className="w-6 h-6" />, color: "from-purple-500 to-pink-500", delay: 0, position: "top-4 right-4" },
                    { icon: <Server className="w-6 h-6" />, color: "from-blue-500 to-cyan-500", delay: 0.2, position: "bottom-4 left-4" },
                    { icon: <Database className="w-6 h-6" />, color: "from-green-500 to-teal-500", delay: 0.4, position: "top-4 left-4" },
                    { icon: <Globe className="w-6 h-6" />, color: "from-orange-500 to-red-500", delay: 0.6, position: "bottom-4 right-4" },
                  ].map((orb, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: orb.delay,
                        type: "spring",
                        stiffness: 200,
                        damping: 20
                      }}
                      animate={{ 
                        y: [0, -20, 0],
                        rotate: [0, 360]
                      }}
                      transitionss={{
                        y: { 
                          repeat: Infinity, 
                          duration: 2 + index * 0.5, 
                          ease: "easeInOut" 
                        },
                        rotate: { 
                          repeat: Infinity, 
                          duration: 10 + index * 2, 
                          ease: "linear" 
                        }
                      }}
                      className={`absolute ${orb.position} bg-gradient-to-br ${orb.color} rounded-full p-4 shadow-2xl`}
                    >
                      <div className="text-white">
                        {orb.icon}
                      </div>
                    </motion.div>
                  ))}

                  {/* Center Badge */}
                  {/* <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.8, type: "spring" }}
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 360]
                    }}
                    transitions={{
                      scale: { repeat: Infinity, duration: 3, ease: "easeInOut" },
                      rotate: { repeat: Infinity, duration: 20, ease: "linear" }
                    }}
                    className="absolute inset-0 m-auto w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-2xl"
                  >
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                    >
                      <Zap className="w-8 h-8 text-white" />
                    </motion.div>
                  </motion.div> */}
                </motion.div>

                {/* Background Decorative Circles */}
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { repeat: Infinity, duration: 40, ease: "linear" },
                    scale: { repeat: Infinity, duration: 8, ease: "easeInOut" }
                  }}
                  className="absolute -inset-20 border-2 border-purple-500/20 rounded-full pointer-events-none"
                />
                <motion.div
                  animate={{ 
                    rotate: -360,
                    scale: [1.1, 1, 1.1]
                  }}
                  transition={{ 
                    rotate: { repeat: Infinity, duration: 35, ease: "linear" },
                    scale: { repeat: Infinity, duration: 7, ease: "easeInOut" }
                  }}
                  className="absolute -inset-32 border-2 border-blue-500/20 rounded-full pointer-events-none"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Stats Bar */}
          {/* <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-20 bg-gray-900/30 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Projects Completed", value: "20+", icon: <Briefcase className="w-6 h-6" /> },
                { label: "Years Experience", value: "3+", icon: <Clock className="w-6 h-6" /> },
                { label: "Technologies", value: "15+", icon: <Layers className="w-6 h-6" /> },
                { label: "Certifications", value: "8+", icon: <Award className="w-6 h-6" /> },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="text-center"
                >
                  <div className="inline-block p-3 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-xl mb-4">
                    <div className="text-purple-400">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default About;