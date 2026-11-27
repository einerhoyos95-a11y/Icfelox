import { useState } from 'react';
import './Dashboard.css';

const navigationItems = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'puntajes y promedios', label: 'Puntajes y Promedios' },
  { id: 'simulacros', label: 'Simulacros' },
  { id: 'ia', label: 'Asistente IA' },
  { id: 'reportes', label: 'Reportes' },
];

function Dasboard() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [perfilAbierto, setPerfilAbierto] = useState(false);
  const [vistaActiva, setVistaActiva] = useState('inicio');

  const seleccionarVista = (vista) => {
    setVistaActiva(vista);
    setMenuAbierto(false);
  };

  return (
    <div className="dashboard-page">
      <button
        className={`drawer-backdrop${menuAbierto ? ' visible' : ''}`}
        type="button"
        aria-label="Cerrar menú"
        tabIndex={menuAbierto ? 0 : -1}
        onClick={() => setMenuAbierto(false)}
      />

      <aside
        className={`sidebar${menuAbierto ? ' sidebar-open' : ''}`}
        id="student-navigation"
        aria-label="Menú principal"
        aria-hidden={!menuAbierto}
        inert={!menuAbierto}
      >
        <div className="sidebar-brand">
          <span className="brand-icon" aria-hidden="true">✦</span>
          <div>
            <h2>ICFELOX</h2>
            <span>estudiante</span>
          </div>
          <button
            className="icon-button drawer-close"
            type="button"
            aria-label="Cerrar menú"
            onClick={() => setMenuAbierto(false)}
          >
            ×
          </button>
        </div>

        <div className="nav-title">MENÚ PRINCIPAL</div>
        <nav className="navigation">
          {navigationItems.map((item) => (
            <button
              className={`menu-item${vistaActiva === item.id ? ' active' : ''}`}
              type="button"
              key={item.id}
              aria-current={vistaActiva === item.id ? 'page' : undefined}
              onClick={() => seleccionarVista(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      <main className="main-content">
        <header className="header">
          <div className="header-start">
            <button
              className="icon-button menu-toggle"
              type="button"
              aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
              aria-controls="student-navigation"
              aria-expanded={menuAbierto}
              onClick={() => setMenuAbierto(!menuAbierto)}
            >
              <span />
              <span />
              <span />
            </button>
            <input
              className="search-box"
              type="search"
              placeholder="Buscar recursos..."
              aria-label="Buscar recursos"
            />
          </div>

          <div className="profile-wrap">
            <button
              className="user-box"
              type="button"
              aria-expanded={perfilAbierto}
              aria-controls="profile-menu"
              onClick={() => setPerfilAbierto(!perfilAbierto)}
            >
              <span className="avatar">JC</span>
              <span className="user-details">
                <strong>Juan Carlos</strong>
                <span>Estudiante</span>
              </span>
              <span className="profile-caret" aria-hidden="true">⌄</span>
            </button>
            {perfilAbierto && (
              <div className="profile-menu" id="profile-menu">
                <button type="button" className="profile-action">Configuración</button>
                <button type="button" className="profile-action logout-btn">Cerrar sesión</button>
              </div>
            )}
          </div>
        </header>

        <section className="banner" aria-labelledby="welcome-title">
          <div>
            <h1 id="welcome-title">¡Hola, Juan! <span aria-hidden="true">👋</span></h1>
            <p>Estás a 45 días del ICFES. Tu plan sugiere repasar <strong>matemáticas</strong> hoy.</p>
          </div>
          <button className="btn-primary" type="button" onClick={() => seleccionarVista('ia')}>
            Ir al Asistente IA
          </button>
        </section>

        <section className="stats-grid" aria-label="Resumen de progreso">
          <article className="card stat">
            <span className="badge">+12 pts</span>
            <p>PUNTAJE ESTIMADO</p>
            <h2>340 <small>/ 500</small></h2>
          </article>
          <article className="card stat">
            <p>SIMULACROS</p>
            <h2>1 <small>/ 5</small></h2>
          </article>
          <article className="card stat">
            <p>HORAS DE ESTUDIO</p>
            <h2>24.5 <small>hrs</small></h2>
          </article>
          <article className="card stat">
            <p>ÁREA MÁS FUERTE</p>
            <h2 className="strong-area">Lectura Crítica</h2>
          </article>
        </section>

        <section className="dashboard-lower">
          <article className="card chart-card">
            <div className="card-header">
              <h2>Desempeño por Área</h2>
              <button className="text-link" type="button">Ver historial <span aria-hidden="true">→</span></button>
            </div>
            <div className="chart" role="img" aria-label="Gráfico de desempeño: Lectura 82, Matemáticas 68, Sociales 74, Ciencias 61 e Inglés 78 por ciento">
              <div className="chart-y-labels" aria-hidden="true">
                <span>100</span><span>75</span><span>50</span><span>25</span><span>0</span>
              </div>
              <svg className="chart-plot" viewBox="0 0 600 220" preserveAspectRatio="none" aria-hidden="true">
                <line x1="0" y1="10" x2="600" y2="10" />
                <line x1="0" y1="60" x2="600" y2="60" />
                <line x1="0" y1="110" x2="600" y2="110" />
                <line x1="0" y1="160" x2="600" y2="160" />
                <line x1="0" y1="210" x2="600" y2="210" />
                <polygon className="chart-area" points="20,46 160,74 300,62 440,88 580,54 580,210 20,210" />
                <polyline className="chart-line" points="20,46 160,74 300,62 440,88 580,54" />
                <circle cx="20" cy="46" r="5" />
                <circle cx="160" cy="74" r="5" />
                <circle cx="300" cy="62" r="5" />
                <circle cx="440" cy="88" r="5" />
                <circle cx="580" cy="54" r="5" />
              </svg>
              <div className="chart-x-labels" aria-hidden="true">
                <span>Lectura</span><span>Matemáticas</span><span>Sociales</span><span>Ciencias</span><span>Inglés</span>
              </div>
            </div>
          </article>

          <div className="side">
            <article className="card action">
              <div className="action-icon" aria-hidden="true">✎</div>
              <h2>Simulacros</h2>
              <p>Continúa con tu plan de pruebas</p>
              <button className="text-link" type="button" onClick={() => seleccionarVista('simulacros')}>
                Ver pruebas <span aria-hidden="true">→</span>
              </button>
            </article>
            <article className="card action">
              <div className="action-icon action-icon-purple" aria-hidden="true">✧</div>
              <h2>Test Vocacional</h2>
              <p>Descubre carreras afines</p>
              <button className="text-link" type="button" onClick={() => seleccionarVista('orientacion')}>
                Continuar test <span aria-hidden="true">→</span>
              </button>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dasboard;
