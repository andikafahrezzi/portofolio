import React, { useState, useEffect } from 'react';
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
/* eslint-enable no-unused-vars */
import { Mail, Github, Linkedin, Phone, Send, Code, Server, Database, Download, Briefcase, Award, FileText, Layers, MapPin, Clock } from 'lucide-react';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const ROLES = ['Full Stack Developer', 'Backend Developer', 'Network Engineer', 'Web Developer'];
    
    const speed = isDeleting ? 50 : 100;
    const currentText = ROLES[roleIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentText.length) {
        setCurrentRole(currentText.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentRole(currentText.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % ROLES.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  // Variants untuk animasi container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  // Variants untuk animasi text dari kiri
  const leftVariants = {
    hidden: { 
      opacity: 0, 
      x: -100 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Variants untuk animasi SVG dari kanan
  const rightVariants = {
    hidden: { 
      opacity: 0, 
      x: 100,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Variants untuk button dengan hover effect
  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 pt-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid md:grid-cols-2 gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* Left Side - Text */}
          <motion.div 
            className="text-left space-y-6"
            variants={leftVariants}
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-white"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Hi, I'm <span className="text-purple-400">Andika Fahrezi</span>
            </motion.h1>
            
            <motion.div 
              className="h-20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                {currentRole}
                <span className="animate-pulse">|</span>
              </h2>
            </motion.div>
            
            <motion.p 
              className="text-xl text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Mengubah Ide Menjadi Solusi Digital yang Berdampak
            </motion.p>
            
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Hubungi Saya
              </motion.button>
              <motion.button 
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Lihat Portfolio
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Image/SVG */}
          <motion.div 
            className="flex justify-center"
            variants={rightVariants}
          >
            <div className="relative w-full max-w-md">
              <motion.svg 
                viewBox="0 0 500 500" 
                className="w-full h-full"
                initial={{ rotate: -5 }}
                whileInView={{ rotate: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#8B5CF6', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#3B82F6', stopOpacity: 1}} />
                  </linearGradient>
                </defs>
                
                {/* Monitor/Computer */}
                <motion.rect 
                  x="100" y="150" width="300" height="200" rx="10" 
                  fill="url(#grad1)" opacity="0.2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                />
                <motion.rect 
                  x="110" y="160" width="280" height="160" rx="5" 
                  fill="#1F2937"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                />
                
                {/* Code Lines */}
                <motion.line 
                  x1="130" y1="180" x2="220" y2="180" 
                  stroke="#8B5CF6" strokeWidth="3" strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  <animate attributeName="x2" values="130;220;130" dur="2s" repeatCount="indefinite"/>
                </motion.line>
                <motion.line 
                  x1="130" y1="200" x2="280" y2="200" 
                  stroke="#3B82F6" strokeWidth="3" strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 1, delay: 1.1 }}
                >
                  <animate attributeName="x2" values="130;280;130" dur="2.5s" repeatCount="indefinite"/>
                </motion.line>
                <motion.line 
                  x1="130" y1="220" x2="250" y2="220" 
                  stroke="#8B5CF6" strokeWidth="3" strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 1, delay: 1.2 }}
                >
                  <animate attributeName="x2" values="130;250;130" dur="3s" repeatCount="indefinite"/>
                </motion.line>
                <motion.line 
                  x1="130" y1="240" x2="300" y2="240" 
                  stroke="#3B82F6" strokeWidth="3" strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 1, delay: 1.3 }}
                >
                  <animate attributeName="x2" values="130;300;130" dur="2.2s" repeatCount="indefinite"/>
                </motion.line>
                
                {/* Monitor Stand */}
                <motion.rect 
                  x="220" y="350" width="60" height="40" 
                  fill="url(#grad1)" opacity="0.3"
                  initial={{ y: 300 }}
                  whileInView={{ y: 350 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                />
                <motion.rect 
                  x="180" y="390" width="140" height="10" rx="5" 
                  fill="url(#grad1)" opacity="0.3"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                />
                
                {/* Floating Elements */}
                <motion.circle 
                  cx="420" cy="100" r="15" 
                  fill="#8B5CF6" opacity="0.6"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                >
                  <animate attributeName="cy" values="100;80;100" dur="3s" repeatCount="indefinite"/>
                </motion.circle>
                <motion.circle 
                  cx="80" cy="300" r="20" 
                  fill="#3B82F6" opacity="0.6"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 1.7 }}
                >
                  <animate attributeName="cy" values="300;320;300" dur="4s" repeatCount="indefinite"/>
                </motion.circle>
                <motion.rect 
                  x="400" y="280" width="30" height="30" 
                  fill="#8B5CF6" opacity="0.4" 
                  transform="rotate(45 415 295)"
                  initial={{ scale: 0, rotate: 0 }}
                  whileInView={{ scale: 1, rotate: 45 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                >
                  <animateTransform 
                    attributeName="transform" 
                    type="rotate" 
                    values="45 415 295;90 415 295;45 415 295" 
                    dur="5s" 
                    repeatCount="indefinite"
                  />
                </motion.rect>
              </motion.svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;