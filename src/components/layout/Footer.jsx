import { Mail, Github, Linkedin, Phone, Send, Code, Server, Database, Download, Briefcase, Award, FileText, Layers, MapPin, Clock } from 'lucide-react';


const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-400 mb-4">
            &copy; 2026 <span className="text-purple-400 font-bold">andikafahrezzi</span>. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            {[
              { icon: <Github className="w-5 h-5" />, link: "https://github.com/andikafahrezzi" },
              { icon: <Linkedin className="w-5 h-5" />, link: "https://linkedin.com/in/andikafahrezzi" },
              { icon: <Mail className="w-5 h-5" />, link: "mailto:andikafahrezi5@gmail.com" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
