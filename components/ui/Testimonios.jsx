// components/Testimonios.jsx
import { Card, CardContent } from "@/components/ui/card";

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
    <section id="testimonials" className="testimonials-section">
      <h2>Testimonios</h2>
      <div className="testimonials-grid">
        {testimonials.map((t, idx) => (
          <Card key={idx} className="testimonial-card">
            <CardContent>
              <p className="quote">"{t.quote}"</p>
              <p className="author">- {t.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

