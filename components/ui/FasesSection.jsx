export default function FasesSection() {
  return (
    <section id="phases" className="section">
      <h2>Fases</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '1.5rem',
        marginTop: '2rem'
      }}>
        <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
          <h3>Fase 0 · Lanzamiento</h3>
          <p>Versión fundacional...</p>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
          <h3>Fase I · Exploración</h3>
          <p>Navegación por niveles...</p>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
          <h3>Fase II · Adaptación IA</h3>
          <p>Contenido adaptativo</p>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
          <h3>Fase III · Interacción Emocional</h3>
          <p>Personaje interactivo</p>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
          <h3>Fase IV · Participación Familiar</h3>
          <p>Panel parental completo</p>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
          <h3>Fase V · Comunidad</h3>
          <p>Contenido compartido</p>
        </div>
      </div>
    </section>
  );
}