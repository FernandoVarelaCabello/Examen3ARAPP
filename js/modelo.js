document.getElementById("btn1").addEventListener("click", (e)=>{
    var nombre = document.getElementById('file').files[0].name;
    console.log(nombre);
    var input = nombre; 
    var output = input.substr(0, input.lastIndexOf('.')) || input; 
    console.log(output);
    var ruta = "/Patrones/"+output+".patt";
    console.log(ruta);
    var y= document.cookie = "r" + "=" + ruta + "Patrones" + "="+"camara.htm";
    var a=document.getElementById('myframe').contentWindow.location.reload(true); 
});

document.getElementById("btn2").addEventListener("click", (e)=>{
    var modelo = document.getElementById('file2').files[0].name;
    console.log(modelo);
    var input = modelo; 
    var output = input.substr(0, input.lastIndexOf('.')) || input; 
    console.log(output);
    var modeloo ="'url(Modelos3D/"+output+"/"+output+".gltf)'";
    console.log(modeloo);
    var x= document.cookie = "n" + "=" + modeloo + "Patrones" + "="+"camara.htm";
    console.log(x);
    var mo = x.substr(0, x.lastIndexOf('Patrones')) || x; 
    var mod=mo.split('=').pop();
    console.log(mod);
    var a=document.getElementById('myframe').contentWindow.location.reload(true);
});