/* estructura compartida con menú lateral para todas las vistas internas de los 7 integrantes */

import { Link, Outlet } from "react-router-dom";

export function DashboardLayout() {
    return (
        <div style={{ display: "flex", minHeight: "100vh" }}>
        <aside style={{ width: "240px", padding: "1rem", borderRight: "1px solid #ddd" }}>
            <h3>ICFECLOX</h3>
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <Link to="/simulacros">Simulacros</Link>
            <Link to="/resultados">Resultados e Historial</Link>
            <Link to="/tutor">Tutor IA 24/7</Link>
            <Link to="/vocacional">Test Vocacional</Link>
            <Link to="/comunidad">Comunidad y Ranking</Link>
            <Link to="/perfil">Mi Perfil</Link>
            <Link to="/admin">Panel Admin</Link>
            </nav>
        </aside>
        <main style={{ flex: 1, padding: "1.5rem" }}>
            <Outlet />
        </main>
        </div>
    );
}