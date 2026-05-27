import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      const opacity = Math.max(0, 1 - scrolled / (windowHeight * 0.5));
      setScrollOpacity(opacity);
      setScrollY(scrolled * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    { icon: "Calendar", label: "Лет на сцене", value: "40+" },
    { icon: "Disc3", label: "Студийных альбомов", value: "11" },
    { icon: "Users", label: "Фанатов по всему миру", value: "100M+" },
    { icon: "Trophy", label: "Наград Грэмми", value: "9" },
  ];

  return (
    <section ref={containerRef} className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://cdn.poehali.dev/projects/1329fde2-64e3-493d-b005-8daf4a0f707a/files/c9b93209-001c-401a-a4a2-a43692250d62.jpg"
          alt="Metallica Concert"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black"></div>
      </div>

      <div
        style={{ transform: `translateY(${scrollY}px)`, opacity: scrollOpacity }}
        className="relative pt-40 pb-16 px-4 transition-opacity duration-100 flex items-center min-h-screen"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-red-500 uppercase tracking-widest text-sm font-semibold mb-4">
              Официальный сайт
            </p>
            <h1 className="text-7xl md:text-9xl font-black mb-6 tracking-tight relative uppercase">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-300 to-red-500">
                Metallica
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-zinc-400 max-w-3xl mx-auto">
              Легенды тяжёлого металла. Четыре десятилетия, 11 альбомов, миллионы фанатов по всему миру.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="relative inline-block">
                <Button
                  size="lg"
                  className="bg-red-600 text-white hover:bg-red-700 text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onClick={() => document.getElementById("tour")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <span className="relative z-10">Купить билеты</span>
                  <span
                    className={`ml-2 relative z-10 transition-transform duration-200 ${
                      isHovered ? "translate-x-1" : ""
                    }`}
                  >
                    &rarr;
                  </span>
                </Button>
              </div>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full"
                onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть галерею
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="bg-zinc-900/50 rounded-xl p-6 backdrop-blur-lg border border-white/10 transition-all duration-300 hover:scale-105 hover:border-red-500/30">
                  <div className="mb-2 text-red-500 flex justify-center">
                    <Icon name={stat.icon} size={24} />
                  </div>
                  <div className="text-3xl font-bold mb-1 text-white">{stat.value}</div>
                  <div className="text-sm text-zinc-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
