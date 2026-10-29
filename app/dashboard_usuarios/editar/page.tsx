"use client";
import { ChangeEvent, useEffect, useState, type FormEvent } from "react";

interface Usuario {
    id: string;
    run?: string;
    nombre?: string;
    apellidos?: string;
    nombreCompleto?: string;
    correo: string;
    fechaNacimiento?: string;
    tipo: "CLIENTE" | "TRABAJADOR";
    rol?: "CLIENTE" | "VENDEDOR" | "ADMINISTRADOR";
    calle?: string;
    departamento?: string;
    region?: string;
    comuna?: string;
    indicaciones?: string;
}

interface FormularioUsuario {
    run: string;
    nombre: string;
    apellidos: string;
    correo: string;
    fechaNacimiento: string;
    tipo: "CLIENTE" | "TRABAJADOR";
    rol: "CLIENTE" | "VENDEDOR" | "ADMINISTRADOR";
    calle: string;
    departamento: string;
    region: string;
    comuna: string;
    indicaciones: string;
}

const API_URL =
    process.env.NEXT_PUBLIC_API_URL ??
    "http://localhost:3001";

const formularioInicial: FormularioUsuario = {
    run: "",
    nombre: "",
    apellidos: "",
    correo: "",
    fechaNacimiento: "",
    tipo: "CLIENTE",
    rol: "CLIENTE",
    calle: "",
    departamento: "",
    region: "",
    comuna: "",
    indicaciones: "",
};

