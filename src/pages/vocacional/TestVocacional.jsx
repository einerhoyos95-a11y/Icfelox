import { useState } from "react";

const PREGUNTAS_VOCACIONALES = [
    {
        id: 1,
        pregunta: "¿Qué actividad disfrutas más en tu tiempo libre?",
        opciones: [
        { texto: "Resolver acertijos lógicos, programar o analizar datos", area: "Ingeniería y Tecnología" },
        { texto: "Leer, escribir ensayos, debatir o aprender idiomas", area: "Humanidades y Comunicación" },
        { texto: "Realizar experimentos, investigar fenómenos naturales o cuidar la salud", area: "Ciencias de la Salud y Naturales" },
        { texto: "Organizar proyectos, liderar grupos o emprender negocios", area: "Economía y Administración" },
        ],
    },
    {
        id: 2,
        pregunta: "¿En cuál área del ICFES te sientes más cómodo?",
        opciones: [
        { texto: "Matemáticas", area: "Ingeniería y Tecnología" },
        { texto: "Lectura Crítica e Inglés", area: "Humanidades y Comunicación" },
        { texto: "Ciencias Naturales", area: "Ciencias de la Salud y Naturales" },
        { texto: "Sociales y Ciudadanas", area: "Economía y Administración" },
        ],
    },
    {
        id: 3,
        pregunta: "¿Cómo te imaginas tu entorno laboral ideal?",
        opciones: [
        { texto: "Diseñando software, máquinas o infraestructura", area: "Ingeniería y Tecnología" },
        { texto: "En medios, educación, derecho o gestión cultural", area: "Humanidades y Comunicación" },
        { texto: "En hospitales, laboratorios o conservación ambiental", area: "Ciencias de la Salud y Naturales" },
        { texto: "En empresas, finanzas, mercadeo o consultoría", area: "Economía y Administración" },
        ],
    },
    ];

    const CARRERAS_POR_AREA = {
    "Ingeniería y Tecnología": {
        carreras: ["Ingeniería de Sistemas", "Ingeniería Industrial", "Ciencia de Datos", "Ingeniería Civil"],
        afinidadIcfes: "Matemáticas y Ciencias Naturales",
    },
    "Humanidades y Comunicación": {
        carreras: ["Derecho", "Comunicación Social", "Licenciatura en Lenguas", "Psicología"],
        afinidadIcfes: "Lectura Crítica, Sociales e Inglés",
    },
    "Ciencias de la Salud y Naturales": {
        carreras: ["Medicina", "Enfermería", "Biología", "Química Farmacéutica"],
        afinidadIcfes: "Ciencias Naturales y Matemáticas",
    },
    "Economía y Administración": {
        carreras: ["Administración de Empresas", "Economía", "Contaduría Pública", "Negocios Internacionales"],
        afinidadIcfes: "Matemáticas y Sociales y Ciudadanas",
    },
    };

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
        const areaGanadora = calcularAreaPrincipal();
        const recomendacion = CARRERAS_POR_AREA[areaGanadora];

        return (
        <div style={{ maxWidth: "650px", margin: "0 auto", padding: "1.5rem" }}>
            <h2>Resultado de tu Test Vocacional</h2>
            <div style={{ padding: "1.5rem", border: "1px solid #cbd5e1", borderRadius: "8px", marginTop: "1rem" }}>
            <p style={{ margin: 0, color: "#64748b" }}>Área profesional recomendada:</p>
            <h3 style={{ margin: "0.5rem 0", color: "#0f172a" }}>{areaGanadora}</h3>
            <p>
                <strong>Áreas ICFES clave para potenciar:</strong> {recomendacion.afinidadIcfes}
            </p>
            <h4>Carreras universitarias afines:</h4>
            <ul>
                {recomendacion.carreras.map((carrera) => (
                <li key={carrera}>{carrera}</li>
                ))}
            </ul>
            <button
                onClick={reiniciarTest}
                style={{ marginTop: "1rem", padding: "0.6rem 1.2rem", cursor: "pointer" }}
            >
                Volver a presentar el test
            </button>
            </div>
        </div>
        );
    }

    return (
        <div style={{ maxWidth: "650px", margin: "0 auto", padding: "1.5rem" }}>
        <h2>Test de Orientación Vocacional</h2>
        <p>
            Pregunta {pasoActual + 1} de {PREGUNTAS_VOCACIONALES.length} ({progreso}%)
        </p>

        <div style={{ background: "#e2e8f0", height: "8px", borderRadius: "4px", marginBottom: "1.5rem" }}>
            <div
            style={{
                width: `${progreso}%`,
                background: "#2563eb",
                height: "100%",
                borderRadius: "4px",
                transition: "width 0.3s",
            }}
            />
        </div>

        <div style={{ padding: "1.5rem", border: "1px solid #cbd5e1", borderRadius: "8px" }}>
            <h3>{pregunta.pregunta}</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "1rem" }}>
            {pregunta.opciones.map((opcion, idx) => {
                const seleccionada = respuestas[pregunta.id] === opcion.area;
                return (
                <button
                    key={idx}
                    onClick={() => seleccionarOpcion(opcion.area)}
                    style={{
                    textAlign: "left",
                    padding: "0.85rem 1rem",
                    borderRadius: "6px",
                    border: seleccionada ? "2px solid #2563eb" : "1px solid #cbd5e1",
                    background: seleccionada ? "#eff6ff" : "#ffffff",
                    cursor: "pointer",
                    }}
                >
                    {opcion.texto}
                </button>
                );
            })}
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1.5rem" }}>
            <button
                disabled={pasoActual === 0}
                onClick={() => setPasoActual(pasoActual - 1)}
                style={{ padding: "0.6rem 1.2rem", cursor: pasoActual === 0 ? "not-allowed" : "pointer" }}
            >
                Anterior
            </button>
            <button
                disabled={!respuestas[pregunta.id]}
                onClick={siguientePaso}
                style={{
                padding: "0.6rem 1.2rem",
                background: respuestas[pregunta.id] ? "#2563eb" : "#94a3b8",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: respuestas[pregunta.id] ? "pointer" : "not-allowed",
                }}
            >
                {pasoActual === PREGUNTAS_VOCACIONALES.length - 1 ? "Ver Resultado" : "Siguiente"}
            </button>
            </div>
        </div>
        </div>
    );
}