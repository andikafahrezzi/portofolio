import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, Phone, Send, Code, Server, Database, Download, Briefcase, Award, FileText, Layers, MapPin, Clock } from 'lucide-react';


const SplashScreen = ({ onEnter }) => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'www.andikafahrezi.dev';
  const [showButton, setShowButton] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [buttonEnabled, setButtonEnabled] = useState(false);

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setButtonEnabled(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center z-50">
      <div className="text-center px-4">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 animate-pulse">
            Selamat Datang
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 mb-8">
            Di Website Portfolio Saya
          </p>
        </div>
        
        <div className="bg-gray-900 bg-opacity-50 backdrop-blur-sm rounded-lg px-6 py-4 inline-block mb-8">
          <code className="text-green-400 text-xl md:text-2xl font-mono">
            {typedText}
            <span className="animate-pulse">|</span>
          </code>
        </div>

        {showButton && (
          <div className="space-y-4">
            <button
              onClick={buttonEnabled ? onEnter : undefined}
              disabled={!buttonEnabled}
              className={`bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 shadow-2xl ${
                buttonEnabled 
                  ? 'hover:from-purple-600 hover:to-blue-600 transform hover:scale-105 cursor-pointer' 
                  : 'opacity-50 cursor-not-allowed animate-pulse'
              }`}
            >
              {buttonEnabled ? 'Masuk ke Portfolio →' : `Tunggu ${countdown}s...`}
            </button>
            <p className="text-purple-200 text-sm">
              {countdown > 0 ? `Auto redirect dalam ${countdown} detik` : 'Redirecting...'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SplashScreen;