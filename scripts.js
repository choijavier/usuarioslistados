

// Vars
usuariosTotales = [];
edadesTotales = [];

cantUsuarios = parseInt(prompt('¿Cuantos usuarios deseas ingresar?'));


for (var i = 0; i < cantUsuarios; i++) {
    // document.write(i + " ");

    usuariosTotales[i] = prompt('Nombre del Usuario N ' + i);
    edadesTotales[i] = parseInt(prompt('Edad del USUARIO N ' + i));
}

// Imprime los nombres
for (var i = 0; i < usuariosTotales.length; i++) {
	document.write('<br/>' + usuariosTotales[i]);
}


// Acumula la suma de las edades
acum = 0;

for (var i = 0; i < edadesTotales.length; i++) {

	acum += edadesTotales[i];
	
}

document.write('<br/> <br/> El promedio de edad es de: '+ parseInt(acum/edadesTotales.length) + ' años.');
