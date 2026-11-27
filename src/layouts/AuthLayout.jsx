/* estructura centrada para Login, Registro y Recuperar contraseña */

import { Outlet } from "react-router-dom";

export function AuthLayout() {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
        <div style={{ width: "100%", maxWidth: "420px", padding: "2rem", border: "1px solid #ddd", borderRadius: "8px" }}>
            <Outlet />
        </div>
        </div>
    );
}