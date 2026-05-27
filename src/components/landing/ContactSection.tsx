import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const socialLinks = [
  {
    name: "YouTube",
    icon: "Youtube",
    url: "https://www.youtube.com/@Metallica",
    description: "Официальный YouTube",
  },
  {
    name: "Instagram",
    icon: "Instagram",
    url: "https://www.instagram.com/metallica",
    description: "@metallica",
  },
  {
    name: "Facebook",
    icon: "Facebook",
    url: "https://www.facebook.com/Metallica",
    description: "Metallica Official",
  },
  {
    name: "Twitter / X",
    icon: "Twitter",
    url: "https://twitter.com/metallica",
    description: "@Metallica",
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" ref={ref} className="py-20 bg-zinc-900 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"
        style={{ backgroundPosition: "0 0, 0 0" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
      <div
        className={`container mx-auto px-4 relative z-10 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <div className="text-center mb-12">
          <p className="text-red-500 uppercase tracking-widest text-sm font-semibold mb-3">
            Оставайтесь на связи
          </p>
          <h2 className="text-5xl font-bold mb-4 text-white">Контакты</h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Следи за нами в соцсетях или напиши нам напрямую
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Мы в социальных сетях</h3>
            <div className="space-y-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-black/40 border border-white/10 hover:border-red-500/40 hover:bg-black/60 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-red-600/20 transition-colors">
                    <Icon name={social.icon} size={20} className="text-zinc-400 group-hover:text-red-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">{social.name}</div>
                    <div className="text-zinc-400 text-sm">{social.description}</div>
                  </div>
                  <Icon name="ExternalLink" size={16} className="ml-auto text-zinc-600 group-hover:text-zinc-400" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6">Написать нам</h3>
            <div className="bg-black/50 backdrop-blur-lg rounded-xl p-6 border border-white/10">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-zinc-700 text-zinc-200 placeholder-zinc-500"
                  />
                </div>
                <div className="mb-4">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Ваш email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-zinc-700 text-zinc-200 placeholder-zinc-500"
                  />
                </div>
                <div className="mb-4">
                  <Textarea
                    name="message"
                    placeholder="Ваше сообщение"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-zinc-700 text-zinc-200 placeholder-zinc-500 min-h-[100px]"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-red-600 text-white hover:bg-red-700 transition-colors"
                  disabled={isSubmitting || isSubmitted}
                >
                  <span className="flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <Icon name="Loader2" size={18} className="animate-spin" />
                        Отправка...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <Icon name="CheckCircle" size={18} />
                        Отправлено!
                      </>
                    ) : (
                      <>
                        <Icon name="Send" size={18} />
                        Отправить
                      </>
                    )}
                  </span>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
