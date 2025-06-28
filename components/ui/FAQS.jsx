import { useState } from "react";

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

  return (
    <div className="accordion-container">
      <h2 className="accordion-title">Preguntas Frecuentes</h2>
      {faqs.map((faq, index) => (
        <div className="accordion-item" key={index}>
          <button
            className={`accordion-trigger ${openIndex === index ? "open" : ""}`}
            onClick={() => toggle(index)}
          >
            <span>{faq.question}</span>
            <span className="arrow">{openIndex === index ? "▲" : "▼"}</span>
          </button>
          <div
            className={`accordion-content ${openIndex === index ? "open" : ""}`}
          >
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
