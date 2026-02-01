import React, { useState } from 'react';
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from 'framer-motion';
/* eslint-enable no-unused-vars */
import { 
  Mail, Github, Linkedin, Phone, Send, MapPin, Clock, 
  MessageSquare, Paperclip, CheckCircle, Sparkles, Zap,
  Globe, Mailbox, Smartphone, Map
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hoveredContact, setHoveredContact] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      alert('Mohon isi semua field yang wajib!');
      return;
    }
    
    const waMessage = `Halo, nama saya ${formData.name}%0AEmail: ${formData.email}%0ASubjek: ${formData.subject || 'Tidak ada subjek'}%0APesan: ${formData.message}`;
    const waUrl = `https://wa.me/6281386607123?text=${waMessage}`;
    
    window.open(waUrl, '_blank');
    
    // Show success animation
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contactInfo = [
    { 
      icon: <Mail className="w-6 h-6" />, 
      label: "Email", 
      value: "andikafahrezi5@gmail.com", 
      link: "mailto:andikafahrezi5@gmail.com",
      color: "from-red-500 to-orange-500"
    },
    { 
      icon: <Phone className="w-6 h-6" />, 
      label: "Phone", 
      value: "+62 813 8660 7123", 
      link: "https://wa.me/6281386607123",
      color: "from-green-500 to-emerald-500"
    },
    { 
      icon: <MapPin className="w-6 h-6" />, 
      label: "Location", 
      value: "Jakarta, Indonesia", 
      link: null,
      color: "from-blue-500 to-cyan-500"
    },
    { 
      icon: <Clock className="w-6 h-6" />, 
      label: "Response Time", 
      value: "Within 24 hours", 
      link: null,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const socialMedia = [
    { icon: <Github className="w-6 h-6" />, label: "GitHub", link: "https://github.com/andikafahrezzi", color: "hover:from-gray-800 hover:to-gray-900" },
    { icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn", link: "https://linkedin.com/in/andikafahrezzi", color: "hover:from-blue-700 hover:to-blue-800" },
    { icon: <Mail className="w-6 h-6" />, label: "Email", link: "mailto:andikafahrezi5@gmail.com", color: "hover:from-red-600 hover:to-orange-600" },
    { icon: <MessageSquare className="w-6 h-6" />, label: "WhatsApp", link: "https://wa.me/6281386607123", color: "hover:from-green-600 hover:to-emerald-600" }
  ];

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

  const floatAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section id="contact" className="relative min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 py-20 overflow-hidden">
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [360, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header dengan Animasi */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-block mb-6"
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
                <MessageSquare className="w-10 h-10 text-purple-400" />
              </div>
            </div>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
              Let's Connect
            </span>
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "200px" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-6"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 text-xl max-w-2xl mx-auto"
          >
            Have a project or idea? Let's discuss and bring it to life together
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid lg:grid-cols-2 gap-12"
          >
            
            {/* Left Column - Contact Info */}
            <div className="space-y-8">
              
              {/* Contact Information Cards */}
              <motion.div 
                variants={itemVariants}
                className="bg-gray-900/30 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 shadow-2xl"
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-3 mb-8"
                >
                  <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl p-3">
                    <Mailbox className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Contact Information</h3>
                    <p className="text-gray-400">Get in touch through any channel</p>
                  </div>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  {contactInfo.map((info, index) => (
    <motion.div
      key={index}
      variants={itemVariants}
      onMouseEnter={() => setHoveredContact(index)}
      onMouseLeave={() => setHoveredContact(null)}
      whileHover={{ y: -5 }}
      className="relative group"
    >
      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 min-h-[140px] h-auto"> {/* h-auto untuk expand */}
        <div className="flex items-start gap-4">
          <motion.div
            animate={hoveredContact === index ? { scale: 1.1, rotate: 360 } : {}}
            transition={{ duration: 0.5 }}
            className={`bg-gradient-to-br ${info.color} rounded-xl p-3 flex-shrink-0 mt-1`} /* mt-1 untuk alignment */
          >
            <div className="text-white">
              {info.icon}
            </div>
          </motion.div>
          
          <div className="flex-1 min-w-0"> {/* Important: min-w-0 untuk text wrap */}
            <p className="text-gray-400 text-sm mb-2">{info.label}</p>
            {info.link ? (
              <motion.a
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="text-white font-semibold text-base hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-400 transition-all duration-300 break-words whitespace-normal word-break-break-all"
                style={{ wordBreak: 'break-all' }} /* Force break long words */
              >
                {info.value}
              </motion.a>
            ) : (
              <p className="text-white font-semibold text-lg">{info.value}</p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  ))}
</div>
              </motion.div>

              {/* Social Media Cards */}
              <motion.div 
                variants={itemVariants}
                className="bg-gray-900/30 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 shadow-2xl"
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-3 mb-8"
                >
                  <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl p-3">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Connect With Me</h3>
                    <p className="text-gray-400">Follow and reach out on social media</p>
                  </div>
                </motion.div>

                <div className="grid grid-cols-2 gap-4">
                  {socialMedia.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={itemVariants}
                      whileHover={{ y: -5, scale: 1.02 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-5 hover:border-transparent transition-all duration-300 ${social.color} group`}
                    >
                      <div className="flex items-center gap-3">
                        <motion.div
                          animate={floatAnimation}
                          className="text-white"
                        >
                          {social.icon}
                        </motion.div>
                        <span className="text-white font-semibold">{social.label}</span>
                      </div>
                      
                      {/* Hover Overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.3 }}
                      />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Availability Status */}
              <motion.div 
                variants={itemVariants}
                className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 shadow-2xl"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="w-3 h-3 bg-green-500 rounded-full"
                    />
                    <div>
                      <h4 className="text-white font-bold text-lg">Currently Available</h4>
                      <p className="text-gray-400 text-sm">For new projects & collaborations</p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                  >
                    <Zap className="w-6 h-6 text-yellow-400" />
                  </motion.div>
                </div>
                <p className="text-gray-300 text-sm">
                  I'm currently open to freelance projects, full-time opportunities, and interesting collaborations.
                  Feel free to reach out!
                </p>
              </motion.div>
            </div>

            {/* Right Column - Contact Form */}
            <motion.div 
              variants={itemVariants}
              className="bg-gray-900/30 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 shadow-2xl"
            >
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl p-3">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Send Me a Message</h3>
                  <p className="text-gray-400">I'll get back to you as soon as possible</p>
                </div>
              </motion.div>

              <AnimatePresence>
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }}
                      transition={{ duration: 0.5 }}
                      className="inline-block mb-6"
                    >
                      <CheckCircle className="w-20 h-20 text-green-500" />
                    </motion.div>
                    <h4 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h4>
                    <p className="text-gray-400 mb-6">I'll get back to you shortly via WhatsApp</p>
                    <motion.p
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="text-purple-400 text-sm"
                    >
                      Redirecting to WhatsApp...
                    </motion.p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <label className="block text-gray-300 mb-2 font-semibold">
                        <span className="flex items-center gap-2">
                          <Paperclip className="w-4 h-4" />
                          Full Name *
                        </span>
                      </label>
                      <motion.input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        whileFocus={{ scale: 1.02 }}
                        className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-white rounded-xl px-5 py-4 focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:outline-none transition-all"
                        placeholder="Enter your full name"
                        required
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <label className="block text-gray-300 mb-2 font-semibold">
                        <span className="flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          Email Address *
                        </span>
                      </label>
                      <motion.input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        whileFocus={{ scale: 1.02 }}
                        className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-white rounded-xl px-5 py-4 focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:outline-none transition-all"
                        placeholder="your.email@example.com"
                        required
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <label className="block text-gray-300 mb-2 font-semibold">
                        <span className="flex items-center gap-2">
                          <Smartphone className="w-4 h-4" />
                          Subject (Optional)
                        </span>
                      </label>
                      <motion.input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        whileFocus={{ scale: 1.02 }}
                        className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-white rounded-xl px-5 py-4 focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:outline-none transition-all"
                        placeholder="Project, Collaboration, Inquiry, etc."
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <label className="block text-gray-300 mb-2 font-semibold">
                        <span className="flex items-center gap-2">
                          <MessageSquare className="w-4 h-4" />
                          Your Message *
                        </span>
                      </label>
                      <motion.textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        whileFocus={{ scale: 1.02 }}
                        rows="6"
                        className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-white rounded-xl px-5 py-4 focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:outline-none transition-all resize-none"
                        placeholder="Tell me about your project, idea, or just say hello..."
                        required
                      />
                    </motion.div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative group w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-5 rounded-xl transition-all duration-300 overflow-hidden"
                    >
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="flex items-center justify-center gap-3"
                      >
                        <Send className="w-5 h-5" />
                        <span>Send Message via WhatsApp</span>
                      </motion.div>
                      
                      {/* Button Glow Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "0%" }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Sparkles Effect */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0"
                      >
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ x: -20, y: -20 }}
                            animate={{ 
                              x: ["0%", "100%"],
                              y: ["0%", "100%"]
                            }}
                            transition={{
                              duration: 1 + i * 0.5,
                              repeat: Infinity,
                              delay: i * 0.2
                            }}
                            className="absolute"
                          >
                            <Sparkles className="w-4 h-4 text-white/50" />
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.button>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      className="text-gray-400 text-sm text-center"
                    >
                      * Required fields. Your message will be sent via WhatsApp for faster response.
                    </motion.p>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;