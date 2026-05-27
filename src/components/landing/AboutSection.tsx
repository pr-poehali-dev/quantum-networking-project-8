import { useRef, useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const galleryItems = [
  {
    type: "image",
    url: "https://cdn.poehali.dev/projects/1329fde2-64e3-493d-b005-8daf4a0f707a/files/c9b93209-001c-401a-a4a2-a43692250d62.jpg",
    title: "M72 World Tour 2024",
    subtitle: "Стадион Лужники, Москва",
  },
  {
    type: "video",
    url: "https://www.youtube.com/embed/CD-E-LDc384",
    title: "Master of Puppets — Live",
    subtitle: "Official Music Video",
  },
  {
    type: "video",
    url: "https://www.youtube.com/embed/2uYs0gJD-LE",
    title: "Enter Sandman — Live",
    subtitle: "Live at Wembley",
  },
  {
    type: "image",
    url: "https://cdn.poehali.dev/projects/1329fde2-64e3-493d-b005-8daf4a0f707a/files/c9b93209-001c-401a-a4a2-a43692250d62.jpg",
    title: "Backstage",
    subtitle: "За кулисами тура",
  },
];

const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="gallery" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <p className="text-red-500 uppercase tracking-widest text-sm font-semibold mb-3">
            Фото и видео
          </p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">Галерея</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Лучшие моменты со сцены и за кулисами
          </p>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`relative group rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 cursor-pointer ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              } hover:border-red-500/40 hover:scale-[1.02]`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setSelected(index)}
            >
              {item.type === "image" ? (
                <div className="relative aspect-video">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="text-white font-bold text-lg">{item.title}</div>
                    <div className="text-zinc-400 text-sm">{item.subtitle}</div>
                  </div>
                </div>
              ) : (
                <div className="relative aspect-video bg-zinc-900">
                  <iframe
                    src={item.url}
                    title={item.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <div className="absolute bottom-4 left-4 pointer-events-none">
                    <div className="flex items-center gap-2 bg-black/60 rounded-lg px-3 py-1">
                      <Icon name="Play" size={14} className="text-red-500" />
                      <div className="text-white font-semibold text-sm">{item.title}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
