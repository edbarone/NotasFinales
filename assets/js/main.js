
//Definimos nuestras variables
var Nombre   = prompt("Ingrese un Nombre","Eduardo");
var Apellido = prompt("Ingrese un Apellido","Diaz");
var Carrera  = prompt("Ingrese su Carrera","Diseñador Web");

var Ramo_1   = prompt("Ingrese su Ramo 1","HTML");
var Nota_1   = parseInt(prompt("Ingrese su Nota 1 [HTML]",4));
var Nota_2   = parseInt(prompt("Ingrese su Nota 2 [HTML]",5));
var Nota_3   = parseInt(prompt("Ingrese su Nota 3 [HTML]",4));

var P_1      = (Nota_1 + Nota_2 + Nota_3) / parseInt(3.0);
var Prom_1   = P_1.toFixed(2);


var Ramo_2   = prompt("Ingrese su Ramo 2","CSS");
var Nota_4   = parseInt(prompt("Ingrese su Nota 4 [CSS]",3));
var Nota_5   = parseInt(prompt("Ingrese su Nota 5 [CSS]",4));
var Nota_6   = parseInt(prompt("Ingrese su Nota 6 [CSS]",5));

var P_2      = (Nota_4 + Nota_5 + Nota_6) / parseInt(3.0);
var Prom_2   = P_2.toFixed(2);

var Ramo_3   = prompt("Ingrese su Ramo 3","JAVACRIPT");
var Nota_7   = parseInt(prompt("Ingrese su Nota 7 [JAVASCRIPT]",2));
var Nota_8   = parseInt(prompt("Ingrese su Nota 8 [JAVASCRIPT]",6));
var MinN     = parseInt(prompt("Ingrese Nota de Aprobacion",4));
var N        = (MinN*3.0-(Nota_7+Nota_8)) ;
var Nota     = N.toFixed(2);


//Aquí creamos nuestro div contenedor
document.write("<div class='container'>");
document.write("<h1>Notas Finales</h1>")



document.write("<b>Nombre</b>: "+Nombre+" "+Apellido+"<br><br>");
document.write("<b>Carrera</b>: "+Carrera);


//Aquí creamos nuestra tabla con bootstrap
document.write("<table class='table'>");
//Aquí indicamos que nuestra tabla tendrá encabezado
document.write("<thead class='bg-dark text-white'>");
//Con tr definimos las columnas de la tabla
document.write("<tr>");
//Aquí definimos el tipo de dato que tendrá cada columna y su encabezado
document.write("<th scope='col'>Ramo</th>");
document.write("<th scope='col'>Nota 1</th>");
document.write("<th scope='col'>Nota 2</th>");
document.write("<th scope='col'>Nota 3</th>");
document.write("<th scope='col'>Promedio</th>");
document.write("</tr");
//Aquí cerramos el tr donde definimos las columnas de la tabla
document.write("</thead>");
//Aquí cerramos el encabezado de nuestra tabla
//Aquí definimos el cuerpo con el contenido de la tabla según la columna
document.write("<tbody>");
document.write("<tr>");
document.write("<td scope='row'>"+Ramo_1+"</th>");
document.write("<td>"+Nota_1+"</td>");
document.write("<td>"+Nota_2+"</td>");
document.write("<td>"+Nota_3+"</td>");
document.write("<td>"+Prom_1+"</td>");
document.write("<tr>");
document.write("</tbody>");
//Aquí definimos el cuerpo con el contenido de la tabla según la columna
document.write("<tbody>");
document.write("<tr>");
document.write("<td scope='row'>"+Ramo_2+"</th>");
document.write("<td>"+Nota_4+"</td>");
document.write("<td>"+Nota_5+"</td>");
document.write("<td>"+Nota_6+"</td>");
document.write("<td>"+Prom_2+"</td>");
document.write("<tr>");
document.write("</tbody>");
//Aquí definimos el cuerpo con el contenido de la tabla según la columna
document.write("<tbody>");
document.write("<tr>");
document.write("<td scope='row'>"+Ramo_3+"</th>");
document.write("<td>"+Nota_7+"</td>");
document.write("<td>"+Nota_8+"</td>");
document.write("<td>"+" - "+"</td>");
document.write("<td>"+" - "+"</td>");
document.write("<tr>");
document.write("</tbody>");
//Aquí cerramos el cuerpo con el contenido de la tabla según la columna
document.write("</table");
//Aquí cerramos nuestra tabla
document.write("</div>");
//Aquí cerramos nuestro div contenedor
document.write("<br><br> Para aprobar el ramo JavaScript con nota "+MinN+" , necesitas obtener un "+Nota+" en la Nota 3");
