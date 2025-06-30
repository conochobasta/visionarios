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
      question: "¿Qué es Estrategas del Futuro?",
      answer:
        "Es una propuesta educativa premium diseñada para potenciar el pensamiento estratégico en la infancia.",
    },
    {
      question: "¿Cuál es la edad recomendada?",
      answer:
        "Está dirigido a niños de 3 a 6 años, en su etapa más receptiva al aprendizaje.",
    },
    {
      question: "¿Cuándo estará disponible?",
      answer: "Durante el lanzamiento exclusivo de preventa en 2025.",
    },
  ];

  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="accordion-container max-w-3xl mx-auto px-4 py-16"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <h2 className="accordion-title text-3xl font-bold text-center text-white mb-10">
        Preguntas Frecuentes
      </h2>
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
  );
}
