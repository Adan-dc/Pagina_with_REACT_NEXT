"use client";
import { useState, useEffect ,type FormEvent, ChangeEvent } from "react";
import { obtenerCategoriaPorId } from "@/utils/funcionesTienda";

interface Categoria {
    id: string;
    nombre: string;
    cantidadProductos: number;
    descripcion: string;
  }
  
  const API_URL = "http://localhost:3001";

export default function Dashboard_Cateogria_Editar() {

    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [categoriaId, setCategoriaId] = useState("");
    const [nombre, setNombre] = useState("");
    const [cantidadProductos, setCantidadProductos] =
      useState<number | "">("");
    const [descripcion, setDescripcion] = useState("");

    useEffect(() => {
        async function cargarCategorias() {
          try {
            const respuesta = await fetch(`${API_URL}/categorias`);
    
            if (!respuesta.ok) {
              throw new Error("No se pudieron cargar las categorías");
            }
    
            const datos: Categoria[] = await respuesta.json();
            setCategorias(datos);
          } catch (error) {
            console.error("Error al cargar categorías:", error);
          }
        }
    
        cargarCategorias();
      }, []);    

      function handleSeleccionarCategoria(
        evento: ChangeEvent<HTMLSelectElement>
      ) {
        const idSeleccionado = evento.target.value;
    
        setCategoriaId(idSeleccionado);
    
        const categoriaEncontrada = obtenerCategoriaPorId(
          categorias,
          idSeleccionado
        );
    
        if (!categoriaEncontrada) {
          setNombre("");
          setCantidadProductos("");
          setDescripcion("");
          return;
        }
    
        setNombre(categoriaEncontrada.nombre);
        setCantidadProductos(categoriaEncontrada.cantidadProductos);
        setDescripcion(categoriaEncontrada.descripcion);
      }

      async function handleGuardar(
        evento: FormEvent<HTMLFormElement>
      ) {
        evento.preventDefault();
    
        if (!categoriaId) {
          alert("Debe seleccionar una categoría");
          return;
        }
    
        try {
          const respuesta = await fetch(
            `${API_URL}/categorias/${categoriaId}`,
            {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                nombre,
                cantidadProductos: Number(cantidadProductos),
                descripcion,
              }),
            }
          );
    
          if (!respuesta.ok) {
            throw new Error("No se pudo editar la categoría");
          }
    
          const categoriaActualizada: Categoria =
            await respuesta.json();
    
          setCategorias((categoriasAnteriores) =>
            categoriasAnteriores.map((categoria) =>
              categoria.id === categoriaActualizada.id
                ? categoriaActualizada
                : categoria
            )
          );
    
          alert("La categoría fue actualizada correctamente");
        } catch (error) {
          console.error("Error al editar la categoría:", error);
          alert("Ocurrió un error al editar la categoría");
        }
      }

    return (
      <div className="Dashboard">
        <header className="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow" data-bs-theme="dark">
          <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white" href="/dashboard">
            Botilleria J&C
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
                                  <a className="nav-link nav-menu d-flex gap-2 nav-active" href="/dashboard_categoria">
                                      <i className="bi bi-list-ul"></i>
                                      Categorías
                                  </a>
                              </li>
                              <li className="nav-item mx-2">
                                  <a className="nav-link nav-menu d-flex gap-2" href="/dashboard_usuarios">
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
  
                          <hr className="my-3"/>
  
                          <ul className="nav flex-column mb-auto">
                              <li className="nav-item mx-2">
                                  <a className="nav-link nav-menu d-flex gap-2" href="/admin/perfil">
                                      <i className="bi bi-person-circle"></i>
                                      Perfil
                                  </a>
                              </li>
                          </ul>
  
                          <hr className="my-3"/>
  
  
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
                            <a href="/dashboard_categoria" className="text-secondary me-2 decoration-none">
                                <i className="bi bi-arrow-left-circle-fill"></i>
                            </a>
                            Editar Categoria
                        </h4>
                    </div>
                    <div className="card text-start">
                        <div className="card-body">
                            <form onSubmit={handleGuardar}>
                                <div className="mb-3 col-6 col-md-4">
                                        <label htmlFor="productCategory" className="form-label">Categoría a editar<small className="text-danger">*</small></label>
                                        <select
                                            className="form-select"
                                            id="productCategory"
                                            value={categoriaId}
                                            onChange={handleSeleccionarCategoria}
                                            required
                                            >
                                            <option value="" disabled>
                                                Seleccione una categoría
                                            </option>

                                            {categorias.map((categoria) => (
                                                <option key={categoria.id} value={categoria.id}>
                                                {categoria.nombre}
                                                </option>
                                            ))}
                                            </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="productName" className="form-label">Nombre de la categoria<small className="text-danger">(*)</small></label>
                                    <input type="text" className="form-control" id="productName" placeholder="Ingrese el nombre de la categoría" value={nombre} onChange={(evento) => setNombre(evento.target.value)}required/>
                                </div>
                                <div className="row">
                                    <div className="mb-3 col-6 col-md-4">
                                        <label htmlFor="productPrice" className="form-label">Cantidad de productos de la categoria<small className="text-danger">*</small></label>
                                        <input type="number" className="form-control" id="productPrice" placeholder="Ingrese la cantidad de productos" value={cantidadProductos} onChange={(evento) => setCantidadProductos(evento.target.value === ""? "": Number(evento.target.value))}min={0}required/>
                                    </div>
                                </div>       
                                <div className="mb-3">
                                    <label htmlFor="productDescription" className="form-label">Descripción<small className="text-danger">*</small></label>
                                    <textarea className="form-control" id="productDescription" rows={3} placeholder="Ingrese una descripción de la categoria" value={descripcion} onChange={(evento) => setDescripcion(evento.target.value)} required></textarea>
                                </div>
                                <div className="text-end">
                                    <button type="submit" className="btn btn-primary">Guardar</button>
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

  