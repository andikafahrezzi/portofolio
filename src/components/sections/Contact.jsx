import React, { useState} from 'react';
import { Mail, Github, Linkedin, Phone, Send, Code, Server, Database, Download, Briefcase, Award, FileText, Layers, MapPin, Clock } from 'lucide-react';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert('Mohon isi semua field yang wajib!');
      return;
    }
    
    const waMessage = `Halo, nama saya ${formData.name}%0AEmail: ${formData.email}%0ASubjek: ${formData.subject}%0APesan: ${formData.message}`;
    const waUrl = `https://wa.me/6281386607123?text=${waMessage}`;
    
    window.open(waUrl, '_blank');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    { icon: <Mail className="w-6 h-6" />, label: "Email", value: "andikafahrezi5@gmail.com", link: "mailto:your.email@gmail.com" },
    { icon: <Phone className="w-6 h-6" />, label: "Phone", value: "+62 813 8660 7123", link: "https://wa.me/6281234567890" },
    { icon: <MapPin className="w-6 h-6" />, label: "Location", value: "Jakarta, Indonesia", link: null },
    { icon: <Clock className="w-6 h-6" />, label: "Response Time", value: "24 hours", link: null }
  ];

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Mari Terhubung!</h2>
          <p className="text-xl text-gray-300">Punya proyek atau ide? Mari diskusikan bersama</p>
        </div>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <div className="space-y-6">
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Informasi Kontak</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-gray-700 bg-opacity-50 rounded-lg hover:bg-opacity-70 transition-all duration-300">
                    <div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-full p-3 text-white">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      {info.link ? (
                        <a href={info.link} className="text-white font-semibold hover:text-purple-400 transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white font-semibold">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Social Media</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Github className="w-6 h-6" />, label: "Github", link: "https://github.com/andikafahrezzi" },
                  { icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn", link: "https://linkedin.com/in/andikafahrezzi" },
                  { icon: <Mail className="w-6 h-6" />, label: "Email", link: "mailto:andikafahrezi5@gmail.com" },
                  { icon: <Phone className="w-6 h-6" />, label: "WhatsApp", link: "https://wa.me/6281386607123" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-gray-700 bg-opacity-50 rounded-lg hover:bg-gradient-to-br hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="text-white">{social.icon}</div>
                    <span className="text-white font-semibold">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Kirim Pesan</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2 font-semibold">Nama *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-gray-700 bg-opacity-50 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all"
                  placeholder="Nama Lengkap Anda"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2 font-semibold">Email *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-gray-700 bg-opacity-50 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-semibold">Subjek</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full bg-gray-700 bg-opacity-50 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all"
                  placeholder="Topik Pesan"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2 font-semibold">Pesan *</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows="5"
                  className="w-full bg-gray-700 bg-opacity-50 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all resize-none"
                  placeholder="Tulis pesan Anda di sini..."
                />
              </div>
              
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
              >
                <Send className="w-5 h-5" />
                <span>Kirim Pesan via WhatsApp</span>
              </button>

              <p className="text-gray-400 text-sm text-center">
                * Field wajib diisi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;