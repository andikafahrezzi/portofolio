import React from 'react';
import { Mail, Github, Linkedin, Phone, Send, Code, Server, Database, Download, Briefcase, Award, FileText, Layers, MapPin, Clock } from 'lucide-react';


const Skills = () => {
  const skills = [
    { name: "React.js", level: 90 },
    { name: "PHP & Laravel", level: 85 },
    { name: "Tailwind CSS", level: 95 },
    { name: "CodeIgniter", level: 80 },
    { name: "Database (MySQL)", level: 85 },
    { name: "Networking", level: 75 }
  ];

  return (
    <section id="skills" className="min-h-screen bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">Keahlian Saya</h2>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <span className="text-white font-semibold text-lg">{skill.name}</span>
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

export default Skills;