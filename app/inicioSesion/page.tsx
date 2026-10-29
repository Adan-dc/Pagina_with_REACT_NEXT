
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Usuario = {
    id: string;
    nombreCompleto: string;
    correo: string;
    tipo: string;
    rol: string;
    contrasena: string;
};

export default function IniciarSesion() {
    const router = useRouter();

    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [error, setError] = useState("");
    const [cargando, setCargando] = useState(false);

    async function ingresar(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        setError("");
        setCargando(true);

        try {
            const respuesta = await fetch("http://localhost:3001/usuarios");

            if (!respuesta.ok) {
                throw new Error("Error al consultar usuarios");
            }

            const usuarios: Usuario[] = await respuesta.json();

            const usuario = usuarios.find(
                (item) =>
                    item.correo.toLowerCase() === correo.trim().toLowerCase() &&
                    item.contrasena === contrasena
            );

            if (!usuario) {
                setError("Correo o contraseña incorrectos.");
                return;
            }

            if (usuario.rol === "ADMINISTRADOR") {
                router.push("/dashboard");
            } else if (usuario.rol === "CLIENTE") {
                router.push("/");
            } else {
                setError("Este usuario no tiene acceso al administrador.");
            }

        } catch {
            setError("No se pudo conectar con la API.");
        } finally {
            setCargando(false);
        }
    }

    return (
        <main className="InicioSesion">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link href="/" className="navbar-brand fw-bold">
                        Botillería J&C
                    </Link>

                    <div className="d-flex">
                        <Link href="/" className="btn btn-outline-primary">
                            Volver a la tienda
                        </Link>
                    </div>
                </div>
            </nav>

            <div className="container mt-5 pb-5">
                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <div className="card shadow-sm">
                            <div className="card-body row p-4">

                                <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center">
                                    <div className="text-center">
                                        <h3 className="fw-bold mb-3">
                                            Bienvenido a J&C
                                        </h3>
                                        <p className="text-muted">
                                            Ingresa con tu cuenta para acceder
                                            a las funciones correspondientes.
                                        </p>
                                        <div className="display-1">
                                            🛒
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <h2 className="mb-4 text-center">
                                        Iniciar Sesión
                                    </h2>

                                    {error && (
                                        <div className="alert alert-danger" role="alert">
                                            {error}
                                        </div>
                                    )}

                                    <form onSubmit={ingresar}>
                                        <div className="mb-3">
                                            <label
                                                htmlFor="correo"
                                                className="form-label"
                                            >
                                                Correo electrónico
                                            </label>

                                            <input
                                                type="email"
                                                className="form-control"
                                                id="correo"
                                                placeholder="Ingresa tu correo"
                                                value={correo}
                                                onChange={(evento) =>
                                                    setCorreo(evento.target.value)
                                                }
                                                required
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label
                                                htmlFor="contrasena"
                                                className="form-label"
                                            >
                                                Contraseña
                                            </label>

                                            <input
                                                type="password"
                                                className="form-control"
                                                id="contrasena"
                                                placeholder="Ingresa tu contraseña"
                                                value={contrasena}
                                                onChange={(evento) =>
                                                    setContrasena(evento.target.value)
                                                }
                                                required
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="btn btn-primary w-100"
                                            disabled={cargando}
                                        >
                                            <strong>
                                                {cargando
                                                    ? "VERIFICANDO..."
                                                    : "INICIAR SESIÓN"}
                                            </strong>
                                        </button>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
