import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthLayout } from "../layouts/AuthLayout";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { Login } from "../pages/auth/Login";
import { AdminUsuarios } from "../pages/admin/AdminUsuarios";
import { Simulacros } from "../pages/simulacros/Simulacros";
import { Resultados } from "../pages/resultados/Resultados";
import { TutorIA } from "../pages/tutor/TutorIA";
import { TestVocacional } from "../pages/vocacional/TestVocacional";
import { Comunidad } from "../pages/comunidad/Comunidad";

export function AppRouter() {
    return (
        <BrowserRouter>
        <Routes>
            {/* VISTAS PÚBLICAS / AUTH */}
            <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<h2>Vista Registro</h2>} />
            </Route>

            {/* VISTAS INTERNAS CON MENÚ */}
            <Route element={<DashboardLayout />}>
            <Route path="/" element={<h2>Bienvenido a ICFECLOX</h2>} />
            <Route path="/admin" element={<AdminUsuarios />} />
            <Route path="/simulacros" element={<Simulacros />} />
            <Route path="/resultados" element={<Resultados />} />
            <Route path="/tutor" element={<TutorIA />} />
            <Route path="/vocacional" element={<TestVocacional />} />
            <Route path="/comunidad" element={<Comunidad />} />
            </Route>

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        </BrowserRouter>
    );
}