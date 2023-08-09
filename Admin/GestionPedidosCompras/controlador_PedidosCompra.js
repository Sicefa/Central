let indexProductoSeleccionado;
    let obj = [];
 
    var text = '{"productos":[' + // Corregir el nombre de la clave "productos"
        '{"sucursal": "Sicefa Centro","empleado": "Diego", "fecha": "2023-07-20","hora": "12:30:00", "productos": "Acetaminofén","foto": "../GestionPedidosCompras/img/Acetaminofen.jpeg", "cantidad": "700","estatus": "Pendiente"},' +
        '{"sucursal": "Sicefa Centro Max","empleado": "Jonathan", "fecha": "2023-06-20","hora": "04:12:00", "productos": "Omeprazol","foto": "../GestionPedidosCompras/img/Omeprazol.jpeg", "cantidad": "15","estatus": "Pendiente"},' +
        '{"sucursal": "Sicefa Plaza Mayor","empleado": "Jimena", "fecha": "2023-06-20","hora": "05:30:00", "productos": "Loratadina","foto": "../GestionPedidosCompras/img/Loratadina.jpeg", "cantidad": "13","estatus": "Pendiente"}]}';
        
 
    obj = JSON.parse(text);
    console.log(obj);
    actualizaTabla();
 
    function actualizaTabla() {
        let cuerpo = "";
        obj.productos.forEach(function (nuevoProd) {
            let registro =
                '<tr onclick="selectProducto(' + obj.productos.indexOf(nuevoProd) + ');">' +
                '<td>' + obj.productos.indexOf(nuevoProd) + '</td>' +
                '<td>' + nuevoProd.sucursal + '</td>' +
                '<td>' + nuevoProd.empleado + '</td>' +
                '<td>' + nuevoProd.fecha + '</td>' +
                '<td>' + nuevoProd.hora + '</td>' +
                '<td>' + nuevoProd.productos + '</td>' +
               '<td> <img src="' + nuevoProd.foto + '" width="100" > </td>' +
                '<td>' + nuevoProd.cantidad + '</td>' +
                '<td>' + nuevoProd.estatus + '</td>' +
                '<td><button class="btn btn-primary btn-sm" onclick="cambiarEstatus(' + obj.productos.indexOf(nuevoProd) + ');">Atender</button></td>';
 
            cuerpo += registro;
        });
        document.getElementById("tblProductos").innerHTML = cuerpo;
    }
    
    function cambiarEstatus(index) {
        obj.productos[index].estatus = "Atendido";
        actualizaTabla();
    }  
    
    function searchProducto() {
                    // Obtener el valor del campo de búsqueda con id "txtBusquedaCliente"
                    let valor= document.getElementById("txtBusquedaProducto").value;
                
                    // Convertir el valor obtenido a minúsculas para hacer una búsqueda insensible a mayúsculas/minúsculas
                    let filtroMinuscula = valor.toLowerCase();
                
                    // Filtrar los elementos del arreglo "obj.medicinas" que coincidan con el filtro
                    let result = obj.productos.filter(element =>
 
                       
 
                        element.sucursal.toLowerCase().includes(filtroMinuscula) ||
                        element.empleado.toLowerCase().includes(filtroMinuscula) ||
                        element.fecha.toString().includes(filtroMinuscula) ||
                        element.hora.toLowerCase().includes(filtroMinuscula) ||
                        element.productos.toLowerCase().includes(filtroMinuscula) ||
                        element.cantidad.toString().includes(filtroMinuscula) ||
                        
                        element.estatus.toLowerCase().includes(filtroMinuscula)
 
                    );
                
                    // Crear una cadena vacía para almacenar el contenido de la tabla resultante
                    let cuerpo = "";
                
                    // Iterar sobre los resultados del filtro y generar las filas de la tabla con los datos correspondientes
                    result.forEach(function ( nuevoProd) {
                        // Crear una fila de la tabla con los datos del elemento
                        let registro = 
                        '<tr onclick="selectProducto(' + obj.productos.indexOf( nuevoProd) + ');">' +
                           '<td>' + obj.productos.indexOf(nuevoProd) + '</td>' +
                '<td>' + nuevoProd.sucursal + '</td>' +
                '<td>' + nuevoProd.empleado + '</td>' +
                '<td>' + nuevoProd.fecha + '</td>' +
                '<td>' + nuevoProd.hora + '</td>' +
                '<td>' + nuevoProd.productos + '</td>' +
               '<td> <img src="' + nuevoProd.foto + '" width="100" > </td>' +
                '<td>' + nuevoProd.cantidad + '</td>' +
                '<td>' + nuevoProd.estatus + '</td>'+
        '<td><button class="btn btn-primary btn-sm" onclick="cambiarEstatus(' + obj.productos.indexOf(nuevoProd) + ');">Atender</button></td>';
                        
                                // Agregar la fila a la cadena "cuerpo"
                                cuerpo += registro;
                            });
                
                    // Mostrar la cadena "cuerpo" en el cuerpo de la tabla con id "tblProductos"
                    document.getElementById("tblProductos").innerHTML = cuerpo;
                }