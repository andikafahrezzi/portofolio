import React from 'react';
import { Mail, Github, Linkedin, Phone, Send, Code, Server, Database, Download, Briefcase, Award, FileText, Layers, MapPin, Clock } from 'lucide-react';
import profile from '../../assets/jass.jpg';

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">About Me</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text */}
            <div className="space-y-6">
              <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl">
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  Saya adalah seorang <span className="text-purple-400 font-bold">Full Stack Developer</span> dengan passion dalam menciptakan solusi digital yang memberikan dampak nyata bagi masyarakat.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  Perjalanan saya dimulai dari <span className="text-blue-400 font-semibold">SMK jurusan Jaringan</span>, dilanjutkan dengan kuliah <span className="text-blue-400 font-semibold">Teknik Informatika</span> dimana saya mengasah kemampuan pemrograman dan problem solving.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Saya telah mengembangkan berbagai aplikasi web mulai dari sistem PPDB, E-Learning, hingga ERP yang membantu meningkatkan efisiensi dan produktivitas organisasi.
                </p>
              </div>
              
              <div className="flex space-x-4">
                <button className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
                  <Download className="w-5 h-5" />
                  <span>Download CV</span>
                </button>
                <button 
                  onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center space-x-2 border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-6 rounded-full transition-all duration-300"
                >
                  <Briefcase className="w-5 h-5" />
                  <span>Lihat Portfolio</span>
                </button>
              </div>
            </div>

            {/* Right Side - Profile Picture */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 p-2">
                  <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                    <img 
                      src={profile}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Floating Badges */}
                <div className="absolute -top-4 -right-4 bg-purple-600 rounded-full p-4 shadow-lg animate-bounce">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-blue-600 rounded-full p-4 shadow-lg animate-pulse">
                  <Server className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;