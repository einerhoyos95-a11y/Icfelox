import { useState } from "react";
import "./Registro.css";

function Registro({ onNavigateToLogin }) {
  // Estados para los campos del formulario
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [rol, setRol] = useState("student");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Estados para mostrar/ocultar contraseñas
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Estados para mensajes de error y confirmación visual en interfaz
  const [errores, setErrores] = useState({});
  const [mensajeEstado, setMensajeEstado] = useState("");

  // Expresión regular básica para validar formato de correo electrónico
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validarFormulario = () => {
    const nuevosErrores = {};

    if (!nombre.trim()) {
      nuevosErrores.nombre = "El nombre completo es obligatorio.";
    } else if (nombre.trim().length < 3) {
      nuevosErrores.nombre = "El nombre debe tener al menos 3 caracteres.";
    }

    if (!correo.trim()) {
      nuevosErrores.correo = "El correo electrónico es obligatorio.";
    } else if (!emailRegex.test(correo.trim())) {
      nuevosErrores.correo = "Ingresa un correo electrónico válido (ej. usuario@correo.com).";
    }

    if (!password) {
      nuevosErrores.password = "La contraseña es obligatoria.";
    } else if (
      password.length < 6 ||
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password)
    ) {
      nuevosErrores.password =
        "Mínimo 6 caracteres, una letra mayúscula y una minúscula.";
    }

    if (!confirmPassword) {
      nuevosErrores.confirmPassword = "Debes confirmar tu contraseña.";
    } else if (password !== confirmPassword) {
      nuevosErrores.confirmPassword = "Las contraseñas no coinciden.";
    }

    return nuevosErrores;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMensajeEstado("");

    const erroresEncontrados = validarFormulario();
    setErrores(erroresEncontrados);

    if (Object.keys(erroresEncontrados).length > 0) {
      return;
    }

    // Objeto listo para enviarse a una API / backend cuando esté disponible
    const datosRegistro = {
      nombre: nombre.trim(),
      correo: correo.trim(),
      rol,
      password,
    };

    // Sin backend conectado aún: dejamos preparado el payload sin guardar en BD real
    console.log("Datos listos para enviar al backend de Icfelox:", datosRegistro);
    setMensajeEstado(
      "Formulario validado correctamente. Listo para conectar con el servicio de registro."
    );
  };

  const limpiarErrorCampo = (campo) => {
    if (errores[campo]) {
      setErrores((prev) => {
        const copia = { ...prev };
        delete copia[campo];
        return copia;
      });
    }
    if (mensajeEstado) {
      setMensajeEstado("");
    }
  };

  return (
    <div className="reg-page-wrapper">
      <div className="reg-container">
        <div className="reg-view-panel">
          {/* Panel izquierdo de marca ICFELOX */}
          <div className="reg-brand-panel">
            <div className="reg-logo-wrapper">
              <h1>ICFELOX</h1>
              <p className="reg-tagline">CONÉCTATE, APRENDE, CREA</p>

              {/* Alternativa visual temporal mediante CSS mientras se agregan fotos en src/assets/ */}
              <div
                className="reg-visual-placeholder"
                aria-hidden="true"
                title="Espacio visual temporal (reemplazar por imagen en src/assets/)"
              >
                <span className="reg-visual-dot" />
                <span>Espacio visual temporal ICFELOX</span>
              </div>
            </div>
          </div>

          {/* Panel derecho con formulario de registro */}
          <div className="reg-form-panel">
            <h2>Crear cuenta</h2>
            <p className="reg-subtitle">
              Regístrate para comenzar en tu plataforma de estudio
            </p>

            {/* Selección de rol */}
            <div className="reg-role-selection">
              <label
                className={`reg-role-card ${rol === "admin" ? "reg-role-selected" : ""}`}
                htmlFor="reg-role-admin"
              >
                <input
                  type="radio"
                  id="reg-role-admin"
                  name="reg-role"
                  value="admin"
                  checked={rol === "admin"}
                  onChange={(e) => setRol(e.target.value)}
                />
                <div className="reg-role-name">Administrador</div>
                <div className="reg-role-desc">Gestión total</div>
              </label>

              <label
                className={`reg-role-card ${rol === "student" ? "reg-role-selected" : ""}`}
                htmlFor="reg-role-student"
              >
                <input
                  type="radio"
                  id="reg-role-student"
                  name="reg-role"
                  value="student"
                  checked={rol === "student"}
                  onChange={(e) => setRol(e.target.value)}
                />
                <div className="reg-role-name">Estudiante</div>
                <div className="reg-role-desc">Ver mis pruebas</div>
              </label>
            </div>

            <form id="registroForm" onSubmit={handleSubmit} noValidate>
              {/* Nombre completo */}
              <div className="reg-input-group">
                <label htmlFor="reg-nombre">Nombre completo</label>
                <input
                  type="text"
                  id="reg-nombre"
                  className={errores.nombre ? "reg-input-error" : ""}
                  placeholder="Ingresa tu nombre completo"
                  value={nombre}
                  onChange={(e) => {
                    setNombre(e.target.value);
                    limpiarErrorCampo("nombre");
                  }}
                />
                {errores.nombre && (
                  <p className="reg-error-message">{errores.nombre}</p>
                )}
              </div>

              {/* Correo electrónico */}
              <div className="reg-input-group">
                <label htmlFor="reg-correo">Correo electrónico</label>
                <input
                  type="email"
                  id="reg-correo"
                  className={errores.correo ? "reg-input-error" : ""}
                  placeholder="ejemplo@correo.com"
                  value={correo}
                  onChange={(e) => {
                    setCorreo(e.target.value);
                    limpiarErrorCampo("correo");
                  }}
                />
                {errores.correo && (
                  <p className="reg-error-message">{errores.correo}</p>
                )}
              </div>

              {/* Contraseña */}
              <div className="reg-input-group">
                <label htmlFor="reg-password">Contraseña</label>
                <div className="reg-password-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="reg-password"
                    className={errores.password ? "reg-input-error" : ""}
                    placeholder="Crea una contraseña"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      limpiarErrorCampo("password");
                    }}
                  />
                  <button
                    type="button"
                    className="reg-toggle-password"
                    aria-label="Mostrar u ocultar contraseña"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? "🔒" : "🔓"}
                  </button>
                </div>
                <small className="reg-password-info">
                  Mínimo 6 caracteres, una mayúscula y una minúscula.
                </small>
                {errores.password && (
                  <p className="reg-error-message">{errores.password}</p>
                )}
              </div>

              {/* Confirmar contraseña */}
              <div className="reg-input-group">
                <label htmlFor="reg-confirm-password">Confirmar contraseña</label>
                <div className="reg-password-wrapper">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="reg-confirm-password"
                    className={errores.confirmPassword ? "reg-input-error" : ""}
                    placeholder="Confirma tu contraseña"
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                      limpiarErrorCampo("confirmPassword");
                    }}
                  />
                  <button
                    type="button"
                    className="reg-toggle-password"
                    aria-label="Mostrar u ocultar confirmación de contraseña"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                  >
                    {showConfirmPassword ? "🔒" : "🔓"}
                  </button>
                </div>
                {errores.confirmPassword && (
                  <p className="reg-error-message">{errores.confirmPassword}</p>
                )}
              </div>

              {mensajeEstado && (
                <p className="reg-status-message">{mensajeEstado}</p>
              )}

              <button type="submit" className="reg-btn-submit">
                Registrarse
              </button>

              <div className="reg-form-footer">
                <p>
                  ¿Ya tienes cuenta?{" "}
                  <a
                    href="#login"
                    className="reg-link-highlight"
                    onClick={(e) => {
                      if (onNavigateToLogin) {
                        e.preventDefault();
                        onNavigateToLogin();
                      }
                    }}
                  >
                    Iniciar sesión
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registro;