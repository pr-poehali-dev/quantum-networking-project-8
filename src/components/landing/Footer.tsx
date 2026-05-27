import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-black py-10 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="text-2xl font-black uppercase tracking-tighter text-white mb-1">Metallica</div>
            <p className="text-zinc-500 text-sm">&copy; {new Date().getFullYear()} Metallica. Все права защищены.</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.youtube.com/@Metallica" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-red-600 transition-all duration-300" aria-label="YouTube">
              <Icon name="Youtube" size={18} />
            </a>
            <a href="https://www.instagram.com/metallica" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-red-600 transition-all duration-300" aria-label="Instagram">
              <Icon name="Instagram" size={18} />
            </a>
            <a href="https://www.facebook.com/Metallica" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-red-600 transition-all duration-300" aria-label="Facebook">
              <Icon name="Facebook" size={18} />
            </a>
            <a href="https://twitter.com/metallica" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-red-600 transition-all duration-300" aria-label="Twitter">
              <Icon name="Twitter" size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
