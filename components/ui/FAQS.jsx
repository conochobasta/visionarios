import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FAQS() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "¿Qué diferencia a esta plataforma de otras apps educativas?",
      answer: "Esta plataforma aprovecha la inteligencia artificial para ajustarse de forma dinámica al ritmo, intereses y necesidades únicas de cada niño, creando así una experiencia educativa totalmente personalizada.Esto asegura que el aprendizaje sea significativo, efectivo y adaptado a cada etapa del desarrollo infantil.",
    },
    {
      question: "¿A qué edad está dirigida esta plataforma?",
      answer:
        "Nuestra plataforma está diseñada para niños entre 3 y 6 años, con actividades adaptadas a cada etapa de desarrollo. La IA ajusta los contenidos según el ritmo, intereses y nivel de cada niño, sin importar la edad exacta.",
    },
    {
      question: "¿Necesitaré conocimientos técnicos para usarla con mi hijo?",
      answer:
        "No necesitarás ningún conocimiento técnico para usar la aplicación con tu hijo. Estará diseñada para que cualquier familia pueda aprovecharla fácilmente, con una interfaz intuitiva y acompañamiento constante. Solo tendrás que enfocarte en apoyar el aprendizaje de tu hijo, ¡el resto lo hará la app!",
    },
    {
      question: "¿Se podra usar la app para varios niños o solo uno?",
      answer: "No hay problema en usar la aplicación con varios niños siempre que cada uno tenga su propio usuario individual. La app está diseñada para adaptarse de forma personalizada a las necesidades y ritmo de aprendizaje de cada niño, por lo que compartir un mismo usuario entre varios niños haría que pierda efectividad. Para garantizar una experiencia óptima, cada niño debe contar con su perfil propio dentro de la plataforma.",
    },
    {
      question: "podre ver el progreso y participar como madre/padre?",
      answer: "Sí, podrás ver el progreso de tu hijo fácilmente a través de una app complementaria diseñada para padres. Allí recibirás datos reales y claros sobre qué actividades realiza, cómo avanza y en qué áreas necesita más apoyo. Así podrás acompañar su aprendizaje de forma informada y estar siempre al tanto de su desarrollo.",
    },
    {
      question: "¿Habrá actualizaciones y mejoras constantes?",
      answer: "Sí, la plataforma estará en constante evolución con actualizaciones y mejoras regulares para ofrecer siempre la mejor experiencia educativa. Además, las familias fundadoras podrán participar activamente dando feedback para que la aplicación se adapte cada vez más a las necesidades reales de los niños y sus familias.",
    },
  ];

  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <>
     <h2 className="accordion-title">
        Preguntas Frecuentes
      </h2>
      <h5 className="accordion-subtitle">
        para resolver todas tus dudas
      </h5>
    <motion.div
      ref={ref}
      className="accordion-container max-w-3xl mx-auto px-4 py-16"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      {faqs.map((faq, index) => (
        <div className="accordion-item border-b border-white/20 py-4" key={index}>
          <button
            className={`accordion-trigger flex justify-between items-center w-full text-left text-lg font-medium text-white transition-colors`}
            onClick={() => toggle(index)}
          >
            <span>{faq.question}</span>
            <span className="arrow text-sm">{openIndex === index ? "▲" : "▼"}</span>
          </button>

          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                key="content"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden text-white/80 text-base pt-2"
              >
                <p>{faq.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </motion.div>
    </>
  );
}
