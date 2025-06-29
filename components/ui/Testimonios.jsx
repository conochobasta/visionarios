import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const testimonials = [
  {
    name: "Laura, mamá de Sofía",
    quote:
      "Visionarios ha cambiado por completo la forma en que mi hija se relaciona con el aprendizaje. ¡Está emocionada cada vez que entra a la plataforma!",
  },
  {
    name: "Carlos, papá de Tomás",
    quote:
      "La claridad del avance y la participación que nos permite como padres es algo que nunca había visto en otra herramienta educativa.",
  },
  {
    name: "Ana, educadora preescolar",
    quote:
      "Los niños no solo aprenden, sino que disfrutan del proceso. La integración emocional hace una gran diferencia.",
  },
];

export default function Testimonios() {
  return (
    <section id="testimonials" className="testimonials-section py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">Testimonios</h2>
      <div className="testimonials-grid grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, idx) => (
          <TestimonialCard key={idx} testimonial={t} delay={idx * 0.3} />
        ))}
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial, delay }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay }}
    >
      <Card className="testimonial-card bg-white/5 border border-white/10 backdrop-blur p-6 text-white rounded-xl shadow-xl min-h-[200px]">
        <CardContent>
          <p className="quote italic mb-4">"{testimonial.quote}"</p>
          <p className="author font-semibold text-sm text-right">- {testimonial.name}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

