export default  function QuienesSomos() {
  return (
    <section id="about" className="section py-16 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-4">
        <div className="md:w-1/2">
          <img
            src="/images/espacio.webp"
            alt="Niños aprendiendo felices"
            className="w-full rounded-2xl shadow-md"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">¿Quiénes somos?</h2>
          <p className="text-lg text-gray-700">
            Visionarios es una plataforma educativa diseñada para motivar a los niños mediante un
            aprendizaje progresivo y personalizado. Combinamos tecnología, emoción y juego para
            potenciar el desarrollo temprano.
          </p>
        </div>
      </div>
    </section>
  );
}