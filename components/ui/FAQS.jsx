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
      question: "¿A qué edad está dirigida esta plataforma?",
      answer:
        "Nuestra plataforma está diseñada para niños y niñas entre 4 y 10 años, con actividades adaptadas a cada etapa de desarrollo. La IA ajusta los contenidos según el ritmo, intereses y nivel de cada niño, sin importar la edad exacta.",
    },
    {
      question: "¿Necesito conocimientos técnicos para usarla con mi hijo?",
      answer:
        "Nuestra plataforma está diseñada para niños y niñas entre 4 y 10 años, con actividades adaptadas a cada etapa de desarrollo. La IA ajusta los contenidos según el ritmo, intereses y nivel de cada niño, sin importar la edad exacta.",
    },
    {
      question: "¿Cómo protege la plataforma la información de mi hijo?",
      answer: "Nuestra plataforma está diseñada para niños y niñas entre 4 y 10 años, con actividades adaptadas a cada etapa de desarrollo. La IA ajusta los contenidos según el ritmo, intereses y nivel de cada niño, sin importar la edad exacta.",
    },
    {
      question: "¿Qué diferencia a esta plataforma de otras apps educativas?",
      answer: "Nuestra plataforma está diseñada para niños y niñas entre 4 y 10 años, con actividades adaptadas a cada etapa de desarrollo. La IA ajusta los contenidos según el ritmo, intereses y nivel de cada niño, sin importar la edad exacta.",
    },
    {
      question: "¿Puedo ver el progreso y participar como madre/padre?",
      answer: "Nuestra plataforma está diseñada para niños y niñas entre 4 y 10 años, con actividades adaptadas a cada etapa de desarrollo. La IA ajusta los contenidos según el ritmo, intereses y nivel de cada niño, sin importar la edad exacta.",
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
