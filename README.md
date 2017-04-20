Ejercicio resultado de hoteles

Ejercicio resultado de hoteles

.container-fuid main.row div.breadcrumb-ctn div.search-ctn div.filter-ctn div.hotels-ctn (hotels-root)

-- TAREA --

*Pasar datos al server.

*Modificar componente de cluster, cambiar grilla bootstrap por sass mixins utilizando width (%) en cada una de las tres columnas

*Hacer que el build cree carpetas para el css, y js para mantener el orden

*Crear fuente para iconos del cluster. Utilizar paquete de am-amenities.ttf (ubicacion Hipchat) Sass con las class de las fuentes en Hipchat.

*Mapeo para insertar iconos.

this.getIcon = function(key){ var icons = { wifi: "class wifi"}

return icons(key);
}