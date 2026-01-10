import React, { useState } from 'react';
import { Mail, Github, Linkedin, Phone, Send, Code, Server, Database, Download, Briefcase, Award, FileText, Layers, MapPin, Clock } from 'lucide-react';
import SplashScreen from './components/intro/IntroScreen.jsx';
import Navbar from './components/layout/Navbar.jsx';
import Hero from './components/sections/Hero.jsx';
import About from './components/sections/About.jsx';
import Portfolio from './components/sections/Project.jsx';
import Skills from './components/sections/Skill.jsx';
import Contact from './components/sections/Contact.jsx';
import Footer from './components/layout/Footer.jsx';
// Splash Screen Component


// Navbar Component


// Hero Component with Typing Effect


// About Component


// Portfolio/Projects Component with Tabs


// Skills Component


// Contact Component


// Footer Component


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
          <Portfolio />
          {/* <Skills /> */}
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
          animation: fade-in 0.8s ease-out forwards;
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        html {
          scroll-behavior: smooth;
        }

        .bg-gray-750 {
          background-color: rgb(45 55 72);
        }

        .bg-gray-850 {
          background-color: rgb(30 37 48);
        }
      `}</style>
    </div>
  );
}