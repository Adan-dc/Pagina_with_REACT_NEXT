import {
    calcularTotal,
    filtrarUsuariosPorTipo,
    obtenerRutaPago,
    obtenerCategoriaPorId,
    filtrarProductosPorCategoria
  } from "../utils/funcionesTienda";
  
  
  describe("Funciones de la tienda", () => {
  
    // Prueba 1
    it("debe calcular correctamente el total del carrito", () => {
      const carrito = [
        {
          nombre: "Cerveza",
          precio: 2000,
          cantidad: 2
        },
        {
          nombre: "Bebida",
          precio: 1500,
          cantidad: 1
        }
      ];
  
      const resultado = calcularTotal(carrito);
  
      expect(resultado).toBe(5500);
    });
  
  
    // Prueba 2
    it("debe filtrar trabajadores según el rol seleccionado", () => {
        const usuarios = [
        {
            id: "1",
            nombreCompleto: "Ana",
            tipo: "TRABAJADOR",
            rol: "ADMINISTRADOR",
        },
        {
            id: "2",
            nombreCompleto: "Pedro",
            tipo: "CLIENTE",
            rol: "CLIENTE",
        },
        {
            id: "3",
            nombreCompleto: "Luis",
            tipo: "TRABAJADOR",
            rol: "VENDEDOR",
        },
        {
            id: "4",
            nombreCompleto: "Camila",
            tipo: "TRABAJADOR",
            rol: "VENDEDOR",
        },
        ];
    
        const resultado = filtrarUsuariosPorTipo(
        usuarios,
        "VENDEDOR"
        );
    
        expect(resultado.length).toBe(2);
    
        expect(
        resultado.map((usuario) => usuario.nombreCompleto)
        ).toEqual(["Luis", "Camila"]);
    });
  
  
    // Prueba 3
    it("debe enviar al pago con error cuando el total es cero", () => {
      const totalCompra = 0;
  
      const resultado = obtenerRutaPago(totalCompra);
  
      expect(resultado).toBe(
        "/pagina_prin_comprar/error"
      );
    });
  
  
    // Prueba 4
    it("debe obtener la información de la categoría seleccionada", () => {
      const categorias = [
        {
          id: "1",
          nombre: "Cervezas",
          descripcion: "Productos de cerveza"
        },
        {
          id: "2",
          nombre: "Vinos",
          descripcion: "Productos de vino"
        }
      ];
  
      const resultado = obtenerCategoriaPorId(
        categorias,
        "2"
      );
  
      expect(resultado).toEqual({
        id: "2",
        nombre: "Vinos",
        descripcion: "Productos de vino"
      });
    });
  
  
    // Prueba 5
    it("debe mostrar productos de la categoría seleccionada", () => {
      const productos = [
        {
          id: "1",
          nombre: "Cerveza A",
          categoria: "CERVEZAS"
        },
        {
          id: "2",
          nombre: "Vino A",
          categoria: "VINOS"
        },
        {
          id: "3",
          nombre: "Cerveza B",
          categoria: "CERVEZAS"
        }
      ];
  
      const resultado = filtrarProductosPorCategoria(
        productos,
        "CERVEZAS"
      );
  
      expect(
        resultado.map((producto) => producto.id)
      ).toEqual(["1", "3"]);
    });
  
  });