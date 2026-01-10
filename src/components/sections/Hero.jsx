import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, Phone, Send, Code, Server, Database, Download, Briefcase, Award, FileText, Layers, MapPin, Clock } from 'lucide-react';


const Hero = () => {
 const [currentRole, setCurrentRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // PINDAHKAN ROLES KE DALAM useEffect
    const ROLES = ['Full Stack Developer', 'Backend Developer', 'Network Engineer', 'Web Developer'];
    
    const speed = isDeleting ? 50 : 100;
    const currentText = ROLES[roleIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentText.length) {
        // Typing
        setCurrentRole(currentText.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        // Deleting
        setCurrentRole(currentText.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        // Pause at full text
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        // Move to next role
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % ROLES.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 pt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Text */}
          <div className="text-left space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Hi, I'm <span className="text-purple-400">Andika Fahrezi</span>
            </h1>
            <div className="h-20">
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                {currentRole}
                <span className="animate-pulse">|</span>
              </h2>
            </div>
            <p className="text-xl text-gray-300">
              Mengubah Ide Menjadi Solusi Digital yang Berdampak
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Hubungi Saya
              </button>
              <button 
                onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
              >
                Lihat Portfolio
              </button>
            </div>
          </div>

          {/* Right Side - Image/SVG */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <svg viewBox="0 0 500 500" className="w-full h-full">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#8B5CF6', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#3B82F6', stopOpacity: 1}} />
                  </linearGradient>
                </defs>
                
                {/* Monitor/Computer */}
                <rect x="100" y="150" width="300" height="200" rx="10" fill="url(#grad1)" opacity="0.2"/>
                <rect x="110" y="160" width="280" height="160" rx="5" fill="#1F2937"/>
                
                {/* Code Lines */}
                <line x1="130" y1="180" x2="220" y2="180" stroke="#8B5CF6" strokeWidth="3" strokeLinecap="round">
                  <animate attributeName="x2" values="130;220;130" dur="2s" repeatCount="indefinite"/>
                </line>
                <line x1="130" y1="200" x2="280" y2="200" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round">
                  <animate attributeName="x2" values="130;280;130" dur="2.5s" repeatCount="indefinite"/>
                </line>
                <line x1="130" y1="220" x2="250" y2="220" stroke="#8B5CF6" strokeWidth="3" strokeLinecap="round">
                  <animate attributeName="x2" values="130;250;130" dur="3s" repeatCount="indefinite"/>
                </line>
                <line x1="130" y1="240" x2="300" y2="240" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round">
                  <animate attributeName="x2" values="130;300;130" dur="2.2s" repeatCount="indefinite"/>
                </line>
                
                {/* Monitor Stand */}
                <rect x="220" y="350" width="60" height="40" fill="url(#grad1)" opacity="0.3"/>
                <rect x="180" y="390" width="140" height="10" rx="5" fill="url(#grad1)" opacity="0.3"/>
                
                {/* Floating Elements */}
                <circle cx="420" cy="100" r="15" fill="#8B5CF6" opacity="0.6">
                  <animate attributeName="cy" values="100;80;100" dur="3s" repeatCount="indefinite"/>
                </circle>
                <circle cx="80" cy="300" r="20" fill="#3B82F6" opacity="0.6">
                  <animate attributeName="cy" values="300;320;300" dur="4s" repeatCount="indefinite"/>
                </circle>
                <rect x="400" y="280" width="30" height="30" fill="#8B5CF6" opacity="0.4" transform="rotate(45 415 295)">
                  <animateTransform attributeName="transform" type="rotate" values="45 415 295;90 415 295;45 415 295" dur="5s" repeatCount="indefinite"/>
                </rect>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;