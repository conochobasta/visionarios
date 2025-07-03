import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const testimonials = [
  {
    name: "María Elena, mamá de Valentina (5 años)",
    quote:
      "He probado otras plataformas educativas, pero esta es diferente. Tiene corazón. No es solo contenido bonito, es una experiencia personalizada, emocionalmente inteligente y con una visión clara de futuro. Siento que mi hija está aprendiendo con sentido, y eso no tiene precio.",
  },
  {
    name: "Laura M., mamá de Sofía (6 años)",
    quote:
      "Nunca había visto a Sofía tan motivada por aprender. La plataforma no solo se adapta a su ritmo, ¡sino que también reconoce cómo se siente! Me emociona ver cómo empieza a expresar mejor sus ideas y emociones. Es como si alguien la estuviera guiando con cariño y precisión al mismo tiempo.",
  },
  {
    name: "Javier y Lucía, papás de Tomás (4 años)",
    quote:
      "Gracias a los informes semanales entendemos mucho mejor en qué áreas necesita apoyo y cómo ayudarlo desde casa. Nos sentimos realmente parte de su proceso educativo, no como espectadores, sino como mentores. Esta herramienta nos unió más como familia.",
  },
];

export default function Testimonios() {
  return (
    <section id="testimonials" className="testimonials-section">
      <h2 className="testimonial-title">Testimonios</h2>
      <h5 className="testimonial-subtitle">así vivimos el aprendizaje en casa</h5>
      <div className="testimonials-grid">
        {testimonials.map((t, idx) => (
          <TestimonialCard key={idx} testimonial={t} delay={idx * 0.3} />
        ))}
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial, delay, direction = -40 }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const variants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay },
    },
    hidden: {
      opacity: 0,
      x: direction,
      transition: { duration: 0.4 },
    },
  };

  // Número de estrellas
  const starCount = 5;

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={{ scale: 1.1, zIndex: 10, transition: { duration: 0.3 } }}
      style={{ transformOrigin: "center center", position: "relative" }}
      className="testimonial-card"
    >
      <div className="testimonial-card-content">
        <div className="testimonial-stars">
          {[...Array(starCount)].map((_, i) => (
            <img
              key={i}
              src="/images/estrella.png"
              alt="estrella"
              className="star-icon"
              loading="lazy"
              width={24}
              height={24}
            />
          ))}
        </div>
        <p className="testimonial-quote">"{testimonial.quote}"</p>
        <p className="testimonial-author">- {testimonial.name}</p>
      </div>
    </motion.div>
  );
}
