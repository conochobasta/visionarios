import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const testimonials = [
  {
    name: "María Elena, mamá de Valentina (5 años)",
    quote:
      "Cuando empecé a explorar la aplicación, me sorprendió lo bien pensada que está. No es solo una app bonita o entretenida, está creada con una comprensión real de cómo aprenden los niños. Para mí es importante cómo estimula áreas clave del desarrollo cognitivo: memoria, atención, razonamiento… todo desde un enfoque lúdico, sin forzar ni apurar, todo fluyendo con naturalidad. Cada actividad tiene un sentido claro, propone desafíos reales pero alcanzables y respeta los ritmos de cada niño. Sé que será una gran aliada en el crecimiento mental y emocional de mi hija. Como madre, me da muchísima tranquilidad saber que existe algo así.",
  },
];

export default function Testimonios() {
  return (
    <section id="testimonials" className="testimonials-section">
      <h2 className="testimonial-title">Testimonio</h2>
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
