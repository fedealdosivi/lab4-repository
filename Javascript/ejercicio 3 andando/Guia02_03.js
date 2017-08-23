var Nombres=new Array();
var Edades=new Array();
var Sexos=new Array();

function cargarpersona(nombre, edad, sexo)
{
	var i=0;
	if (nombre!="" && edad!="" && sexo!="")
	{
		while(Nombres[i]!=null)
		{
			i++;
		}
		Nombres[i]=nombre.value;
		Edades[i]=edad.value;
		Sexos[i]=sexo.value;

		alert("se cargo con exito:"+ Nombres[i] + Edades[i] + Sexos[i]);
	}
	else
		alert("hay un error en los datos cargados");
}

function mostrar()
{
	var Tabla='';
	with(document)
	{
		var n=0;
		while(Nombres[n]!=null)
		{
			n++;
		}
		Tabla='<table border=1><tr><td>Nombre</td><td>Edad</td><td>Sexo</td></tr>';
		for(var i=0; i<n;i++)
		{
			Tabla+='<tr><td>'+Nombres[i]+'</td><td>'+Edades[i]+'</td><td>'+Sexos[i]+'</td></tr>';
		}
		Tabla+='</table>';
		getElementById("tablaDatos").innerHTML=Tabla;
	}
}