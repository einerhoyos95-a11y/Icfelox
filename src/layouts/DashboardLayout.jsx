import { Link, Outlet, useLocation } from "react-router-dom";

const MENU_ITEMS = [
    { path: "/simulacros", label: "Simulacros" },
    { path: "/resultados", label: "Resultados e Historial" },
    { path: "/tutor", label: "Tutor IA 24/7" },
    { path: "/vocacional", label: "Test Vocacional" },
    { path: "/comunidad", label: "Comunidad y Ranking" },
    { path: "/admin", label: "Panel Admin" },
    ];

    export function DashboardLayout() {
    const location = useLocation();

    return (
        <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#0f0e17", color: "#f8fafc" }}>
        <aside
            style={{
            width: "260px",
            backgroundColor: "#141224",
            borderRight: "1px solid #282542",
            padding: "1.75rem 1.25rem",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            }}
        >
            <div style={{ fontSize: "1.25rem", fontWeight: 800, letterSpacing: "0.05em", color: "#ffffff" }}>
            ICFECLOX
            </div>

            <nav style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <span
                style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                color: "#64748b",
                marginBottom: "0.4rem",
                paddingLeft: "0.75rem",
                }}
            >
                NAVEGACIÓN
            </span>

            {MENU_ITEMS.map((item) => {
                const activo = location.pathname === item.path;
                return (
                <Link
                    key={item.path}
                    to={item.path}
                    style={{
                    padding: "0.75rem 1rem",
                    borderRadius: "12px",
                    textDecoration: "none",
                    fontSize: "0.92rem",
                    fontWeight: activo ? 700 : 500,
                    backgroundColor: activo ? "rgba(56, 176, 0, 0.16)" : "#1b1830",
                    color: activo ? "#4ade80" : "#cbd5e1",
                    border: activo ? "1px solid rgba(74, 222, 128, 0.35)" : "1px solid transparent",
                    transition: "all 0.2s ease",
                    }}
                >
                    {item.label}
                </Link>
                );
            })}
            </nav>
        </aside>

        <main style={{ flex: 1, overflowY: "auto" }}>
            <Outlet />
        </main>
        </div>
    );
}