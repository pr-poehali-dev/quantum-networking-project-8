import { useState, useRef, useEffect } from "react";
import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TourDate {
  city: string;
  country: string;
  venue: string;
  date: string;
  month: string;
  year: string;
  soldOut?: boolean;
  featured?: boolean;
}

const tourDates: TourDate[] = [
  {
    city: "Москва",
    country: "Россия",
    venue: "Лужники",
    date: "14",
    month: "Июн",
    year: "2025",
    featured: true,
  },
  {
    city: "Берлин",
    country: "Германия",
    venue: "Olympiastadion",
    date: "22",
    month: "Июн",
    year: "2025",
  },
  {
    city: "Лондон",
    country: "Великобритания",
    venue: "Wembley Stadium",
    date: "05",
    month: "Июл",
    year: "2025",
    soldOut: true,
  },
  {
    city: "Париж",
    country: "Франция",
    venue: "Stade de France",
    date: "12",
    month: "Июл",
    year: "2025",
  },
  {
    city: "Нью-Йорк",
    country: "США",
    venue: "MetLife Stadium",
    date: "20",
    month: "Авг",
    year: "2025",
  },
  {
    city: "Токио",
    country: "Япония",
    venue: "Tokyo Dome",
    date: "10",
    month: "Сен",
    year: "2025",
    soldOut: true,
  },
];

const LicenseSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="tour" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/20 to-black"></div>

      <div className="container mx-auto px-4 relative">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <p className="text-red-500 uppercase tracking-widest text-sm font-semibold mb-3">
            M72 World Tour
          </p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">Афиша концертов</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Metallica снова в дороге — не пропусти шанс увидеть легенду вживую
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tourDates.map((show, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Card
                className={`relative bg-black border-white/10 ${
                  hoveredCard === index && !show.soldOut ? "scale-105 border-red-500/40" : "scale-100"
                } transition-all duration-300`}
              >
                {show.featured && (
                  <div className="absolute -top-3 left-4 z-10">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      🔥 Ближайший
                    </span>
                  </div>
                )}
                {show.soldOut && (
                  <div className="absolute -top-3 right-4 z-10">
                    <span className="bg-zinc-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Sold Out
                    </span>
                  </div>
                )}
                <CardContent className="p-6 flex items-center gap-5">
                  <div className="text-center min-w-[60px]">
                    <div className="text-3xl font-black text-red-500">{show.date}</div>
                    <div className="text-sm font-semibold text-zinc-300 uppercase">{show.month}</div>
                    <div className="text-xs text-zinc-500">{show.year}</div>
                  </div>
                  <div className="w-px h-12 bg-white/10"></div>
                  <div className="flex-1">
                    <div className="text-lg font-bold text-white">{show.city}</div>
                    <div className="text-sm text-zinc-400">{show.country}</div>
                    <div className="text-xs text-zinc-500 mt-1 flex items-center gap-1">
                      <Icon name="MapPin" size={12} />
                      {show.venue}
                    </div>
                  </div>
                  <Button
                    size="sm"
                    className={
                      show.soldOut
                        ? "bg-zinc-700 text-zinc-400 cursor-not-allowed"
                        : "bg-red-600 hover:bg-red-700 text-white"
                    }
                    disabled={show.soldOut}
                    asChild={!show.soldOut}
                  >
                    {show.soldOut ? (
                      <span>Нет билетов</span>
                    ) : (
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        Купить
                      </a>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LicenseSection;
