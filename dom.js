

let mostrarFecha = document.getElementById('fecha');
let mostrarReloj = document.getElementById('reloj');

let fecha =new Date();

let diaSemana = ['Domingo','Lunes','Martes','Miercoles','Jueves','viernes','Sabado'];
let meses =['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

mostrarFecha.innerHTML =`${diaSemana[fecha.getDay()]},
${fecha.getDate()} de ${meses[fecha.getMonth()]} de ${fecha.getFullYear()}`;

setInterval(() => {
   let hora = new Date();
   mostrarReloj.innerHTML = hora.toLocaleTimeString(); 
}, 1000);