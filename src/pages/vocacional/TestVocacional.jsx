import { useState } from "react";
import { PREGUNTAS_VOCACIONALES } from "./vocacionalData";
import { ResultadoVocacional } from "./ResultadoVocacional";
import "./vocacional.css";

const LETRAS = ["A", "B", "C", "D"];

export function TestVocacional() {
    const [pasoActual, setPasoActual] = useState(0);
    const [respuestas, setRespuestas] = useState({});
    const [finalizado, setFinalizado] = useState(false);

    const pregunta = PREGUNTAS_VOCACIONALES[pasoActual];
    const progreso = Math.round(((pasoActual + 1) / PREGUNTAS_VOCACIONALES.length) * 100);

    const seleccionarOpcion = (area) => {
        setRespuestas({ ...respuestas, [pregunta.id]: area });
    };

    const siguientePaso = () => {
        if (pasoActual < PREGUNTAS_VOCACIONALES.length - 1) {
        setPasoActual(pasoActual + 1);
        } else {
        setFinalizado(true);
        }
    };

    const reiniciarTest = () => {
        setRespuestas({});
        setPasoActual(0);
        setFinalizado(false);
    };

    const calcularAreaPrincipal = () => {
        const conteo = {};
        Object.values(respuestas).forEach((area) => {
        conteo[area] = (conteo[area] || 0) + 1;
        });
        return Object.entries(conteo).sort((a, b) => b[1] - a[1])[0]?.[0] || "Ingeniería y Tecnología";
    };

    if (finalizado) {
        return <ResultadoVocacional areaGanadora={calcularAreaPrincipal()} onReiniciar={reiniciarTest} />;
    }

    return (
        <div className="vocacional-container">
        <span className="vocacional-eyebrow">ORIENTACIÓN PROFESIONAL</span>
        <h1 className="vocacional-title">Test Vocacional</h1>
        <p className="vocacional-subtitle">
            Descubre las carreras universitarias más afines a tus habilidades y resultados ICFES
        </p>

        <div className="vocacional-progress-header">
            <span>
            Pregunta {pasoActual + 1} de {PREGUNTAS_VOCACIONALES.length}
            </span>
            <span style={{ color: "#4ade80", fontWeight: 700 }}>{progreso}% completado</span>
        </div>

        <div className="vocacional-progress-track">
            <div className="vocacional-progress-fill" style={{ width: `${progreso}%` }} />
        </div>

        <div className="vocacional-card">
            <h2 className="vocacional-question">{pregunta.pregunta}</h2>

            <div className="vocacional-options">
            {pregunta.opciones.map((opcion, idx) => {
                const seleccionada = respuestas[pregunta.id] === opcion.area;
                return (
                <button
                    key={idx}
                    type="button"
                    onClick={() => seleccionarOpcion(opcion.area)}
                    className={`vocacional-option-btn ${seleccionada ? "selected" : ""}`}
                >
                    <span className="vocacional-option-badge">{LETRAS[idx]}</span>
                    <span>{opcion.texto}</span>
                </button>
                );
            })}
            </div>

            <div className="vocacional-actions">
            <button
                type="button"
                disabled={pasoActual === 0}
                onClick={() => setPasoActual(pasoActual - 1)}
                className="vocacional-btn-secondary"
            >
                Anterior
            </button>

            <button
                type="button"
                disabled={!respuestas[pregunta.id]}
                onClick={siguientePaso}
                className="vocacional-btn-primary"
            >
                {pasoActual === PREGUNTAS_VOCACIONALES.length - 1 ? "Ver Resultado" : "Siguiente"}
            </button>
            </div>
        </div>
        </div>
    );
}