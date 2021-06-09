function mostrarpatron(){
    var archivo = document.getElementById("file").files[0];
    var reader = new FileReader();
    if (file) {
      reader.readAsDataURL(archivo );
      reader.onloadend = function () {
        document.getElementById("imagen").src = reader.result;
        const imagen=document.getElementById("imagen"); 
 
      }
    }
  }

  function mostrarmodelo(){
    var archivo = document.getElementById("file2").files[0];
    var reader = new FileReader();
    if (file) {
      reader.readAsDataURL(archivo );
      reader.onloadend = function () {
        document.getElementById("imagen2").src = reader.result;
        const imagen=document.getElementById("imagen2"); 
 
      }
    }
  }
  