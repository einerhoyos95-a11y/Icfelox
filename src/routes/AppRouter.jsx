/* para que use ambos layouts desde el inicio: */

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthLayout } from "../layouts/AuthLayout";
import { DashboardLayout } from "../layouts/DashboardLayout";

export function AppRouter() {
    return (
        <BrowserRouter>
        <Routes>
            {/* VISTAS PÚBLICAS / AUTH (Integrante 1) */}
            <Route element={<AuthLayout />}>
            <Route path="/login" element={<h2>Vista Login</h2>} />
            <Route path="/registro" element={<h2>Vista Registro</h2>} />
            </Route>

            {/* VISTAS INTERNAS CON MENÚ (Integrantes 1 al 7) */}
            <Route element={<DashboardLayout />}>
            <Route path="/" element={<h2>Bienvenido a ICFECLOX</h2>} />
            {/* RUTAS INTEGRANTE 1: PERFIL */}
            {/* RUTAS INTEGRANTE 2: ADMIN USUARIOS Y REPORTES */}
            {/* RUTAS INTEGRANTE 3: BANCO DE PREGUNTAS */}
            {/* RUTAS INTEGRANTE 4: SIMULACROS */}
            {/* RUTAS INTEGRANTE 5: RESULTADOS E HISTORIAL */}
            {/* RUTAS INTEGRANTE 6: TUTOR IA */}
            {/* RUTAS INTEGRANTE 7: VOCACIONAL Y COMUNIDAD */}
            </Route>

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        </BrowserRouter>
    );
}