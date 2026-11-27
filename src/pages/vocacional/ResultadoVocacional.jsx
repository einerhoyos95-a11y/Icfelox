import { CARRERAS_POR_AREA } from "./vocacionalData";
import "./vocacional.css";

export function ResultadoVocacional({ areaGanadora, onReiniciar }) {
    const recomendacion = CARRERAS_POR_AREA[areaGanadora];

    return (
        <div className="vocacional-container">
        <span className="vocacional-eyebrow">DIAGNÓSTICO COMPLETADO</span>
        <h1 className="vocacional-title">Tu Perfil Vocacional</h1>
        <p className="vocacional-subtitle">
            Análisis basado en tus intereses y afinidad con las competencias del examen ICFES
        </p>

        <div className="vocacional-card">
            <div className="resultado-pill">Área Principal Recomendada</div>
            <h2 className="resultado-area-title">{areaGanadora}</h2>
            <p className="resultado-descripcion">{recomendacion.descripcion}</p>

            <div className="resultado-icfes-box">
            <strong>Áreas ICFES clave para potenciar:</strong> {recomendacion.afinidadIcfes}
            </div>

            <h3 style={{ fontSize: "1.05rem", color: "#e2e8f0", margin: "1.5rem 0 0.5rem 0" }}>
            Carreras universitarias recomendadas
            </h3>

            <div className="resultado-carreras-grid">
            {recomendacion.carreras.map((carrera) => (
                <div key={carrera} className="resultado-carrera-item">
                <span className="resultado-carrera-dot" />
                <span>{carrera}</span>
                </div>
            ))}
            </div>

            <div className="vocacional-actions">
            <button type="button" onClick={onReiniciar} className="vocacional-btn-secondary">
                Volver a presentar el test
            </button>
            </div>
        </div>
        </div>
    );
}