// 1. Calcular el total del carrito

export interface ItemCarrito {
    precio: number;
    cantidad: number;
  }
  
  export function calcularTotal(carrito: ItemCarrito[]): number {
    return carrito.reduce(
      (total, producto) => total + producto.precio * producto.cantidad,
      0
    );
  }
  
  
  // 2. Filtrar usuarios por su tipo
  
  export function filtrarUsuariosPorTipo<
    T extends {
        tipo: string;
        rol?: string;
    }
    >(
    usuarios: T[],
    filtroSeleccionado: string
    ): T[] {
    const trabajadores = usuarios.filter(
        (usuario) => usuario.tipo === "TRABAJADOR"
    );

    if (
        filtroSeleccionado === "" ||
        filtroSeleccionado === "TODOS" ||
        filtroSeleccionado === "TRABAJADOR"
    ) {
        return trabajadores;
    }

    return trabajadores.filter(
        (usuario) => usuario.rol === filtroSeleccionado
    );
    }
  
  
  // 3. Decidir la página de pago
  
  export function obtenerRutaPago(total: number): string {
    if (total <= 0) {
      return "/pagina_prin_comprar/error";
    }
  
    return "/pagina_prin_comprar/correcto";
  }
  
  
  // 4. Buscar la categoría que se quiere editar
  
  export function obtenerCategoriaPorId<
    T extends { id: string | number }
  >(
    categorias: T[],
    categoriaId: string | number
  ): T | undefined {
    return categorias.find(
      (categoria) => String(categoria.id) === String(categoriaId)
    );
  }
  
  
  // 5. Filtrar productos por categoría
  
  export function filtrarProductosPorCategoria<
    T extends { categoria: string }
  >(
    productos: T[],
    categoriaSeleccionada: string
  ): T[] {
    if (
      categoriaSeleccionada === "" ||
      categoriaSeleccionada === "TODAS"
    ) {
      return productos;
    }
  
    return productos.filter(
      (producto) => producto.categoria === categoriaSeleccionada
    );
  }