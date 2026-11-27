/* reguntas del test y catálogo de carreras para no tocar el
    mockData.js compartido y evitar conflictos de Git. */

export const PREGUNTAS_VOCACIONALES = [
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
        pregunta: "¿En cuál área del ICFES te sientes más cómodo y seguro?",
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
        { texto: "Diseñando software, máquinas o infraestructura tecnológica", area: "Ingeniería y Tecnología" },
        { texto: "En medios, educación, derecho, psicología o gestión cultural", area: "Humanidades y Comunicación" },
        { texto: "En hospitales, laboratorios clínicos o conservación ambiental", area: "Ciencias de la Salud y Naturales" },
        { texto: "En empresas, finanzas, mercadeo o consultoría estratégica", area: "Economía y Administración" },
        ],
    },
    {
        id: 4,
        pregunta: "Cuando trabajas en equipo en el colegio, ¿qué rol sueles asumir?",
        opciones: [
        { texto: "El que resuelve los problemas técnicos, cálculos o herramientas digitales", area: "Ingeniería y Tecnología" },
        { texto: "El que redacta el trabajo, prepara la exposición y comunica las ideas", area: "Humanidades y Comunicación" },
        { texto: "El que investiga a fondo los datos científicos y comprueba hipótesis", area: "Ciencias de la Salud y Naturales" },
        { texto: "El que coordina los tiempos, reparte tareas y organiza la entrega", area: "Economía y Administración" },
        ],
    },
    {
        id: 5,
        pregunta: "¿Qué tipo de impacto te gustaría generar con tu profesión?",
        opciones: [
        { texto: "Crear soluciones innovadoras mediante la tecnología y la ingeniería", area: "Ingeniería y Tecnología" },
        { texto: "Defender derechos, educar o transformar la cultura y la sociedad", area: "Humanidades y Comunicación" },
        { texto: "Mejorar la calidad de vida, la salud humana o proteger el medio ambiente", area: "Ciencias de la Salud y Naturales" },
        { texto: "Impulsar el desarrollo económico, crear empresa y generar empleo", area: "Economía y Administración" },
        ],
    },
    ];

    export const CARRERAS_POR_AREA = {
    "Ingeniería y Tecnología": {
        descripcion:
        "Tienes un pensamiento analítico y estructurado, ideal para diseñar soluciones tecnológicas, optimizar sistemas y resolver problemas complejos mediante la lógica y las matemáticas.",
        carreras: [
        "Ingeniería de Sistemas y Computación",
        "Ingeniería Industrial",
        "Ciencia de Datos e Inteligencia Artificial",
        "Ingeniería Civil",
        "Ingeniería Electrónica",
        "Desarrollo de Software",
        ],
        afinidadIcfes: "Matemáticas y Ciencias Naturales",
    },
    "Humanidades y Comunicación": {
        descripcion:
        "Destacas por tu capacidad expresiva, pensamiento crítico y empatía social, cualidades clave para liderar procesos educativos, jurídicos, comunicativos y culturales.",
        carreras: [
        "Derecho",
        "Comunicación Social y Periodismo",
        "Psicología",
        "Licenciatura en Lenguas Modernas",
        "Ciencia Política",
        "Diseño Gráfico y Multimedia",
        ],
        afinidadIcfes: "Lectura Crítica, Sociales e Inglés",
    },
    "Ciencias de la Salud y Naturales": {
        descripcion:
        "Posees vocación de servicio, rigor científico y curiosidad por comprender los seres vivos y el entorno natural para mejorar el bienestar humano y ambiental.",
        carreras: [
        "Medicina",
        "Enfermería",
        "Biología",
        "Química Farmacéutica",
        "Fisioterapia",
        "Ingeniería Ambiental",
        ],
        afinidadIcfes: "Ciencias Naturales y Matemáticas",
    },
    "Economía y Administración": {
        descripcion:
        "Tienes visión estratégica, liderazgo y orientación a resultados, habilidades fundamentales para gestionar organizaciones, analizar mercados y emprender proyectos.",
        carreras: [
        "Administración de Empresas",
        "Economía",
        "Contaduría Pública",
        "Negocios Internacionales",
        "Finanzas y Comercio Exterior",
        "Mercadeo y Publicidad",
        ],
        afinidadIcfes: "Matemáticas y Sociales y Ciudadanas",
    },
};