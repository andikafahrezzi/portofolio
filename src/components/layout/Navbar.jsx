export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-slate-900/80 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
        <span className="font-bold text-lg">Pahrul.dev</span>
        <div className="space-x-6 text-sm text-gray-300">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </nav>
  );
}