export default function Dashboard_Usuario_Editar() {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [usuarioId, setUsuarioId] = useState("");
    const [formulario, setFormulario] =
        useState<FormularioUsuario>(formularioInicial);

    const [cargando, setCargando] = useState(true);
    const [guardando, setGuardando] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        async function cargarUsuarios() {
            try {
                const respuesta = await fetch(`${API_URL}/usuarios`);

                if (!respuesta.ok) {
                    throw new Error("No se pudieron cargar los usuarios");
                }

                const datos: Usuario[] = await respuesta.json();
                setUsuarios(datos);
            } catch (error) {
                console.error(error);
                setError("No fue posible conectarse con la API");
            } finally {
                setCargando(false);
            }
        }

        cargarUsuarios();
    }, []);

    function seleccionarUsuario(
        evento: ChangeEvent<HTMLSelectElement>
    ) {
        const idSeleccionado = evento.target.value;
        setUsuarioId(idSeleccionado);

        const usuarioEncontrado = usuarios.find(
            (usuario) => usuario.id === idSeleccionado
        );

        if (!usuarioEncontrado) {
            setFormulario(formularioInicial);
            return;
        }

        const partesNombre =
            usuarioEncontrado.nombreCompleto?.split(" ") ?? [];

        setFormulario({
            run: usuarioEncontrado.run ?? "",
            nombre:
                usuarioEncontrado.nombre ??
                partesNombre[0] ??
                "",
            apellidos:
                usuarioEncontrado.apellidos ??
                partesNombre.slice(1).join(" "),
            correo: usuarioEncontrado.correo,
            fechaNacimiento:
                usuarioEncontrado.fechaNacimiento ?? "",
            tipo: usuarioEncontrado.tipo,
            rol:
                usuarioEncontrado.rol ??
                (usuarioEncontrado.tipo === "CLIENTE"
                    ? "CLIENTE"
                    : "VENDEDOR"),
            calle: usuarioEncontrado.calle ?? "",
            departamento: usuarioEncontrado.departamento ?? "",
            region: usuarioEncontrado.region ?? "",
            comuna: usuarioEncontrado.comuna ?? "",
            indicaciones: usuarioEncontrado.indicaciones ?? "",
        });

        setError("");
    }

    function cambiarCampo(
        evento: ChangeEvent<
            HTMLInputElement |
            HTMLSelectElement |
            HTMLTextAreaElement
        >
    ) {
        const { name, value } = evento.target;

        setFormulario((formularioAnterior) => ({
            ...formularioAnterior,
            [name]: value,
        }));
    }

    async function handleGuardar(
        evento: FormEvent<HTMLFormElement>
    ) {
        evento.preventDefault();

        if (!usuarioId) {
            alert("Seleccione el usuario que desea editar");
            return;
        }

        setGuardando(true);
        setError("");

        const datosActualizados = {
            ...formulario,
            nombreCompleto:
                `${formulario.nombre} ${formulario.apellidos}`.trim(),
        };
        try {
            const respuesta = await fetch(
                `${API_URL}/usuarios/${usuarioId}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(datosActualizados),
                }
            );

            if (!respuesta.ok) {
                throw new Error("No se pudo editar el usuario");
            }

            const usuarioActualizado: Usuario =
                await respuesta.json();

            setUsuarios((usuariosAnteriores) =>
                usuariosAnteriores.map((usuario) =>
                    usuario.id === usuarioActualizado.id
                        ? usuarioActualizado
                        : usuario
                )
            );

            alert("Se ha editado correctamente el usuario");
        } catch (error) {
            console.error(error);
            setError("No fue posible editar el usuario");
        } finally {
            setGuardando(false);
        }
    }


    return (
        <div className="Dashboard">
            <header className="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow" data-bs-theme="dark">
                <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white" href="/dashboard">
                    Company name
                </a>
            </header>



            <div className="container-fluid">
                <div className="row">
                    <aside className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
                        <div className="offcanvas-md offcanvas-start bg-body-tertiary" tabIndex={-1} id="sidebarMenu"
                            aria-labelledby="sidebarMenuLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="sidebarMenuLabel">Company name</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                                    data-bs-target="#sidebarMenu" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                                <ul className="nav flex-column">
                                    <li className="nav-item mx-2">
                                        <a href="/dashboard" className="nav-link nav-menu d-flex gap-2">
                                            <i className="bi bi-house-fill"></i>
                                            Dashboard
                                        </a>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <a className="nav-link nav-menu d-flex gap-2" href="/admin/ordenes">
                                            <i className="bi bi-file-earmark"></i>
                                            Ordenes
                                        </a>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <a className="nav-link nav-menu d-flex gap-2" href="/dashboard_productos">
                                            <i className="bi bi-cart"></i>
                                            Productos
                                        </a>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <a className="nav-link nav-menu d-flex gap-2" href="/dashboard_categoria">
                                            <i className="bi bi-list-ul"></i>
                                            Categorías
                                        </a>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <a className="nav-link nav-menu d-flex gap-2 nav-active" href="/dashboard_usuarios">
                                            <i className="bi bi-people"></i>
                                            Usuarios
                                        </a>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <a className="nav-link nav-menu d-flex gap-2" href="/admin/reportes">
                                            <i className="bi bi-graph-up"></i>
                                            Reportes
                                        </a>
                                    </li>
                                </ul>

                                <hr className="my-3" />

                                <ul className="nav flex-column mb-auto">
                                    <li className="nav-item mx-2">
                                        <a className="nav-link nav-menu d-flex gap-2" href="/admin/perfil">
                                            <i className="bi bi-person-circle"></i>
                                            Perfil
                                        </a>
                                    </li>
                                </ul>

                                <hr className="my-3" />


                                <ul className="nav flex-column mb-auto">
                                    <li className="nav-item mt-2 mx-2">
                                        <a className="mx-4 text-center d-flex gap-2 btn btn-dark" href="/">
                                            <i className="bi bi-shop"></i>
                                            <strong>Tienda</strong>
                                        </a>
                                    </li>
                                    <li className="nav-item mt-2 mx-2">
                                        <a className="mx-4 text-center d-flex gap-2 btn btn-danger" href="/inicioSesion">
                                            <i className="bi bi-door-closed"></i>
                                            Cerrar Sesión
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </aside>

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mb-3">
                        <div className="mt-4">
                            <div className="col-sm-12">
                                <h4>
                                    <a href="/dashboard_usuarios" className="text-secondary me-2 decoration-none">
                                        <i className="bi bi-arrow-left-circle-fill"></i>
                                    </a>
                                    Editar Usuarios
                                </h4>
                            </div>
                            <div className="card text-start">
                                <div className="card-body">
                                    <h4 className="card-title">Edición de usuario</h4>

                                    <p className="card-text">
                                        Seleccione un usuario y modifique sus datos.
                                    </p>

                                    {error && (
                                        <div className="alert alert-danger">
                                            {error}
                                        </div>
                                    )}

                                    <form onSubmit={handleGuardar}>
                                        <div className="mb-3">
                                            <label
                                                htmlFor="usuarioSeleccionado"
                                                className="form-label"
                                            >
                                                Usuario que desea editar
                                                <small className="text-danger">*</small>
                                            </label>

                                            <select
                                                id="usuarioSeleccionado"
                                                className="form-select"
                                                value={usuarioId}
                                                onChange={seleccionarUsuario}
                                                disabled={cargando}
                                                required
                                            >
                                                <option value="" disabled>
                                                    {cargando
                                                        ? "Cargando usuarios..."
                                                        : "Seleccione un usuario"}
                                                </option>

                                                {usuarios.map((usuario) => (
                                                    <option key={usuario.id} value={usuario.id}>
                                                        {usuario.nombreCompleto ??
                                                            `${usuario.nombre ?? ""} ${usuario.apellidos ?? ""
                                                                }`.trim() ??
                                                            usuario.correo}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-4 mb-3">
                                                <label htmlFor="run" className="form-label">
                                                    RUN
                                                </label>

                                                <input
                                                    type="text"
                                                    id="run"
                                                    name="run"
                                                    className="form-control"
                                                    value={formulario.run}
                                                    onChange={cambiarCampo}
                                                    placeholder="Ej.: 11111111K"
                                                />
                                            </div>

                                            <div className="col-md-4 mb-3">
                                                <label htmlFor="nombre" className="form-label">
                                                    Nombre
                                                    <small className="text-danger">*</small>
                                                </label>

                                                <input
                                                    type="text"
                                                    id="nombre"
                                                    name="nombre"
                                                    className="form-control"
                                                    value={formulario.nombre}
                                                    onChange={cambiarCampo}
                                                    required
                                                />
                                            </div>

                                            <div className="col-md-4 mb-3">
                                                <label
                                                    htmlFor="apellidos"
                                                    className="form-label"
                                                >
                                                    Apellidos
                                                    <small className="text-danger">*</small>
                                                </label>

                                                <input
                                                    type="text"
                                                    id="apellidos"
                                                    name="apellidos"
                                                    className="form-control"
                                                    value={formulario.apellidos}
                                                    onChange={cambiarCampo}
                                                    required
                                                />
                                            </div>

                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="correo" className="form-label">
                                                    Correo
                                                    <small className="text-danger">*</small>
                                                </label>

                                                <input
                                                    type="email"
                                                    id="correo"
                                                    name="correo"
                                                    className="form-control"
                                                    value={formulario.correo}
                                                    onChange={cambiarCampo}
                                                    required
                                                />
                                            </div>

                                            <div className="col-md-4 mb-3">
                                                <label
                                                    htmlFor="fechaNacimiento"
                                                    className="form-label"
                                                >
                                                    Fecha de nacimiento
                                                </label>

                                                <input
                                                    type="date"
                                                    id="fechaNacimiento"
                                                    name="fechaNacimiento"
                                                    className="form-control"
                                                    value={formulario.fechaNacimiento}
                                                    onChange={cambiarCampo}
                                                />
                                            </div>

                                            <div className="col-md-4 mb-3">
                                                <label htmlFor="tipo" className="form-label">
                                                    Tipo de usuario
                                                </label>

                                                <select
                                                    id="tipo"
                                                    name="tipo"
                                                    className="form-select"
                                                    value={formulario.tipo}
                                                    onChange={cambiarCampo}
                                                >
                                                    <option value="CLIENTE">Cliente</option>
                                                    <option value="TRABAJADOR">Trabajador</option>
                                                </select>
                                            </div>

                                            <div className="col-md-4 mb-3">
                                                <label htmlFor="rol" className="form-label">
                                                    Rol
                                                </label>

                                                <select
                                                    id="rol"
                                                    name="rol"
                                                    className="form-select"
                                                    value={formulario.rol}
                                                    onChange={cambiarCampo}
                                                >
                                                    <option value="CLIENTE">Cliente</option>
                                                    <option value="VENDEDOR">Vendedor</option>
                                                    <option value="ADMINISTRADOR">
                                                        Administrador
                                                    </option>
                                                </select>
                                            </div>
                                        </div>

                                        <hr />

                                        <h4 className="card-title">
                                            Dirección de entrega
                                        </h4>

                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="calle" className="form-label">
                                                    Calle
                                                </label>

                                                <input
                                                    type="text"
                                                    id="calle"
                                                    name="calle"
                                                    className="form-control"
                                                    value={formulario.calle}
                                                    onChange={cambiarCampo}
                                                />
                                            </div>

                                            <div className="col-md-6 mb-3">
                                                <label
                                                    htmlFor="departamento"
                                                    className="form-label"
                                                >
                                                    Departamento
                                                </label>

                                                <input
                                                    type="text"
                                                    id="departamento"
                                                    name="departamento"
                                                    className="form-control"
                                                    value={formulario.departamento}
                                                    onChange={cambiarCampo}
                                                />
                                            </div>

                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="region" className="form-label">
                                                    Región
                                                </label>

                                                <select
                                                    id="region"
                                                    name="region"
                                                    className="form-select"
                                                    value={formulario.region}
                                                    onChange={cambiarCampo}
                                                >
                                                    <option value="">Seleccione una región</option>
                                                    <option value="Metropolitana">
                                                        Metropolitana
                                                    </option>
                                                    <option value="Valparaíso">Valparaíso</option>
                                                    <option value="O'Higgins">O&apos;Higgins</option>
                                                </select>
                                            </div>

                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="comuna" className="form-label">
                                                    Comuna
                                                </label>

                                                <select
                                                    id="comuna"
                                                    name="comuna"
                                                    className="form-select"
                                                    value={formulario.comuna}
                                                    onChange={cambiarCampo}
                                                >
                                                    <option value="">Seleccione una comuna</option>
                                                    <option value="Maipú">Maipú</option>
                                                    <option value="Cerrillos">Cerrillos</option>
                                                    <option value="Santiago">Santiago</option>
                                                    <option value="Cerro Navia">Cerro Navia</option>
                                                    <option value="Valparaíso">Valparaíso</option>
                                                    <option value="Viña del Mar">
                                                        Viña del Mar
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-12 mb-3">
                                                <label
                                                    htmlFor="indicaciones"
                                                    className="form-label"
                                                >
                                                    Indicaciones para la entrega
                                                </label>

                                                <textarea
                                                    id="indicaciones"
                                                    name="indicaciones"
                                                    className="form-control"
                                                    rows={3}
                                                    value={formulario.indicaciones}
                                                    onChange={cambiarCampo}
                                                />
                                            </div>
                                        </div>

                                        <div className="text-end">
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                                disabled={!usuarioId || guardando}
                                            >
                                                {guardando ? "Guardando..." : "Guardar cambios"}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

