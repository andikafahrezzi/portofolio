import React, { useState, useEffect } from 'react';
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from 'framer-motion';
/* eslint-enable no-unused-vars */
import { 
  Sparkles, Zap, Cpu, Globe, Code, Server, Database,
  ArrowRight, Clock, Loader2, Terminal
} from 'lucide-react';

const SplashScreen = ({ onEnter }) => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'andikafahrezi.dev';
  const [showButton, setShowButton] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [buttonEnabled, setButtonEnabled] = useState(false);
  const [particles, setParticles] = useState([]);

  // Generate floating particles
  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      speed: Math.random() * 2 + 1,
      delay: Math.random() * 2
    }));
    setParticles(newParticles);
  }, []);

  // Typewriter effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setShowButton(true);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  // Countdown timer
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      onEnter();
    }
  }, [countdown, onEnter]);

  // Enable button after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setButtonEnabled(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Floating icons data
  const floatingIcons = [
    { icon: <Code className="w-8 h-8" />, delay: 0, color: "text-blue-400" },
    { icon: <Server className="w-8 h-8" />, delay: 0.5, color: "text-purple-400" },
    { icon: <Database className="w-8 h-8" />, delay: 1, color: "text-green-400" },
    { icon: <Globe className="w-8 h-8" />, delay: 1.5, color: "text-cyan-400" },
    { icon: <Cpu className="w-8 h-8" />, delay: 2, color: "text-orange-400" },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-950 flex items-center justify-center z-50 overflow-hidden"
      >
        {/* Animated Background Particles */}
        <div className="absolute inset-0">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              initial={{ 
                x: `${particle.x}vw`, 
                y: `${particle.y}vh`,
                opacity: 0 
              }}
              animate={{ 
                y: [`${particle.y}vh`, `${particle.y - 20}vh`, `${particle.y}vh`],
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: 3 + particle.speed,
                repeat: Infinity,
                delay: particle.delay,
                ease: "easeInOut"
              }}
              className="absolute rounded-full"
              style={{
                width: particle.size,
                height: particle.size,
                background: `radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)`
              }}
            />
          ))}
        </div>

        {/* Floating Tech Icons */}
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ 
              scale: 1, 
              rotate: 0,
              y: [0, -30, 0],
              x: [0, Math.sin(index) * 20, 0]
            }}
            transition={{
              scale: { delay: item.delay, type: "spring", stiffness: 200 },
              rotate: { delay: item.delay, duration: 0.8 },
              y: { 
                repeat: Infinity, 
                duration: 3 + index, 
                delay: item.delay,
                ease: "easeInOut" 
              },
              x: { 
                repeat: Infinity, 
                duration: 4 + index * 0.5, 
                delay: item.delay,
                ease: "easeInOut" 
              }
            }}
            className={`absolute ${item.color}`}
            style={{
              top: `${20 + index * 15}%`,
              left: `${10 + index * 15}%`,
            }}
          >
            {item.icon}
          </motion.div>
        ))}

        {/* Main Content Container */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          
          {/* Animated Title */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="w-16 h-16 border-4 border-transparent rounded-full"
                style={{
                  background: "linear-gradient(45deg, #8b5cf6, #3b82f6, #06b6d4) border-box",
                  WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                  mask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude"
                }}
              />
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <Sparkles className="w-12 h-12 text-purple-400" />
              </motion.div>
            </div>

            <motion.h1
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                WELCOME
              </span>
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "300px" }}
              transition={{ delay: 0.4, duration: 1 }}
              className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-6"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-300"
            >
              To My Digital Portfolio
            </motion.p>
          </motion.div>

          {/* Terminal-like URL Display */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <Terminal className="w-6 h-6 text-green-400" />
              <span className="text-gray-400 text-sm font-mono">terminal</span>
              <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="w-2 h-4 bg-green-400"
              />
            </div>

            <div className="relative group">
              <motion.div
                className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 md:p-8 shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-center gap-4">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                  >
                    <Zap className="w-6 h-6 text-yellow-400" />
                  </motion.div>
                  
                  <div className="font-mono text-center">
                    <div className="text-gray-400 text-sm mb-2">Loading portfolio at:</div>
                    <code className="text-2xl md:text-3xl font-bold text-green-400">
                      https://
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="text-white"
                      >
                        {typedText}
                      </motion.span>
                      <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="ml-1"
                      >
                        _
                      </motion.span>
                    </code>
                  </div>
                </div>

                {/* Progress Bar */}
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 3, delay: 1 }}
                  className="mt-6 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full overflow-hidden"
                >
                  <motion.div
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="h-full w-1/4 bg-white/30"
                  />
                </motion.div>
              </motion.div>

              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10" />
            </div>
          </motion.div>

          {/* Enter Button */}
          <AnimatePresence>
            {showButton && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="space-y-6"
              >
                <motion.button
                  onClick={buttonEnabled ? onEnter : undefined}
                  disabled={!buttonEnabled}
                  whileHover={buttonEnabled ? { scale: 1.05 } : {}}
                  whileTap={buttonEnabled ? { scale: 0.95 } : {}}
                  className={`relative overflow-hidden group ${
                    buttonEnabled 
                      ? 'cursor-pointer' 
                      : 'cursor-not-allowed'
                  }`}
                >
                  <div className="relative">
                    {/* Button Base */}
                    <div className={`absolute inset-0 rounded-2xl blur-lg ${
                      buttonEnabled 
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 opacity-50' 
                        : 'bg-gray-700 opacity-30'
                    }`} />

                    {/* Button Content */}
                    <div className={`relative px-12 py-5 rounded-2xl font-bold text-xl transition-all duration-300 ${
                      buttonEnabled
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-2xl'
                        : 'bg-gray-800 text-gray-400'
                    }`}>
                      <div className="flex items-center justify-center gap-3">
                        {buttonEnabled ? (
                          <>
                            <span>Enter Portfolio</span>
                            <motion.span
                              animate={{ x: [0, 5, 0] }}
                              transition={{ repeat: Infinity, duration: 1.5 }}
                            >
                              <ArrowRight className="w-5 h-5" />
                            </motion.span>
                          </>
                        ) : (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Loading {countdown}s</span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    {buttonEnabled && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 rounded-2xl opacity-0 group-hover:opacity-100"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "0%" }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </div>
                </motion.button>

                {/* Countdown Text */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center gap-2 text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">
                      {countdown > 0 
                        ? `Auto redirect in ${countdown} second${countdown !== 1 ? 's' : ''}` 
                        : 'Redirecting...'
                      }
                    </span>
                  </div>
                  
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-500 text-xs mt-2"
                  >
                    Full Stack Developer • UI/UX Designer • Problem Solver
                  </motion.p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom Signature */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 2 }}
            className="absolute bottom-8 left-0 right-0"
          >
            <p className="text-gray-600 text-sm font-mono">
              &gt; Press any key to continue...
            </p>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen;